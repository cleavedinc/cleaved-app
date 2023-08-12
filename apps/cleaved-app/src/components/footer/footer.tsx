// import React, { FunctionComponent } from "react";
// import styled from "styled-components";

// import { mediaQueries, SPACING, WrapperOneHalf } from "@cleaved/ui";

// import { useTranslator } from "../../hooks";

// const StyledFooterWrapper = styled.div`
//   background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
//   display: flex;
//   flex: 0 1 auto;

//   ${mediaQueries.SM} {
//     padding: ${SPACING.MEDIUM};
//   }
// `;

// const StyledCopyrightWrapper = styled.div``;

// const StyledWrapperOneHalf = styled(WrapperOneHalf)`
//   margin: 0;
//   padding: 0;
// `;

// export const Footer: FunctionComponent = () => {
//   const { t } = useTranslator();
//   const currentYear = new Date().getFullYear();

//   return (
//     <StyledFooterWrapper>
//       <StyledWrapperOneHalf>
//         <StyledCopyrightWrapper>
//           &#169; {currentYear} {t("companyName")}
//         </StyledCopyrightWrapper>
//       </StyledWrapperOneHalf>
//     </StyledFooterWrapper>
//   );
// };
