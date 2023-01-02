---
title: Blog
layout: "base.njk"
eleventyExcludeFromCollections: true
---

Hello all!! Blog!

{% for post in collections.blog %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}