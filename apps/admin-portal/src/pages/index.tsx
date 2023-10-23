import React from "react";
import { createRoot } from "react-dom/client";

import { ApplicationWrapper } from "./application-wrapper";

const container = document.getElementById("root");
const root = createRoot(container!); // eslint-disable-line

root.render(<ApplicationWrapper />);
