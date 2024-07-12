import { TbFaceIdError } from "react-icons/tb";
import css from "./errorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.container}>
       <p className={css.icon}><TbFaceIdError  size={34}/></p>
      <p className={css.message}>
        ErrorMessage! 
      </p>
      <p className={css.message}>Failed connect with API</p>
     
    </div>
  );
};

export default ErrorMessage;
