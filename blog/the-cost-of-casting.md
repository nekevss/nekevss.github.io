---
title: The cost of casting.
date: 2/4/2024
summary: Assembly for Dummies - Taking a targeted look into the cost of casting.
---

What is the actual cost of casting?

My goal of writing this is not to write some grand essay or thesis on casting
values between primitive types. The answer may also be quite obvious and easily known
to some that have a bit more experience. In fact, it may be better to title this
simple assembly for dummies.

I have a very specific use case, and I wanted to take deeper look at the assembly. My
targeted question is: would it be more efficient to pass a u32 into a function and
cast it to a f64 value or just pass an f64?

Also known as: just how much does the compiler optimize this case.

So let's take a look at the example code below. It's nothing too special. We have our
variables. In one case, we want to complete some addition. In another, we want to
complete some addition but we have to cast our u32 first.

```rust

fn main() {
    let random_base: f64 = 3.5;
    let val_f64: f64 = 2.0;
    let val_u32: u32 = 2;

    let result_f64 = calculate_with_f64(val_f64, random_base);
    let result_u32 = calculate_with_u32(val_u32, random_base);

    // assert!(result_f64 - result_u32 <= f64::EPSILON);
}

fn calculate_with_u32(val: u32, arbitrary: f64) -> f64 {
    f64::from(val) + arbitrary
}

fn calculate_with_f64(val: f64, arbitrary: f64) -> f64 {
    val + arbitrary
}

```

So how exactly does that look when we plug it into [Compiler Explorer](https://godbolt.org/)

```asm

.LCPI0_0:
        .quad   0x400c000000000000
.LCPI0_1:
        .quad   0x4000000000000000
main:
        push    rax
        movsd   xmm0, qword ptr [rip + .LCPI0_1]
        movsd   xmm1, qword ptr [rip + .LCPI0_0]
        call    example::calculate_with_f64
        mov     edi, 2
        movsd   xmm0, qword ptr [rip + .LCPI0_0]
        call    example::calculate_with_u32
        pop     rax
        ret

example::calculate_with_u32:
        movaps  xmm1, xmm0
        mov     eax, edi
        cvtsi2sd        xmm0, rax
        addsd   xmm0, xmm1
        ret

example::calculate_with_f64:
        addsd   xmm0, xmm1
        ret

```

Well there's our answer. There's definitely more instructions to a conversion. What's interesting is just how many
are actually added in the process. The conversion actually costs 3 instructions: moving the f64 in xmm0 -> xmm1, moving
the 2 in edi into eax, and the actual conversion itself.

Whats even more interesting is what happens if we do a small change in the rust code and call `calculate_with_u32` before
calling `calculate_with_f64`.

```asm

.LCPI0_0:
        .quad   0x4000000000000000
.LCPI0_1:
        .quad   0x400c000000000000
main:
        push    rax
        mov     edi, 2
        movsd   xmm0, qword ptr [rip + .LCPI0_1]
        call    example::calculate_with_u32
        movsd   xmm0, qword ptr [rip + .LCPI0_0]
        movsd   xmm1, qword ptr [rip + .LCPI0_1]
        call    example::calculate_with_f64
        pop     rax
        ret

example::calculate_with_u32:
        movaps  xmm1, xmm0
        mov     eax, edi
        cvtsi2sd        xmm0, rax
        addsd   xmm0, xmm1
        ret

example::calculate_with_f64:
        addsd   xmm0, xmm1
        ret

```

It's actually fairly interesting in my mind, probably from utter lack of experience,
but we can really see some fascinating optimizations around computers.

## Some Questions and Thoughts

- There's something weird happening with storing in `edi` over `eax`
- The order of the constants inverted between .LCPI0_0 and .LCPI0_1 for no apparent reason.
- Compilers are really, really cool

I can't help but wonder exactly why 2 is stored in `edi` over preemptively storing the
value into `eax`. If I had to take a blind guess, it may be that `rax` or `eax` are
reserved with the call instruction. That or it's bad practice as some functions may
push `rax` onto the stack (even though we can see that ours don't).

Preemptively pushing to `eax` would save the `mov` from `eax` to `edi` in this scenario,
but in larger codebases, we may not know if the callee invokes `push rax`, which would
than corrupt `eax`.

It could also be that `eax` is reserved for function parameters. I have seen that mentioned
online, but no way of confirming either one really.

Side note: for those not entirely familiar with / newer to assembly (like myself) `eax`
and `rax` are basically one in the same ... but also not. `eax` is actually the lower
bits of `rax`

The below is essentially a simple ASCII depiction of the `rax` and `eax` registers.

```txt

 +-----------------------------------------------------+
 |                         rax                         |
 +--------------------------+--------------------------+
 |                          |                          |
 |                          |                          |
 |                          |                          |
 |           eax            |                          |
 |                          |                          |
 |                          |                          |
 |                          |                          |
 +--------------------------+--------------------------+

```

You learn something new everyday!

Now as far as the change between the local constant LCPI0_0 and LCPI0_1. It appears that LCPI0_1 is called first in
both compiled assembly outputs. The difference is the functions they are being called for.

Another blind guess, local constants are being tracked on a stack and then unwinding the stack is how they are established
and labelled. The jury is also out on some small optimzation, but it's probably just a stack. Interesting nonetheless!

## Conclusion

Assembly is actually pretty cool. I don't think I would ever want to write anything in pure assembly. But it really
allows you to appreciate what the compiler is doing and peek behind the frontend of some of these languages.

Who knows, maybe there's more small posts like these to come.

Until next time!
