import { Store } from "../../pages/store/store";
import { makeObservable, observable, action } from "mobx";

class ViewModel {
  store: Store;
  value1History: number[] = [];
  value2History: number[] = [];
  sumHistory: number[] = [];

  constructor(store: Store) {
    this.store = store;
    makeObservable(this, {
      value1History: observable,
      value2History: observable,
      sumHistory: observable,
      handleChangeVal1: action,
      handleChangeVal2: action,
    });
  }

  handleChangeVal1 = (): void => {
    this.store.changeValue1();
    this.value1History.push(this.store.value1);
    this.sumHistory.push(this.store.sum);
  };

  handleChangeVal2 = (): void => {
    this.store.changeValue2();
    this.value2History.push(this.store.value2);
    this.sumHistory.push(this.store.sum);
  };
}

export default ViewModel;
