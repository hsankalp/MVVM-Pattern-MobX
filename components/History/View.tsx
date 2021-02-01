import React, { FC } from "react";

import ViewModel from "./ViewModel";
import { observer } from "mobx-react";

interface Props {
  viewModel: ViewModel;
}

const HistoryView: FC<Props> = ({ viewModel }) => {
  const {
    handleChangeVal1,
    value1History,
    handleChangeVal2,
    value2History,
    sumHistory,
  } = viewModel;

  const handleClickValue1 = (): void => handleChangeVal1();
  const handleClickValue2 = (): void => handleChangeVal2();

  return (
    <div>
      <button onClick={handleClickValue1}>Change Value 1</button>
      <pre>History: {String(value1History)}</pre>
      <button onClick={handleClickValue2}>Change Value 2</button>
      <pre>History: {String(value2History)}</pre>
      <hr></hr>
      <pre>Sum History: {String(sumHistory)}</pre>
    </div>
  );
};

export default observer(HistoryView);
