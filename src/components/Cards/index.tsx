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
  padding: ${(props) => props.theme.size.padding.fourSide.gridCardItem};
  @media only screen and (min-width: 1000px) {
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: ${(props) => props.theme.size.height.gridCardItem};
  }
  @media only screen and (max-width: 999px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: ${(props) => props.theme.size.height.gridCardItem} ${(
        props
      ) => props.theme.size.height.gridCardItem};
  }
  @media only screen and (max-width: 849px) {
    grid-template-columns: 100%;
    grid-template-rows: 350px 350px 350px 350px;
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

const CardItem = styled.div<ICardItem>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.size.padding.fourSide.gridCardItem} 0;
  @media only screen and (max-width: 999px) {
    ${(props) =>
      (props.order === 1 || props.order === 2) &&
      css`
        border-bottom: 1px solid ${(props) => props.theme.color.gray2};
      `}
  }
  @media only screen and (max-width: 849px) {
    ${(props) =>
      (props.order === 1 || props.order === 2 || props.order === 3) &&
      css`
        border-bottom: 1px solid ${(props) => props.theme.color.gray2};
      `}
  }
`;

export const Cards: React.FC = () => {
  return (
    <StyledGrid>
      <CardContainer order={1}>
        <CardItem order={1}>
          <Img shape="gridCardContainerImg" src={Laptop} />
          <Span shape="cardContent" text="?????? ??????" bold />
          <Span
            shape="cardContent"
            text="?????? ???????????? ????????? ??????????????? ?????? ????????? ???????????? ?????? ????????????"
          />
        </CardItem>
      </CardContainer>
      <CardContainer order={2}>
        <CardItem order={2}>
          <Img shape="gridCardContainerImg" src={Clothes1} />
          <Span shape="cardContent" text="?????? ?????????" bold />
          <Span
            shape="cardContent"
            text="?????? ????????? ???????????? ???????????? ?????? ???????????? ?????? ??? ?????? ????????? ??????"
          />
        </CardItem>
      </CardContainer>
      <CardContainer order={3}>
        <CardItem order={3}>
          <Img shape="gridCardContainerImg" src={Money} />
          <Span shape="cardContent" text="?????? ??????" bold />
          <Span
            shape="cardContent"
            text="?????? ???????????? ??? ??????????????? ???????????? ????????? ?????? ?????? ?????? ??????"
          />
        </CardItem>
      </CardContainer>
      <CardContainer order={4}>
        <CardItem order={4}>
          <Img shape="gridCardContainerImg" src={Calendar} />
          <Span shape="cardContent" text="?????? ??????" bold />
          <Span
            shape="cardContent"
            text="???????????? PC ?????? ???????????? ???????????? ??????"
          />
        </CardItem>
      </CardContainer>
    </StyledGrid>
  );
};
