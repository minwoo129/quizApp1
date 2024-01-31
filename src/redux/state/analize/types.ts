export type initialStateType = {
  /** 카테고리 별 문제 풀이 데이터 */
  analizeCategorys: AnalizeCategory[];
  /** 전체 정,오답 데이터 */
  analizeCorrects: AnalizeCorrect[];
};

export type AnalizeCategory = {
  value: number;
  label: string;
  color: string;
};

export type AnalizeCorrect = {
  value: number;
  label: string;
  color: string;
};
