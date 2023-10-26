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
  January: number;
  February: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  August: number;
  September: number;
  October: number;
  November: number;
  December: number;
}

export interface HalfYear {
  January: number;
  February: number;
  March: number;
  April: number;
  May: number;
  June: number;
}

export interface Month {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
  "11": number;
  "12": number;
  "13": number;
  "14": number;
  "15": number;
  "16": number;
  "17": number;
  "18": number;
  "19": number;
  "20": number;
  "21": number;
  "22": number;
  "23": number;
  "24": number;
  "25": number;
  "26": number;
  "27": number;
  "28": number;
  "29": number;
  "30": number;
  "31": number;
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
