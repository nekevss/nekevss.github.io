---
title: Next.js Blog Experience
date: 8/4/2023
---

So I'll be honest, I'm a bit late to the game when it comes to Next.js. Just about everyone is already moving on to the
`app` directory, and I'm still here working in the `page` directory.

I thought I'd start writing this blog involving my experience. Why? Well because I need an extra post in my blog to test
with, but also because the experience itself has been interesting...

### Expectations

To be frank, I may have chosen something that was much more heavyweight then I intended. I have a project that
I want to complete in mind, but I realized that I would need a personal dev website -- something I had personally
felt nonbeneficial -- to use as a staging ground. My goal was to put together something rather quick and
lightweight, but the entire process turned out to be a little more involved than that.

It's worth noting: I literally had just been working on a project using `docusaurus` as a framework, which comes
with many tools and utilities built-in. It was simple and felt fairly familiar with any changes needing to be made
done in React.

But Next.js was a whole new way to approach thinking about putting together a site. All of a sudden I was faced
with examples referencing `getStaticProps`and `getStaticPaths` that featured lovely imported functions that had no
further explaining. And naturally, I spiralled a bit with thought's like: "what the heck is a layout?", "Isn't this
thing suppose to involve React somehow?", "Okay, I see a slug. Wait, where the heck is this `getBlogBySlug` function".
Or chief among these: when the hell did web development become so complicated.

### And then some time passed

Of course, as I started to work my way through creating this site, everything started to click one by one. After that
everything resolved itself perfect and there were no more problems. The end.

That's not the actual case, but I have to wrap this blog up, because I would like to actually deploy this site.

There are some genuine cases where Next.js seems like it may be relevant. I'd imagine if I were working for a business
and had to build a more complex site, then I 100% understand the hype. After the learning curve, some the logic and
approach started to make sense. But it also kept running aggressively and almost unavoidably into TypeScript.

To be frank, there were entire aspects of Next.js and Layouts that I didn't really get into. Why? Because I wanted to
put together something small and quick, and the Next.js/TypeScript/Layouts combination seemed like exactly the opposite
of quick. And quite frankly, the clean documentation Vercel has put together for Next.js and Layouts only applies if
you are working in JavaScript.

## Outro/General Thoughts

I would like to come back to Next.js. I mean, I'll have to come back to maintenance this blog one day. There's a lot
here that I like and there's a lot here that feels good. But at the same time, there is also a lot here that feels like
overkill and programming for programming's sake.
