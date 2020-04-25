---
title: How to check your IP address
date: 2019-10-21
permalink: posts/ip/
tags:
  - tech
  - linux
  - internet
  - ip
---

Using dig:
```
dig +short myip.opendns.com @resolver1.opendns.com
```

Using curl:
```
curl https://ipinfo.io/ip
```

Using JavaScript:

<pre><code><script style="display: block" contenteditable>function checkIP() {
  return fetch('https://ipinfo.io/ip')
    .then(res => res.text());
}</script>
</code>

<div class="flex">
  <button id="get-ip">Click to fetch</button>
  <div id="ip"></div>
</div></code></pre>

<script>
  var btn = document.querySelector('#get-ip');
  btn.addEventListener('click', function() {
    var ip = document.querySelector('#ip');
    ip.innerHTML = 'Loading';
    checkIP().then(address => {
      ip.innerHTML = address;
    });
    btn.parentNode.appendChild(ip);
  })
</script>

<style>
#get-ip {
  line-height: 2;
  font-size: 1.2em;
}

#ip {
  font-size: 2em;
  font-weight: bold;
  margin-left: auto;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

pre {
  max-width: 680px;
}
</style>

