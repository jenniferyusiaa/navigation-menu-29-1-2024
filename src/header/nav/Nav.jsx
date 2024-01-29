import styles from "./nav.module.css";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Images from "./images/Images";
import { motion } from "framer-motion";
import { height } from "../animation";
import { useState } from "react";

const Nav = () => {
  const navItems = [
    {
      title: "Home",
      src: "https://i.pinimg.com/564x/0b/97/ce/0b97ce0585d450cda0ee0428b2acbccb.jpg",
    },
    {
      title: "Shop",
      src: "https://i.pinimg.com/564x/87/9a/df/879adf47b59135f5f27e944791269038.jpg",
    },
    {
      title: "About Us",
      src: "https://i.pinimg.com/564x/d5/0f/a6/d50fa66d789f3859dc853a24f1ab34a6.jpg",
    },
    {
      title: "Lookbook",
      src: "https://i.pinimg.com/564x/b2/18/10/b218103f36d70dd933a329e076adf32e.jpg",
    },
    {
      title: "Contact",
      src: "https://i.pinimg.com/564x/76/29/3c/76293c4711413b01cf993809143f1c97.jpg",
    },
  ];

  const [isSelected, setIsSelected] = useState({
    isHover: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="exit"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <Body
          navItems={navItems}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <Footer />
      </div>
      <Images
        isHover={isSelected.isHover}
        isSelectedImage={navItems[isSelected.index].src}
      />
    </motion.div>
  );
};

export default Nav;
