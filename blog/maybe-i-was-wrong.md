---
title: Call Me a Convert (Next.js Part 2)
date: 8/6/2023
---

Huh, well who would've thought that. I used Next.js again...literally right after I got finished writing a blog about
how cumbersome it was. Sometimes it really is better to just not open up your mouth too soon or don't count your eggs
before they hatch, or any other euphemism that may work.

While I'm still not totally sold on Next, I do think I've grown a relative appreciation for what it's doing.

### Let's Zoom Out

I mentioned on the last post that I had a project that I was more interested working on, but needed this site up and
running. Well it's finely complete! See link on main page to the Boa Debugger POC.

I've been playing around with the idea of doing a full debugging suite ever since I saw a conference talk where I guy had
setup a site to explain JS's call stack. It was really cool in the presentation, but when I went to the site, it wasn't
there anymore. It was disappointing to say the least, but it also really made me want to try building something similiar. Of
course, this all went on the back burner.

### And time passed

Life can be hectic sometimes. And things that are put on the back burner can really start to disappear, which was the case
with trying to reimplement that call stack tool. And then, someone offered to make a new website for Boa, complete with
new React-based Boa Playground.

Fun fact, Boa has a really unique functionality being written in Rust: it is able to be compiled to WASM and shipped to the
browser. So the engine pretty much natively (there is obviously a little configuring), can be compiled to WASM via wasm-pack.
It's really f-ing cool if you haven't seen it, and you should definitely stop by boajs.dev to check it out.

Anyways, I had never really thought about updating the old playground, but I was immediately intrigued. What else could we do
to the playground besides just converting it from a HTML file to React. If we were going to be switching fully over to React,
why not really push the boundary and make a playground/application-suite that really shows off the engine functionality.

The thought process about this revamped playground is actually coming from multiple angles...not all necessarily good: (1) it could help
new contributors get more acquainted with the engine, (2) it's an easy place for someone who may have found a bug to do a
little diagnostic work expediently, (3) it would help build out Boa's WASM shippable with, ideally, a meanful showcase of
functionality, (4) it could provide a learning platform for those new JS/TS programmers who have never gotten too deep
into how a JS Engine functions, and (5) it's just really, really, really f-ing cool.

### Wait, where was I?

Oh no, I'm ranting on an aside. Okay well maybe look forward to a completely different blog post on that. Basically,
I got a shot of adrenaline to try and do that work again.

The plan was simple: first, create a github.io dev site; second, refactor boa's trace functionality and expose it to
the WASM package; and finally, build the tool and deploy it to `gh-pages` from the main site.

So I began on a Wednesday hoping to get a quick Markdown blog up and running in about a day and then spend my weekend
working on the project with the goal of finishing before weekend was up.

...

It was with that mindset that I ran face first into the wall that was Next.js.

I had heard great things about Next and had seen it thrown around quite often in some YouTube videos, so I thought it
would be a great option to put up the site quickly.

Yes, I know I could have just done Jekyll. Yes, that ultimately probably would've been faster. But "to hell with Ruby",
was my thought at the time. "I was just working on adding some functionality to a Docusaurus site, and that was
painless to pick up. How bad could Next be."

All of a sudden there were mentions of Layouts, relatively uninformative docs that only technically cover ".jsx" and
gloss over ".tsx". And to top it off, I added on trying out Tailwindcss to the entire experience.

Aside: It would be an understatement to say that the documentation may really and trully be holding Next.js back. I
don't know if their Tech Writers aren't being supported by Vercel or they just really and truly don't care about
their docs. Probably the latter given the qualifications I've seen on recent job postings (written with a large degree
of salt).

### Positivity Incoming

I solemnly swear I'm going to write something good about Next.js.

To fast forward some (just go read my other blog for context here), I make it through creating and deploying the site,
and I'm mostly just annoyed. But the thing is that towards the end, it all started to make a little sense: oh, here's
where I can use normal React vs. Next's framework; oh wow, Tailwindcss is really nice...like really nice...this is
supported out of the box?

There are definitely parts that, even now, I'm apprehensive about. I also don't think I really by into the `app` router
and server-side rendering. But on the other side of that, I get a pretty neat and intuitive page router, Tailwindcss
basically out of the box, and -- well -- React.

I guess what I'm basically saying is: Next.js is kinda conveneint and easy to getting up off the ground and running.

### The Real Truth

So I had actually made a rather greedy plan: I was going to make the core dev/blog site in Next, and then try out
Solid.js or Svelte for the new Debugger.

That was the plan, so I spent the better portion of Saturday afternoon outfitting a branch on my local clone of Boa and
got the hooks working.

All that was left was to make the actually site/web app. So I loaded up solid-start, played around with the fundamentals
a bit, and then went to go download monaco-editor.

...that was in React.

Oh, well that won't work. I had seen one earlier this week in Svelte, so let's just pull up the one for Solid.

Oh, there it is! Posted by someone with an @uwu namespace...and the props are, uh, really annoyingly named...

And this my dear readers became the classic story of mature ecosystems being hard to step away from.

I was left with two options: try out Svelte or just load the thing into Next/React and go to town.

This right here is where I surprised myself.

Quite honestly, I should have thought: damn, solid won't work for this one, but that means I can try out Svelte, so
no harm.

But what I really thought is: huh, I can just load this up in a new Next app and put together in no time.

And so, I did.

### In Conclusion

And so, I guess I'm a convert.

Yes, I can actually see myself using Next.js again. Hell, it may even be my go to for the forseeable future.

Do I think it's perfect? No, and I'll keep looking out for something else.

Maybe, Solid's ecosystem will get better or this project wasn't well suited towards its strengths.

Maybe, I'll try Svelte and it's will make me want to never touch React again like Tailwind has made
me never want to touch Sass again.

Only time will tell.
