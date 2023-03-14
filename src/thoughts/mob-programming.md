---
title: Mob Programming
date: 2023-03-13
---

**Mob programming** is a style of programming in which a small team of software developers all work on one problem
together with one person at the keyboard at a time. This can help prevent knowledge silos and increase knowledge sharing
throughout the team that is working within a given context.

It fosters a collaborative style of working in which everyone brings their strengths to the table. Ideally, instead of
seeing certain people as senior or as junior to one another, and instead of thinking about a dynamic through a lens
of people whose skills are lacking or those whose skills are overflowing, we can consider that everyone has much that
they can give to the team. Some people in the group might have more years of experience, but everyone can have a
slightly different focus and have picked different disciplines, different languages, different frameworks, and different
paradigms to follow and for which to have a passion. It reminds me of this quote from Daniel Kwan, co-director of
*Everything Everywhere All at Once*, when he gave his acceptance speech for Best Director at the 95th Academy Awards:

> If our movie has greatness and genius, it is only because they have greatness and genius flowing through their hearts
> and souls and minds, and they gave that precious gift to our film. The world is opening up to the fact that genius
> does not stem from individuals like us onstage, but rather, genius emerges from the collective. We are all products of
> our context. We are all descendants of something and someone. \[...\] There is greatness in every single person. It
> doesn't matter who they are. You have a genius that is waiting to erupt. You just need to find the right people to
> unlock that. Thank you so much to everyone who has unlocked my genius.

A common concern that people share with this style of working is that it feels as though the speed at which the team can
deliver results must be slower in order to accommodate this style of working, because it requires everyone to be
together at once instead of dividing the members of the team into individual work streams to work on multiple things at
the same time (sometimes even incorrectly characterized as a [divide and conquer](/thoughts/divide-and-conquer)
approach). It is true that is an expensive way of writing code, but to truly consider velocity and cost, the total
picture must also be considered. Mob programming practically eliminates the code review process as the code review has
taken place completely within the code writing process itself. The amount of time that anyone on the team will need to
review that code with others is also reduced, especially if they brought in product owners and UX designers throughout
the process, having them join the working group.

And the speed at which code is written is a very misleading metric, because, ideally, the code that you produce through
mob programming needs less rework, and less attention to improve in future iterations, because the quality--which also
is tricky to measure--is ideally higher.