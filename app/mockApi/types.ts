export interface Root {
  nickname: string;
  finance: Finance;
  gift_settings: GiftSettings;
  gift_stats: GiftStats;
}

export interface Finance {
  total: Total;
  periods: Period[];
}

export interface Total {
  sum: number;
  donators_count: number;
  regular_donators_count: number;
}

export interface Period {
  earnings: Earnings;
  graph: Graph;
}

export interface Earnings {
  year_sum: number;
  six_month_sum: number;
  last_month_sum: number;
}

export interface Graph {
  year: Year;
  half_year: HalfYear;
  month: Month;
}

export interface Year {
  [key: string]: number;
}

export interface HalfYear {
  [key: string]: number;
}

export interface Month {
  [key: string]: number;
}

export interface GiftSettings {
  small_gift: any;
  medium_gift: any;
  big_gift: any;
}

export interface GiftStats {
  small_gift_count: number;
  small_gift_sum: number;
  small_medium_count: number;
  small_medium_sum: number;
  small_big_count: number;
  small_big_sum: number;
}
