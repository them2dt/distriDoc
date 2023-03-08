import Link from "next/link";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Navbar({ id }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link href="/">
          emptea <span className="marked">library</span>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link href="/read" style={id == 1 ? { color: "var(--sign)" } : {}}>
              read
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link href="/write" style={id == 2 ? { color: "var(--sign)" } : {}}>
              write
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link href="/shop" style={id == 3 ? { color: "var(--sign)" } : {}}>
              shop
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <WalletMultiButtonDynamic />
      </div>
    </div>
  );
}
