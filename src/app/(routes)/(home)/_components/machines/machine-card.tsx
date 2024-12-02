import {
  BatteryCharging,
  LayoutPanelLeft,
  MessageSquare,
  Nfc,
  Pointer,
  QrCode,
  ReceiptText,
  Smartphone,
  Truck,
  Wifi,
} from 'lucide-react';
import Image from 'next/image';

import { Machine } from '@/types/machines';
import { PricingMachine } from '@/types/pricing';
import { Modal } from '../modal';

interface MachineCardProps {
  site: string;
  machine: Machine;
  selectedPlan: string;
  pricing: PricingMachine | undefined;
  day: string;
  coupon: string | null;
  percentCoupon: number;
  referrer: string | null;
  type: string;
  userTag: string;
  planTitle: string;
}

export function MachineCard({
  site,
  machine,
  pricing,
  percentCoupon,
  planTitle,
}: MachineCardProps) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  function customPrice(value: number | string) {
    const formattedValue = parseFloat(value.toString()).toFixed(2);
    const [integerPart, decimalPart] = formattedValue.split('.');

    return {
      integer: integerPart,
      decimal: decimalPart,
    };
  }

  const parcel = customPrice(
    pricing ? pricing.parcel - pricing.parcel * (percentCoupon / 100) : 0,
  );
  return (
    <div className="text-ton-gray dark:text-person-secondary bg-white dark:bg-person-primary border border-gray-200 dark:border-person-quaternary p-4 rounded-lg shadow-lg my-4 lg:my-0 max-w-[308px]">
      <div className="flex items-end mr-4 ml-4 rounded rounded-b-none">
        <div className="mb-4">
          <Image
            src={machine.image}
            width={130}
            height={195}
            alt={`Maquininha ${machine.title}`}
          />
        </div>

        <div className="relative w-full h-[70px]">
          {machine.assets.map((asset, index) => (
            <Image
              key={index}
              src={asset}
              width={70}
              height={70}
              className="absolute right-0 last:right-[55px] w-[70px] h-[70px]"
              alt="Detalhes da maquininha"
            />
          ))}
        </div>
      </div>

      <div className="px-4">
        <div className="flex justify-between items-center min-w max-w">
          <h3 className="text-2xl font-ton font-bold leading-[36px]">
            {machine.title} <span className="font-light"></span>
          </h3>
        </div>

        <div className="flex flex-col justify-between mt-4">
          <div className="flex gap-7">
            <div>
              <p className="text-sm">
                <s>{formatCurrency(pricing ? pricing.current : 0)}</s>
              </p>

              <p className="font-bold text-ton-200 font-ton text-xl">
                {formatCurrency(
                  pricing
                    ? Number(pricing.promotion) -
                        Number(pricing.promotion) * (percentCoupon / 100)
                    : 0,
                )}
              </p>
              <p className="text-sm">à vista ou</p>
            </div>

            <div className="flex gap-0 justify-end my-auto ml-auto font-ton font-bold text-ton-200">
              <div className="self-end text-right">
                <p className="leading-none text-ton-gray dark:text-person-secondary">
                  12x
                </p>
                <p className="mt-2 leading-none">R$</p>
              </div>
              <p className="self-end text-7xl">{parcel.integer}</p>
              <p className="leading-[20px]">, {parcel.decimal}</p>
            </div>
          </div>
          <Modal site={site} plan={planTitle} machine={machine.title}>
            <div className="cursor-pointer hover:bg-ton-300 transition-colors w-full text-center font-ton text-person-secondary py-3 my-4 rounded-full bg-ton-200 font-bold">
              Pedir {machine.title}{' '}
              <span className="font-normal">{planTitle}</span>
            </div>
          </Modal>
        </div>
      </div>

      <div className="flex flex-col md:flex-1">
        <div className="flex-1 p-5 mt-auto">
          <ul className="flex flex-col">
            {machine.frete && (
              <li className="flex items-center mt-4 first:mt-0 list-none text-ton-300 dark:text-ton-100">
                <Truck className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Frete e troca grátis pra todo o Brasil
                </p>
              </li>
            )}

            {(machine['3g'] || machine['4g']) && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Wifi className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Com Chip {machine['3g'] ? '3G' : '4G'} e Wi-Fi
                </p>
              </li>
            )}

            {machine.celNet && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Smartphone className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Precisa de celular com internet
                </p>
              </li>
            )}

            {machine.nfc && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Nfc className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Receba por aproximação (NFC)
                </p>
              </li>
            )}

            {machine.impresso && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <ReceiptText className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Comprovante impresso ou SMS
                </p>
              </li>
            )}

            {machine.sms && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <MessageSquare className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">Comprovante por SMS</p>
              </li>
            )}

            {machine.tapton && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <LayoutPanelLeft className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Venda pelo App com TapTon, Link, Pix e Boleto
                </p>
              </li>
            )}

            {machine.pix && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <QrCode className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Aceite Pix QR Code na Maquininha
                </p>
              </li>
            )}

            {machine.batery && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <BatteryCharging className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Bateria de longa duração
                </p>
              </li>
            )}

            {machine.touch && (
              <li className="flex items-center mt-4 first:mt-0 list-none">
                <Pointer className="flex-shrink-0 w-6 h-6" />
                <p className="ml-4 font-medium text-sm">
                  Sistema Android com Visor Touchscreen
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
