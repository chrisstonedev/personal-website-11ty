---
title: Hello World
layout: "base.njk"
---

Hello all!

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}