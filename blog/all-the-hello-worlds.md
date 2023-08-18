---
title: An Abundance of Hello World's
date: 8/10/2023
---

Let's write some hello world's in a bunch of languages that I might be posting on. Why? Well I
definitely am not using this blog to test `pre` tag handlings and code themeing at all ... nothing
to see here.

## Rust

```rust

fn main() {
    println!("Hello World!");
}

```

## JavaScript

```javascript

// Yes, this is a bit much. But console.log("Hello World!") is boring.
(function() {
    console.log("Hello World!")
})()

```

## Go

```go

func main() {
    fmt.Println("Hello World!")
}

```

## Python

```python

# Meh, it's just python
print("Hello World!")

```

## C

```c

include <stdio.h>

int main() {
    printf("Hello World!\n")
    return 0
}

```

## Zig

```zig

// To be honest, still not sure whether `std` or `print` import is best.
const print = @import("std").debug.print;

pub fn main() void {
    print("Hello World!" .{});
}

```

Edit: Added Zig after I found the library
