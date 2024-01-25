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

I should use state to bring user inputs over to the preview and create components with that state

props should be used to generate each item in the invoice when adding items

todo today ( 15.01.2024 ):

- make main container consistent ratio
- input validations:
  --you
  --them
  --invoice
  --add items
- visual feedback for each section completion
- input passing to preview

- preview section container,
- a4 preview content section

reciept generator (((LATER FEATURE)))

- amount of payment
- for which service
- date recieved
- recieved by
- recieved from
