import Title from "../Generic/title";
import Cards from "./cards";
import OptionReceived from "./option";

export default function Plans({ day, setDay, selectedPlan, setSelectedPlan, plans }) {
  return (
    <section id="planos" className="flex flex-col gap-4 justify-center items-center md:items-stretch lg:items-center bg">
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title
          title="Conheça os planos TON"
        />
        <OptionReceived day={day} setDay={setDay} />
        <div className="grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px] gap-2 p-3">
          {Object.entries(plans).map(([plan, values]) => (
            <Cards day={day} key={plan} plan={values} planIndex={plan} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
          ))}
        </div>
      </div>
      <div className="text-person-secondary flex flex-col gap-0 px-5">
        <p className="text-center">Confira as <a className="underline text-ton-100" href="https://www.ton.com.br/planos-e-taxas/?referrer=1E2EC3CE-6F5F-485F-A96B-1C5918F667A7&utm_medium=invite_share&utm_source=revendedor">taxas de todos os planos</a>.</p>
        <p className="text-center">Taxa 0% no Pix nos primeiros 30 dias após a primeira venda com Pix na maquininha.</p>
      </div>
    </section>
  )
}
