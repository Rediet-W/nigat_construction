import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { PostDetails } from "@/features/blog/sections/PostDetails";

export const metadata: Metadata = { title: "Expert Insights and Latest Trends in Construction Industry" };

export default function BlogDetailsPage() {
  return (
    <>
      <PageHeader title="Expert Insights and Latest ..">
        <div className="post-single-meta wow fadeInUp">
          <ol className="breadcrumb">
            <li>
              <i className="fa-regular fa-user" /> Admin
            </li>
            <li>
              <i className="fa-regular fa-clock" /> 8 July, 2026
            </li>
          </ol>
        </div>
      </PageHeader>
      <PostDetails />
    </>
  );
}
