---
title: Framer Project History
date: 2020-02-09
layout: post
---

[Framer](https://gitlab.com/duud/framer) is one of my favorite projects. It was the first 'real' JS project I made, I think the first version was around 2012. It has consistently had some of my worst code and infrastructure. The deploy process is still either a shell script or a manually-installed WordPress plugin. It has years of tech debt stacked on it, has been through two major rewrites (which I generally avoid). The code has gone like this:

1. Static HTML blob & some jQuery helpers in an inline script. Basically a form and a canvas element
1. Separate JS/CSS files, served from a Drupal site, iframed on another site
1. Ported to WordPress template + JS
1. Rewritten using Svelte, still using canvas
1. Rewritten using Svelte V3, now using SVG

The first three stages were all pretty much the same codebase, but with added if statements and special cases. This ended up being a few hundred lines of shit code, bunch of input event listeners, and obviously no tests. None of this particularly mattered since it was _my_ code - I knew how it worked and didn't need to explain it to others. And more importantly, it did what it needed to do; we'd gone through what should be in the form, what the renderer should look like, tried a few different layouts. Code should do what is needed, cleanliness & structure is far less important (especially when working solo). It more or less stayed this way for several years, just quietly doing its job.

At some point I added version control so I could more safely make changes and keep track of things. Deployment was (and still is) hugely manual - run build, scp to server, do some cache invalidation. Again, not something that mattered. I was deploying very infrequently so it's hard to justify the time on deployment automation; both in terms of wasted effort and potential risk (scripts have bugs too!).

The first rewrite was mainly to check out Svelte - advertised as "the magical disappearing UI framework". This was driven by interest more than any business or performance need. The previous version was hardly lightening fast, but it was far from the slowest thing on the page. Svelte ended up being quite nice to use. My two regrets were not using a store from the start (state scattered throughout the app), and continuing to use canvas rather than SVG. Canvas limited how interactive the renderer could be (point and click would be annoying effort), and my canvas code wastruly terrible. I'm not a huge advocate of needless dryness, but there was some baaaad repetition in there. There was a function that took 6 arguments. All sorts of terrible shit.

There was also a bunch of terrible WordPress glue code so it could load Woocommerce products, and add to cart. I wanted to write as little PHP/WP code as possible, so hacked together a working method using a few existing plugins and some hacks of my own. I added some e2e tests using Cypress, and setup a wordpress dev instance in Docker. Still too much effort to get this working in CI, but just running them on my local machine was enough validation that I hadn't destroyed everything when I made changes.

Svelte 3 came out sometime last year. I'd long held the opinion that I wouldn't rewrite framer, partly due to laziness, partly due to needless risk. But eventually I decided to give it a try. The [GH issue for a migration guide](https://github.com/sveltejs/svelte/issues/2462) gave the impression that there wouldn't be an offical guide or tool.It did offer a [Svelte Translator](https://github.com/tivac/svelte-translator), but that seemed like more complication that it was worth. I had a skim through the [2vs3 cheatsheet](https://rajasegar.github.io/svelte2vs3/), and kept the [Svelte examples page](https://svelte.dev/examples) open, and just manually rewrote the form code. This time I started with a store to keep state simpler and centralised.

By the time I got up to writing the renderer, I thought I'd try using some derived values to draw an SVG. First pass at getting something that looked similar went from around 700lines of horrible canvas code to about an 80 line Svelte component. I started writing the components from scratch in a separate project, then when it was reasonably complete I move it to the existing wordpress plugin src directory, and just updated the outer component. Minimal amount of the glue code has changed, and functionally it's the same as before.

Eventually I should make it a proper WordPress plugin that uses real products, rather than just a custom fields product with custom pricing. But part of why I love this project is that it's mostly been optimized for enjoyment - I find easy solutions for things I don't want to work on, and can keep my focus on the interesting parts. The fact that a bunch of it is terrible glue code doesn't matter as long as it works.

