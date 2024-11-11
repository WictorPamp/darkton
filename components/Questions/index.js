import Title from "../Generic/title";
import questions from "../../mocks/questions.json";
import Question from "./questions";

export default function Questions() {
  return (
    <section id="planos" className="py-10 flex flex-col gap-4 justify-center items-center md:items-stretch lg:items-center bg-person-tertiary">
      <div className="w-full max-w-[1080px]">
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <Title
            title="Ficou alguma dúvida?"
          />
          <div className="w-full flex flex-col gap-4 md:gap-8 p-4 md:p-0">
            {
              questions.map((question, index) => <Question key={`question-${index}`} asked={question.asked} reply={question.reply} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}
