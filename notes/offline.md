---
layout: layouts/home.njk
title: Offline Notes
---

1. [Questions](#questions)
1. [Notes](#notes)
1. [Mostly incoherent brain dump](#scratchpad)
1. [Examples](#offline-examples)
1. [References](#links)

## Questions

- why go offline
- what is offline support?
- why is it often bad
- how to do it
- what does offline/disconnected MEAN?
- what can cause connection problems?
- why does it matter in australia

- should offline be the same as online experience? can it be?
- should I jarringly reconnect ASAP or try for smooth transition
- is there perf impact to lots of requests being made and 404ing? should i pause
- when should you tell user they are offline? instant vs when a request fails. It depends

- how to add this to my existing stack?

- what is back/forward cache?
- do i need service worker?
- what is wrong with basic offline support?

- should I show stale data or blank page?
- how to indicate stale data?
- does stale data matter? always/sometimes?


## Notes

### 1. Why

- current offline UX mostly awful
- offline not just for offline. slow internet is almost worse
- but offline still common with mobile networks
- and lots of still-offline locations
- we can!


### 2. How

How do we know if someone is offline? What does offline even mean?

detecting offline is easy - not connected to any network. So no wifi or cable.
But if you _are_ connected to a network, how can you tell if that's the internet
or just a regular net?

`navigator.onLine`. weird casing.
this can tell you if you are offline (`onLine === false`) or "not offline" (`navigator.onLine === true`). Not offline is not necessarily online.

If their router is connected (and real), maybe their ISP is down. Maybe their government censors content. If the ISP is up, mayeb the server of the site is down.
Or at capacity.

So the most reliable way to test it monitor network requests. If a bunch of them
fail, you're probably offline. There's some events you can listen for, you could
use a dedicated polling thing that checks some cheap isUp endpoint, whatever.
Lots of options here.

brief PSA on using .catch correctly. What does .catch mean for fetch
what does it mean for your network lib, or your API wrappers or whatever.
Learn some stuff about errors they are great.
Optimistic approach to errors means expecting them. Plan for them. Do something better than showing unhelpful error.

Assume someone clicks a button, then puts their phone straight back into their pocket. And their pants are made of lead, blocking any signal.


### 3. What

Plan for the person that has been to site once before. Now they're waiting at an airport,
their flight has been delayed 45 minutes, and they want to read some more.

**Step 1. offline.html**
Plain page to replace browser default.
Bad news for Chrome users. No longer have a dinosaur game, or the Download When Online button.
Arguably worse experience than browser default.

**Step 2. blog.html**
So we want something better than static page, let's give people some content.
Fallback to "sorry, can't get that. Would you like to view one of these?"


NB: on pre-emptive loading. Be nice to people's data. TODO: is there a way to detect
network type ala "wifi only download"? Assume small is ok, so you can download text
content and maybe small images. Check what your market is ok with.


We can do better than this still. If we can grab text in the background, and we have
a "people also enjoyed:" links. Use Analytics data, and then pre-emptively fetches content
for those in idle times. So if you come to my blog and visit two pages, auto-download a couple more.

Also the idea of timebox/location-based "predictive" offline. If a user is going
to leave the house and going to the station, sync some things that matter. (opt-in to download all)

This is a common pattern for News, Social Media, anything that is post-oriented is ok.
In SW/Toolbox terms it's called staleWhileRevalidate.
But holy shit please do not use this for time-sensitive data. Especially not if
you are printing relative times on screen. Looking at you PTV app.

**Step 3. forms**

Adds a lot of potential, and a lot of complexity

The traditional optimistic UI: like/star button
works, but does nothing. Probably not a big deal
The offline optimistic UI: updates live now, really later.
Button queues a request, then actually updates later. Sounds simple... BUT:

- should you notify the user?
  - if it succeeds, probably not.
  - If it fails?...
    - "Your like failed. Click here if you still like it"
    - toast next time they are in app.
    - (ab)use push notifications

Race conditions:
 - Like button clicked on Phone. Phone placed in faraday cage. Or lead pants
 - Like button clicked on PC. Change of mind, thing unliked.

So, so far so simple. Let's try a more complex form.

You know what is worse than filling out forms? Submitting them when you're offline and
getting an error page. Because then you have to fill them out twice.

For any short fields, make autocomplete work. For comment fields, longer notes,
save locally. And save lots. Discarded data is very annoying.

Caveat: don't cache sensitive info. In either formdata or localstorage.
Also applies to caching data that requires auth. If you need to be logged in,
you can encrypt data locally and access with a token, or keep it in sessionStorage
or something else. But be sure that the data doesn't live longer than a session


Step 4. Collaborative Docs

This is where data storage method gets more important. You cannot just store "here's the text"
type values anymore. Think about changes, about conflicts.

NB: sending and handling notifications offline. What happens if someone clicks a
notification while offline? It closes. Does your site work? Can they save it or
get notified again when they can reach it. Can you pre-emptively fetch the page content.
Should you? There are limits, don't be a dick


Step 5. Chat / Games etc

Highly interactive, network-dependent.
This requires a different experience for online vs offline. e.g. Bot that pops up
"you're offline, want me to send that for you later?"
For games, you could drop into training mode. e.g. Chess - "Currently offline, analyze board".
Or "continue against computer". Or training mode.



## Scratchpad

Connection continuum: Offline -- Flaky -- Slow -- Fast

Slow and fast are self explanatory. Flaky is an interesting case. What do you think
would happen if every 4th request failed? That is something like what happens
when you have congestion issues. Some requests will take ages, some will fail.

Quality continuum: someone else's error << your error << some content << the actual content

Be Optimistic - Assume devices will reconnect at some point.

Australian internet is rather awful - e.g speedtest screenshot from home
Also: https://twitter.com/SwiftOnSecurity/status/1008561176408707078

show that the default offline experience means abandoning people. You are trusting
the browser to do something

requests are like sheep. Body can only be consumed once, so `clone` first

----------------

whatsapp is good for offline - message just gets sent.
duplicates not a big deal; most people only use one device, so won't accidentally send twice
facebook failed file upload from phone
Self-first sync (for chat). Confirm before auto sending. More hassle than benefit

-----------------

Does offline last? Why was Guardian crossword shutdown? TODO. Maintenance concerns??

Updating cached data when your service worker updates
note on updating SW version without losing your precious offline pages. You need em.

if you are offline, it should tell you as soon as possssible
if your connection is slow, should offer them the chance to come back later

button for dinosaur game that uses chrome's version
  alternatively just use regular js version


----------------------

Polling
- don't retry non-repeatable actions
e.g. if Post Comment starts polling

**Offline sync**
this is the sync problem compounded. Because you are very likely to cause
conflicts somewhere. if you do cause conflicts, cause them in the way that
doesn't again cause future conflicts. Let's quickly look at something that does
a terrible job of this: git. We are editing the following 3 line file. 3 lines,
what could possibly happen.

Jane and Jim are editing a shared file. line 1 has some text added by both
Now both see a conflicts view.
This is designed to be resolved offline.

Choosing a sync model
this is a tricky, tricky thing
but pretty great experience. If we have comments, and I want to copy them to notepad or something, then back to the browser, I should be able to do that
Rather than storing text, store actions/deltas. See redux, quilljs etc for things here.

Online vs Offline conflict resolution. Offline is actually easier, pushes the responsibility
onto them. Online requires lock or something. There are tools to
help with this (firebase or quilljs), but you want to have a conceptual understanding
of what's going on


Offline-only mode
- You must be offline to continue page (offline-only page)
- could have focus mode, and you add not distracted mode which requires you be disconnected


tip: I started this in dropbox note. simple and pretty reliable (NEVER want to lose)
terrible sync support though. If it detects a conflict it just duplicates your files

Getting Buy In: if you need to convince people of business value.
- tell them you can do push notifications. Marketing people love push notifcations. I think they are horrible. But that's your in.


- resumeable downloads. Probably handled by browser (since some chrome version)
  but for time limited auth some things might need to be done.


### Devs vs users

- avoid making too much distinction between users and devs. Hopefully you should be both. If not, please please
start using your site more. Helps develop empathy.
 - having reload cache all the time can be good. But then you forget what its really like for users.
Most people don't force reload all the time. So make sure that you're sure that your caches are being invalidated
and people aren't stuck with the new stuff forever




## Offline Examples

- Trivago maze
- Guardian crossword
- Ethan Marcotte site
- Jeremy Keith site
- Google Docs offline
- Flipkart (disables almost everything)
- Offline Wikipedia
- Much of [https://pwa.rocks/](https://pwa.rocks/)



## Links

- [Going Offline](https://abookapart.com/products/going-offline)
- [Service Worker Cookbook](https://serviceworke.rs/)
- [PWA Core Guides](https://hacks.mozilla.org/2018/05/progressive-web-apps-core-guides-on-mdn-web-docs/)
- [SW Toolbox](https://github.com/GoogleChromeLabs/sw-toolbox)
- [Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/)
- [Service Worker Outbreak](https://www.youtube.com/watch?v=CPP9ew4Co0M)
- [Network Connectivity: Optional](https://www.youtube.com/watch?v=Z7sRMg0f5Hk)
- [Stale while revalidate](https://www.fastly.com/blog/stale-while-revalidate-stale-if-error-available-today)
- [Offline First](https://github.com/pazguille/offline-first)
- [Notifications for Offline](https://medium.com/offline-camp/notifications-and-alerts-for-an-offline-first-world-30aae486873c)
- [Service Workers in Practice](https://medium.com/@marcinbaraniecki/serviceworkers-in-practice-b04b4c650b96)
- [Design for Offline](https://design.google/library/offline-design/)
- [You're Offline](https://mxb.at/blog/youre-offline/)
- [Detecting Image Requests](https://adactio.com/journal/14013)
- [Guess.js Intro](https://blog.mgechev.com/2018/05/09/introducing-guess-js-data-driven-user-experiences-web/)
