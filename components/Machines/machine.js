import { Truck, Smartphone, Nfc, MessageSquare, LayoutPanelLeft, Wifi, ReceiptText, QrCode, BatteryCharging, Pointer } from 'lucide-react';
import Image from 'next/image'

export default function Machine({ url, machine, values, prices, plan, referrer, coupon, day, percentcoupon }) {
  const currency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const customPrice = (value) => {
    const formattedValue = parseFloat(value).toFixed(2);

    const [integerPart, decimalPart] = formattedValue.split('.');

    return {
      integer: integerPart,
      decimal: decimalPart,
    };
  };

  const parcel = customPrice(prices.parcel - (prices.parcel * (percentcoupon / 100)));
  const link = `https://www.ton.com.br/checkout/cart/?${referrer ? `referrer=${referrer}` : ''}${coupon ? `coupon=${coupon}` : ''}&utm_medium=invite_share&utm_source=revendedor&userTag=${plan.userTag}&productId=${plan.product + values.id}&userAnticipation=${day === 'sameDay' ? 0 : 1}`;
  return (
    <div className="text-person-secondary bg-person-primary p-4 rounded-lg shadow shadow-lg my-4 lg:my-0 max-w-[308px]">
      <div className="flex items-end mr-4 ml-4 rounded rounded-b-none">
        <div className="mb-4">
          <Image
            src={values.image}
            width={130}
            height={195}
            alt={`Maquininha ${values.title} ${plan.title}`}
          />
        </div>
        <div className="relative w-full h-[70px]">
          {
            values.assets.map((asset, index) => (
              <Image
                key={index}
                src={asset}
                width={70}
                height={70}
                className="absolute right-0 last:right-[55px] w-[70px] h-[70px]"
                alt="Detalhes da maquininha"
              />
            ))
          }
        </div>
      </div>
      <div className="px-4">
        <div className="flex justify-between items-center min-w max-w">
          <h3 className="text-2xl font-ton font-bold leading-[36px]">
            {values.title} <span className="font-light">{plan.title}</span>
          </h3>

        </div>
        <div className="flex flex-col justify-between mt-4">
          <div className="flex gap-7">
            <div className="">
              <p className="text-sm"><s>{currency(prices.current)}</s></p>
              <p className="font-bold text-ton-200 font-ton text-xl">{currency(prices.promotion - (prices.promotion * (percentcoupon / 100)))}</p>
              <p className="text-sm">à vista ou</p>
            </div>
            <div className="flex gap-0 justify-end my-auto ml-auto font-ton font-bold text-ton-200">
              <div className="self-end text-right">
                <p className="leading-none text-person-secondary">12x</p>
                <p className="mt-2 leading-none">R$</p>
              </div>
              <p className="self-end text-7xl">{parcel.integer}</p>
              <p className="leading-[20px]">, {parcel.decimal}</p>
            </div>
          </div>
          <a referrer={url} rel="no-referrer-when-downgrade" referrerpolicy="no-referrer-when-downgrade" href={link} className="cursor-pointer hover:bg-ton-300 transition-colors w-full text-center font-ton text-person-secondary py-3 my-4 rounded-full bg-ton-200 font-bold">Pedir {values.title} <span className="font-normal">{plan.title}</span></a>
        </div>
      </div>
      <div className="flex flex-col md:flex-1">
        <div className="flex-1 p-5 mt-auto">
          <ul className="flex flex-col">
            {/* frete */}
            {values.frete === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none text-ton-100">
                <Truck size={24} className="flex-shrink-0" />
                <p className="ml-4 font-medium text-sm">Frete e troca grátis pra todo o Brasil</p>
              </li>
            )}

            {/* 3g / 4g */}
            {(values['3g'] === true || values['4g'] === true) && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Wifi className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Com Chip {values['3g'] === true ? '3G' : '4G'} e Wi-Fi</p>
              </li>
            )}

            {/* internet no celular */}
            {values.celNet === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Smartphone size={24} className="flex-shrink-0" />
                <p className="ml-4 font-medium text-sm">Precisa de celular com internet</p>
              </li>
            )}

            {/* NFC */}
            {values.nfc === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Nfc size={24} className="flex-shrink-0" />
                <p className="ml-4 font-medium text-sm">Receba por aproximação (NFC)</p>
              </li>
            )}

            {/* Comprovante impresso */}
            {values.impresso === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <ReceiptText className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Comprovante impresso ou SMS</p>
              </li>
            )}

            {/* Comprovante por SMS */}
            {values.sms === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <MessageSquare className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Comprovante por SMS</p>
              </li>
            )}

            {/* Venda no App */}
            {values.tapton === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <LayoutPanelLeft className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Venda pelo App com TapTon, Link, Pix e Boleto</p>
              </li>
            )}

            {/* pix na maquininha */}
            {values.pix === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <QrCode className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Aceite Pix QR Code na Maquininha</p>
              </li>
            )}

            {/* bateria  */}
            {values.batery === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <BatteryCharging className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Bateria de longa duração</p>
              </li>
            )}

            {/* touch */}
            {values.batery === true && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Pointer className="flex-shrink-0" size={24} />
                <p className="ml-4 font-medium text-sm">Sistema Android com Visor Touchscreen</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
