import "server-only";

/**
 * Minimal Strapi 5 REST client for the shared Nigat CMS.
 *
 * Every request is cached by Next.js and tagged with the content type's model name
 * (e.g. "service"), which is exactly what the CMS sends to /api/revalidate when that
 * content is published — so a publish refreshes only the pages that use it.
 */

/** Which sector's content this website shows. The CMS serves all three Nigat sites. */
export const CMS_SECTOR = "construction";

/** Tag on every CMS request, to refresh everything at once if ever needed. */
export const CMS_TAG = "cms";

export const CMS_URL = (process.env.CMS_URL || "http://localhost:1337").replace(/\/+$/, "");

type QueryValue = string | number | boolean | null | undefined | QueryValue[] | { [key: string]: QueryValue };
export type Query = Record<string, QueryValue>;

export class CmsError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "CmsError";
  }
}

/** Serialises nested params into Strapi's bracket syntax: `filters[sector][$eq]=construction`. */
export function toQueryString(query: Query): string {
  const params = new URLSearchParams();
  const add = (key: string, value: QueryValue) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) value.forEach((v, i) => add(`${key}[${i}]`, v));
    else if (typeof value === "object") Object.entries(value).forEach(([k, v]) => add(`${key}[${k}]`, v));
    else params.append(key, String(value));
  };
  Object.entries(query).forEach(([key, value]) => add(key, value));
  return params.toString();
}

interface StrapiList<T> {
  data: T[];
  meta: { pagination?: { page: number; pageSize: number; pageCount: number; total: number } };
}

/** GET /api/<endpoint>?<query>, cached and tagged with `model`. */
export async function cmsGet<T>(endpoint: string, query: Query, model: string): Promise<StrapiList<T>> {
  const url = `${CMS_URL}/api/${endpoint}?${toQueryString(query)}`;
  let res: Response;
  try {
    res = await fetch(url, {
      cache: "force-cache",
      next: { tags: [CMS_TAG, model] },
      headers: { Accept: "application/json" },
    });
  } catch (error) {
    throw new CmsError(`CMS unreachable at ${CMS_URL} (${(error as Error).message}). Is Strapi running?`);
  }
  if (!res.ok) throw new CmsError(`CMS ${res.status} for ${endpoint}: ${await res.text()}`, res.status);
  return res.json() as Promise<StrapiList<T>>;
}

/** POST /api/<endpoint> with `{ data }` (used for enquiries). Never cached. */
export async function cmsPost<T>(endpoint: string, data: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${CMS_URL}/api/${endpoint}`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ data }),
  });
  if (!res.ok) throw new CmsError(`CMS ${res.status} for POST ${endpoint}: ${await res.text()}`, res.status);
  return res.json() as Promise<T>;
}
