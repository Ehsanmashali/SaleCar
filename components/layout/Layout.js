import Link from "next/link";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={style.header}>
        <Link href="/">
          <h2>SALE CAR</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={style.container}>{children}</div>
      <footer className={style.footer}>
        <a href="divar.com" target="_blank">
          Sale Car
        </a>
        Next.js courses | Sale Car Project &copy;
      </footer>
    </>
  );
};

export default Layout;
