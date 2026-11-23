import Image from "next/image";
import Link from "next/link";

import { RichText } from "@/components/ui/RichText";
import { ROUTES } from "@/constants/routes";
import { getDictionary } from "@/i18n/server";
import type { PostDetail } from "@/lib/cms/content";

/** One blog post: cover, body (CMS rich text) and its category as the tag. */
export async function PostDetails({ post }: { post: PostDetail }) {
  const t = (await getDictionary()).blogPost;
  return (
    <div className="page-single-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {post.image && (
              <div className="post-image">
                <figure className="image-anime reveal"><Image src={post.image} alt={post.title} width={1366} height={768} /></figure>
              </div>
            )}
            <div className="post-content">
              <div className="post-entry">
                <RichText text={post.content || post.excerpt} />
              </div>
              {post.category && (
                <div className="post-tag-links">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags wow fadeInUp" data-wow-delay="0.5s">
                        <span className="tag-links">
                          {t.tags} <Link href={ROUTES.blog}>{post.category}</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
