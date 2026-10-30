import test from "node:test";
import assert from "node:assert/strict";

import { BytesAleatorios } from "./index.js";

test("TestAleatorio", () => {
    console.log("Hola mundo");
});

test("TestBytesAleatorios", () => {
    const datos = BytesAleatorios(2);

    assert.equal(datos.length, 2);

    console.log("Bytes generados:", datos.length);
    console.log("Datos en HEX:  ", Buffer.from(datos).toString("hex").toUpperCase());
    console.log("Datos en bytes:", Array.from(datos));
});