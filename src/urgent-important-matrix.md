---
title: Urgent-Important Matrix
description: The Urgent-Important matrix is a decision matrix that is used for time management.
date: 2023-03-16
date-updated: 2023-07-01
layout: article.njk
tags: [ thoughts ]
---
The **Urgent-Important matrix** is a decision matrix that is used for time management. It is a useful tool for managing an increasingly large backlog of to-do items that needs to be reduced to a more manageable list. Evaluating work in the two-dimensional space of being either urgent or not urgent and also being either important or not important produces a matrix with four quadrants.

<table class="urgent-important-table">
<tr>
<td></td>
<th scope="col">Urgent</th>
<th scope="col">Not Urgent</th>
</tr>
<tr>
<th scope="row">Important</th>
<td>Do it</td>
<td>Schedule it</td>
</tr>
<tr>
<th scope="row">Not Important</th>
<td>Delegate it</td>
<td>Drop it</td>
</tr>
</table>

This table is sometimes named after a person who is quoted explaining the value of the decision-making parameters used in the matrix, but as that person was merely paraphrasing another unnamed person[^1], I choose to use a generic name that does not credit any one person.

## The Difference Between Urgent and Important

When first examining the urgent and important classification, the difference between them might not be immediately obvious. One may think that some tasks simply are important because they are urgent or maybe that tasks are important because of how urgent they are. But understanding the intent behind this idea can help clarify how they are meant to be different.

Tasks that are urgent are associated with an approaching deadline. Urgent tasks may or may not be important. The work must be done soon, but who completes the work and the required quality of the completed work can vary.

Tasks that are important are associated with the purpose behind the work or contribute to the value of the project in a significant way. Important tasks may or may not be urgent. The work must be done well, but how soon it must be done---if it has a deadline at all---can vary.

## Quadrants

### Urgent and Important

The original idea of classifying tasks is inspired by a paraphrase that most tasks are either urgent or important and are either rarely or never both.[^1] It is probably true in many cases that a given task is technically a bit more urgent than it is important or a bit more important than it is urgent. If there are tasks that truly seem to be both urgent and important, then these are the top priorities that must be done as soon as possible.

On a personal level, this may look like physiological needs, like hunger and sleep deprivation. No matter what other tasks on which we may want to work, if we are not eating food, drinking water, and getting rest, we will not be healthy enough to give of ourselves as much as we could if we took care of ourselves first.

On a software team, this could be coming up with a fix after a bad deployment took the production application offline and is preventing users from being able to access the app. Bringing the application back online is both urgent and important because every minute in which people are unable to use the application, the greater the satisfaction will drop and the less likely they will want to remain consumers. Addressing this is the top priority for the team until it is fixed.

If work can only be addressed once it becomes both very urgent and very important at once, and the work stream becomes an endless supply of such tasks, this could lead to overwhelming stress and eventually burnout. If too many items are categorized this way, it may be good to ask if this is really the case every time and if any requirements can be loosened. It would also be good to make time to ask why so many tasks are escalating to this point and if the overall system could be improved to improve the stability and reduce stress of the platform and for the workers contributing to that platform.

### Important but not Urgent

Tasks that are more important than they are urgent can be delayed and scheduled for some time in the future. Of course, this does not mean to put them off indefinitely, because there is still associated value with this item, but the deadline may be far into the future or may not have a deadline at all. These tasks can wait until there is a good time to work on them, and we should make sure that we are making time for picking up these tasks regularly.

On a personal level, this would look like cleaning up after oneself and regularly cleaning and maintaining their living areas. It may never be the most prioritized thing to get done, and it can easily be scheduled for a later time, but if it is not done regularly, it will result in health problems, because living in an unclean environment could lead to illness or inability to focus.

On a software team, most new product requirements would qualify under this label. The work that is recommended by a product manager is believed to be the work that can best help the customers and the product, and there will usually be some estimate of effort requested for planning purposes, but in many cases, even when a deadline demand is made, there can be an appeal process to push the deadline some amount of time to make sure that what gets released is of the best quality it can be; if teams are expected to treat new product requirements as both urgent and important, then there will be a risk of a full stream of incoming work that is both urgent and important as the defects from the work that was rushed out by a stressed out team begin to be reported by customers.

Work that is needed to pay back on [technical debt](/technical-debt) will also usually belong in this quadrant, and making time to perform that technical maintenance will be helpful to mitigate future potential issues to the platform.

### Urgent but Not Important

Tasks that are more urgent than they are important can be delegated to another person if there are any issues with completing them on one's own.

On a personal level, this can be represented by the notifications on a phone or computer or a new email from a newsletter that is seldom read. Because that notification sound could possibly be coming from an important person for an important reason, it will be difficult to not completely lose one's context in whatever they are currently doing until they confirm the source of the notification, because of the urgency that the alert commands. And that notification might actually be important but one may be away and unable to directly help.

On a software team, this quadrant may be represented by an instant message from someone who needs an answer to a question very quickly. It is not clear what the purpose behind the question is, and regardless of whether you are at your desk, you may not immediately have the answer. If you are being asked something, you should respond promptly and keep communication going, but this could be a good time to bring someone else in who can help answer the question. Depending on just how urgent the question is, this could even look like a quick video call that you can help coordinate for multiple people to join; if the urgency is not quite that high, it could be forwarding the message to someone else who can better help answer the original question.

### Neither Urgent nor Important

If a task does not truly feel urgent, and it also does not feel important, then the question needs to be whether that task deserves one's continued attention or if it can be safely deleted and disregarded.

On a personal level, one may feel like there are many things that they must do because they have set goals for themselves and they are worried about falling behind the milestones that they set for themselves some time before. While having an idea of a goal can be a good thing, if a particular goal is causing too much burden, it may be worth it to consider if the goal needs to be revised, with all tasks that rolled up into that goal being safely deleted from one's to-do list.

On a work project, this will present as cards on a board that have existed for over a month that have never started progress. It was written at one point because it was thought to be important and related to the product goals. But for some reason, like a t-shirt you swore to yourself you would wear that you keep passing over every time you go to the closet, it never feels like the right time to pick up that card. If enough time goes by and the conversation is had whether to start working on something, and, every time, it is decided that a card is consistently not important or ready, then it may be very helpful for the team to delete that card from the list and write it up again if it becomes important enough. It can be a good thing to make sure we are tracking work on which we assume we will want to work, but if that assumption feels no longer true, we can free ourselves from having to think about something that seems to be irrelevant by deleting it for now.

## Further reading

- [Wikipedia](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method)

## References

[^1]: ["What Is Important Is Seldom Urgent and What Is Urgent Is Seldom Important"](https://quoteinvestigator.com/2014/05/09/urgent/). *Quote Investigator*.