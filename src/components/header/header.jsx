import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div>Home</div>
      <div>Contact Us</div>
      <div>SignIn</div>
    </div>
  );
}

export default Header;
