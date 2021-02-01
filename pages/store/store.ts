import { observable, computed, action, makeObservable } from "mobx";
import { createContext } from "react";

export class Store {
  value1: number = 0;
  value2: number = 0;

  constructor() {
    makeObservable(this, {
      value1: observable,
      value2: observable,
      changeValue1: action,
      changeValue2: action,
      sum: computed,
    });
  }

  changeValue1 = (): void => {
    this.value1 = this.value1 + 5;
  };

  changeValue2 = (): void => {
    this.value2 = this.value2 - 5;
  };

  get sum(): number {
    return this.value1 + this.value2;
  }
}

export const Context = createContext(new Store());
