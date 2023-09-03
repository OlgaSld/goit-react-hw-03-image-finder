import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery_styled';

export const ImageGallery = ({images, onOpenModal}) => {
    return (
      <GalleryList>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            largeImageUrl={image.largeImageURL}
            onOpenModal={onOpenModal}
          />
        ))}
      </GalleryList>
    );
}