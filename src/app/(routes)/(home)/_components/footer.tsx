import Image from 'next/image';
import Link from 'next/link';

import ibest from '@/app/assets/images/ibest_e97bd89878.webp';
import mobile from '@/app/assets/images/mobile_time_00fca44e3f.webp';
import ra from '@/app/assets/images/ra1000_96e67fe97d.webp';

interface FooterProps {
  logo: string;
}

export function Footer({ logo }: FooterProps) {
  const tel = 5511984407266;

  return (
    <footer className="dark:bg-person-tertiary flex p-10 text-ton-gray dark:text-white justify-center">
      <div className="flex flex-col w-full max-w-[1080px]">
        <div className="flex justify-between w-full">
          <div>
            <Image src={logo} alt="Logo Parceira Ton" width={54} height={54} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-10">
          <div>
            <h4 className="font-light text-gray-400 font-ton uppercase">
              Links úteis
            </h4>

            <ul>
              <li>
                <a
                  className="gray-300 text-sm"
                  href="https://rastreie.ton.com.br/orders"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  Rastreio do pedido
                </a>
              </li>

              <li>
                <a
                  className="gray-300 text-sm"
                  href="https://ajuda.ton.com.br"
                  target="_BLANK"
                  rel="noreferrer"
                >
                  Central de Ajuda
                </a>
              </li>

              <li>
                <a
                  className="gray-300 text-sm"
                  href={`https://api.whatsapp.com/send?phone=${tel}&text=Oi!%20Eu%20gostaria%20de%20pedir%20uma%20maquininha.%20Voc%C3%AA%20pode%20me%20auxiliar?`}
                  rel="no-referrer-when-downgrade"
                >
                  Atendimento por Whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-gray-400 font-ton uppercase">
              institucional
            </h4>

            <ul>
              <li>
                <Link
                  className="gray-300 text-sm"
                  href="/privacy"
                  rel="no-referrer-when-downgrade"
                >
                  Política de Privacidade
                </Link>
              </li>

              <li>
                <Link
                  className="gray-300 text-sm"
                  href="/cookies"
                  rel="no-referrer-when-downgrade"
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
                >
                  Política Institucional de PLD-CFT
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
            <h4 className="font-light text-gray-400 font-ton uppercase">
              Prêmios do Ton
            </h4>

            <Image src={ibest} alt="Prêmio iBest" />
            <Image src={mobile} alt="Prêmio Mobile" />
            <Image src={ra} alt="Prêmio Reclame Aqui" />
          </div>
        </div>
      </div>
    </footer>
  );
}
