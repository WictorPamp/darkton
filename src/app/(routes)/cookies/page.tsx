export default function CookiesPage() {
  return (
    <main className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Política de Cookies
        </h1>
        <p className="mb-6 text-gray-700">
          Esta Política de Cookies explica como o site AdManager utiliza cookies
          e tecnologias semelhantes para melhorar sua experiência de navegação.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          1. O que são Cookies?
        </h2>
        <p className="mb-4">
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo
          ao visitar um site. Eles permitem que o site se lembre de informações
          sobre sua visita.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          2. Como Usamos os Cookies
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Cookies Necessários:</strong> Essenciais para que o site
            funcione corretamente.
          </li>
          <li>
            <strong>Cookies de Desempenho:</strong> Coletam informações sobre
            como os usuários interagem com o site para melhorias.
          </li>
          <li>
            <strong>Cookies Funcionais:</strong> Permitem que o site lembre suas
            escolhas para uma experiência mais personalizada.
          </li>
          <li>
            <strong>Cookies de Marketing:</strong> Usados para fornecer anúncios
            relevantes e medir a eficácia de campanhas publicitárias.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          3. Gerenciamento de Cookies
        </h2>
        <p className="mb-4">
          Ao acessar o site, você pode gerenciar suas preferências de cookies.
          Você também pode ajustar as configurações de cookies no seu navegador.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          4. Cookies de Terceiros
        </h2>
        <p className="mb-4">
          Podemos utilizar cookies de terceiros para entender como você usa o
          site e oferecer conteúdos mais relevantes. Estes são geridos por
          terceiros, com suas próprias políticas de privacidade.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          5. Retenção de Dados
        </h2>
        <p className="mb-4">
          Os cookies têm durações diferentes, desde sessões até períodos mais
          longos, conforme definido no banner de consentimento.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Alterações na Política de Cookies
        </h2>
        <p className="mb-4">
          Reservamo-nos o direito de modificar esta Política de Cookies a
          qualquer momento. Recomendamos consultar periodicamente para estar
          atualizado.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          7. Contato
        </h2>
        <p className="mb-4">
          Para dúvidas sobre nossa Política de Cookies, entre em contato pelo
          e-mail{' '}
          <a
            href="mailto:contato@admanager.com.br"
            className="text-blue-600 hover:underline"
          >
            contato@admanager.com.br
          </a>
          .
        </p>
      </div>
    </main>
  );
}
