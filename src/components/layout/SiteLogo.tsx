import Image from "next/image";

import { SITE } from "@/constants/site";
import { getLogoUrl } from "@/lib/cms/content";

/**
 * Logo mark (from the CMS site settings) with the brand name stacked on three lines beside it.
 * `variant="dark"` uses the CMS "Logo Dark" when set (the footer sits on a dark background).
 */
export async function SiteLogo({ preload = false, variant = "default" }: { preload?: boolean; variant?: "default" | "dark" }) {
  const [first, second, ...rest] = SITE.name.split(" ");
  const logoUrl = await getLogoUrl(variant);

  return (
    <span className="site-logo">
      <Image src={logoUrl} alt="" width={168} height={105} className="site-logo-mark" preload={preload} />
      <span className="site-logo-text">
        <span>{first}</span>
        <span>{second}</span>
        <span>{rest.join(" ")}</span>
      </span>
    </span>
  );
}
