/* Script exclusivo para kichwamusic
Por: Infinity Estudio - Saez Daniel
Fecha: 09/06/23 
Web: infinityestudio.com
*/
console.log('main.js cargado');

/* [function Parametro] */
function getUrlP(parametro) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(parametro);
}
//Uso getUrlP('param2');
//Eliminar parametro
function delUrlP(parameter) {
  const url = new URL(window.location.href);
  url.searchParams.delete(parameter);
  window.history.replaceState({}, "", url);
}
/* [/function Parametro] */

/* ==== function Alert ==== */
var alCn = $('<div></div>').attr('id', 'alerta');
  $('body').append(alCn);

$( "#alerta" ).click(function(){$('#alerta').removeClass('activado');});

function alerta(texto) { 
  $('#alerta').addClass('activado').text(texto); 
    setTimeout( function() { 
    $('#alerta').removeClass('activado'); 
    }, 3000);  
};

/* ==== function crypt ==== */
const crypt = (salt, text) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

  return text
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join("");
};

const decrypt = (salt, encoded) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};
// encrypting: const encrypted_text = crypt("salt", "Hello"); // -> 426f666665
// decrypting: const decrypted_string = decrypt("salt", "426f666665"); // -> Hello
