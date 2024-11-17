import { Tag } from 'lucide-react';

interface CouponBannerProps {
  coupon: string;
}

export function CouponBanner({ coupon }: CouponBannerProps) {
  return (
    <>
      {coupon && (
        <div className="bg-yellow-400 flex items-center justify-center p-4 font-semibold">
          <Tag className="w-5 h-5 mr-2" />

          <p>
            10% de desconto com o cupom
            <span className="font-ton font-semibold ml-1 bg-white px-2 py-1 rounded-lg">
              {coupon}
            </span>
          </p>
        </div>
      )}
    </>
  );
}
