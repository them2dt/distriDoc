"use client";
import TeaButton from "@/components/teabutton/TeaButton";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

import floating_sphere from "../media/floating-sphere.png";
import stack_phase_1 from "../media/stack-1.png";
import stack_phase_2 from "../media/stack-2.png";
import stack_phase_3 from "../media/stack-3.png";
import Card from "@/components/card/Card";
import Infobox from "@/components/infobox/Infobox";

export default function Home() {
  return (
    <motion.div>
      <Navbar />
      <motion.div className="section" id="cover">
        <motion.div className="column">
          <motion.div className="row left">
            <motion.div className="slogan cover">
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0,
                }}
              >
                A
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.05,
                }}
              >
                {" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.1,
                }}
              >
                n
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.25,
                }}
              >
                e
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.3,
                }}
              >
                w
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.1,
                  delay: 0.35,
                }}
              >
                {" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.4,
                }}
              >
                w
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.45,
                }}
              >
                a
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.5,
                }}
              >
                y
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.55,
                }}
              >
                {" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.6,
                }}
              >
                t
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.65,
                }}
              >
                o
              </motion.span>
              <motion.span
                initial={{ opacity: 0, position: "relative", top: "-10px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{
                  duration: 0.05,
                  delay: 0.7,
                }}
              >
                {" "}
              </motion.span>
              <div className="marked">
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 0.75,
                  }}
                >
                  p
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 0.8,
                  }}
                >
                  u
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 0.85,
                  }}
                >
                  b
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 0.9,
                  }}
                >
                  l
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 0.95,
                  }}
                >
                  i
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 1,
                  }}
                >
                  s
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 1.05,
                  }}
                >
                  h
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, position: "relative", top: "-10px" }}
                  whileInView={{ opacity: 1, top: "0px" }}
                  transition={{
                    duration: 0.05,
                    delay: 1.1,
                  }}
                >
                  .
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="row right"
            initial={{ opacity: 0, y: "-10px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{
              duration: 0.2,
              delay: 0.2,
            }}
          >
            <TeaButton buttonID={"button-cover"} size={"large"} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="section" id="about">
        <motion.div className="row center">
          <motion.div className="column">
            <motion.div
              className="row left header-1"
              initial={{ opacity: 0, y: "-10px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
            >
              Free your mind.
            </motion.div>
            <motion.div
              className="row left text"
              initial={{ opacity: 0, y: "-10px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{
                duration: 0.2,
                delay: 0.4,
              }}
            >
              DistriDoc allows you to be independent as a creator. <br />
              Unlock the power of secure storage for all your files. <br />
              We ensure that your documents are stored on-chain, forever.
            </motion.div>
          </motion.div>
          <motion.div className="row">
            <motion.div
              className="image-shadow"
              initial={{ opacity: 0, y: "-10px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{
                duration: 0.2,
                delay: 0.6,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="section" id="evolution">
        <motion.div
          className="row center"
          initial={{ opacity: 0, y: "-10px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
        >
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
        </motion.div>
      </motion.div>
      <motion.div className="section" id="open-source">
        <Infobox />
      </motion.div>
    </motion.div>
  );
}
