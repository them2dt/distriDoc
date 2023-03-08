import React, { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faArrowLeft,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  const [file, setFile] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const dragSwitchHandler = (event) => {
    setDarkMode(event.target.checked);
  };

  const getFile = async () => {
    fetch(
      "https://raw.githubusercontent.com/bmresearch/Solnet.Anchor/master/README.md"
    )
      .then((Response) => Response.text())
      .then((result) => setFile(result));
  };

  useEffect(() => {
    getFile();
  }, []);

  useEffect(() => {
    if (darkMode) {
      const root = document.querySelector(":root");
      root.style.setProperty("--white", "white");
      root.style.setProperty("--obsidian", "#242424");
      root.style.setProperty("--obsidian-dark", "#1b1b1b");
      root.style.setProperty("--obsidian-dark-faded", "#1b1b1b80");
    } else if (!darkMode) {
      const root = document.querySelector(":root");
      root.style.setProperty("--white", "black");
      root.style.setProperty("--obsidian", "white");
      root.style.setProperty("--obsidian-dark", "#e0e0e0");
      root.style.setProperty("--obsidian-dark-faded", "#d9d9d980");
    }
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#b600ee",
      },
    },
  });

  return (
    <>
      <div className="reader">
        <div className="reader-content">
          <div className="reader-post">
            <ReactMarkdown children={file} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
      <div className="reader-info-container">
        <div className="reader-info">
          <div className="reader-info-primary">
            <div className="reader-title">Bitcoin Basics</div>
            <div className="reader-author">John Doe</div>
          </div>
          <div className="reader-info-secondary">
            <ThemeProvider theme={theme}>
              <Switch
                color="secondary"
                checked={darkMode}
                onChange={dragSwitchHandler}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>

      <div className="reader-navigator-container">
        <div className="reader-navigator">
          <button className="reader-button">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button className="reader-button">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>
      </div>
    </>
  );
}
