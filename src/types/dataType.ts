// seperate file for the types

export interface Data {
  averageSpend: number;
  yearMonth: number;
  year: number;
  month: number;
  monthName: string;
  quantity: number;
}
export interface Props {
  data: Data[];
}
export interface Accumulator {
  [key: string]: { x: string; y: number }[];
}
