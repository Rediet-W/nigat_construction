import { SectionTitle } from "@/components/ui/SectionTitle";
import { PostCard } from "@/features/blog/components/PostCard";
import { getDictionary } from "@/i18n/server";
import { getPosts } from "@/lib/cms/content";
import { wowDelay } from "@/lib/animation";

export async function BlogSection() {
  const [dict, posts] = await Promise.all([getDictionary(), getPosts()]);
  const t = dict.blog;
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle
              subtitle={t.subtitle}
              title={t.title}
              description={t.description}
              center
            />
          </div>
        </div>
        <div className="row">
          {posts.slice(0, 3).map((post, index) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <PostCard post={post} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
