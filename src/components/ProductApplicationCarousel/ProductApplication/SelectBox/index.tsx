import styled from "styled-components";
import { Span } from "@/components/Common/Span";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${(props) => props.theme.color.gray1};
  background: none;
  width: 100%;
  color: ${(props) => props.theme.color.gray2};
  @media only screen and (min-width: 1000px) {
    font-size: ${(props) => props.theme.size.font.s};
  }
  @media only screen and (max-width: 999px) {
    font-size: ${(props) => props.theme.size.font.xxxs};
  }
  @media only screen and (max-width: 849px) {
    font-size: ${(props) => props.theme.size.font.xxxxxs};
  } ;
`;

const StyledOption = styled.option``;

export const SelectBox: React.FC<{ text: string; optionValue: string }> = ({
  text,
  optionValue,
}) => {
  return (
    <Container>
      <Span shape="productApplicationContentHeader" text={text} />
      <StyledSelect>
        <StyledOption selected value={optionValue}>
          {optionValue}
        </StyledOption>
      </StyledSelect>
    </Container>
  );
};
