import { Span } from "@/components/Common/Span";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChoiceBox: React.FC<{
  headerText: string;
  rightContentText: string;
  leftContentText: string;
}> = ({ headerText, rightContentText, leftContentText }) => {
  return (
    <Container>
      <Span shape="productApplicationContentHeader" text={headerText} />
      <ButtonBox>
        <Span
          shape="productApplicationChoiceBox"
          selected={true}
          text={leftContentText}
        />
        <Span
          shape="productApplicationChoiceBox"
          selected={false}
          text={rightContentText}
        />
      </ButtonBox>
    </Container>
  );
};
