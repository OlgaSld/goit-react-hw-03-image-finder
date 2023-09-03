import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem_styled.jsx'

export const ImageGalleryItem = ({image}) => {
    return (
      <GalleryItem>
        <ImageGalleryItemImage src={image.webformatURL} alt={image.tags} />
      </GalleryItem>
    );
}