import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Main Menu</a>
          </Link>{" "}
          ||{" "}
          <Link href="/about">
            <a>Ingredients</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
