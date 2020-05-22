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

const useCurrency = (label, startState, options) => {

    const [state, setState] = useState(startState);

    const Select = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selector
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Selecciona --</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </Selector>
        </Fragment>
    );

    return [Select, state, setState];
}

export default useCurrency;