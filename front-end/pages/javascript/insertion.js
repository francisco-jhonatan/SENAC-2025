function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let atual = arr[i];        // Elemento atual a ser comparado
    let j = i - 1;

    // Move os elementos maiores que 'atual' uma posição à frente
    while (j >= 0 && arr[j] > atual) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = atual; // Insere o elemento na posição correta
  }

  return arr; // Retorna o array ordenado
}

// Exemplo de uso:
const numeros = [5, 3, 8, 4, 2];
const ordenado = insertionSort(numeros);
console.log("Array ordenado:", ordenado);



// Resultado esperado
// Array ordenado: [2, 3, 4, 5, 8]//