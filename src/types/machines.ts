export interface Machine {
  key: string;
  id: string;
  title: string;
  image: string;
  assets: string[];
  frete: boolean;
  celNet: boolean;
  nfc: boolean;
  sms: boolean;
  tapton: boolean;
  '3g': boolean;
  '4g': boolean;
  impresso: boolean;
  pix: boolean;
  batery: boolean;
  touch: boolean;
}
