import { Field, Formik, Form } from "formik";
import css from "./searchBar.module.css";
import { BsSearchHeart } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    
    if (values.query.trim() === "") {
      toast.error("Write some words!");
    } else {
      submit(values.query);
    }
    actions.resetForm();
  };
  return (
    <>
     
      <header className={css.header}>
        <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          <Form>
            <div className={css.inputContainer}>
              <Field
                type="text"
                className={css.input}
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
              <button className={css.btn} type="submit">
                <BsSearchHeart size={24} />
              </button>
            </div>
          </Form>
        </Formik>
          </header>
          <Toaster position="top-center" />
    </>
  );
};

export default SearchBar;
