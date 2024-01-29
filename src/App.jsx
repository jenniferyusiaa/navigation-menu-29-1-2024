import Header from "./header/Header";
import styles from "./app.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.div}>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};

export default App;
