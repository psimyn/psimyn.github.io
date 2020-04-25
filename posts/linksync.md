---
title: linksync
date: 2019-10-29
tags:
  - tech
  - linux
  - cron
---

I switch between browsers quite a lot, mostly between firefox and chromium-based ones depending on what I'm doing or my current mood. Because of this I haven't been able to rely on bookmarks from browser, and prefer somewhere centrol to keep links. [Pocket](https://getpocket.com/) has extensions for most browers, and gives a quite decent overlay UI for saving links and adding tags. The only thing I couldn't add was notes. I like to add short descriptions or notes and sometimes cross-link things to help remember and find things later.

[linksync](https://gitlab.com/psimyn/linksync) is a simple script that grabs items from the Pocket API that I've tagged with 'links', grabs some data from each, and adds a new item in my websites `links` folder (as a draft). It will then pop up on my computer later. I'll maybe add a description or some additional tags, then save and publish the site. Eventually would like to automate that as well, but haven't decided how I want it to work yet. Probably just publish master will be simplest.

Quick recap of making a Pocket app:

1. [Create a Pocket Application](https://getpocket.com/developer/apps/new) and give it the Retreive permission.
1. Manually went through the steps in the [Pocket Authentication API Docs](https://getpocket.com/developer/docs/authentication)
1. Add queries from the [Pocket Retreive API](https://getpocket.com/developer/docs/v3/retrieve)
1. Store `last_updated` value to only fetch recently added items


