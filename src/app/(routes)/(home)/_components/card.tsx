import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <a className="flex justify-center items-center gap-4 lg:gap-6 md:!ml-0 w-[calc(50%-1rem)] md:w-auto lg:max-w-[290px]">
      <div className="bg-white flex justify-center p-2 items-center w-[40px] md:w-[48px] lg:w-[72px] min-w-[40px] md:min-w-[48px] lg:min-w-[72px] h-[40px] md:h-[48px] lg:h-[72px] min-h-[40px] md:min-h-[48px] lg:min-h-[72px] rounded-[8px] lg:rounded-[16px]">
        <Icon size={40} className="text-ton-200" />
      </div>

      <div className="flex flex-col lg:self-center md:min-w-[108px] justify-center items-left md:items-center lg:items-center">
        <p className="font-bold text-left md:text-center text-lg text-ton-200 font-ton lg:whitespace-nowrap">
          {title}
        </p>

        <p className="text-sm text-left md:text-center text-ton-gray dark:text-person-secondary paragraph-12 lg:paragraph-14">
          {description}
        </p>
      </div>
    </a>
  );
}
