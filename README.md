# Acme Webshop

[![CI](https://github.com/acme-hookshot-demo/webshop/actions/workflows/ci.yml/badge.svg)](https://github.com/acme-hookshot-demo/webshop/actions/workflows/ci.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

Storefront and checkout for **Acme Commerce** — cart, pricing, payments and order tracking.

> This is a demo repository for the Element × Hookshot videos. Company, people and data are fictional.

## Features

- 🛒 Cart with quantity rules and saved carts
- 💶 Pricing in EUR/GBP/CHF with VAT per country
- 💳 Payments: cards, SEPA, PayPal — Apple Pay in progress
- 📦 Order tracking with carrier webhooks

## Getting started

```bash
npm install
npm test        # node:test, no extra tooling
npm run build
```

## Project layout

| Path | What lives there |
|---|---|
| `src/cart/` | Cart model and quantity rules |
| `src/checkout/` | Checkout steps, totals, VAT |
| `src/payments/` | Payment providers behind one interface |
| `test/` | Unit tests |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Day-to-day discussion happens in our Matrix room **#webshop:acme.example**,
where GitHub activity is bridged by Hookshot.
