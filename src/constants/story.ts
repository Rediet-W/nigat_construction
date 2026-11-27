import type { Milestone } from "@/types";

/**
 * About page timeline: 3 to 5 milestones, each with a year, one line in both
 * languages and (ideally) a real photo from that time.
 *
 * CONFIRM WITH NIGAT: nothing here may be invented. The timeline is hidden
 * while this list is empty, so the page never shows placeholder history.
 *
 * Example:
 *   { year: "2018", text: { en: "Company founded in Addis Ababa.", am: "ኩባንያው በአዲስ አበባ ተመሠረተ።" },
 *     image: "/images/story-2018.jpg" },
 */
export const MILESTONES: readonly Milestone[] = [];
