# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

NEXT FEATURES TO WORK ON:

- select due date
- VAT
- HTML to PDF
- change submit buttons to "next" buttons, which opens the next accordion item

SPEC:

Features:
-create html invoice
-create html receipt
future features:
convert html preview to pdf (html2pdf.js src: https://github.com/eKoopmans/html2pdf.js?tab=readme-ov-file#getting-started)

BOTH:
Your company info:
name, address(line 1, town, postcode, country), logo, contact

invoice info:
invoice number
invoice date
payment terms in days
due date

buyer info:
company/ name, address line 1, town, postcode, country
Invoicing:

user must be able to input the following:

- amount due
- service
- quantity
- buyer

UI

sidebar:

Your business

technical how:

how do I process the inputs in react?

use used the react hook useState to accomplish this. However prop drilling was tedious and would be a potent-
ial nightmare to maintain. I used contexts to handle this. Which, using a provider, automatically drills down to
the necessary components that would use the props passed.

props should be used to generate each item in the invoice when adding items

todo today ( 25.01.2024 ):

- run build ++ done
- fix build errors ++ done
- deploy on vercel ++ done
- make main container consistent ratio ++ Done

todo today (26.01.2024)

- handle input and preview state:
  --- to share state between componenets, remove state from each component, move it to the
  nearest common parent and then pass it down to them via props. This is called lifting state up.

- nearest common parent is the content container

- preview section container,
- a4 preview content section

todo today: 01.02.24

- pseudocode text scaling algo
- look into other tools I could use

LATER FEATURES
html to pdf:

https://github.com/eKoopmans/html2pdf.js?tab=readme-ov-file#getting-started

reciept generator

- amount of payment
- for which service
- date recieved
- recieved by
- recieved from

SCALING:

- add media queries for a mobile layout
