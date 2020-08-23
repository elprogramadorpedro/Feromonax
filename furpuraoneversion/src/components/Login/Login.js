import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles.js';
import styled from 'styled-components'

export const Secciones = styled.div`
display:flex;
justify-content:space-between;
height:100vh;
width:100vw;
`;
export const Section1 = styled.div`
background-color:pink;
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

function Login (){

return(
 <Secciones >

 <Section1 >
 <div >
 </div>
</Section1>

<Section2>
<Divsection2 >
  
<div>
<h1>
  FEROMONAX
</h1>
</div>

<InputsLogin
id="outlined-basic"
 label="Nome" 
 placeholder="nome"
 variant="outlined" 
 />

<InputsLogin 
 id="filled-password-input"
 label="Password"
 type="password"
 autoComplete="current-password"
 variant="outlined"
/>

<Button variant="contained" color="primary">
  Login
</Button>


 </Divsection2>
</Section2>
      </Secciones>


    )

}

export default Login