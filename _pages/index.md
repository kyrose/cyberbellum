---
layout: catalog
title: Home
id: home
permalink: /
---

{% for post in site.posts %}
  <li class="grid-item">
    <a class="item-container" href="{{ note.url }}">
      <!-- title -->
      <h3 class="title">{{ post.title }}</h3>

      <!-- description -->
      <div class="description">
        {{ post.summary }}
      </div>
    </a>
  </li>
{% endfor %}
