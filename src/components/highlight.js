import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";

SyntaxHighlighter.registerLanguage("json", json);

const Highlight = ({ children }) => (
  <SyntaxHighlighter language="json" style={atomDark}>
    {children}
  </SyntaxHighlighter>
);

export default Highlight;
