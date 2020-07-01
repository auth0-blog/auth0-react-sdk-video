import React from "react";

import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const Highlight = ({ children, language }) => (
  <SyntaxHighlighter language={language} style={a11yDark}>
    {children}
  </SyntaxHighlighter>
);

export default Highlight;
