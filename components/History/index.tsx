import React, { FC, useContext } from "react";
import View from "./View";
import { Context } from "../../pages/store/store";
import ViewModel from "./ViewModel";

const History: FC = () => {
  const store = useContext(Context);
  const viewModel = new ViewModel(store);
  return <View viewModel={viewModel} />;
};

export default History;
