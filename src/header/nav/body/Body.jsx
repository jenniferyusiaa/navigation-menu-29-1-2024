import styles from "./body.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { blur, translate } from "../../animation";

const Body = ({ navItems, isSelected, setIsSelected }) => {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          variants={translate}
          custom={[index * 0.02, (word.length - index) * 0.02]}
          initial="exit"
          animate="enter"
          exit="exit"
          key={index}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {navItems.map((navItem, index) => {
        const { title, src } = navItem;
        return (
          <motion.div
            key={index}
            className={styles.navLinks}
            variants={blur}
            animate={
              isSelected.isHover === true && isSelected.index !== index
                ? "open"
                : "close"
            }
          >
            <a
              href={src}
              onMouseOver={() => {
                setIsSelected({
                  isHover: true,
                  index: index,
                });
              }}
              onMouseLeave={() => {
                setIsSelected({
                  isHover: false,
                  index: index,
                });
              }}
            >
              {getChars(title)}
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

Body.propTypes = {
  navItems: PropTypes.array.isRequired,
  isSelected: PropTypes.array.isRequired,
  setIsSelected: PropTypes.array.isRequired,
};

export default Body;
