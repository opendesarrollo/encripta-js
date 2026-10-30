
# Módulo `aleatorio`

El módulo `aleatorio` forma parte de **Encripta-JS** y permite generar secuencias de bytes aleatorios criptográficamente seguros mediante `crypto.getRandomValues()`, perteneciente a Web Crypto API de JavaScript.

Utiliza un generador de números aleatorios criptográficamente seguro (**CSPRNG**, *Cryptographically Secure Pseudorandom Number Generator*), apropiado para producir datos impredecibles que pueden emplearse en operaciones criptográficas.

> **Alcance:** el módulo genera bytes aleatorios. No cifra ni descifra información y no garantiza que dos secuencias generadas en operaciones distintas nunca coincidan.

## 1. Funcionalidad disponible

| Función | Propósito |
|---|---|
| `BytesAleatorios` | Genera la cantidad solicitada de bytes aleatorios criptográficamente seguros. |

## 2. Referencia técnica

### `BytesAleatorios`

**Firma:** `BytesAleatorios(longitud)`

Genera una secuencia aleatoria de la longitud indicada. Si la operación se completa correctamente, devuelve exactamente esa cantidad de bytes.

**Parámetro**

| Nombre | Tipo | Descripción | Restricción |
|---|---|---|---|
| `longitud` | `number` | Número de bytes que se desea generar. | Entero positivo y seguro (`Number.isSafeInteger`). |

**Valor de retorno**

| Tipo | Resultado |
|---|---|
| `Uint8Array` | Secuencia de bytes de la longitud solicitada. |

**Errores**

La función lanza un `Error` si la longitud indicada es inválida o si falla la generación de bytes aleatorios.

A diferencia de Go, JavaScript utiliza excepciones (`throw`) para comunicar errores, en lugar de devolver un segundo valor de tipo `error`.

Cada byte puede contener un valor entre **0 y 255**. La longitud se especifica en *bytes*, no en bits: **1 byte = 8 bits**.

## 3. Funcionamiento paso a paso

### Ejemplo: solicitar 4 bytes

**Operación:** `BytesAleatorios(4)`

**Paso 1. Validación.** La función recibe `longitud = 4` y comprueba que sea un número entero positivo y seguro. Como la condición se cumple, continúa.

**Paso 2. Reserva de memoria.** Crea un arreglo `Uint8Array` con cuatro posiciones. Antes de llenarlo, su contenido es `[0, 0, 0, 0]`.

**Paso 3. Generación.** `crypto.getRandomValues()` llena las cuatro posiciones con valores aleatorios. Por ejemplo:

| Posición | Valor de ejemplo |
|---|---:|
| Byte 1 | 163 |
| Byte 2 | 241 |
| Byte 3 | 12 |
| Byte 4 | 123 |

**Paso 4. Retorno.** La función devuelve el arreglo de bytes generado.

**Ejemplo de contenido del `Uint8Array` devuelto:**

```text
Uint8Array(4) [163, 241, 12, 123]
```

| Dato | Resultado |
|---|---|
| Longitud solicitada | 4 bytes |
| Longitud devuelta | 4 bytes (32 bits) |
| Contenido de ejemplo | `[163, 241, 12, 123]` |
| Tipo de retorno | `Uint8Array` |
| Error | Ninguno |

> Los números mostrados son un ejemplo, **no una salida fija**. La función devuelve datos de tipo `Uint8Array`; la notación `[163, 241, 12, 123]` representa sus valores decimales, no una transformación a hexadecimal o texto.

## 4. Otros ejemplos de resultado

| Operación | Ejemplo de bytes devueltos | Longitud |
|---|---|---|
| `BytesAleatorios(2)` | `[45, 198]` | 2 bytes (16 bits) |
| `BytesAleatorios(4)` | `[163, 241, 12, 123]` | 4 bytes (32 bits) |
| `BytesAleatorios(8)` | `[72, 185, 14, 203, 56, 91, 247, 128]` | 8 bytes (64 bits) |
| `BytesAleatorios(16)` | `[34, 178, 91, 207, 56, 12, 243, 87, 166, 42, 198, 73, 15, 221, 104, 159]` | 16 bytes (128 bits) |

Estos resultados son **ilustrativos**: los valores pueden cambiar entre ejecuciones, mientras que la cantidad de bytes devueltos corresponde a la longitud solicitada cuando la operación finaliza correctamente.

## 5. Validaciones y manejo de errores

| Situación | Entrada | Resultado | Error |
|---|---|---|---|
| Longitud válida | `BytesAleatorios(4)` | Un `Uint8Array` de 4 elementos | Ninguno |
| Longitud igual a cero | `BytesAleatorios(0)` | No devuelve datos | `la longitud debe ser mayor que cero` |
| Longitud negativa | `BytesAleatorios(-4)` | No devuelve datos | `la longitud debe ser mayor que cero` |
| Longitud decimal | `BytesAleatorios(1.5)` | No devuelve datos | `la longitud debe ser mayor que cero` |
| Longitud no numérica | `BytesAleatorios("4")` | No devuelve datos | `la longitud debe ser mayor que cero` |
| Fallo en la generación | Longitud positiva | No devuelve datos | Excepción de Web Crypto API |

La aplicación que consuma esta función puede manejar los errores mediante `try/catch`.

La función es **síncrona**, por lo que no necesita `async`, `await` ni promesas.

## 6. Seguridad y consideraciones técnicas

- **Aleatoriedad criptográfica:** la función utiliza `crypto.getRandomValues()`, que proporciona bytes aleatorios criptográficamente seguros mediante Web Crypto API; no utiliza `Math.random()`.
- **Impredecibilidad:** bajo los supuestos de seguridad del generador y de su fuente de aleatoriedad, no resulta viable predecir nuevos bytes a partir de salidas anteriores.
- **Unicidad:** las secuencias aleatorias **pueden repetirse**. No existe una garantía absoluta de que dos llamadas produzcan valores diferentes.
- **Longitud adecuada:** que una secuencia tenga 16 o 32 bytes no significa que sea automáticamente apropiada para cualquier algoritmo. La longitud necesaria depende del uso criptográfico.
- **Generación por bloques:** `crypto.getRandomValues()` permite generar hasta 65,536 bytes por llamada. Para solicitudes superiores, el módulo realiza varias llamadas internas y devuelve un único `Uint8Array` con la longitud solicitada.
- **Límites del entorno:** la cantidad total de bytes que pueden generarse depende de la memoria y las restricciones del entorno JavaScript.
- **Responsabilidad del consumidor:** la función solo genera bytes. Su almacenamiento, uso y protección dependen de la aplicación que los consuma.

## 7. Dependencias

El módulo utiliza funcionalidades nativas de JavaScript y Web Crypto API; no requiere dependencias criptográficas externas.

| API | Uso |
|---|---|
| `crypto.getRandomValues()` | Generación de bytes aleatorios criptográficamente seguros. |
| `Uint8Array` | Representación y almacenamiento de secuencias de bytes. |
| `Number.isSafeInteger()` | Validación de la longitud solicitada. |
| `Error` | Comunicación de errores de validación. |

## 8. Pruebas unitarias y comandos de ejecución

Las pruebas del módulo se encuentran en `src/aleatorio/aleatorio.test.js` y utilizan el módulo nativo `node:test` de Node.js.

**Ejecuta los siguientes comandos desde la raíz del repositorio.**

### 8.1. Ejecutar todas las pruebas de `aleatorio`

```bash
node --test src/aleatorio/aleatorio.test.js
```

### 8.2. Ejecutar únicamente la prueba de generación de bytes

```bash
node --test --test-name-pattern="Generar 4 bytes aleatorios" src/aleatorio/aleatorio.test.js
```

### 8.3. Repetir la prueba de generación

```bash
node --test src/aleatorio/aleatorio.test.js
```

Cada ejecución vuelve a ejecutar las pruebas. No se necesita un equivalente de `-count=1` de Go para evitar caché de resultados en `node:test`.

### 8.4. Consultar la cobertura de pruebas del módulo

```bash
node --test --experimental-test-coverage src/aleatorio/aleatorio.test.js
```

### 8.5. Ejecutar todas las pruebas del proyecto

```bash
npm test
```

Este comando ejecuta el script `test` configurado en `package.json`, que utiliza `node --test`.

**Significado de las opciones:** `--test` ejecuta pruebas mediante el sistema nativo de Node.js, `--test-name-pattern` selecciona pruebas por nombre y `--experimental-test-coverage` habilita los informes de cobertura en las versiones de Node.js que admiten esta opción.

---

**Proyecto:** [Encripta-JS](https://github.com/opendesarrollo/encripta-js) · **Módulo:** `aleatorio`