import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import HeaderLogoWithContent from "@/svg/HeaderLogoWithContent.svg";
import HeaderLogoOnlyImage from "@/svg/HeaderLogoOnlyImage.svg";
import { Img } from "@/components/Common/Img";
import { A } from "@/components/Common/A";
import { LeftHeaderMenu } from "./LeftHeaderMenu";

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 ${(props) => props.theme.size.padding.vertical.container};
  box-shadow: ${(props) => props.theme.boxShadow.darkgray};
  background: ${(props) => props.theme.color.white};
  @media only screen and (min-width: 1000px) {
    height: ${(props) => props.theme.size.height.headerLargeDiv};
  }
  @media only screen and (max-width: 1000px) {
    height: ${(props) => props.theme.size.height.headerSmallDiv};
  }
  z-index: 9999;
`;

const HeaderLogo = styled.div`
  @media only screen and (min-width: 1000px) {
    width: ${(props) => props.theme.size.width.headerLargeLogo};
    height: 50px;
    background-repeat: no-repeat;
    background-image: url(${HeaderLogoWithContent});
  }
  @media only screen and (max-width: 999px) {
    width: ${(props) => props.theme.size.width.headerSmallLogo};
    height: 50px;
    background-repeat: no-repeat;
    background-image: url(${HeaderLogoOnlyImage});
  }
`;

const LeftButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header: React.FC = () => {
  const [existedLogoContent, setExistedLogoContent] = useState<boolean>(true);
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1000) {
      setExistedLogoContent(true);
    } else {
      setExistedLogoContent(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledHeader>
      {existedLogoContent ? <HeaderLogo /> : <HeaderLogo />}
      <LeftButtonBox>
        <LeftHeaderMenu />
        <A shape="questionA" text="문의하기" />
      </LeftButtonBox>
    </StyledHeader>
  );
};
