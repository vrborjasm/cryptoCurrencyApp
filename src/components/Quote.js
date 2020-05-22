import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Quote = ({quoteCrypto}) => {
    if(Object.keys(quoteCrypto).length === 0) return null;
    
    return ( 
        <Container>
            <Price>El precio es: <span>{quoteCrypto.PRICE}</span></Price>
            <Info>Precio mas alto del dia: <span>{quoteCrypto.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del dia: <span>{quoteCrypto.LOWDAY}</span></Info>
            <Info>Variacion ultimas 24 horas: <span>{quoteCrypto.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualizacion: <span>{quoteCrypto.LASTUPDATE}</span></Info>
        </Container>
     );
}
 
export default Quote;