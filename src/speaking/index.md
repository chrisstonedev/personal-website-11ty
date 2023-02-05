---
title: Speaking
layout: "base.njk"
eleventyExcludeFromCollections: true
---

Hello all!! Blog!

{% for post in collections.speaking %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}