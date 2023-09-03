import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem_styled.jsx'

export const ImageGalleryItem = ({image, onOpenModal}) => {
    return (
      <GalleryItem>
        <ImageGalleryItemImage
          src={image.webformatURL}
          alt={image.tag}
          onClick={() => onOpenModal(image.largeImageURL, image.tag)}
        />
      </GalleryItem>
    );
}