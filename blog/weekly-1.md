---
title: Weekly Update 1
date: 8/24/2023
summary: A weekly update on things
---

I'm going to try and write a post like this every week or two. Why? As personal encouragement
to keep writing and blogging. Hopefully in the future I'll be able to write something
more meaningful. Let's think of them more as a weekly diary than anything of use.

## Some Forest Themes

Let's start out with the banger. I made my own theme for VS Code(unreleased)! I've called
it Foggy Forest based off the inspirational photo and color palette. My hope is to work
on a Fall Forest and Winter Forest theme as well. But there are also other things to work
on (see below) and I still need to work out the kinks of Foggy Forest. But I'm really
looking forward to completeing them. Who knows, maybe I'll actually release them.

## Debugger Update

After some clean up, I submitted a draft of providing access to the trace via hooks. The
feedback that I got was great! At least, what feedback I've gotten to this point. It was
primarily to switch to a trait based approach, which is definitely more streamlined.

The trace works in more of an event-based manner, at least how I imagine it. We reach an
execution point and we emit a "message". But with switching to a Trace and the added
functionality and provided implementation, I'm curious if instead of emitting precomposed
messages that emitting raw data would actually be better. The messages then could be provided
via some defaults.

It opens the door on customization while keeping the utility. However, is there such a thing
as providing too much access to information.

To be determined.

## Temporal Work

After maybe a month off, I started back up working on the Temporal branch. Hopefully, no one
has started within the last month. It felt good. I'm actually making pretty solid progress
on it. I'm thinking an early version that could be merged is maybe a week to a week and a half
away.

I don't expect to have it 100% complete. But I'm honestly concerned with how large the changes
are starting to become. I have this idea in my head to push for it to be merged ideally in
September that way some of the unimplemented aspects are available for Hacktober for potential
new contributors.

The other maintainers may disagree with doing it that way though, which would be understandable.
I'm planning to work on it either way. I would also like to offer someone else the chance to
contribute on this project in a manageable like I was able to at first with `Array.prototype.at`.

## New Rust Version

Okay, so this one is actually exciting! But kind of painful. The new version of Rust was released!
And a new wave of Clippy lints came out that Boa's CI ran into face first.

The big one: Missing panic docs.

Honestly, this one is deserved. We use expect pretty liberally in the engine where we know the value
cannot fail per spec, and it failing would be an implementation error. The question I had was: do
we update the docs to note the panics if they should not happen in theory or do we update the code
and adapt the errors to a runtime JavaScript `ImplementationError`.

And the other one, which is a super interesting change and way of thinking about writing rust.

Let's look at the below example (which I may have to change since this one may be too simple).

```rust

fn main() {
    let cars = vec!["soul", "F250", "prius", "mustang"];

    for car in cars.iter() {
        println!("{car}")
    }
}

```

Did you catch it? Neither would I!

```rust

fn main() {
    let cars = vec!["soul", "F250", "prius", "mustang"];

    for car in &cars {
        println!("{car}")
    }
}

```

Instead of the use of `iter()`, the change is to recommend leading with a `&`. It's an interesting change
that is then pushed even further. For instance:

```rust

struct Dealership {
    cars: Vec<&'static str>
}

fn main() {
    let cars = vec!["soul", "F250", "prius", "mustang"];

    let dealer = Dealership {
        cars
    };

    for car in dealer.cars.iter() {
        println!("{car}")
    }
}

```

This example is also included in the change! But instead of just a borrow(`&`), we deref(*) cars and
then borrow it (&), which results in the below `&*`.

```rust

struct Dealership {
    cars: Vec<&'static str>
}

fn main() {
    let cars = vec!["soul", "F250", "prius", "mustang"];

    let dealer = Dealership {
        cars
    };

    for car in &*cars.iter() {
        println!("{car}")
    }
}

```

It's definitely a change that may take some time for me to get used to it. But so far, I think it's
pretty nice.
