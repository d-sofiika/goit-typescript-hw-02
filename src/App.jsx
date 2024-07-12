import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { getArticlesApi } from "./api/articles-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";




function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
   const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
         if (query === "") return;
      try {
        setError(false);
        setLoading(true);

        const data = await getArticlesApi(query, page);
     setArticles((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
        
      } finally {
        setLoading(false);
      }
    };
    query && fetchData();
  }, [query, page]);

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery)
    setArticles([])
    setPage(1)
    
  };

  const handleMore = () => {
    setPage(page + 1);
  };

   const openModal = (imageUrl, likes, alt_description) => {
    setSelectedImage({imageUrl, likes, alt_description});
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar submit={handleSubmit} />
      
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery images={articles} onImageClick={openModal} />}

      {articles.length > 0 && <LoadMoreBtn handleMore={handleMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage.imageUrl}
          likes={selectedImage.likes} 
          alt_description={selectedImage.alt_description}
        />
      )}
    </>
  );
}

export default App;
