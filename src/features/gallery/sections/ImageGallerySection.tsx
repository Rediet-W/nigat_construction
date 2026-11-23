import { ImageGallery } from "@/features/gallery/components/ImageGallery";
import { getGalleryImages } from "@/lib/cms/content";

export async function ImageGallerySection() {
  const images = await getGalleryImages();
  return (
    <div className="page-gallery">
      <div className="container">
        <ImageGallery images={images} />
      </div>
    </div>
  );
}
