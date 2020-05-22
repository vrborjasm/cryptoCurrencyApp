import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import Error from './Error';
import axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #ffffff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Form = ({setCurrency, setCryptoCurrency}) => {

    const [cryptoList, setCryptoList] = useState([]);
    const [error, setError] = useState(false);

    const currencies = [
        { code: 'USD', name: 'Dolar de Estados Unidos'},
        { code: 'MXN', name: 'Peso Mexicano'},
        { code: 'EUR', name: 'Euro'},
        { code: 'GBP', name: 'Libra Esterlina'}
    ]

    const [SelectCurrency, currency] = useCurrency('Elige tu Moneda','',currencies);

    const [SelectCrypto, cryptoCurrency] = useCrypto('Elige tu criptomoneda','',cryptoList);

    useEffect(() => {
        const requestAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCryptoList(result.data.Data);
        }
        requestAPI();
    },[])

    const handleSubmit = e => {
        e.preventDefault();

        if(currency.trim() === '' || cryptoCurrency.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
        setCurrency(currency);
        setCryptoCurrency(cryptoCurrency);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >

        {error ? <Error message='Todos los campos son obligatorios'/> : null}

            <SelectCurrency />

            <SelectCrypto />

            <Button 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Form;