import { Title } from './title';

export function CallToAction({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-100 bg-white dark:bg-person-tertiary">
      <div className="py-10 flex flex-col max-w-[780px] mx-auto justify-center items-center gap-10">
        <Title>
          <p className="text-center">
            Já viu que o Ton é o{' '}
            <span className="text-ton-200">
              Parceiro ideal para quem tá no corre,
            </span>{' '}
            né? E aí, partiu vender mais?
          </p>
        </Title>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 w-full px-10 md:px-0">
          <a
            className="w-full md:w-64 p-5 cursor-pointer hover:bg-ton-300 hover:text-white transition-colors text-center font-ton text-ton-400 py-3 my-0 md:my-4 rounded-full bg-ton-200 font-bold"
            href="#planos"
          >
            Escolha seu plano
          </a>

          {children}
        </div>
      </div>
    </div>
  );
}
