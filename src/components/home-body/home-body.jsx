import styles from "./home-body.module.css";
import { names } from "../../util/array";

function HomeBody() {
  function namesMap(names, index) {
    return (
      <div className={styles.item} key={index}>
        {names}
      </div>
    );
  }

  return (
    <div className={styles.home}>
      {names.map((names, index) => namesMap(names, index))}
    </div>
  );
}

export default HomeBody;
