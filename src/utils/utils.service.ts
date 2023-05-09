import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  //get is par  
  getIsPar(number: number): boolean{
    return number % 2 === 0;
  }
  // get is prime
  esPrime(number: number): boolean {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(number)) + 1; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  //get Factorial
  getFactorial(number: number): number {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
  }
  //get sum N
  getSumN(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  // get factors
  GetFactores(number: number): number[] {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  // get fibonacci
  getFibonacci(n: number): number {
    if (n <= 1) {
      return n;
    } else {
      return this.getFibonacci(n - 1) + this.getFibonacci(n - 2);
    }
  }
}
