import BannerComponent from "./bannerComponent";

export default function BannerAnimation() {
  const banners = Array(10).fill(null);
  return (
    <div className="overflow-hidden bg-gray-900 w-full">
      <div className="flex animate-slide-left w-[200%]">
        {
          banners.map((_, index) => (
            <BannerComponent key={index} />
          ))
        }
      </div>
    </div>
  )
}
