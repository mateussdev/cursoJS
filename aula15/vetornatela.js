let valores = [7, 5, 3, 2, 6, 9]
//console.log(valores)
// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

