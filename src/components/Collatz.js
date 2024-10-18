import React, { Component } from 'react'

export default class Collatz extends Component {
  // ESTADO INICIAL DONDE GUARDARÉ LOS RESULTADOS DE LA SECUENCIA DE COLLATZ
  state = {
    resultados: []
  }

  // MÉTODO QUE GENERA LA SECUENCIA DE COLLATZ
  metodoCollatz = () => {
    
    // ¡¡metemos el atributo del menu !!
    let numero = parseInt(this.props.numero);

    // MUESTRO EN CONSOLA EL NÚMERO QUE HEMOS SELECCIONADO
    console.log("Número seleccionado: " + numero)

    // SI EL NÚMERO NO ES VÁLIDO O ES MENOR O IGUAL A 0, MUESTRO UNA ALERTA
    if (isNaN(numero) || numero <= 0) {
      alert("Por favor, ingrese un número válido mayor que 0.");
      return;
    }

    // CREO UN ARRAY PARA GUARDAR LA SECUENCIA DE NÚMEROS
    let secuencia = [];

    // MIENTRAS EL NÚMERO NO SEA 1, APLICO EL MÉTODO DE COLLATZ
    while (numero !== 1) {
      // AÑADO EL NÚMERO ACTUAL A LA SECUENCIA
      secuencia.push(numero);

      // SI EL NÚMERO ES PAR, LO DIVIDO ENTRE 2
      if (numero % 2 === 0) {
        numero = numero / 2;
      } else {
        // SI ES IMPAR, LO MULTIPLICO POR 3 Y LE SUMO 1
        numero = numero * 3 + 1;
      }
    }
    // AÑADO EL NÚMERO 1 AL FINAL DE LA SECUENCIA
    secuencia.push(1);

    // ACTUALIZO EL ESTADO CON LA SECUENCIA GENERADA
    this.setState({
      resultados: secuencia
    });
  }

  componentDidMount = () => {
    this.metodoCollatz();
  }

  render() {

    return (
      <div>
        <h3>Collatz</h3>

        <ul>
          {
            this.state.resultados.map((num, index) => {
              return (
                <li key={index}>
                  {num}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
