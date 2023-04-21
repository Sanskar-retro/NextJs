import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div>
      <header className="p-2 bg-slate-500 drop-shadow-lg flex">
        <Image
          alt="Logo"
          src="/../public/OIP.jpg"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="routes">
          <ul className="flex flex-wrap">
            <Link href="/">
              <li className="cursor-pointer m-8 text-slate-300">Home</li>
            </Link>
            <Link href="/About">
              <li className="cursor-pointer m-8 text-slate-300">About</li>
            </Link>
            <Link href="/Products">
              <li className="cursor-pointer m-8 text-slate-300">Products</li>
            </Link>
            <Link href="/Cart">
              <li className="cursor-pointer m-8 text-slate-300">Cart</li>
            </Link>
            <Link href="/User">
              <li className="cursor-pointer m-8 text-slate-300">User</li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
