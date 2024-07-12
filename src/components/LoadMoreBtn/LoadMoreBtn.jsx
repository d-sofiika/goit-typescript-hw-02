import css from "./loadMoreBtn.module.css"
import { PiListHeartBold } from "react-icons/pi";

const LoadMoreBtn = ({handleMore}) => {
    
  return (
    <div className={css.btnContainer}><button className={css.btn} onClick={handleMore}>Load more <PiListHeartBold  size={24}/></button></div>
  )
}

export default LoadMoreBtn