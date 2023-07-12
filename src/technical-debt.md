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
learned is seen as allowing interest to accumulate on that debt. The term can sometimes be used to describe code issues
that were caused by recklessness, but Cunningham has clarified that he does not believe that knowingly writing inferior
code should be considered technical debt.[^1]

As the concept of technical debt became useful for teams, even more terms for specific flavors would emerge:

- Code debt - code source files is hard to read and maintain
- Documentation debt - documentation is outdated to point of being misleading
- Test debt - test coverage is very low or tests are not at the right level to be effective
- Accessibility debt - many accessibility issues exist that prevent users from being able to use the application
- Build debt - build and deployment pipelines are outdated, fragile, and hard to maintain
- ...and just about anything in a software project that you can fall behind on if you don't keep up with it.

I have a talk, "[Buried in Technical Debt](/buried-in-technical-debt)," that further defines technical debt and ways to
handle it in a project.

## Responses to technical debt

I have spent time on several teams that had let their technical debt grow into large projects. Thinking about those
times, I considered the reasons that some people may think that can lead to these situations.

### "Maintenance does not make money. Cool features do."

Maintenance tasks may not seem to give us anything that we can sell to a customer in the short term, but losing sight of
important maintenance tasks can really cost you in the long term.

Consider a kitchen, which seems to only exist for you to prepare and eat food, right? Why go in there only to spend time
cleaning it up? Well, we acknowledge that, if we do not clean up after ourselves periodically, then we get a mess that
is too overwhelming to clean, and it is going to make us sick living in it.

Relating that to a web app, you may have an app that is build on top of a framework where new major versions
consistently are released, usually on an annual basis. Imagine you have an Angular 2 project, and you use
the [Angular Update Guide](https://update.angular.io) to plan out the effort of handling all possible breaking changes
with each new major version that is released.

It makes sense that, as the gap between releases increase, the list of things to verify and modify gets larger, as many
new breaking changes are unique to each version and no time is saved by waiting and only updating once, especially as it
is recommended that you always only update one major version at a time to make sure your application stays in a good
state and controlling for the amount of things that need to change at any given time. As a result, the effort of
updating Angular 2 to each newest major version as it is released should be almost exactly the same as the effort of
waiting and performing a huge update of 14 major versions all at once; however, you are less likely to get approval to
take time away from product work with a huge, overwhelming project, and working on things a little bit at a time could
have been much more manageable and acceptable.

Considering how older versions of frameworks lose support for security and stability updates, it can be a very
frightening problem to suddenly realize that you need to be current after having not prioritized it. So even if you may
feel that you do not need the helpful new features that major framework updates will provide, the hidden and surprise
cost of missing out on a vulnerability fix is a serious issue.

### "I'm aware of our issues, but I can't convince anyone to take action."

It can be disheartening to know there is a problem that needs attention that others cannot see or believe to be
important.

Think about risk in terms of the perspectives of other roles and ways in which your team can be more efficient in the
long term if you can fix some of those issues soon. Think about the security threats and the customer support nightmares
that we can alleviate and restore confidence with our customers.

As new work comes up, try to push back against requests to rush something out in an incomplete state that can cause
issues in the future. Advocate for the software, and try to leave things better than you found them when appropriate.

### "We don't have the time with other urgent priorities. Maybe we'll come back later."

As urgent priorities are resolved, more urgent priorities will arrive. It is rare for there to not be something that
feels urgent, so waiting for that moment when there is nothing urgent is not a good strategy. Also, when people say that
we will come back to something at a later time without actually making specifics about how that will work specifically,
it is extremely likely that "later" is a time that never comes. We can't do everything at once, but we need to make a
plan.

When considering, technical debt tasks are often considered Important but Not Urgent when classified
using an [Urgent-Important matrix](/urgent-important-matrix), so time should be scheduled for it. Make some kind of
budget and spend time on it at a regular rate. Maybe this looks like picking up 1 card that is tied to engineering
maintenance for every 3 or 4 cards that came from product management priorities, or maybe this looks like about 20% of
time spent on engineering tasks spent on maintenance.

### "We assembled a perfect team of perfect engineers so we don't need to do this."

Nobody's perfect. We are always learning, and our partial understanding of the world is always improving. It is not
uncommon for engineers to find old code that they themselves had written and to wonder how they could have written
something so inferior to what they could write now.

Regardless of perceived skill level or experience of engineers on a team, there is always a benefit to getting multiple
perspectives as the code is being written to get the best quality ahead of time, so
consider [mob programming](/mob-programming) or pair programming to shift the code review process earlier.

### "Our technical debt is so out of control, we need to just rewrite the entire thing."

I have been a part of multiple teams that decided that their technical debt had seemingly become so out-of-control that
there was no choice anymore but to rewrite the entire project and start over.

Sometimes, this is actually required, such as when platforms like Adobe Flash or Silverlight become impossible for users
to use. But software rewrites are always inherently very risky, very costly, and can leave a team with more harm and
headaches than they had before.

Regardless of how big the problems seem to be, there should always be an effort to refactor incrementally over time.
Refactoring should never actually change the functionality, and we can use our tests to ensure this. This is tricky for
legacy code projects without much test support, but aspire to write tests at the lowest level of the testing pyramid
that is feasible for that part of the app and that provides valuable feedback for what you are trying to test.

## Most important lessons I have learned

In my time managing technical debt in software projects, I feel that the following considerations have been important to
take away:

- Review technical debt occasionally and consistently
- Keep dependencies up-to-date
- Get others on board by understanding the value they can expect
- Improve quality through collaborative working
- Favor incremental refactoring over full rewrites
- Use test suites to refactor safely

[^1]: Ward Cunningham first used his debt metaphor in
"[The WyCash Portfolio Management System](http://c2.com/doc/oopsla92.html)" and he made clarifying remarks in
"[Ward Explains Debt Metaphor](http://wiki.c2.com/?WardExplainsDebtMetaphor)".