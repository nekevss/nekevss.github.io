---
title: Let's talk about Conventional Comments
date: 10/16/2023
summary: Conventional Comments are actually kind of nice.
---

While exploring GitHub repositories and their `README.md`s, you come across various concepts and
intrigues that draws you in. I'd be lying if I said I wasn't a kid in a candy shop in some sense,
looking at all the different treats there are.

Many of these treats will mostly boil down to an 'Oh, so that's how it is" or a "Huh, I need to look into
this more". But recently I happened upon one concept that is so benal and yet absolutely fascinating
and perfectly addressed one of the personal frustrations I had: [Conventional Comments](https://conventionalcomments.org/)

## The Code Review(tm): Death by a Thousand Cuts

Okay, so maybe this title is a bit dramatic and hyperbolic, but as with every myth or folk story, there is some
essence of truth that is trying to be addressed or a lesson that can be gleamed.

Code reviews are phenomenal. As someone who spent over a year+ programming before a code review, there was
literally nothing better or more eye opening than a code review. Being able to get feedback and approach some
a PR with some knowledge that you didn't have or an approach that you didn't consider is fantastic. It helps
you grow as an individual, but it also helps tease out the best solution.

Maybe the review comment is correct, maybe the current approach is correct, maybe a completely separate
approach is correct that can only be determined after teasing it out through discussion

(Quick aside: the review comment is almost always correct, but let's run with the above both for the flow of
this post but also the general argument I'm trying to make).

Collaboration and multiple points-of-view will always be better than a single person working alone and isolated.

But ah, here comes the trickiest and hardest part of all collaborative efforts: effective communication.

After all, a code review only goes as far as the lines of communication, which can become especially stressed
when outside factors are taken into account such as personality, background, language barriers, etc.

These factors can lead to all sorts of miscommunication from ambiguity that arises from general comments. What
was meant as a non-trivial comment could come off as a harsh criticisms or set unclear expectations of the
reviewee. In this sense, ambiguity is the enemy of both effective communication and collaboration.

## Mea Culpa

I, for one, enjoy adding comments about thoughts that pop up during review. While reviewing, I may read something and
think: huh, if we do it like x instead of y, than maybe z would be approachable easier. It's not that these are always
valuable or should be actioned. But every now and then, that thought might trigger a separate thought in the reviewee
that neither the reviewer or reviewee noticed at first.

It's not that this scenario happens often, but it can only happen under two conditions: a collaborative environment and
the reviewer sharing the thought. I personally believe that that makes those comments all the more valuable to share.

But here's we come back to the initial problem and trickiest of collab issues: communication.

How do you effectively share a thought without it coming off as a criticism or request for changes?

This was a small struggle for me. I found myself almost addicted to: "Just a thought,..." and "Huh, I wonder...", but
even that leaves some room for interpretation RE:outside factors.

## Conventional Comments

Conventional Comments provide a direction for review comments that are both concise, clear, and effective.

My goal here in this post is not to rehash their fantastic examples. But I will share the format proposed:

```md
<label> [decorations]: <subject>

[discussion]
```

While the above is more robust (understandbly so), the core to the conventional comment format, in my
opinion, can be simply put as:

```md
<label>: <subject>
```

The label here essentially functions to provide the context for which the statement is given in a
direct and concise manner. If a comment is a thought, then "thought:"; if it's a praise, then "praise:";
if it's a suggestion or issue, then "suggestion:" or "issue:". It's simple and provides little to no room
for ambiguity.

This little to no room for ambiguity is what makes conventional comments so special to me. It provides a
framework in which one can communicate in a concise and effective manner while providing the littlest
amount of room for interpretation.

In this sense, conventional comments cut through the ambiguity, which then allows the collaboration to
shine.
