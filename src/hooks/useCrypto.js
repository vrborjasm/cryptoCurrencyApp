import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selector = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCrypto = (label, startState, options) => {

    const [state, setState] = useState(startState);

    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selector
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Selecciona --</option>
                {options.map(option => (
                   <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </Selector>
        </Fragment>
    );

    return [SelectCrypto, state, setState];
}

export default useCrypto;