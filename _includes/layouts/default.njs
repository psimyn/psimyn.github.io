<!DOCTYPE html>
<html lang="en">

  {% include head.html %}
  {% include header.html %}

  <body {% if page.active == "home" %}class="home"{% endif %}>

    <div class="page-content">
      <div class="wrapper">
        <main class="content">
          {{ content }}
        </main>
      </div>
    </div>

    {% include footer.html %}

  </body>

</html>
