import styled, { css } from "styled-components";
import Laptop from "@/svg/Laptop.svg";
import Clothes1 from "@/svg/Clothes1.svg";
import Money from "@/svg/Money.svg";
import Calendar from "@/svg/Calendar.svg";
import { Img } from "../Common/Img";
import { Span } from "../Common/Span";
import { ICardItem } from "@/type";

const StyledGrid = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  @media only screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (max-width: 999px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const CardContainer = styled.div<ICardItem>`
  padding: 0 ${(props) => props.theme.size.padding.fourSide.gridCardItem};
  @media only screen and (min-width: 1000px) {
    ${(props) =>
      (props.order === 1 || props.order === 2 || props.order === 3) &&
      css`
        border-right: 1px solid ${(props) => props.theme.color.gray2};
      `}
  }
  @media only screen and (max-width: 999px) {
    ${(props) =>
      (props.order === 1 || props.order === 3) &&
      css`
        border-right: 1px solid ${(props) => props.theme.color.gray2};
      `}
  }
  @media only screen and (max-width: 849px) {
    border: none;
  }
`;

const CardItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.size.padding.fourSide.gridCardItem} 0;
`;

export const Brands: React.FC = () => {
  return (
    <StyledGrid>
      <CardItem>
        <Span shape="mediumBlueContent" text="짐웨어" bold={true} />
        <Span shape="mediumBlueContent" text="35개" />
      </CardItem>
      <CardItem>
        <Span shape="mediumBlueContent" text="스트릿 브랜드" bold={true} />
        <Span shape="mediumBlueContent" text="128개" />
      </CardItem>
      <CardItem>
        <Span shape="mediumBlueContent" text="골프웨어" bold={true} />
        <Span shape="mediumBlueContent" text="17개" />
      </CardItem>
      <CardItem>
        <Span shape="mediumBlueContent" text="애슬레져" bold={true} />
        <Span shape="mediumBlueContent" text="11개" />
      </CardItem>
      <CardItem>
        <Span shape="mediumBlueContent" text="남성 브랜드" bold={true} />
        <Span shape="mediumBlueContent" text="21개" />
      </CardItem>
      <CardItem>
        <Span shape="mediumBlueContent" text="여성 브랜드" bold={true} />
        <Span shape="mediumBlueContent" text="17개" />
      </CardItem>
    </StyledGrid>
  );
};
