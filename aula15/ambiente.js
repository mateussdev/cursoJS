//declarando o vetor:
let num = [5, 2, 1, 4, 6]
console.log(`O vetor é o ${num}`)

//fazendo modificações no vetor
//acrescentando valores no array em uma posição explicita:
num[5] = 8
console.log(`O vetor agora é ${num}`)

//acrescentando valor na ultima posição:
num.push(9)
console.log(`O vetor agora é ${num}`)

//descobrir o comprimento do array:
console.log(`O vetor tem ${num.length} elementos`)

//ordenar os valores do array em ordem crescente:
num.sort()
console.log(`Vetor em ordem ${num}`)

console.log(`o primeiro valor do array é o ${num[0]}`)

//buscanco valores no vetor:
let pos = num.indexOf(9)
if(pos == -1){
    console.log("O valor não foi encontrado!")
}else{
    console.log(`O valor está na posição ${pos}`)
}

