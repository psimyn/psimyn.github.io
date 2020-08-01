---
title: Do you know how much your computer can do in a second?
url: 'https://computers-are-fast.github.io/'
date: '2020-07-12T01:52:53.000Z'
tags:
  - performance
  - computers
---
Great writeup, and fun to go through the questions and explanations. I really went off the rails with grep and parsing estimates, others were mostly solvable.

[HN Discussion](https://news.ycombinator.com/item?id=23804373) has people alternately arguing about whether modern programs are fast, or bloated and slow.

I don't think Moore's Law is an excuse to not worry about program performance, and the current slew of slow apps (web and otherwise) is not acceptable. Many electron apps really do feel slow. Waiting for my password manager to open (either electron app or chrome extension) is frustrating. It's minor, but it's friction to something that _needs_ to be frictionless.

That isn't to say that can't be made fast. VSCode is a good example - that uses electron but has remainined very performant. They got boot up time down real low (actually relevant for me as I open/close sessions often). BUt on my older laptop (4gb RAM) I can't have it open alongside browser, so mostly use editors in the terminal. It does still mostly work, but they have focused on perf speed rather than footprint. Still some tradeoffs to be made there, and again another hard thing to think about.

There are definite costs to the abstractions, but also benefits. But none of this is free. Perf is hard, and computers being faster doesn't mean we don't have to think about it - time has been unchanged. Only our expectations have (of features and speed).

