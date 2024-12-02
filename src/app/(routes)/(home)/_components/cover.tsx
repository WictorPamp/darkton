import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

import banner from '@/app/assets/images/banner.webp';

interface CoverProps {
  referrer: string | null;
  coupon: string | null;
}

export function Cover({ referrer, coupon }: CoverProps) {
  return (
    <section className="p-5 md:px-5 md:py-2 rounded-b-16 lg:rounded-b-24 bg-ton-gray text-white">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-2 lg:gap-4 md:items-center">
        <div className="flex flex-col gap-0 md:gap-0 justify-center items-center md:items-start mx-auto w-full md:max-w-[370px] lg:max-w-[370px] xl:max-w-full">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-center md:order-2 md:mt-2 md:text-left font-ton">
            <span>
              Black Friday
              <br />
              <span className="text-ton-200">de verdade?</span> é no ton
            </span>
          </h1>

          <div className="flex md:hidden max-h-full">
            <div className="content-center w-full max-w-[464px] md:max-w-[336px] lg:max-w-[533px]">
              <Image src={banner} alt="70% de desconto" />
            </div>
          </div>

          <p className="text-center hidden md:block md:order-3 md:mt-8 md:text-left">
            Transforme seu negócio, venda mais e melhor com o Ton: Garanta até
            70% de desconto nas melhores máquinas de cartão.
          </p>

          <div className="flex flex-row flex-wrap lg:flex-nowrap md:order-4 gap-4 justify-center lg:justify-start mt-4 md:mt-8 lg:mt-12">
            <a
              href={`https://www.ton.com.br/index.html?${
                referrer ? `referrer=${referrer}` : ''
              }${
                coupon ? `&coupon=${coupon}` : ''
              }&utm_medium=invite_share&utm_source=revendedor`}
              className="btn w-full md:w-auto font-semibold bg-ton-200 py-3 px-5 rounded-full"
            >
              <span className="flex gap-2 justify-center items-center text-center w-full">
                <ShoppingCart />
                Peça maquininha com desconto
              </span>
            </a>
          </div>
        </div>

        <div className="hidden md:block w-full max-w-max">
          <div className="content-center w-full max-w-[336px] md:max-w-[436px] lg:max-w-[533px]">
            <Image src={banner} alt="70% de desconto" />
          </div>
        </div>
      </div>
    </section>
  );
}
