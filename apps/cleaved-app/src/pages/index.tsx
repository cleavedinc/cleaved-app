import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { ApplicationWrapper } from "./application-wrapper";

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line

// Logs accessibility errors to the console in non-production mode
if (process.env.NODE_ENV !== "production") {
  const config = {
    rules: [
      {
        id: "page-has-heading-one",
        enabled: false,
      },
    ],
    disableDeduplicate: true,
  };

  const axe = require("@axe-core/react"); // eslint-disable-line
  axe(React, ReactDOM, 2000, config);
}

root.render(<ApplicationWrapper />);
