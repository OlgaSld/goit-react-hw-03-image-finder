import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery_styled';

export const ImageGallery = ({images}) => {
    return (
        <GalleryList>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
            ))}
        </GalleryList>
    )
}