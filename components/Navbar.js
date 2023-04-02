import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Navbar({ id }) {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <div className="navbar-left">
        <Link href="/">
          emptea <span className="marked">library</span>
        </Link>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-right">
        <WalletMultiButtonDynamic />
      </div>
    </motion.div>
  );
}
