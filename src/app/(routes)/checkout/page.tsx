'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5); // Inicializa o contador com 5 segundos

  useEffect(() => {
    // Atualiza o contador a cada segundo
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redireciona quando o contador chega a zero
    if (countdown === 0) {
      router.push('/');
    }

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [countdown, router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Obrigado!</h1>
      <p>Nossa equipe entrará em contato em breve.</p>
      <p>Você será redirecionado em: {countdown} segundos</p>
    </div>
  );
};

export default CheckoutPage;
