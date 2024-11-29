import Image from 'next/image';

import feliz from '@/app/assets/images/feliz.png';

export function Banner() {
  return (
    <div className="text-lg h-[44px] flex gap-0 justify-center items-center font-ton font-bold">
      <div className="mx-[-11px] banner-item w-[210px] bg-ton-gray text-ton-200 h-full flex items-center justify-between px-10">
        BLACK FRIDAY
        <Image
          src={feliz}
          width={36}
          className="bg-white rounded-full p-1"
          alt="Ton Feliz"
        />
      </div>

      <div className="mx-[-11px] banner-item w-[210px] bg-ton-200 h-full flex items-center justify-center">
        ATÉ 70% DE DESCONTO
      </div>
    </div>
  );
}
