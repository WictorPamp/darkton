'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface QuestionProps {
  question: string;
  answer: string;
}

export function Question({ question, answer }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-person-tertiary text-person-secondary justify-center flex flex-col rounded-lg shadow gap-4 w-full">
      <div
        className={`flex justify-between cursor-pointer py-5 px-10 ${
          isOpen && 'pb-0'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-ton uppercase text-lg font-bold">{question}</p>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      {isOpen && <hr className="border-person-primary" />}

      <div
        className={`whitespace-pre-line transition-all px-10 py-2 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
