import styles from "./images.module.css";
import PropTypes from "prop-types";

const Images = ({ isHover, isSelectedImage }) => {
  return (
    <div className={styles.images}>
      {isHover && <img src={isSelectedImage} alt="selectedimage" />}
    </div>
  );
};

Images.propTypes = {
  isHover: PropTypes.bool.isRequired,
  isSelectedImage: PropTypes.string.isRequired,
};

export default Images;
