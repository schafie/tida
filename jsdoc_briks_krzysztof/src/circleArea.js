/**
 * funkcja oblicza pole kola
 *
 * @param {number} radius - wartosc\promien
 * @throws {Error} - jezeli radius jest mniejszy lub rowny 0
 * @author - Krzysztof Briks 5D
 * @returns {number} - zwraca pole kola
 * @example
 * const radius = 5
 * const result = calculateArea(radius)
 * console.log = result
 * // Logs: 15,7
 */

function calculateArea(radius){
    if (radius <=0){
        throw new Error('radius should be greater than 0');
    }
    else{
        return Math.pow((radius * Math.PI), 2);
    }
}