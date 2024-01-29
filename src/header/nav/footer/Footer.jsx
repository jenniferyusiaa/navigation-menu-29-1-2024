import styles from "./footer.module.css";
import { motion } from "framer-motion";
import { translate } from "../../animation";

const Footer = () => {
  const footerItems = [
    {
      credit: "Made By: ",
      content: "Studio Lumio",
      src: "https://i.pinimg.com/564x/d5/0c/9b/d50c9b70e5505b156b9b13043d739469.jpg",
    },
    {
      credit: "Typography: ",
      content: "Google Fonts",
      src: "https://i.pinimg.com/564x/45/8a/c0/458ac01ba711bdeb4a6a5333591ae88b.jpg",
    },
    {
      credit: "Images: ",
      content: "Pinterest",
      src: "https://i.pinimg.com/564x/31/75/72/3175722de98511b223f6f17b989e5f5b.jpg",
    },
    {
      credit: "Privacy Policy",
      content: "Terms & Conditions",
      src: "https://i.pinimg.com/564x/69/3f/1f/693f1f6f5e81cb7b8c934e09cda386b0.jpg",
    },
  ];

  return (
    <div className={styles.footer}>
      {footerItems.map((footerItem, index) => {
        const { credit, content, src } = footerItem;
        return (
          <motion.div
            key={index}
            className={styles.navFoot}
            custom={(index * 0.02, index * 0.02)}
            variants={translate}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <p>{credit}</p>
            <a href={src}>{content}</a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Footer;
