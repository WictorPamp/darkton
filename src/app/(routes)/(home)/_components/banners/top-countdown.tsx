'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface TopCountdownProps {
  logo: string;
}

export function TopCountdown({ logo }: TopCountdownProps) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function getNextTuesday() {
      const now = new Date();

      const dayOfWeek = now.getDay();

      const daysUntilTuesday = (3 - dayOfWeek + 7) % 7 || 7;

      const nextTuesday = new Date(now);
      nextTuesday.setDate(now.getDate() + daysUntilTuesday);
      nextTuesday.setHours(0, 0, 0, 0);

      return nextTuesday.getTime();
    }

    const targetDate = getNextTuesday();

    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    }

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 md:gap-16 justify-center items-center p-2 md:px-4 w-full bg-ton-200 text-white font-ton">
      <div>
        <Image src={logo} alt="Parceiro Ton" width={54} height={54} />
      </div>

      <div className="p-2 md:p-2 text-center bg-ton-300 rounded-[8px]">
        <span className="text-[12px] md:text-[14px] font-bold leading-[18px] md:leading-[20px]">
          70% de desconto durante:
        </span>
      </div>

      <div className="flex gap-2 md:gap-4 text-white">
        <div className="flex flex-col items-center">
          <span className="text-[28px] md:text-[40px] font-bold leading-[28px] md:leading-[48px]">
            {remainingTime.days}
          </span>
          <span className="font-normal text-[10px] md:text-[12px] leading-[18px]">
            dias
          </span>
        </div>

        <span className="my-auto text-[20px] font-bold leading-[28px]">:</span>

        <div className="flex flex-col items-center">
          <span className="text-[28px] md:text-[40px] font-bold leading-[28px] md:leading-[48px]">
            {remainingTime.hours}
          </span>
          <span className="text-[10px] md:text-[12px] font-normal leading-[18px]">
            horas
          </span>
        </div>

        <span className="my-auto text-[20px] font-bold leading-[28px]">:</span>

        <div className="flex flex-col items-center">
          <span className="text-[28px] md:text-[40px] font-bold leading-[28px] md:leading-[48px]">
            {remainingTime.minutes}
          </span>
          <span className="text-[10px] md:text-[12px] font-normal leading-[18px]">
            minutos
          </span>
        </div>

        <span className="my-auto text-[20px] font-bold leading-[28px]">:</span>

        <div className="flex flex-col items-center">
          <span className="text-[28px] md:text-[40px] font-bold leading-[28px] md:leading-[48px]">
            {remainingTime.seconds}
          </span>
          <span className="text-[10px] md:text-[12px] font-normal leading-[18px]">
            segundos
          </span>
        </div>
      </div>
    </div>
  );
}
