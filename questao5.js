let string = "Sou programadora.";

let caracteres = string.split('');

let inverso = '';
for (let i = caracteres.length - 1; i >= 0; i--) {
    inverso += caracteres[i];
}

console.log(inverso);
