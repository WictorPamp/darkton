import { Pricing } from '@/types/pricing';

export const pricing: Pricing = [
  {
    key: 'tonPro',
    machines: [
      { key: 't1', current: 56.57, promotion: 39.6, parcel: 3.3 },
      { key: 't3', current: 474.0, promotion: 189.6, parcel: 15.8 },
      { key: 't3Smart', current: 756.0, promotion: 226.8, parcel: 18.9 },
      { key: 't2', current: 106.29, promotion: 74.4, parcel: 6.2 },
    ],
  },
  {
    key: 'tonUltra',
    machines: [
      { key: 't1', current: 109.71, promotion: 76.8, parcel: 6.4 },
      { key: 't3', current: 558, promotion: 334.8, parcel: 27.9 },
      { key: 't3Smart', current: 717.6, promotion: 358.8, parcel: 29.9 },
      { key: 't2', current: 192, promotion: 134.4, parcel: 11.2 },
    ],
  },
  {
    key: 'tonMega',
    machines: [
      { key: 't1', current: 32.57, promotion: 22.8, parcel: 1.9 },
      { key: 't3', current: 258, promotion: 154.8, parcel: 12.9 },
      { key: 't3Smart', current: 357.6, promotion: 178.8, parcel: 14.9 },
      { key: 't2', current: 99.43, promotion: 69.6, parcel: 5.8 },
    ],
  },
  {
    key: 'tonSuper',
    machines: [
      { key: 't1', current: 24, promotion: 16.8, parcel: 1.4 },
      { key: 't3', current: 198, promotion: 118.8, parcel: 9.9 },
      { key: 't3Smart', current: 278.4, promotion: 139.2, parcel: 11.6 },
      { key: 't2', current: 94.29, promotion: 66, parcel: 5.5 },
    ],
  },
  {
    key: 'tonTap',
    machines: [
      {
        key: 'TapTon',
        promotion: 'free',
        current: 0,
        parcel: 0,
      },
    ],
  },
];
