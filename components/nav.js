import style from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li data-cy="Home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li data-cy="About">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li data-cy="Posts">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li data-cy="Contact">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li data-cy="Sample">
          <Link href="/sample">
            <a>Sample</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
