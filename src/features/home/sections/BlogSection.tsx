import { SectionTitle } from "@/components/ui/SectionTitle";
import { PostCard } from "@/features/blog/components/PostCard";
import { POSTS } from "@/constants/posts";
import { wowDelay } from "@/lib/animation";

export function BlogSection() {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <SectionTitle
              subtitle="Latest News"
              title="Latest construction updates"
              description="Stay updated with expert tips, industry trends, and practical guides to help you make informed construction and design decisions."
              center
            />
          </div>
        </div>
        <div className="row">
          {POSTS.slice(0, 3).map((post, index) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <PostCard post={post} delay={wowDelay(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
