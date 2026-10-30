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

    for (let i = 0; i < longitud; i += 65536) {
        crypto.getRandomValues(
            bytesAleatorios.subarray(i, Math.min(i + 65536, longitud))
        );
    }

    return bytesAleatorios;
}