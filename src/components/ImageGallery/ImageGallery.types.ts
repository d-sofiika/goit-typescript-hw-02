type Image = {
  id: string;
  urls: {
    regular: string;
    small: string;
    
  };
  alt_description: string;
  likes:number

}
type ImageGalleryProps = {
 images: Image[]
  onImageClick: (url: string, likes: number, alt_description: string) => void;
};
