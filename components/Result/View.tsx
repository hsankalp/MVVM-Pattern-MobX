import React, { FC } from "react";
import { Store } from "../../pages/store/store";
import { observer } from "mobx-react";

interface Props {
  store: Store;
}

const ResultView: FC<Props> = ({ store }) => {
  const { value1, value2, sum } = store;

  return (
    <div>
      <h1>Value 1: {value1}</h1>
      <h1>Value 2: {value2}</h1>
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default observer(ResultView);
