---
title: Technical Debt
description: Technical debt is a metaphor coined by Ward Cunningham to describe code that is written that does not align with the best solution due to a limited understanding of the problem.
date: 2023-03-19
layout: thought.njk
tags: [ thoughts ]
---

**Technical debt** is a metaphor coined by Ward Cunningham to describe code that is written that does not align with the
best solution due to a limited understanding of the problem. Knowingly taking on technical debt can be beneficial when
iterating on a feature where we will expect to learn more as we start to get feedback, and incorporating that feedback
back into the program is seen as paying off that debt, but not returning to the code with the new things that have been
learned is seen as allowing interest to accumulate on that debt.[^1]

I have a talk, "[Buried in Technical Debt](/buried-in-technical-debt)," that further defines technical debt and ways to
handle it in a project.

When prioritizing backlog items, technical debt tasks are often considered Important but Not Urgent when classified
using an [Urgent-Important matrix](/urgent-important-matrix).

[^1]: Ward Cunningham first used his debt metaphor in
"[The WyCash Portfolio Management System](http://c2.com/doc/oopsla92.html)" and he made clarifying remarks in
"[Ward Explains Debt Metaphor](http://wiki.c2.com/?WardExplainsDebtMetaphor)".