export default function bubbleSort(numbers: number[]): number[] {
  // NOTE: modifies the input, in place sort
  for (let count = 0; count<numbers.length; count++) { // count isn't used
    for (let i = 0; i<numbers.length - 1; i++) {
      const current: number = numbers[i]!
      const next: number = numbers[i+1]!

      if (current < next) { //swap
        numbers[i] = next
        numbers[i+1] = current
      }
    } 
  }
  return numbers
}