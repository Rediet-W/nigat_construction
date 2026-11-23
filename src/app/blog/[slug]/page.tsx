import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { PostDetails } from "@/features/blog/sections/PostDetails";
import { getLocale } from "@/i18n/server";
import { getPost } from "@/lib/cms/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return { title: post.metaTitle || post.title, description: post.metaDescription || post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const [locale, post] = await Promise.all([getLocale(), getPost((await params).slug)]);
  if (!post) notFound();
  const date = post.publishedDate
    ? new Intl.DateTimeFormat(locale === "am" ? "am-ET" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
        new Date(`${post.publishedDate}T00:00:00Z`),
      )
    : null;
  return (
    <>
      <PageHeader title={post.title}>
        <div className="post-single-meta wow fadeInUp">
          <ol className="breadcrumb">
            {post.author && (
              <li>
                <i className="fa-regular fa-user" /> {post.author}
              </li>
            )}
            {date && (
              <li>
                <i className="fa-regular fa-clock" /> {date}
              </li>
            )}
          </ol>
        </div>
      </PageHeader>
      <PostDetails post={post} />
    </>
  );
}
