![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# typed-js-wc - The Typed.js Web Component

```html
<typed-js-wc strings="String number 1, String number 2"></typed-js-wc>
```

The Typed.js Web Component for better reusability.

Typed.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

Checkout the offical project [here](https://github.com/mattboldt/typed.js/).

## Installation

```
npm install --save typed-js-wc
```

## Usage

For the most basic usage pass a `strings` property with your desired strings divided by a comma. This property is required.

```html
<typed-js-wc strings="String number 1, String number 2"></typed-js-wc>
```

---

To have some fixed text add a HTML Element with a `slot` property and it's value as `fixed`.

```html
<typed-js-wc strings="String number 1, String number 2">
  <h1 slot="fixed">Fixed</h1>
</typed-js-wc>
```

---

For additional configuration, see the options [here](https://github.com/mattboldt/typed.js#customization) then pass an `options` property. It should be an object with any of the options defined in the link above.

For vanilla/plain html users the best way would be to give the component a proper selector e.g an ID then use JS to pass `options`.

```html
<typed-js-wc strings="String number 1, String number 2" id="exampleID">
</typed-js-wc>

<script>
    document.getElementById("exampleID").options = {           typeSpeed: 40,
    startDelay: 0
    };
<script>
```

For react,angular,vue,stencil etc you can pass it directly or use method above.

```jsx
render(){
    return (<typed-js-wc strings="String number 1, String number 2" options={{typeSpeed: 40,startDelay: 0}}>
</typed-js-wc>);
}
```

---

You can pass html elements such as headings,paragraphs,bold,small etc as strings too.

```html
<typed-js-wc strings="<b>First</b> sentence.,& a second sentence.">
</typed-js-wc>
```

## Styling

typed-js-wc uses CSS Variables. Available variables are:

1. `--font-size`
2. `--font`
3. `--color`
4. `--font-weight`
5. `--font-family`

```css
typed-js-wc {
    --font-size: 20px,
    --color: blue,
}
```
