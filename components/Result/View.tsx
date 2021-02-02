import React, { FC } from "react";
import { Store } from "../../store/store";
import { observer } from "mobx-react";
import styled from "styled-components";

interface Props {
  store: Store;
}

const Values = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 24px;
`;

const ResultView: FC<Props> = ({ store }) => {
  const { value1, value2, sum } = store;

  return (
    <>
      <h2>Component #2</h2>
      <h4>MobX Store:</h4>
      <Values>Observable Value 1: {value1}</Values>
      <Values>Observable Value 2: {value2}</Values>
      <Values>
        <strong>Computed Sum: {sum}</strong>
      </Values>
    </>
  );
};

export default observer(ResultView);
