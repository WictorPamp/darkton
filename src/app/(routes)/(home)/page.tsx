import { calculator } from '@/mocks/calculator';
import { machines } from '@/mocks/machines';
import { plans } from '@/mocks/plans';
import { pricing } from '@/mocks/pricing';

import { Benefits } from './_components/benefits';
import { Calculator } from './_components/calculator';
import { CallToAction } from './_components/call-to-action';
import { ConsultantModal } from './_components/consultant-modal';
import { Cover } from './_components/cover';
import { Different } from './_components/different';
import { Flags } from './_components/flags';
import { Machines } from './_components/machines';
import { Plans } from './_components/plans';
import { Questions } from './_components/questions';

import { BannerAnimation } from './_components/banners/banners-animation';
import { CouponBanner } from './_components/banners/coupon-banner';
import { TopCountdown } from './_components/banners/top-countdown';
import { Footer } from './_components/footer';

export default function HomePage() {
  const coupon = 'RAFAELALOPES10';
  const percentCoupon = 10;
  const referrer = false;
  const tel = 5511984407266;

  return (
    <>
      <header>
        <CouponBanner coupon={coupon} />
        <TopCountdown />
      </header>

      <main className="bg-person-primary">
        <div>
          <Cover referrer={referrer} coupon={coupon} />

          <BannerAnimation />

          <Benefits />
        </div>

        <CallToAction>
          <ConsultantModal />
        </CallToAction>

        <Plans plans={plans} />

        <Machines
          plans={plans}
          machines={machines}
          pricing={pricing}
          coupon={coupon}
          percentCoupon={percentCoupon}
          referrer={referrer}
        />

        <Calculator plans={calculator} />

        <Flags />

        <Different />

        <CallToAction>
          <a
            target="_BLANK"
            rel="noreferrer"
            className="w-full md:w-64 p-5 cursor-pointer hover:bg-ton-200 hover:text-black shadow border border-ton-200 transition-colors text-center font-ton text-ton-400 py-3 my-0 md:my-4 rounded-full bg-white font-bold"
            href={`https://api.whatsapp.com/send?phone=${tel}&text=Oi!%20Eu%20gostaria%20de%20pedir%20uma%20maquininha.%20Voc%C3%AA%20pode%20me%20auxiliar?`}
          >
            Peça no Whatsapp
          </a>
        </CallToAction>

        <Questions />
      </main>

      <Footer />
    </>
  );
}
