import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

export const Secciones = styled.div`
display:flex;
justify-content:space-between;
height:100vh;
width:100vw;
`;
export const Section1 = styled.div`
background-color:blue;
height:100vh;
width:50vw;
`
export const Section2 = styled.div`
height:100vh;
width:50vw;
display: flex;
align-items:center;
justify-content:center;

`;

export const Divsection2 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;

export const InputsLogin = styled(TextField)`
width: 21rem;
height: 4rem;
margin: 0.5rem 1rem 0.5rem 1rem;
`;
