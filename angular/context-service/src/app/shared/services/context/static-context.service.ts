import { Injectable } from '@angular/core';

import { StaticContextData, StaticContextReducer, StaticContextReducers, StaticContextSelector, StaticContextSelectors } from './types';
import { StaticContextReducerNotFound, StaticContextSelectorNotFound } from './errors';

@Injectable()
export class StaticContextService {

  data: StaticContextData = {};
  reducers: StaticContextReducers = {};
  selectors: StaticContextSelectors = {};

  initData(data: StaticContextData): this {
    this.data = data;
    return this;
  }

  setData(key: string, value: any): this {
    this.data[key] = value;
    return this;
  }

  hasData(key: string): boolean {
    return !!this.data[key];
  }

  getData(key: string): any | null {
    return this.data[key] ?? null;
  }

  setReducer(key: string, reducer: StaticContextReducer): this {
    this.reducers[key] = reducer;
    return this;
  }

  hasReducer(key: string): boolean {
    return !!this.reducers[key];
  }

  removeReducer(key: string): this {
    this.reducers[key] = null;
    return this;
  }

  runReducer(key: string, ...args: any[]): this {
    const reducer = this.reducers[key] ?? null;

    if (!reducer) {
      const message = `Static context reducer "${key}" was not found`;
      throw new StaticContextReducerNotFound(message);
    }

    this.data = reducer(this.data, ...args);

    return this;
  }

  setSelector(key: string, selector: StaticContextSelector): this {
    this.selectors[key] = selector;
    return this;
  }

  hasSelector(key: string): boolean {
    return !!this.selectors[key];
  }

  runSelector(key: string, ...args: any[]): ReturnType<StaticContextSelector> {
    const selector = this.selectors[key] ?? null;

    if (!selector) {
      const message = `Static context selector "${key}" was not found`;
      throw new StaticContextSelectorNotFound(message);
    }

    return selector(this.data, ...args);
  }
}
