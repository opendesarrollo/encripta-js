/**
 * BytesAleatorios genera una secuencia de bytes aleatorios
 * criptográficamente seguros mediante Web Crypto API.
 *
 * @param {number} longitud - Cantidad de bytes que se desea generar.
 * Debe ser un número entero mayor que cero.
 *
 * @returns {Uint8Array} Secuencia de bytes aleatorios
 * cuya longitud corresponde al valor solicitado.
 *
 * @throws {Error} Si la longitud es inválida
 * o falla la generación de bytes aleatorios.
 */
export function BytesAleatorios(longitud) {
    if (!Number.isSafeInteger(longitud) || longitud <= 0) {
        throw new Error("la longitud debe ser mayor que cero");
    }

    const bytesAleatorios = new Uint8Array(longitud);
    const limite = 65536;

    for (let i = 0; i < longitud; i += limite) {
        const inicio = i;
        const fin = Math.min(inicio + limite, longitud);

        const bloque = bytesAleatorios.subarray(inicio, fin);

        crypto.getRandomValues(bloque);
    }

    return bytesAleatorios;
}