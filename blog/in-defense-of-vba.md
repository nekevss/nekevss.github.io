---
title: In Defense of VBA
date: 1/14/2024
summary: A small write up about just how useful VBA can be in a constrained environment.
---

## Disclaimer

The below is a post I made on `dev.to` prior to making an actual portfolio/blog site. To celebrate adding a RSS feed. I thought I'd post it on my actual blog. It's a humble opinion focused on the utility and functionality of VBA.

## Introduction

I feel obliged to begin my first post with mentioning this relatively cursed hill that I may be willing to die on.

## The early days

Let's take a quick detour to 2019, the pre-covid times. I had just received my graduate degree and was looking for a job so that I could pay rent. At this point, I had just started dip my toes back into the coding world but was still rather new, so I accepted a role involved in merch operations.

When I first arrived, the first thing I noticed was Excel. I mean, it was EVERYWHERE. There were three different types of export sheets for my role, along with several other premade configurations. Beyond these sheets, there were even more excel sheets made to interact with the export sheets and sheets that could assist with reporting and various other tasks.

The task that stood out the most, however, was an Excel "tool" I had to use regularly throughout the day. This sheet consisted of copying and pasting information from the export sheets into the tool -- this was the case whether there was 1 tab or 50 tabs, mind you -- pulling down preset excel formulas to generate some HTML, and then copying that generated html into a notepad `.txt` and saving it as an HTML file to work in bulk. If reading that was just as bad as typing it out, imagine doing that SEVERAL. times. a. day.

It drove me up a wall.

And when I felt like I was just about at my wit's end as I struggled with Window's File Explorer for who knows how many times that day, I learned of VBA. So I spent 3 hours learning the basics while quickly putting together some macros and voila all I had to do was click one of those outdated button graphics in excel and VBA would fetch the data from the export, generate the html and file, and even open it in Chrome for me. What was probably taking ~20-30 minutes of minor work throughout the day, disappeared with one click.

Here lies what may be one of VBA's greatest strength in my view: due to Excel's ubiquity, VBA can have tangible and immediate benefit to work processes.

## Applications of VBA/Excel over the years

This is probably about the right time to mention that I would not advise many people to actually use VBA. There's a lot of good VBA and bad VBA out there (I'm willing to admit that most of mine probably falls in the latter). It's also arguably a security concern.

But there is one particular use case I have found it useful for: as a CLI application's "GUI"/user-facing wrapper.

Pretty cursed, right?

But it's actually more applicable than you may think. There is one thing that VBA and Excel are excellent and also far and away the best at in my mind: writing and executing batch files with no training involved.

How is that the case?

Well let's jump back a bit: about two years ago, during the height of the pandemic, I get added to a Team's meeting with some senior dev, my manager, and another person on my immediate team. I was brought on, as one might imagine, as the resident geek. The reason: the senior dev was passing the responsibility of a report that people kept reaching out to him to complete that required using a CLI application.

The senior dev then spends the next 30 minutes going over an excel sheet with a premade formula that would need the necessary values copy and pasted, then have a premade formula dragged down to generate some scripts that could then be copied and pasted into a batch file to run the report via cmd...

...to a group from merchandising...

There was not a lot of confidence in how well all the steps had been conveyed. My coworker said that she'd give it a shot, but from what I recall, the outlook around taking this over wasn't bright.

...

...

So I spent the 15-20 minutes directly after the meeting putting together a macro that could do the exact same thing by just pushing a button that would write the batch file for the user.

And this is where I think that VBA and Excel shines, due to how common Excel is and how familiar it is, you can provide an accessible way for the users to interact with a CLI tool with minimal training in a manner that is quick, comfortable, and user-friendly.

## Conclusion

Is VBA a pain to work with and outdated? Yes, probably. But the impact that it can have on daily work load and it's ability to make a CLI application accessible to just about anybody in an organization should definitely not be overlooked.

Post-Script edit: Shout out to all those early to mid 2000s excel/vba forums.
