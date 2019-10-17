---
layout: layouts/home 
title: CSS Haikus
---
# CSS Haikus

Short, semi-self-explanatory snippets of CSS

### Borders Between
```css
  /* no border at top
// --------------
// border-top for each sibling
// ---------------
// borderless below
*/
.item + .item {
  border-top: 1px solid;
  border-color: grey;
}
```

### Min width unknown
```css
  /* oh sweet flex-basis
 * what you actually do
 * noone really knows
  */
.flex-almost-ignored {
  min-width: 100%;
  flex-basis: 0;
}
```

### Lobotomized Owl
```css
/* Lobotomized owl
 * Add something to all items
 * Except the first one
                 */
* + * {
  margin-top: 10px;
  vertical-rhythm: auto;
}
```
