export default function PrivacyPage() {
  return (
    <main className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Política de Privacidade
        </h1>
        <p className="mb-6 text-gray-700">
          A presente Política de Privacidade estabelece os termos sobre a
          coleta, uso, armazenamento e proteção de informações pessoais dos
          usuários que acessam o site AdManager, Parceiro Revendedor das
          maquininhas Ton.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          1. Introdução
        </h2>
        <p className="mb-4">
          Ao acessar nosso site e utilizar nossos serviços, você concorda com os
          termos descritos nesta Política.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          2. Dados Coletados
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Informações fornecidas pelos usuários:</strong> Nome,
            endereço de e-mail, telefone e outras informações fornecidas ao
            preencher formulários.
          </li>
          <li>
            <strong>Informações coletadas automaticamente:</strong> Incluem
            endereço IP, tipo de navegador, tempo de acesso, páginas visitadas e
            localização aproximada.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          3. Uso das Informações
        </h2>
        <p className="mb-4">
          As informações coletadas são utilizadas para melhorar a experiência do
          usuário, responder a solicitações, processar pedidos, e enviar
          informações sobre nossos serviços.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          4. Compartilhamento de Dados
        </h2>
        <p className="mb-4">
          Não compartilhamos informações pessoais com terceiros, exceto com seu
          consentimento ou em cumprimento a obrigações legais.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          5. Armazenamento e Segurança
        </h2>
        <p className="mb-4">
          Adotamos práticas e medidas de segurança para proteger suas
          informações, evitando o acesso, alteração, divulgação ou destruição
          não autorizada dos dados.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Direitos do Usuário
        </h2>
        <p className="mb-4">
          Conforme a legislação aplicável, você tem o direito de acessar,
          corrigir ou excluir seus dados pessoais.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          7. Cookies
        </h2>
        <p className="mb-4">
          Utilizamos cookies para melhorar a experiência do usuário e
          personalizar o conteúdo.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          8. Alterações na Política de Privacidade
        </h2>
        <p className="mb-4">
          Reservamo-nos o direito de atualizar esta Política de Privacidade.
          Recomendamos verificar periodicamente para estar ciente das práticas
          atuais.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          9. Contato
        </h2>
        <p className="mb-4">
          Para dúvidas ou solicitações, entre em contato conosco pelo e-mail{' '}
          <a
            href="mailto:contato@admanager.com.br"
            className="text-blue-600 hover:underline"
          >
            contato@admanager.com.br
          </a>
        </p>
      </div>
    </main>
  );
}
