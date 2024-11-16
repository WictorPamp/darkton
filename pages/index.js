import Head from 'next/head';
import Image from 'next/image'
import BannerAnimation from '../components/Banner/animaton';
import Superior from '../components/Banner/superior';
import Capa from '../components/Banner/capa';
import Benefits from '../components/Benefits';
import Plans from '../components/Plans';
import Machines from '../components/Machines';
import { useState } from 'react';
import plans from '../mocks/planos.json';
import machines from '../mocks/machines.json';
import prices from '../mocks/prices.json'
import Title from '../components/Generic/title';
import { americanExpress, applePay, aproximacao, elo, googlePay, hiper, link, master, pix, qrCode, samsungPay, visa } from '../assets/images/flags';
import Calculator from '../components/Calculator';
import taxCalculator from '../mocks/calculator.json';
import Different from '../components/Different';
import logoWhite from '../assets/images/logos/aton1.png'
import whats from '../assets/images/whatsapp.png'
import ibest from '../assets/images/ibest_e97bd89878.webp'
import ra from '../assets/images/ra1000_96e67fe97d.webp'
import mobile from '../assets/images/mobile_time_00fca44e3f.webp'
import Link from 'next/link';
import Questions from '../components/Questions';
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Tag } from 'lucide-react';
import Modal from '../components/Modal';
import { supabase } from '../utils/supabase/server';

export default function Home() {
  const [day, setDay] = useState('sameDay');
  const [selectedPlan, setSelectedPlan] = useState('tonMega');
  const [url, setUrl] = useState('https://ton.admanager.com.br');
  const referrer = false;
  const coupon = 'RAFAELALOPES10';
  const percentcoupon = 10;
  const tel = 5511984407266;

  const flags = {
    americanExpress,
    applePay,
    aproximacao,
    elo,
    googlePay,
    hiper,
    link,
    master,
    pix,
    qrCode,
    samsungPay,
    visa
  };

  const flagNames = Object.keys(flags);

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `https://ton.admanager.com.br${pathname}`;
    setUrl(url);
  }, [pathname, searchParams]);
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>Maquininha TON</title>
        <link type="image/png" rel="icon" href="/aton1.png" />

        <meta name="description" content="Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!" />
        <meta name="robots" content="index" />
        <meta name="author" content="AdManage" />
        <meta name="keywords" content="maquininha de carão; taxa zero; menor juros; maquininha stone; stone; ton." />

        <meta property="og:type" content="page" />
        <meta property="og:url" content="https://ton.admanage.com.br" />
        <meta property="og:title" content="Maquininha com taxas a partir de 0,74% - Parceira Ton" />
        <meta property="og:image" content="/bannerton.png" />
        <meta property="og:description" content="Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!" />

        <meta property="article:author" content="Pedro Soares" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AdManage" />
        <meta name="twitter:title" content="Maquininha com taxas a partir de 0,74% - Ton" />
        <meta name="twitter:creator" content="@AdManage" />
        <meta name="twitter:description" content="Ton tem as maquininhas com as menores taxas do Brasil, o TapTon para vender pelo celular e Super Conta digital pra fazer pagamentos, tudo em um único lugar!" />
      </Head>
      <main className="w-full h-full bg-person-primary">
        {coupon && (
          <div className="bg-yellow-400 flex items-center justify-center p-4 font-semibold">
            <Tag size={18} className="mr-2" /> 10% de desconto com o cupom <span className="ml-1 font-ton font-semibold bg-white px-2 py-1 rounded-lg">{coupon}</span>
          </div>
        )}
        <Superior />
        {site.link}
        <div>
          <Capa url={url} referrer={referrer} coupon={coupon} />
          <BannerAnimation />
        </div>
        <Benefits />
        <div className="w-100 bg-person-tertiary">
          <div className="py-10 flex flex-col max-w-[780px] mx-auto justify-center items-center gap-10">
            <Title title={(<span>Já viu que o Ton é o <span className="text-ton-200">Parceira ideal para quem tá no corre</span>, né? E aí, partiu vender mais?</span>)} />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 w-full px-10 md:px-0">
              <a className="w-full md:w-64 p-5 cursor-pointer hover:bg-ton-300 hover:text-white transition-colors w-full text-center font-ton text-ton-400 py-3 my-0 md:my-4 rounded-full bg-ton-200 font-bold" href='#planos'>Escolha seu plano</a>
              <Modal />
            </div>
          </div>
        </div>
        <Plans day={day} setDay={setDay} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} plans={plans} />
        <Machines percentcoupon={percentcoupon} url={url} referrer={referrer} coupon={coupon} day={day} setDay={setDay} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} plans={plans} machines={machines} prices={prices} />
        <Calculator plans={taxCalculator} />
        <div className="py-10 mt-8 flex flex-col justify-center items-center">
          <Title title="Aceite as principais formas de pagamento" />
          <div className="bg-person-secondary rounded-full z-0 p-4 mt-4 overflow-hidden w-full max-w-[500px]">
            <div className="z-0 flex animate-slide-left-5 w-[100%] gap-8">
              {flagNames.map((flag, index) => (
                <Image
                  width={50}
                  src={flags[flag]}
                  alt={flag}
                  key={`img-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
        <Different />
        <div className="py-10 flex flex-col max-w-[780px] mx-auto justify-center items-center gap-10">
          <Title title={(<span>Já viu que o Ton é o <span className="text-ton-200">Parceira ideal para quem tá no corre</span>, né? E aí, partiu vender mais?</span>)} />
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 w-full px-10 md:px-0">
            <a className="w-full md:w-64 p-5 cursor-pointer hover:bg-ton-300 hover:text-white transition-colors w-full text-center font-ton text-ton-400 py-3 my-0 md:my-4 rounded-full bg-ton-200 font-bold" href='#planos'>Escolha seu plano</a>
            <a target="_BLANK" rel="noreferrer" referrerpolicy="no-referrer-when-downgrade" className="w-full md:w-64 p-5 cursor-pointer hover:bg-ton-200 hover:text-black shadow border border-ton-200 transition-colors w-full text-center font-ton text-ton-400 py-3 my-0 md:my-4 rounded-full bg-white font-bold" href={`https://api.whatsapp.com/send?phone=${tel}&text=Oi!%20Eu%20gostaria%20de%20pedir%20uma%20maquininha.%20Voc%C3%AA%20pode%20me%20auxiliar?`}>Peça no Whatsapp</a>
          </div>
        </div>
        <Questions />
      </main>
      <footer className="bg-ton-gray flex p-10 text-white justify-center">
        <div className="flex flex-col w-full max-w-[1080px]">
          <div className="flex justify-between w-full">
            <div>
              <Image
                src={logoWhite}
                alt="Logo Parceira Ton"
                width={54}
              />
            </div>
            <div className="items-end">
              <Image
                src={whats}
                alt="Logo Parceira Ton"
                width={30}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-10">
            <div>
              <h4 className="font-light text-gray-400 font-ton uppercase">Links úteis</h4>
              <ul>
                <li><a className="gray-300 text-sm" href='https://rastreie.ton.com.br/orders' target="_BLANK" rel="noreferrer" referrerpolicy="no-referrer-when-downgrade">Rastreio do pedido</a></li>
                <li><a className="gray-300 text-sm" href='https://ajuda.ton.com.br' target="_BLANK" rel="noreferrer" referrerpolicy="no-referrer-when-downgrade">Central de Ajuda</a></li>
                <li><a className="gray-300 text-sm" href={`https://api.whatsapp.com/send?phone=${tel}&text=Oi!%20Eu%20gostaria%20de%20pedir%20uma%20maquininha.%20Voc%C3%AA%20pode%20me%20auxiliar?`} rel="no-referrer-when-downgrade" referrerpolicy="no-referrer-when-downgrade">Atendimento por Whatsapp</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-gray-400 font-ton uppercase">institucional</h4>
              <ul>
                <li>
                  <Link
                    className="gray-300 text-sm"
                    href="/politicadeprivacidade"
                    rel="no-referrer-when-downgrade"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    className="gray-300 text-sm"
                    href="/politicadecookies"
                    rel="no-referrer-when-downgrade"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    className="gray-300 text-sm"
                    href="https://documentos.ton.com.br/termos-e-condicoes.pdf?_gl=1*1wsqzp2*_ga*MTkyNDEyNDE1Ny4xNzI5NTI0ODMx*_ga_B0KF4NWL9Z*MTczMDU3MTkzMi4yMy4xLjE3MzA1NzI2MTkuNTUuMC4w"
                    target="_BLANK"
                    rel="noreferrer"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                    Termos e Condições de uso do Ton
                  </Link>
                </li>
                <li>
                  <Link
                    className="gray-300 text-sm"
                    href="https://assets.lojastonemais.com.br/pages/politica-institucional-pld-cft.pdf"
                    target="_BLANK"
                    rel="noreferrer"
                    referrerpolicy="no-referrer-when-downgrade"
                  >
                    Política Institucional de PLD-CFT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <h4 className="font-light text-gray-400 font-ton uppercase">Prêmios do Ton</h4>
              <Image
                src={ibest}
                alt="Prêmio iBest"
              />
              <Image
                src={mobile}
                alt="Prêmio Mobile"
              />
              <Image
                src={ra}
                alt="Prêmio Reclame Aqui"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-ton-gray w-full text-gray-400 text-sm text-center p-10 md:py-4">
        Declaramos, para todos os fins, que este site é de propriedade exclusiva do AdManager, Parceira oficial da Renda Ton. Ressaltamos que este não é um canal oficial da Ton, cuja página oficial pode ser acessada pelo link: <a className="text-ton-200" href={`https://www.ton.com.br/index.html?${referrer ? `referrer=${referrer}` : ''}${coupon ? `coupon=${coupon}` : ''}&utm_medium=invite_share&utm_source=revendedor`}>www.ton.com.br</a>
      </div>
      <div className="bg-ton-200 p-3 cursor-pointer rounded-full fixed z-10 right-8 bottom-8">
        <a href={`https://api.whatsapp.com/send?phone=${tel}&text=Oi!%20Eu%20gostaria%20de%20pedir%20uma%20maquininha.%20Voc%C3%AA%20pode%20me%20auxiliar?`} target="_BLANK" rel="noreferrer" referrerpolicy="no-referrer-when-downgrade">
          <Image
            src={whats}
            alt="Chamar no whatsapp"
            width={38}
          />
        </a>
      </div>
    </div>
  )
}
