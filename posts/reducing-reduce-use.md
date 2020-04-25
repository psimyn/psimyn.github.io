---
title: Reducing use of Array.reduce
date: 2020-02-09
tags:
  - javascript
  - reduce
  - programming
---

I recently went on a short anti-`reduce` rant at work. Was in defence of `forEach` and local mutations, but I came to the conclusion that it's mostly just because I don't like `reduce`. Mostly when combined with fat arrow functions (which I also don't particularly like).

Writing `reduce()` makes you look smart. Reading reduce makes you feel stupid.

The recent [HTTP 203: Is reduce() bad?](https://www.youtube.com/watch?v=qaGjS7-qWzg) covers many of my issues, the tldr:

- the method signature is unpleasant
- most of the time you could use filter + map
- use reduce if you want a single value (e.g. sum)

`reduce` has some use-cases, but they are rarer than its usage suggests. Most of the time I favor `filter` or `forEach`.

