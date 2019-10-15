window.cipher = {
  encode: (offset, string) => {
    /* eslint radix: ["error", "as-needed"] */
  // Entrada para el cifrado
    let newMessage = ''; // CAPTURA LA PALABRA CIFRADA
    // INICIO DE RECORRIDO DE CARACTERES
    for (let i = 0; i < string.length; i += 1) {
      const numeroAcsi = string.charCodeAt(i);
      //  console.log(numeroAcsi);
      const miCifra = ((numeroAcsi - 65 + parseInt(offset)) % 26) + 65;
      // console.log(miCifra);
      const nuevaCifra = String.fromCharCode(miCifra);
      //  console.log(nuevaCifra);
      newMessage += nuevaCifra;
    }
    return newMessage;
  },
  decode: (offset, string) => {
    // Mensaje para el descifrado
    let newDescifrado = ''; // CAPTURA LA PALABRA A DESCIFRAR
    for (let i = 0; i < string.length; i += 1) {
      const numeroAcsi = string.charCodeAt(i);
      // console.log(numeroAcsi);
      const miCifra = ((numeroAcsi + 65 - parseInt(offset)) % 26) + 65;
      const nuevaCifra = String.fromCharCode(miCifra);
      // console.log(nuevaCifra);
      newDescifrado += nuevaCifra;
    }
    return newDescifrado;
  },
// eslint-disable-next-line eol-last
};