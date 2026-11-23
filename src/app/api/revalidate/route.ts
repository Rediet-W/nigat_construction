import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

import { CMS_SECTOR } from "@/lib/cms/client";

/**
 * Called by the Nigat CMS when content is published, unpublished or deleted:
 *
 *   POST /api/revalidate
 *   x-revalidate-secret: <REVALIDATE_SECRET>
 *   { "sector": "construction", "model": "service", "action": "publish", "locale": "en" }
 *
 * Marks the CMS requests tagged with that model as stale, so the next visit gets fresh content.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || request.headers.get("x-revalidate-secret") !== secret) {
    return Response.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as { sector?: string; model?: string } | null;
  if (!body?.model || !/^[a-z][a-z0-9-]{0,63}$/.test(body.model)) {
    return Response.json({ revalidated: false, message: "Missing or invalid model" }, { status: 400 });
  }
  if (body.sector && body.sector !== CMS_SECTOR) {
    return Response.json({ revalidated: false, message: `Not the ${CMS_SECTOR} site` }, { status: 400 });
  }

  revalidateTag(body.model, "max");
  return Response.json({ revalidated: true, model: body.model, now: Date.now() });
}
