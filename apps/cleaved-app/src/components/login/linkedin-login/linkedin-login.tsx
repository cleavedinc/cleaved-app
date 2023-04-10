// import React, { FunctionComponent, ReactNode } from "react";
// import { LinkedIn } from "react-linkedin-login-oauth2"; // TODO: dont' think types exist. need to add a new declaration file

// export type LinkedinLoginWrapperProps = {
//   children: ReactNode;
//   clientId: string;
//   onFailure: (response: any) => void;
//   onSuccess: (response: any) => void;
//   redirectUri: string;
// };

// export const LinkedinLoginWrapper: FunctionComponent<LinkedinLoginWrapperProps> = (props) => {
//   const { children, clientId, onFailure, onSuccess, redirectUri } = props;

//   return (
//     <LinkedIn clientId={clientId} onFailure={onFailure} onSuccess={onSuccess} redirectUri={redirectUri}>
//       {children}
//     </LinkedIn>
//   );
// };
