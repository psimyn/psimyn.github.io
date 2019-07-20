---
title: Measurable Design
date: 2019-04-11T15:00:00+1000
author: simon
draft: true
---

_This is a text version of a talk I gave a Web Directions Design 19. The talk was recorded if you hate reading but is less coherent._

-----

Designs start out looking pretty good. Early versions of things are clean & simple.

Over time we see the addition of app-install top bars, newsletter bottom bars, subscriber modals, and cookie warnings. Adding these is usually the result of measurement (either real or proposed).

"Mobile app users are more engaged" == Let's add a topbar that pushes people there.
"User signups are good for our share price" == "let's add a signup modal"

These are marketing, customer, or accounting metrics. They are not design metrics. Yet these are measurements that determine design.

Many of these make the design obviously worse - both aesthetics and usability decrease. But without something quantifiable this is a tough case to make against.

So we want some kind of number to represent design. A way of measuring the impact of changes, and a way to fight back against all the most-important-elements that other departments want added.

The actual meaning of the number is secondary. We don't need a ruler, just a straight edge with a few marks on it is enough.
 Speed Index is a good example of a basically arbitrary number but with a clear purpose (lower is better).

-----  
  
Part of why Design is difficult to measure is because it is so broad. More than just looks - design is about function and ease-of-use. Pleasatness of use.
But these things are broad, vague, and difficult to measure.

The first step to getting a Design Metric is start with easily quantifiable things - things you can see and easily measure.
Many accessibility features are both easy to measure and explain. And improving them is win-win - the design improves AND is usable by more people.

Some examples of these values are contrast & font size/thickness. Thin grey-on-grey text is a recent trend that is awful for readability. These measurements are easy to take (e.g. aXe or in-browser accessibility tools). Sadly, there are not yet out-of-the-box solutions for automatic contrast/visibility testing, like there are for functional tests or analytics. For now they are a good candidate for style guides to ensure ongoing adherence. 

<img class="pull-img-right" src="https://via.placeholder.com/1400x600">

There are some other useful measures from print design worth considering - signal/noise ratio is a good way to reduce unnecessary borders/boxes and other visual junk. Again, limited tooling means this mostly needs to be calculated manually.

Since you don't want to measure everything yourself, there are some standard values for readability worth considering. But it's important to separate accurate data from design dogma. Line length is a good example of the latter - an oft-cited study on line length found the ideal line length to be 50-75 characters. The widely quoted number comes from a study run decades ago (before computers). More recent attempts to measure this have made similar findings, while some have found longer line lengths on screens (up to 100 characters per line) perfectly ok.

<img class="pull-img-right" src="https://via.placeholder.com/1400x600">

The key here is while there is an ideal _range_, there is not an exact ideal magic number for optimal line length. It's a range of good enough, and micro-optimizations within that are probably ot worth it.

An even more dogmatic and unreliable number is the golden ratio. Designers have fuckinng obsessed over this for centuries. Aside from being physically impossible (phi is irrational), people find golden rectangles to more attractive that 1.5:1 rectangles. tldr: stop looking so hard for magic numbers and spend your time on something more valuable. Reality is complicated - complicated things generally have complicated solutions.

-----

Beyond physical attributes, what else can we measure to monitor Design? Many standard measures of website health exist; the OG here was PULSE.

Having a pulse is not very indicative of quality-of-life, so more human-friendly metrics were needed.

-----
