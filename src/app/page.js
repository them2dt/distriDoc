"use client";
import TeaButton from "@/components/teabutton/TeaButton";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

import floating_sphere from "../media/floating-sphere.png";
import stack_phase_1 from "../media/stack-1.png";
import stack_phase_2 from "../media/stack-2.png";
import stack_phase_3 from "../media/stack-3.png";
import Card from "@/components/card/Card";

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
      <div className="section" id="about">
        <div className="row center">
          <div className="column">
            <div className="row left header-1">Free your mind.</div>
            <div className="row left text">
              DistriDoc allows you to be independent as a creator. <br />
              Unlock the power of secure storage for all your files. <br />
              We ensure that your documents are stored on-chain, forever.
            </div>
          </div>
          <div className="row">
            <div className="image-shadow"></div>
          </div>
        </div>
      </div>
      <div className="section" id="evolution">
        <div className="row center">
          <Card
            image={stack_phase_1}
            title={"Open"}
            context={
              "We leverage the Markdown syntax to deliver optimal content, combining creativity with adaptability."
            }
          />
          <Card
            image={stack_phase_2}
            title={"Persistent"}
            context={"Your documents will be stored on-chain, forever."}
          />
          <Card
            image={stack_phase_3}
            title={"Free"}
            context={
              "You don't have to pay anything.\nNot with money.\nNot with information."
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
