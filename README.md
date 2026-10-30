
# Encripta-JS

**Biblioteca criptográfica de código abierto para JavaScript**

Encripta-JS es una biblioteca de código abierto desarrollada en JavaScript, diseñada para facilitar la integración de soluciones criptográficas en aplicaciones y servicios de software mediante una arquitectura modular, extensible y fácil de utilizar.

El proyecto nace con el propósito de acercar la criptografía al desarrollo de software, proporcionando herramientas reutilizables que permitan a los desarrolladores incorporar mecanismos de seguridad sin tener que implementar cada componente desde cero.

Su filosofía se fundamenta en la **simplicidad, la transparencia y la responsabilidad criptográfica**, priorizando implementaciones comprensibles, documentación técnica clara y buenas prácticas de desarrollo.

Encripta-JS busca evolucionar como una biblioteca que permita construir aplicaciones con funcionalidades criptográficas de forma organizada, mantenible y consciente de los requisitos de seguridad.

El proyecto forma parte de [OpenDesarrollo](https://opendesarrollo.com/), una iniciativa dedicada al desarrollo y publicación de herramientas tecnológicas de código abierto.

## 1. Características principales

- **Modularidad:** arquitectura organizada en módulos independientes con responsabilidades claramente definidas.
- **Simplicidad:** interfaces comprensibles que facilitan la integración en proyectos JavaScript.
- **Reutilización:** componentes diseñados para incorporarse en diferentes aplicaciones y servicios.
- **Transparencia:** documentación de los mecanismos implementados, sus propiedades y limitaciones.
- **Mantenibilidad:** estructura que facilita la revisión, evolución y ampliación de funcionalidades.
- **Seguridad:** desarrollo orientado a la aplicación responsable de principios y buenas prácticas criptográficas.
- **Código abierto:** distribución bajo la licencia Apache 2.0.

## 2. Módulos disponibles

Encripta-JS organiza sus funcionalidades en módulos independientes. Cada uno cuenta con documentación técnica que describe su funcionamiento, parámetros, resultados, ejemplos prácticos y pruebas unitarias.

| Módulo | Descripción | Documentación |
|---|---|---|
| [`aleatorio`](src/aleatorio/) | Generación de bytes aleatorios criptográficamente seguros mediante `crypto.getRandomValues()`. | [Ver documentación](src/aleatorio/README.md) |
| [`otp`](src/otp/) | Cifrado y descifrado de información mediante One-Time Pad y operaciones XOR. | [Ver documentación](src/otp/README.md) |

## 3. Instalación

Para incorporar Encripta-JS como dependencia desde GitHub en un proyecto JavaScript:

```bash
npm install github:opendesarrollo/encripta-js
```

**Repositorio:** `github.com/opendesarrollo/encripta-js`

Consulta la documentación de cada módulo para conocer sus funcionalidades y condiciones de utilización.

## 4. Seguridad y consideraciones

Encripta-JS promueve el uso responsable de herramientas criptográficas mediante implementaciones documentadas y con responsabilidades definidas.

La seguridad de una aplicación no depende únicamente de la biblioteca utilizada, sino también de su integración, configuración y los mecanismos de protección implementados.

Cada módulo documenta sus propiedades criptográficas, requisitos y limitaciones.

> **Importante:** el proyecto se encuentra en desarrollo y no cuenta con una auditoría de seguridad que avale su utilización para proteger información sensible en producción.

## 5. Ecosistema OpenDesarrollo

Encripta-JS forma parte de [OpenDesarrollo](https://opendesarrollo.com/), una iniciativa de desarrollo y publicación de herramientas tecnológicas de código abierto.

Dentro de sus proyectos también se encuentra [**Encripta**](https://encripta.opendesarrollo.com/), una aplicación orientada al cifrado y descifrado de información para usuarios finales.

Aunque comparten una identidad, ambos proyectos tienen propósitos diferentes: Encripta-JS proporciona componentes reutilizables para desarrolladores, mientras que Encripta ofrece una aplicación para usuarios finales.

**Enlaces relacionados:**

- [OpenDesarrollo](https://opendesarrollo.com/)
- [Encripta — Sitio web](https://encripta.opendesarrollo.com/)
- [Encripta — GitHub](https://github.com/opendesarrollo/Encripta)

## 6. Estado del proyecto

Encripta-JS es un proyecto de código abierto en evolución, con una arquitectura preparada para la incorporación progresiva de nuevos módulos.

Actualmente no se ha declarado una versión estable.

## 7. Licencia

Este proyecto se distribuye bajo la **Licencia Apache 2.0**.

Consulta el archivo [LICENSE](LICENSE) para conocer los términos y condiciones de uso, modificación y distribución.

---

**Encripta-JS** · Un proyecto de [OpenDesarrollo](https://opendesarrollo.com/).

[Repositorio oficial en GitHub](https://github.com/opendesarrollo/encripta-js)