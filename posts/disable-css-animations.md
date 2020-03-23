---
title: The right way to disable CSS animations
date: 2020-01-20
---

Sometimes I want a way to disable all CSS animations on a page. This is useful for end-to-end testing, automatic screenshots, or reducing motion sickness risk. This [recent CSS Tricks post](https://css-tricks.com/stop-animations-during-window-resizing/) suggests disabling animations & transitions while resizing, to reduce needless browser work. This is an excellent idea! Here is the usual way of disabling animations:

```css
.resize-animation-stopper * {
  transition: none !important;
  animation: none !important;
}
```

The problem with setting `none` is that `transitionend` and `animationend` events will no longer be fired. Maybe not a big deal, but it could also prevent stuff from working as you expect.

[This contrived example](https://codepen.io/psimyn/pen/xxbXmrE) animates the border color on hover, and once that's finished sets the background color. But when animations are disabled, the background color never gets set!

Andy Bell's [modern CSS reset](https://hankchizljaw.com/wrote/a-modern-css-reset/) adds a media query for `prefers-reduced-motion` to disable animations for people who don't want them. This originally used the `none` to disable, but was later [changed](https://github.com/hankchizljaw/modern-css-reset/pull/6) to instead use a very short duration (setting times lower than 0.01s can cause flickering)

```css
.resize-animation-stopper * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

This means animations will end (almost) instantly, and not repeat. The `scroll-behaviour: auto` ensures that smooth scrolling is disabled.

Not quite as tidy as just writing `none`, but guarantees your page works for everyone regardless of motion preferences.

