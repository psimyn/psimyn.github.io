---
layout: post
title: "bundle install fails updating json"
date: 2017-10-14T17:54:00
tags:
  - ruby
  - annoyances
---

This has happened to be at least a few times. It is usually when I dig up an old repo on a random machine and want to run a dev server. Or something. But I run `bundle install`, and get this super unhelpful error. In the case of my github-pages repo:

```
An error occurred while installing json (1.8.3), and Bundler cannot continue.
Make sure that `gem install json -v '1.8.3'` succeeds before bundling.

In Gemfile:
  github-pages was resolved to 80, which depends on
    jekyll-mentions was resolved to 1.1.2, which depends on
      html-pipeline was resolved to 2.4.1, which depends on
        activesupport was resolved to 4.2.8, which depends on
          json
```

So I try running what it says: `gem install json -v '1.7.7'`. Which fails with this (don't worry about reading it):

```
[simon@mahayana psimyn.github.io]$ gem install json -v '1.8.3'
Building native extensions.  This could take a while...
ERROR:  Error installing json:
	ERROR: Failed to build gem native extension.

    current directory: /home/simon/.gem/ruby/2.3.0/gems/json-1.8.3/ext/json/ext/generator
/usr/bin/ruby -r ./siteconf20171014-13349-1574b2v.rb extconf.rb
creating Makefile

current directory: /home/simon/.gem/ruby/2.3.0/gems/json-1.8.3/ext/json/ext/generator
make "DESTDIR=" clean

current directory: /home/simon/.gem/ruby/2.3.0/gems/json-1.8.3/ext/json/ext/generator
make "DESTDIR="
compiling generator.c
generator.c: In function ‘generate_json’:
generator.c:861:25: error: ‘rb_cFixnum’ undeclared (first use in this function); did you mean ‘mFixnum’?
     } else if (klass == rb_cFixnum) {
                         ^~~~~~~~~~
                         mFixnum
generator.c:861:25: note: each undeclared identifier is reported only once for each function it appears in
generator.c:863:25: error: ‘rb_cBignum’ undeclared (first use in this function); did you mean ‘rb_cFixnum’?
     } else if (klass == rb_cBignum) {
                         ^~~~~~~~~~
                         rb_cFixnum
make: *** [Makefile:242: generator.o] Error 1

make failed, exit code 2
```

I don't even know what to do with that. But I don't want it. So this is "just randomly google the error" time. Issue is that certain versions of ruby want certain versions of json. Checking `ruby --version` I am running 2.4, which is widely reported to not work with a lot of things (i.e. [some json versions](https://github.com/flori/json/issues/303) or [the pages gem](https://github.com/github/pages-gem/issues/376)).

One solution at this point is to install rvm or chruby, then use Ruby 2.3.something and this stuff will just work. I don't really feel like doing that. Another is to just blindly update system deps and see if that fixes anything. Kind of a blunt hammer, I will learn nothing, but it sometimes works. Kick off a pacman/apt/brew/etc update in the background just in case other things aren't working. Good reason to do that anyway in case you always forget.

Eventually find I should have just read that chain of dependencies from the first error - need a newer json version, which was changed in a newer activesupport version. So need to update the version of activesupport.

```
bundle update activesupport
```

Sorted.
