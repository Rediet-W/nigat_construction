import Image from "next/image";

import { VideoPopup } from "@/components/ui/VideoPopup";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";
import { getGalleryVideos } from "@/lib/cms/content";

/** Video gallery: the CMS gallery items of type "video" (poster image + video URL). */
export async function VideoGallerySection() {
  const [dict, videos] = await Promise.all([getDictionary(), getGalleryVideos()]);
  const t = dict.common;
  return (
    <div className="page-video-gallery">
      <div className="container">
        <div className="row">
          {videos.map((video, index) => (
            <div className="col-lg-4 col-md-6" key={`${video.poster}-${index}`}>
              <div className="video-gallery-image wow fadeInUp" data-wow-delay={wowDelay(index)}>
                <VideoPopup href={video.url} data-cursor-text={t.play}>
                  <figure><Image src={video.poster} alt={video.alt} width={1200} height={800} /></figure>
                </VideoPopup>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
