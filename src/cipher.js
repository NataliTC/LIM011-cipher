window.cipher = {
  encode: (offset, string) => {
    /* eslint radix: ["error", "as-needed"] */
  // Entrada para el cifrado
    let newMessage = ''; // CAPTURA LA PALABRA CIFRADA
    // INICIO DE RECORRIDO DE CARACTERES
    for (let i = 0; i < string.length; i += 1) {
      let numeroAcsi = string.charCodeAt(i);
      let miCifra; // POSICION EN EL CODIGO ASCCI
      let nuevaCifra; // CAPTURA LA LETRA RECORRIENDO EL ASCCI
      //  console.log(numeroAcsi);
      if (numeroAcsi >= 65 && numeroAcsi <= 90) {
        miCifra = ((numeroAcsi - 65 + parseInt(offset)) % 26) + 65;
        // console.log(miCifra);
        nuevaCifra = String.fromCharCode(miCifra);
        //  console.log(nuevaCifra);
        newMessage += nuevaCifra;
      }
    }
    return newMessage;
  },
  decode: (offset, string) => {
    // Mensaje para el descifrado
    let newDescifrado = ''; // CAPTURA LA PALABRA A DESCIFRAR
    for (let i = 0; i < string.length; i += 1) {
      let numeroAcsi = string.charCodeAt(i);
      // POSICION EN EL CODIGO ASCCI
      let miCifra;
      let nuevaCifra; // CAPTURA LA LETRA RECORRIENDO EL ASCCI
      // console.log(numeroAcsi);

      if (numeroAcsi >= 65 && numeroAcsi <= 90) {
        miCifra = ((numeroAcsi + 65 - parseInt(offset)) % 26) + 65;
        nuevaCifra = String.fromCharCode(miCifra);
        // console.log(nuevaCifra);
        newDescifrado += nuevaCifra;
      }
    }
    return newDescifrado;
  },
// eslint-disable-next-line eol-last
};