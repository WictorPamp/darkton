import { QuestionType, RawQuestionData } from '@/types/questions';
import { fetchSupabase } from './fetch-supabase';

function convertToQuestion(data: RawQuestionData): QuestionType {
  return {
    id: data.id,
    id_site: data.id_site,
    question: data.question,
    answer: data.answer,
  };
}

export async function getQuestions(site: string): Promise<QuestionType[]> {
  try {
    const result = await fetchSupabase({
      tableName: 'questions',
      where: { id_site: site },
    });

    if (Array.isArray(result)) {
      const validQuestions = result
        .map((item) => convertToQuestion(item as RawQuestionData))
        .filter((question): question is QuestionType => question !== null);

      return validQuestions;
    } else {
      console.error('No valid data found for questions.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching site info:', error);
    return [];
  }
}
