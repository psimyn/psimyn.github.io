---
layout: post
title: "Web Chess with Vue and Firebase"
date: 2016-09-22 01:24:35 +1000
categories: frontend, vue
---

Some notes for learning Vue.js by building Chess. Because todo apps aren't very realistic.

The [Vue docs](http://rc.vuejs.org/guide/) are pretty awesome. I'm going with the RC docs for this - they are complete enough and anything missing is usually available in 1.0.

# setup

Messing about with boilerplate and setup isn't something I feel like doing right now, so going to use the [CLI](https://github.com/vuejs/vue-cli) to setup.

From their docs:

```bash
npm i --global vue-cli
vue init webpack vue-chess
cd vue-chess
npm i
```

Also initialise git repo, and add gh-pages branch for hosting

```bash
git init
git commit .gitignore -m "init"
git checkout -b gh-pages
git checkout master
git commit . -m "vue-cli setup"
```

This creates a (mostly) bare gh-pages branch - it will later be where we static and compiled files. Then switch back to master, and commit the remaining stuff from Vue.


# setup chess

At this stage just going to install [chess](https://github.com/brozeph/node-chess). This might be swapped out later, but seems to do everything and I don't want to worry about things like board validation just yet.

```
npm i --save chess
npm run dev
```

# Board component

Firstly update App to point to new component

```
// src/App.vue
<template>
  <div id="app">
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board'

export default {
  components: {
    Board
  }
}
</script>

<style>
html {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  color: #2c3e50;
  width: 100%;
}
</style>
```

Now board component: initialise a new game, and make `chess`' array of board.squares into rows and columns. Loop over these and print the square notation.

```
// src/components/Board.vue
<template>
  <div class="board">
    <span v-for="row in rows">
      <span v-for="square in row">
        {{square.file}}{{square.rank}}
      </span>
    </span>
  </div>
</template>

<script>
import chess from 'chess'

const gameClient = chess.create({PGN: true})

export default {
  data () {
    return {}
  },
  computed: {
    rows () {
      const squares = gameClient.getStatus().board.squares
      return squares.reduce((board, square, index) => {
        const createNewRow = index % 8 === 0
        if (createNewRow) {
          board.push([])
        }
        const lastRow = board.length - 1
        board[lastRow].push(square)
        return board
      }, [])
    }
  }
}
</script>
```

Make it look more like a board. Using Vue `scoped` styles because names are difficult

```
<style scoped>
.board {
  padding: 1em;
  background: rgba(88, 88, 88, 0.05);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 1px 2px rgba(22, 22, 22, 0.2);
  position: relative;
}

.row {
  display: flex;
}

.square {
  cursor: pointer;
  text-align: center;
  flex: 1 1 auto;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  background: white;
  position: relative;
}

.row:nth-child(2n) .square:nth-child(2n),
.row:nth-child(2n+1) .square:nth-child(2n+1) {
  background: #bbb;
}

/* responsive squares */
.square:after {
  content: ' ';
  padding-bottom: 100%;
  display: block;
  height: 0;
}
</style>
```


Now found some SVG pieces

Adding a background

```
<template>
<span
  class="piece"
  v-bind:style="{'background-image': backgroundImage(square)}"
>
</template>

<script>
...
methods: {
  backgroundImage (square) {
    if (!square.piece) return ''
    const color = square.piece.side.name
    const img = require(`../assets/${color}-${square.piece.type.toLowerCase()}.svg`)
    return `url(${img})`
  }
}
</script>

<style>
.piece {
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
```
