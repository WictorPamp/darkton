'use client';

import { addContact } from '../../../../actions/post-contact';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ModalTypes {
  children: React.ReactNode;
  site: string;
  plan?: string;
  machine?: string;
}

export function Modal({ children, site, plan, machine }: ModalTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    clienteTon: 'não',
  });
  const router = useRouter();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handleInputChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('Form data:', formData);
    addContact({
      site_id: site,
      name: formData.nome,
      email: formData.email,
      telephone: formData.telefone,
      machine: machine || '',
      plan: plan || '',
      client_ton: formData.clienteTon,
    });
    toggleModal();
    router.push('/checkout');
  }

  return (
    <>
      {<button onClick={toggleModal}>{children}</button>}

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-none md:rounded-lg shadow-lg w-full h-full sm:w-full sm:h-screen md:h-auto md:w-[720px] md:max-w-[720px] sm:max-w-lg sm:rounded-lg p-6 relative"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                Aumente suas vendas com a Ton
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-4">
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-black mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="clienteTon"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Já é cliente ton?
                  </label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="clienteTonSim"
                      name="clienteTon"
                      value="true"
                      checked={formData.clienteTon === 'true'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="clienteTonSim"
                      className="text-sm text-gray-700"
                    >
                      Sim
                    </label>

                    <input
                      type="radio"
                      id="clienteTonNao"
                      name="clienteTon"
                      value="false"
                      checked={formData.clienteTon === 'false'}
                      onChange={handleInputChange}
                      className="ml-4 mr-2"
                    />
                    <label
                      htmlFor="clienteTonNao"
                      className="text-sm text-gray-700"
                    >
                      Não
                    </label>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                  <button
                    onClick={toggleModal}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
