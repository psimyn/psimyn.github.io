---
title: "VSCode idea: Find in similar files"
date: 2019-03-17
---
I want a shortcut for VSCode that lets me "Find in files", but with the filter pre-filled to current file type. So searching from a scss file will default to searching scss files. Same for rb or js files. This might use a different shortcut to the default find in files, or use the same one but configure pre-filled file types.

Not sure how it would handle the case where you'd previously set filename filters - should it clear the filter, or only replace empty filter? Not clearing would match the default behaviour a bit better.

Optionally add multiple file types in some order, and order the results like that. So prefer files that match the current suffix (e.g. `_spec.rb`), then show similar file types (`.rb`).

I haven't yet found an extension that does this. I'm confident it exists, but I cannot think of how to phrase a search query to find it.

In the meantime, some useful shortcuts:

- Alt + F12 to go to definition
- Shift + F12 to find usages
- Alt + Click for multiple cursors (totally unrelated but cool)

