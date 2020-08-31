import React, { useState } from 'react'
import styled from 'styled-components'
import { Imagex } from "../Imagex/Imagex";

const HeaderPosition = styled.div`
display:flex;
justify-content: center;
width:100%;
height:60px;
border:1px solid black;
`

export const Body = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.freepik.es/fotos/mano');
  
  background-size: 20%;
`

function Inicio(props) {


  return(
      <div >
          <HeaderPosition > 
        </HeaderPosition>  
                       <div > 
                      
                
                           <Imagex
                           url={"https://picsum.photos/400/400?a=1"}
                           tituloDoVideo={"Título 1"}
                           />               
                            <Imagex
                           url={"https://picsum.photos/400/400?a=1"}
                           tituloDoVideo={"Título 1"}
                           />               
                            

                        
                      </div>
                   
      </div>
  );

}  
export default Inicio