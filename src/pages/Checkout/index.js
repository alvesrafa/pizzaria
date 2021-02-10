import { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from 'components/Button';
import { Container, Title, Box, Error } from './styles';
import { useOrders } from 'services';
import { singularOrPlural } from 'utils/functions';

import InputMask from 'react-input-mask';

const Checkout = () => {
  const { order } = useOrders();

  const [phoneMask, setPhoneMask] = useState('(99) 9999-99999'); // '(99) 9 9999-9999'

  // phone.replace(/[^\d]/g, '')

  const schema = Yup.object().shape({
    address: Yup.object().shape({
      cep: Yup.string().required('Este campo é obrigatório'),
      cidade: Yup.string().required('Este campo é obrigatório'),
      complemento: Yup.string().required('Este campo é obrigatório'),
      logradouro: Yup.string().required('Este campo é obrigatório'),
      numero: Yup.string().required('Este campo é obrigatório'),
      uf: Yup.string().required('Este campo é obrigatório'),
    }),
    phone: Yup.string()
      .required('Este campo é obrigatório')
      .transform((value) => value.replace(/[^\d]/g, '')),
  });

  const { register, handleSubmit, errors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const phoneWatch = watch('phone') || '';
  useEffect(() => {
    const unmask = phoneWatch.replace(/[^\d]/g, '');

    if (unmask.length > 10) {
      if (phoneMask === '(99) 9 9999-9999') return;
      setPhoneMask('(99) 9 9999-9999');
    } else {
      if (phoneMask === '(99) 9999-99999') return;
      setPhoneMask('(99) 9999-99999');
    }
  }, [phoneWatch]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="content">
        <Box>
          <Title>Qual endereço para entrega?</Title>

          <div className="input-wrapper">
            <label htmlFor="CEP">CEP</label>
            <input name="address.cep" ref={register} id="CEP" />
            {errors.address?.cep && <Error>{errors.address.cep.message}</Error>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="uf">Estado</label>
            <input name="address.uf" ref={register} id="uf" />

            {errors.address?.uf && <Error>{errors.address.uf.message}</Error>}
          </div>

          <div className="input-wrapper">
            <label htmlFor="cidade">Cidade</label>
            <input name="address.cidade" ref={register} id="cidade" />

            {errors.address?.cidade && (
              <Error>{errors.address.cidade.message}</Error>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="logradouro">Logradouro</label>
            <input name="address.logradouro" ref={register} id="logradouro" />

            {errors.address?.logradouro && (
              <Error>{errors.address.logradouro.message}</Error>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="numero">Numero</label>
            <input name="address.numero" ref={register} id="numero" />

            {errors.address?.numero && (
              <Error>{errors.address.numero.message}</Error>
            )}
          </div>

          <div className="input-wrapper">
            <label htmlFor="complemento">Complemento</label>
            <input name="address.complemento" ref={register} id="complemento" />

            {errors.address?.complemento && (
              <Error>{errors.address.complemento.message}</Error>
            )}
          </div>
        </Box>
        <Box>
          <Title>Qual seu telefone?</Title>
          <div className="input-wrapper">
            <label htmlFor="phone">Telefone</label>
            <InputMask
              mask={phoneMask}
              name="phone"
              ref={register}
              id="phone"
            />
            {/* <InputMask
              mask={phoneMask}
              name="phone"
              id="phone"
              ref={register}
            /> */}
            {errors?.phone && <Error>{errors.phone.message}</Error>}
          </div>
        </Box>
      </div>
      <div className="content">
        <Box>
          <Title>Informações sobre o pedido</Title>
          {order.pizzas.map((pizza) => (
            <div className="pizza">
              <p>
                {singularOrPlural(
                  pizza.quantity,
                  `${pizza.quantity} pizza`,
                  `${pizza.quantity} pizzas`
                )}{' '}
                {pizza.name} de
              </p>

              {pizza.selectedFlavours.map((flavour) => (
                <span>{flavour.name}</span>
              ))}
            </div>
          ))}

          <Button onClick={handleSubmit(onSubmit)}>Finalizar</Button>
        </Box>
      </div>
    </Container>
  );
};

export default Checkout;
