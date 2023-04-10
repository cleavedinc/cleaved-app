import React from "react";

import { toast } from "react-toastify";

import { CopyIcon } from "@cleaved/ui";

export const alertCopied = (message: string): void => {
  toast.success(message, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    icon: () => <CopyIcon />,
    closeOnClick: true,
    draggable: true,
  });
};
