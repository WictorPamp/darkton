import { supabase } from './lib/client';

interface Contact {
  site_id: string;
  name: string;
  telephone: string;
  email: string;
  client_ton?: string;
  plan: string;
  machine: string;
}

export async function addContact(contact: Contact): Promise<void> {
  try {
    const { error } = await supabase.from('contacts').insert([contact]);

    if (error) {
      alert('Houve um erro em nosso sistema, tente novamente mais tarde.');
      throw new Error(`Error inserting contact: ${error.message}`);
    }
  } catch (error) {
    alert('Houve um erro em nosso sistema, tente novamente mais tarde.');
    console.error('Error adding contact:', error);
  }
}
