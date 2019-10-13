---
layout: post
title: "Clean git history doesn't really matter"
date: 2017-10-13T20:30:10
categories: git
---

There is often a lot of talk around how important it is to squash your commits, or to rebase your work into logical commits. These are not terrible ideas. Reading through the commit history of a project with tastefully crafted atomic commits makes for a fun afternoon. But I don't think it is as important as it is made out to be. That was a lot of two-letter words in one sentence.

In real-life code often you might want to do things like "remove this wrapper function from modules". Or "run `lint --fix` and commit the result". But at the risk of ruining the commit history we don't do it. And the inconsistencies keep going and growing. These types of commits always exist though. From the "burn down the codebase and start again" type initial commit, "convert all tabs/spaces to spaces/tabs".

If there is benefit in doing this (there often is), I don't think keeping git history clean is a valid counter argument. Ideally, tools should be able to ignore these commits. Maybe a `[fix-lint]` commit message or something, to signal that it should be skipped from blame/log exploration. Or always ignore insignificant whitespace. I don't know of any tools that do this currently, but it seems more useful finding a way to do this than wallowing in the gross inconsistencies of your current codebase.

And ultimately, HEAD is the only commit most people are going to see anyway. You read current code more than a complete history of your code.

