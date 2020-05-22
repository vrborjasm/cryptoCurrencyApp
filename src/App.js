import React , {useState, useEffect} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Form from './components/Form';
import Quote from './components/Quote';
import imagen from './cryptomonedas.png';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [quoteCrypto, setQuoteCrypto] = useState({});
  const [load,setLoad] = useState(false);

  useEffect(() => {

    const quoteCrypto = async() =>{
      if(currency === '' || cryptoCurrency === '') return;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;

    const result = await axios.get(url);

    setLoad(true);

    setTimeout(() =>{
      setLoad(false);
      setQuoteCrypto(result.data.DISPLAY[cryptoCurrency][currency]);
    },3000);

    
    }
    quoteCrypto();
  }, [currency,cryptoCurrency]);

  const component = (load) ? <Spinner /> : <Quote quoteCrypto={quoteCrypto}/>

  return (
    <Container>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Form 
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
