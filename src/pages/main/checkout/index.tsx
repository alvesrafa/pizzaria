import Layout from '../../../components/Layout';
import { useOrder } from '../../../context';
import { Container } from './styles';

export default function Checkout() {
  const { order } = useOrder();
  const { pizzas } = order;
  const { address } = order;
  return (
    <Container>
      <div>
        <h1>Dados do seu pedido</h1>

        <div>
          <p>{order.phone}</p>
          <div>
            {pizzas.map((pizza, i) => {
              console.log('Pizza', pizza);
              return <div key={i}>Pizza</div>;
            })}
          </div>
        </div>
      </div>
      <p>Informe os dados do endereço para entrega</p>

      <input placeholder="Informe seu telefone" />

      <input placeholder="Logradouro" />

      <input placeholder="Número" />

      <input placeholder="Bairro" />
    </Container>
  );
}
