import React, { useState, useEffect } from "react";
//3rd-party
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Switch from "@mui/material/Switch";
import { useWallet } from "@solana/wallet-adapter-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
//locals
import Navbar from "@/components/Navbar";
export default function Index() {
  const [file, setFile] = useState("");
  const [name, setName] = useState(null);
  const [creator, setCreator] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  const wallet = useWallet();

  const dragSwitchHandler = (event) => {
    setDarkMode(event.target.checked);
  };

  const getUrl = async () => {
    const { item, name, creator } = router.query;
    setName(name);
    setCreator(creator);
    return item;
  };
  const getFile = async () => {
    const address = await getUrl();

    if (address) {
      const url = "https://" + address + ".ipfs.nftstorage.link";
      const response = fetch(url.toString())
        .then((Response) => Response.text())
        .then((result) => setFile(result));
      console.log(response);
    }
  };

  useEffect(() => {
    getFile();
  }, [wallet.connect]);

  useEffect(() => {
    if (darkMode) {
      const root = document.querySelector(":root");
      root.style.setProperty("--white", "white");
      root.style.setProperty("--black", "black");
      root.style.setProperty("--obsidian", "#242424");
      root.style.setProperty("--obsidian-dark", "#1b1b1b");
      root.style.setProperty("--obsidian-dark-faded", "#1b1b1b80");
    } else if (!darkMode) {
      const root = document.querySelector(":root");
      root.style.setProperty("--white", "black");
      root.style.setProperty("--black", "white");
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
      <Navbar />
      <div className="reader-info-container">
        <div className="reader-info">
          <div className="reader-info-primary">
            <div className="reader-title">{name}</div>
            <div className="reader-author">{creator}</div>
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
      <div className="reader">
        <div className="reader-content">
          <div className="reader-post">
            <ReactMarkdown remarkPlugins={remarkGfm}>{file}</ReactMarkdown>
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
