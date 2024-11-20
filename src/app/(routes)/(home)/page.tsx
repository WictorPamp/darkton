import Head from 'next/head';

import { getMachines } from '@/actions/fetch-machines';
import { getPlans } from '@/actions/fetch-plans';
import { getPrices } from '@/actions/fetch-prices';
import { getQuestions } from '@/actions/fetch-questions';
import { getSiteInfo } from '@/actions/fetch-site';

import { calculator } from '@/mocks/calculator';

import { Machine } from '@/types/machines';
import { Plan } from '@/types/plans';
import { PricingLevel } from '@/types/pricing';
import { QuestionType } from '@/types/questions';

import { BannerAnimation } from './_components/banners/banners-animation';
import { CouponBanner } from './_components/banners/coupon-banner';
import { TopCountdown } from './_components/banners/top-countdown';
import { Benefits } from './_components/benefits';
import { Calculator } from './_components/calculator';
import { CallToAction } from './_components/call-to-action';
import { ClientComponent } from './_components/client-component';
import { ConsultantModal } from './_components/consultant-modal';
import { Cover } from './_components/cover';
import { Different } from './_components/different';
import { Flags } from './_components/flags';
import { Footer } from './_components/footer';
import { Questions } from './_components/questions';
import { ThemeToggle } from './_components/theme-toggle';

interface Infos {
  id: string;
  link: string;
  cupon: string;
  referrer: string;
  type: string;
  tap_ton: boolean;
  active: boolean;
  percent_coupon: number;
  telephone: string;
  logo: string;
}

export default async function HomePage() {
  const infos: Infos | any = await getSiteInfo();

  const coupon = infos.type === 'link' ? infos.cupon : null;
  const percentCoupon = infos.type === 'link' ? infos.percent_coupon : 0;
  const referrer = infos.type === 'referrer' ? infos.referrer : null;
  const tel = infos.telephone;

  const plans: Plan[] = await getPlans();

  const machines: Machine[] = await getMachines();

  const pricing: PricingLevel[] = await getPrices();

  const questions: QuestionType[] = await getQuestions(infos.id);

  if (infos.active !== true) return 'Site inactive.';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Maquininha TON</title>
        <link type="image/png" rel="icon" href="/oton1.png" />
        <meta
          name="description"
          content="Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!"
        />
        <meta name="robots" content="index" />
        <meta name="author" content="AdManage" />
        <meta
          name="keywords"
          content="maquininha de carão; taxa zero; menor juros; maquininha stone; stone; ton."
        />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="https://ton.admanage.com.br" />
        <meta
          property="og:title"
          content="Maquininha com taxas a partir de 0,74% - Parceiro Ton"
        />
        <meta property="og:image" content="/bannerton.png" />
        <meta
          property="og:description"
          content="Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!"
        />

        <meta property="article:author" content="Pedro Soares" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AdManage" />
        <meta
          name="twitter:title"
          content="Maquininha com taxas a partir de 0,74% - Ton"
        />
        <meta name="twitter:creator" content="@AdManage" />
        <meta
          name="twitter:description"
          content="Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!"
        />
      </Head>

      <ThemeToggle />

      <header>
        <CouponBanner coupon={coupon} percent={percentCoupon} />
        <TopCountdown logo={`/assets/logos/white/${infos.logo}`} />
      </header>

      <main className="dark:bg-person-primary">
        <div>
          <Cover referrer={referrer} coupon={coupon} />

          <BannerAnimation />

          <Benefits />
        </div>

        <CallToAction>
          <ConsultantModal />
        </CallToAction>

        <ClientComponent
          initialDay="oneDay"
          initialSelectedPlan="tonMega"
          plans={plans}
          machines={machines}
          coupon={coupon}
          percentCoupon={percentCoupon}
          pricing={pricing}
          referrer={referrer}
          type={infos.type}
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

        <Questions questions={questions} />
      </main>

      <Footer logo={`/assets/logos/green/${infos.logo}`} />
    </>
  );
}
