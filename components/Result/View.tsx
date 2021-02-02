import React, { FC } from "react";
import { Store } from "../../pages/store/store";
import { observer } from "mobx-react";
import styled from "styled-components";

interface Props {
  store: Store;
}

const Container = styled.div`
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 32px;
  word-break: break-all;
`;

const Values = styled.p`
  font-size: 12px;
  line-height: 24px;
`;

const ResultView: FC<Props> = ({ store }) => {
  const { value1, value2, sum } = store;

  return (
    <Container>
      <h2>Component #2</h2>
      <Values>Observable Value 1: {value1}</Values>
      <Values>Observable Value 2: {value2}</Values>
      <Values>
        <strong>Computed Sum: {sum}</strong>
      </Values>
    </Container>
  );
};

export default observer(ResultView);
