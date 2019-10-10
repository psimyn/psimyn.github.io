---
layout: page
title: CSS Haikus
---

### Borders Between

```css
// no border at top
// --------------
// border-top for each sibling
// ---------------
// borderless below
.item + .item {
  border-top: 1px solid;
  border-color: grey;
}
```

```css
/*  oh sweet flex-basis
 *  what you actually do
 */ noone really knows
.flex-almost-ignored {
  min-width: 100%;
  flex-basis: 0;
}
```

```css
/*  Lobotomized owl
 *  Add something to all items
 */ Except the first one
* + * {
  margin-top: 10px;
  vertical-rhythm: auto;
}
```
