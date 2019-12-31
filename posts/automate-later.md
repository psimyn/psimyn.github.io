---
title: Automate Later
date: 2019-12-01
tags:
  - scripts
  - planning
  - linux
  - tech
---

I wanted to set up backups for a few computers. Basically mirror a hard drive where I keep some photos and music so I don't lose em in case of hard drive failure or extreme flooding.

I bought some external drives _months_ ago to do this, had them sitting in a case ready to go, but then got caught up with how mirroring should work, And how to automate them to handle deletions and things properly, but not wipe all the data if a drive has failed. And preferably some kind of archive mode so I can restore things that get accidentally changed or deleted.

But this was already way too complicated and I was stuck in the "doing research on the thing instead of the thing" stage. Stage 1 was instead a manual copy onto the disk. That meant the data is saved to the external and I've saved the multiple hours of copying time when it's eventually automated later.

Good steps:

1. Manual bad way, do the thing as simply as possible
1. Manual better way. Preferably repeatable, some kind of script or command
1. Automatic with trigger or confirmation. Start running it but still check
1. Automatic. In the background, hopefully not something you need to think about anymore

For backups, starting with a basic `cp` is fine. Adding a cron job for rsync with a bunch of conditional rules can come later.

