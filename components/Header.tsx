import Link from "next/link";

function Header() {
  return (
    <Link href={"/"}>
      <a>
        <div className="flex flex-col items-center z-10">
          <img src="/images/logo.png" />
        </div>
      </a>
    </Link>
  );
}

export default Header;
