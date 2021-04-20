import { Dictionary } from './dictionary';

export type StaticContextData = Dictionary<any>;

export type StaticContextReducer = (
  data: StaticContextData,
  ...args: any[]
) => StaticContextData;

export type StaticContextReducers = Dictionary<StaticContextReducer | null>;

export type StaticContextSelector = (
  data: StaticContextData,
  ...args: any[]
) => any;

export type StaticContextSelectors = Dictionary<StaticContextSelector | null>;
