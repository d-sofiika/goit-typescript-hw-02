type TypeImage = {
  alt_description: string;
  imageUrl: string;
  likes: number;
};

type Article = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  likes: number;
};
