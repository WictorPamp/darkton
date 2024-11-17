import { ClockArrowDown, ClockArrowUp } from 'lucide-react';
import Image from 'next/image';

import travesso from '@/app/assets/images/travesso.png';

interface OptionReceivedProps {
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
}

export function OptionReceived({ setDay, day }: OptionReceivedProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-4 justify-center items-center w-full">
        <div className="flex">
          <p className="text-person-secondary font-medium ">
            Recebimento da venda
          </p>
        </div>

        <div className="flex gap-2 p-2 bg-ton-gray2 rounded-3xl">
          <button
            onClick={() => setDay('oneDay')}
            className={`flex gap-2 items-center p-2 cursor-pointer text-base rounded-3xl ${
              day === 'oneDay' && 'bg-ton-200 text-white font-bold'
            }`}
          >
            <ClockArrowDown />
            <span>1 dia útil</span>
          </button>

          <button
            onClick={() => setDay('sameDay')}
            className={`flex gap-2 items-center p-2 cursor-pointer text-base rounded-3xl ${
              day === 'sameDay' && 'bg-ton-200 text-white font-bold'
            }`}
          >
            <ClockArrowUp />
            <span>mesmo dia</span>
          </button>
        </div>
      </div>

      {day === 'sameDay' && (
        <div className="flex gap-2.5 justify-center items-center py-1 px-2 mx-auto max-w-[293px] md:max-w-full bg-ton-100 rounded-lg border border-ton-200">
          <Image src={travesso} alt="travesso ton" width={24} />

          <p className="font-bold text-center text-ton-200 text-base">
            Receba suas vendas no mesmo dia com a menor taxa do Brasil
          </p>
        </div>
      )}
    </div>
  );
}
