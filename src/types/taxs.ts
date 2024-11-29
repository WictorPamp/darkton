export interface Plans {
  bandeira1: {
    oneDay: {
      tonPro: Record<string, number[]>;
      tonUltra: number[];
      tonMega: number[];
      tonSuper: number[];
    };
    sameDay: {
      tonPro: Record<string, number[]>;
      tonUltra: number[];
      tonMega: number[];
      tonSuper: number[];
    };
  };
  bandeira2: {
    oneDay: {
      tonPro: Record<string, number[]>;
      tonUltra: number[];
      tonMega: number[];
      tonSuper: number[];
    };
    sameDay: {
      tonPro: Record<string, number[]>;
      tonUltra: number[];
      tonMega: number[];
      tonSuper: number[];
    };
  };
  flagsOptions: { text: string; value: 'bandeira1' | 'bandeira2' }[];
  receiptsOptions: { text: string; value: 'oneDay' | 'sameDay' }[];
  salesOptions: { text: string; value: number }[];
  promotionsOptions: { text: string; value: '2' | '20' | 'more' }[];
  plansOptions: {
    text: string;
    value: 'tonPro' | 'tonUltra' | 'tonMega' | 'tonSuper';
  }[];
}
