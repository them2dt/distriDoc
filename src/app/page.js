"use client";
import TeaButton from "@/components/teabutton/TeaButton";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div>
      <Navbar />
      <div className="section" id="cover">
        <div className="column">
          <div className="row left">
            <div className="slogan cover">
              A new way to <span>publish</span>.
            </div>
          </div>
          <div className="row right">
            <TeaButton />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
