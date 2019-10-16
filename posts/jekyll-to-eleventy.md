---
title: Jekyll to Eleventy
date: 2019-10-13
---
After literally years of deliberation and procrastination I decided to migrate my site from Jekyll to Eleventy.

It had enough endorsements from tech people I respect to be at least ok, and didn't seem overly complex to use. I'd tried several of the more framework-oriented static site generators (Next, Nuxt, Gatsby) and they were a bit too much about build processes and graphql. I basically wanted something that would render markdown as HTML. Not having to learn Go was a selling point over Hugo.

I read through [the defacto guide for Jekyll to Eleventy Porting](https://24ways.org/2018/turn-jekyll-up-to-eleventy/). Most was still valid; the only out-of-date thing was that layout directory is now configurable!

First attempt was to just clone the starter blog repo and move my pages into that. But that led to some kind of build error that I didn't feel like troubleshooting at the time. Instead I opted for incremental. `npm install --save-dev @11ty/eleventy` and gradually add as needed. I did this in a branch and just opted things in until everything appeared to be working.

After getting basic pages and posts, I added in tags and played around with some other content types. Have also now added a Links page inspired by [Adactio](https://adactio.com/links).

Overall very simple, I like not having too much framework-lock and like that I could easily switch if something terrible happens with this. Seems solid so far though. Everything has been ok to figure out, and being in JS has made it pretty easy to troubleshoot
