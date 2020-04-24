---
title: Problems with HTML number inputs
date: 2019-04-01
---
Using `type="number"` on input fields is far less useful than I originally thought. I was previously using it for the form on [Framer](/projects#framer). Since they are number fields, having the number keyboard pop up on phones was useful. It also prevents people typing in non-numbers, so there's some free form validation.

But there were some issues:

- Scrollwheel/trackpad will cause your number to go up or down without you noticing
- Default value of the step attribute is not "any". Decimal numbers will be rounded unless you specify it
- Things consisting of numbers are not necessarily numbers - you don't want to accidentally increment your credit card number because of scrolling up a little

Typing numbers is not like using an abacus. People don't enter numbers by adding one at a time. If they do (i.e. quantity fields), you are better off with explicit Add/Remove buttons, rather than the tiny tiny arrows that browser input fields give you.

There is a great writeup from Filament Group, [I wanted to type a number](https://www.filamentgroup.com/lab/type-number.html), which runs through these problems and gives a solid solution.

Also see [You Probably Don't Need input type="number"](https://bradfrost.com/blog/post/you-probably-dont-need-input-typenumber/).
