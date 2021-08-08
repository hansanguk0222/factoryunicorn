import styled, { css } from "styled-components";
import { Span } from "@/components/Common/Span";

const ReviewItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  min-height: 150px;
  box-shadow: ${(props) => props.theme.boxShadow.thickDarkGray};
`;

const BlueBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.blue3};
  background: ${(props) => props.theme.color.blue3};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2px 0px;
  font-weight: bold;
`;

const TextContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 5px;
  text-align: left;
  padding: ${(props) => props.theme.size.padding.fourSide.gridCardItem};
`;

const LastContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BottomContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const ReviewItem: React.FC<{
  text1: string;
  text2: string;
  text3: string;
}> = ({ text1, text2, text3 }) => {
  return (
    <ReviewItemBox>
      <TextContainer>
        <Span shape="smallContent" text={text1} />
      </TextContainer>
      <BottomContainer>
        <BlueBox />
        <BlueBox>
          <Span shape="smallWhiteContent" text={text2} />
        </BlueBox>
        <LastContentBox>
          <Span shape="smallBlueContent" text={text3} />
        </LastContentBox>
      </BottomContainer>
    </ReviewItemBox>
  );
};
