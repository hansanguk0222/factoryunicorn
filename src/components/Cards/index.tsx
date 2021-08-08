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
          <Span shape="cardContent" text="간편 클릭" bold />
          <Span
            shape="cardContent"
            text="전문 지식이나 어려운 작업지시서 없이 간편한 클릭으로 쉬운 의류제작"
          />
        </CardItem>
      </CardContainer>
      <CardContainer order={2}>
        <CardItem order={2}>
          <Img shape="gridCardContainerImg" src={Clothes1} />
          <Span shape="cardContent" text="추천 시스템" bold />
          <Span
            shape="cardContent"
            text="의뢰 내용과 판매가를 기반으로 가장 합리적인 원단 및 제조 스펙을 추천"
          />
        </CardItem>
      </CardContainer>
      <CardContainer order={3}>
        <CardItem order={3}>
          <Img shape="gridCardContainerImg" src={Money} />
          <Span shape="cardContent" text="제조 원가" bold />
          <Span
            shape="cardContent"
            text="의류 생산하기 전 의뢰내용에 바탕하여 빠르게 제조 견적 확인 가능"
          />
        </CardItem>
      </CardContainer>
      <CardContainer order={4}>
        <CardItem order={4}>
          <Img shape="gridCardContainerImg" src={Calendar} />
          <Span shape="cardContent" text="제조 현황" bold />
          <Span
            shape="cardContent"
            text="모바일과 PC 언제 어디서든 생산관리 가능"
          />
        </CardItem>
      </CardContainer>
    </StyledGrid>
  );
};
