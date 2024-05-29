<p align="center">
  <a href="https://www.afternoon.com.ar/" target="blank"><img src="https://www.afternoon.com.ar/assets/logo-pagina.png" width="200" alt="Nest Logo" /></a>
</p>

## Description

RESTful API for [Afternoon Roastery](https://afternoon.com.ar).

## Endpoins

- `GET /product`: Retrieve all store-items.
- `GET /product?type=(wholesale | retail)`: Retrieve all products from wholesale or retail store.
- `GET /product/handles?type=(wholesale | retail)`: Retrieve all handles from wholesale or retail store.
- `GET /product/handle/:handle`: Retrieve a specific item by its handle.
- `GET /product/id/:id`: Retrieve a specific item by its ID.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Portfolio - [Matias Pedelhez](https://matiaspedelhez-portfolio.vercel.app/)
- LinkedIn - [Matias Pedelhez](https://www.linkedin.com/in/matias-pedelhez/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
