import { questions } from '@/mocks/questions';

import { Title } from '../title';

import { Question } from './question';

export function Questions() {
  return (
    <section
      id="planos"
      className="py-10 flex flex-col gap-4 justify-center items-center md:items-stretch lg:items-center"
    >
      <div className="w-full max-w-[1080px]">
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <Title>Ficou com alguma dúvida?</Title>

          <div className="w-full flex flex-col gap-4 md:gap-8 p-4 md:p-0">
            {questions.map((question, index) => (
              <Question
                key={`question-${index}`}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
