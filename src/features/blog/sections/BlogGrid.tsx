import { PostCard } from "@/features/blog/components/PostCard";
import { getPosts } from "@/lib/cms/content";
import { wowDelay } from "@/lib/animation";

export async function BlogGrid() {
  const posts = await getPosts();
  return (
    <div className="page-blog">
      <div className="container">
        <div className="row">
          {posts.map((post, index) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <PostCard post={post} delay={wowDelay(index % 3)} />
            </div>
          ))}
          <div className="col-lg-12">
            <div className="page-pagination wow fadeInUp" data-wow-delay="0.6s">
              <ul className="pagination">
                <li><a href="#"><i className="fa-solid fa-angle-left" /></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="fa-solid fa-angle-right" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
