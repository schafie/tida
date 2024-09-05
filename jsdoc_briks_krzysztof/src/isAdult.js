/**
 * funkcja sprawdza pelnoletnosc
 *
 * @param {number} age - wiek podany
 * @throws {Error} - jezeli wiek jest mniejszy rowny 0
 * @author - Krzysztof Briks 5D
 * @returns {number} - zwraca true jezeli wiek >=18 w przeciwnym wypadku false
 * @example
 * const age = 18
 * const result = isAdult(age)
 * console.log = result
 * // Logs: true
 */

function isAdult(age){
    if (age <= 0) throw new Error('alert')
    else{
        if (age >= 18){
            return true;
        }
        else{
            return false;
        }
    }
}