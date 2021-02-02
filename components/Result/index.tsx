import React, { FC, useContext } from "react";
import View from "./View";
import { Context } from "../../store/store";

const Result: FC = () => {
  const store = useContext(Context);
  return <View store={store} />;
};

export default Result;
