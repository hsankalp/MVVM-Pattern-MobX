import React, { FC } from "react";

import ViewModel from "./ViewModel";
import { observer } from "mobx-react";
import styled from "styled-components";

interface Props {
  viewModel: ViewModel;
}

const Values = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 24px;
  word-wrap: break-word;
`;

const HistoryView: FC<Props> = ({ viewModel }) => {
  const {
    handleChangeVal1,
    value1History,
    handleChangeVal2,
    value2History,
    sumHistory,
    formatValue,
  } = viewModel;

  const handleClickValue1 = (): void => handleChangeVal1();
  const handleClickValue2 = (): void => handleChangeVal2();

  return (
    <>
      <h2>Component #1</h2>
      <button onClick={handleClickValue1}>Action Change Value 1</button>
      <button onClick={handleClickValue2}>Action Change Value 2</button>
      <h4>Local State:</h4>
      <Values>
        <strong>Value 1 History:</strong>
        <br /> {formatValue(value1History)}
      </Values>
      <Values>
        <strong>Value 2 History:</strong>
        <br /> {formatValue(value2History)}
      </Values>
      <Values>
        <strong>Sum History:</strong>
        <br /> {formatValue(sumHistory)}
      </Values>
    </>
  );
};

export default observer(HistoryView);
