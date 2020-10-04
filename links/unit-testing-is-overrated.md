---
title: Unit Testing is Overrated
url: 'https://tyrrrz.me/blog/unit-testing-is-overrated'
date: '2020-08-09T13:43:48.000Z'
tags:
  - tests
  - unit tests
  - cargo cults
---
Strongly agree with this. Some choice pieces:

> Aggressively popularized “best practices” often have a tendency of manifesting cargo cults around them, enticing developers to apply design patterns or use specific approaches without giving them a much needed second thought

> Naming tests in accordance to specifications rather than classes has an additional advantage of removing that unnecessary coupling. Now, if we decide to rename SolarCalculator to something else or move it to a different directory, the test names won’t need to be updated to reflect that.

> To summarize, we can conclude that it’s a good idea to partition tests based on threads of behavior, rather than the code’s internal structure.

The "write your code so it's easy to test" idea is silly. Write your code so it's easy to read. Test speed should barely be a consideration for your 200 line side project. Cypress tests are easy to read and actually test that stuff works. Test speed _does_ become a factor eventyally, but worry about it then, rather than upfront.

