import { Counter } from "@/components/ui/Counter";
import type { Stat } from "@/lib/cms/content";

/** A CMS stat as the template shows it: animated number, then its suffix ("8+", "100%"). */
export function StatValue({ stat }: { stat: Stat | undefined }) {
  if (!stat) return null;
  return (
    <>
      {stat.value && <Counter value={stat.value} />}
      {stat.suffix}
    </>
  );
}
