import { useState } from "react";
import styled from "styled-components";
import { A } from "@/components/Common/A";
import { Span } from "@/components/Common/Span";
import { ILeftHeaderMenu } from "@/type";

const StyledLeftHeaderMenu = styled.div`
  width: ${(props) => props.theme.size.width.leftHeaderMenuItem};
  height: ${(props) => props.theme.size.height.leftHeaderMenuItem};
`;

const MenuItemBox = styled.div<ILeftHeaderMenu>`
  width: 100%;
  display: ${(props) => !props.isHoverd && "none"};
`;

const SpanWrapper = styled.div`
  height: 100%;
`;

export const LeftHeaderMenu: React.FC = () => {
  const [isHoverd, setIsHoverd] = useState<boolean>(false);
  return (
    <StyledLeftHeaderMenu>
      <SpanWrapper
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
      >
        <Span shape="leftHeaderMenu" text="마이페이지" />
      </SpanWrapper>
      <MenuItemBox isHoverd={isHoverd}>
        <A shape="leftHeaderMenuItemA" text="문의/제작 확인" />
        <A shape="leftHeaderMenuItemA" text="로그아웃" />
      </MenuItemBox>
    </StyledLeftHeaderMenu>
  );
};
