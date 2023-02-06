//natives
import Image from "next/image";
//3rd-parties
import { motion } from "framer-motion";
//locals
import logo from "../components/bricks/media/logo.png";
import Navbar from "../components/bricks/navbar/Navbar";
import Footer from "../components/bricks/footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-header" id="home-header">
        <div className="home-header-content">
          <div className="home-header-logo">
            <div className="home-header-icon">
              <Image src={logo} height={60} />
            </div>
            <div className="vertical-splitter">
              <div></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1,
                  damping: 25,
                  stiffness: 500,
                },
              }}
              className="home-header-title"
            >
              The better way of publishing.
            </motion.div>
          </div>
          <div className="home-header-button">
            <Link href={"/create"}>
              <button>Create your first post!</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
