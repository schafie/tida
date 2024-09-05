/**
 *
 * @param a - pierwsza wartosc
 * @param b - druga wartosc
 * @throws {Error} jezeli 'druga wartosc' to 0
 * @returns {number} - zwraca iloraz dwoch liczb
 * @example
 * const a = 10
 * const b = 2
 *
 * const result = divide(a, b);
 * console.log(result);
 * // Logs: 5
 */

function divide(a, b)  {
    if (b == 0){
        throw new Error('bruh');
    }
    else{
        return a / b;
    }
}