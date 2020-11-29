import style from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/sample">
            <a>Sample</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
