import { Tag } from 'lucide-react';

interface CouponBannerProps {
  coupon: string | null;
  percent: number | 0;
}

export function CouponBanner({ coupon, percent }: CouponBannerProps) {
  return (
    <>
      {coupon && (
        <div className="bg-yellow-400 flex items-center justify-center p-4 font-semibold">
          <Tag className="w-5 h-5 mr-2" />

          <p>
            {percent}% de desconto com o cupom
            <span className="font-ton font-semibold ml-1 bg-white px-2 py-1 rounded-lg">
              {coupon}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
