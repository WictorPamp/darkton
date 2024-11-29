import Image from 'next/image';

import {
  americanExpress,
  applePay,
  aproximacao,
  elo,
  googlePay,
  hiper,
  link,
  master,
  pix,
  qrCode,
  samsungPay,
  visa,
} from '@/app/assets/images/flags';

import { Title } from './title';

export function Flags() {
  const flags = {
    americanExpress,
    applePay,
    aproximacao,
    elo,
    googlePay,
    hiper,
    link,
    master,
    pix,
    qrCode,
    samsungPay,
    visa,
  } as const;

  const flagNames = Object.keys(flags) as (keyof typeof flags)[];

  return (
    <div className="py-10 mt-8 flex flex-col justify-center items-center">
      <Title>Aceite as principais formas de pagamento</Title>

      <div className="dark:bg-person-secondary rounded-full z-0 p-4 mt-4 overflow-hidden w-full max-w-[500px]">
        <div className="z-0 flex animate-slide-left-5 w-[100%] gap-8">
          {flagNames.map((flag, index) => (
            <Image
              width={50}
              src={flags[flag]}
              alt={flag}
              key={`img-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
