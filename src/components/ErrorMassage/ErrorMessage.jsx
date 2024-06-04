import css from "./ErrorMessage.module.css"
import { TbFaceIdError } from "react-icons/tb";

const ErrorMessage = () => {
  return (
    <div>
      <TbFaceIdError />
      <p className={css.errorMsn}>HTTP ERROR! Please reload the page!</p>
    </div>
  );
}

export default ErrorMessage