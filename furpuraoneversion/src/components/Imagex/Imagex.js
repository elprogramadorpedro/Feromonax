import React from "react";
import styled from "styled-components"
//pasando imagenes como props al componente inicio

export function Imagex(props) {
  return (
    <div className="box-pagina-principal" onclick="reproduzVideo()">
      <img src={props.url} alt="" />
    </div>
  );
}

export default Imagex;