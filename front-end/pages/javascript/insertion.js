function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { //Começa no índice 1 (o segundo número)
    //  e vai até o final da lista.
    let atual = arr[i];  // Guarda o número que vai ser comparado.
    let j = i - 1; //Começa comparando com o da esquerda.


    while (j >= 0 && arr[j] > atual) {
      arr[j + 1] = arr[j];
      j--;
    } // Se o número da esquerda for maior que o atual,
     //  ele desce uma posição.
    //Vai repetindo até achar o lugar certo para o número entrar.

    arr[j + 1] = atual; // Insere o elemento na posição correta
  }

  return arr; // Retorna o array ordenado
}

const numeros = [5, 3, 8, 4, 2]; // array números
const ordenado = insertionSort(numeros); // passa o array números para a função
console.log("Array ordenado:", ordenado);



// Resultado:
// Array ordenado: [2, 3, 4, 5, 8]//