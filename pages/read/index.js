import React, { useState, useEffect } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function index() {
  const [file, setFile] = useState("");
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
        </div>
      </div>
    </>
  );
}
