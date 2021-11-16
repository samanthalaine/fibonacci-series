function fibonacci(num) {
  if (num === 0) return 0
  if (num === 1) return 1

  return fibonacci(num-2)+ fibonacci(num-1)
}
console.log(fibonacci(10))


// The mathematical formula to find the Fibonacci sequence number at a specific term is as follows:
//Fn = Fn-1 + Fn-2
//For a Fibonacci sequence, the base case is that the zeroth and first number of the sequence are 0 and 1 respectively



