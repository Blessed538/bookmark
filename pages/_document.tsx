import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import { FC } from "react";

const Document: FC<DocumentProps> = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
