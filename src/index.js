// import { Cipher } from "crypto";

const boton=document.getElementById('boton');

const cifrado=document.getElementById('cifrado');
const descifrado=document.getElementById('descifrado');

const inputMessage=document.getElementById('inputMessage');
  const inputNumber = document.getElementById('inputNumber');

const pintame=document.getElementById('pintame');


const nuevo=document.getElementById('nuevo');
const salir=document.getElementById('salir');


boton.addEventListener('click',()=>{
  root.classList.add('hide');
  message.classList.remove('hide');
}
);



cifrado.addEventListener('click',()=>{
  message.classList.add('hide');
  resultado.classList.remove('hide');
  
  const resultado1 = cipher.encode(inputNumber.value, inputMessage.value);
  document.getElementById('pintame').innerHTML = resultado1;

  
});


descifrado.addEventListener('click',()=>{
  message.classList.add('hide');
  resultado.classList.remove('hide');

  const resultado2 = cipher.decode(inputNumber.value, inputMessage.value);
  document.getElementById('pintame').innerHTML = resultado2;
}
);


nuevo.addEventListener('click',()=>{
  resultado.classList.add('hide');
  message.classList.remove('hide');

}
);


salir.addEventListener('click',()=>{
  resultado.classList.add('hide');
  root.classList.remove('hide');

}
);