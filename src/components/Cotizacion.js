import React from 'react';

const Cotizacion = ({resultado}) => {

  if(Object.keys(resultado).length===0) return null;

  return(
    <div className="resultado">
      <h2>Resultado</h2>
      <p className="precio">Precio actual: <span>{resultado.PRICE}</span></p>
      <p>Precio más alto del día: <span>{resultado.HIGHDAY}</span></p>
      <p>Precio más bajo del día: <span>{resultado.LOWDAY}</span></p>
      <p>Variación del precio en las últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR} %</span></p>
      <p>Última actualización: <span>{resultado.LASTUPDATE}</span></p>
    </div>
  );
}
export default Cotizacion;