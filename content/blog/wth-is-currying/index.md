---
title: What the heck is Currying? ft. JavaScript
date: "2020-03-18T13:15:03.284Z"
description: "Currying is an essential part of Functional Programming, let's see what the heck is it."
---

# 🍛 What the heck is Currying? ft. JavaScript

I know that you’re salivating, perhaps the dev world has become too delicious with JAMStack and now I’m talking about curry? So before you starve to death with these wonders of dev world let me introduce you to what currying is in general.

Currying was named after [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry), what currying essentially means is taking a function which takes multiple parameter and converting it in to a function which only takes one parameter and returns a functions which then takes the next parameter.

Currying is not JavaScript specific it is also a mathematical things just like `function` [ Remember good ol' f(x)? ]

```javascript
// Not curried
const add = (x, y) => x + y

// Curried
const add = x => y => x + y
const addFive = add(5)
addFive(6) // 11
```

As you can see using Currying we were able to have functions that are more definite in what they do, this in turn greatly simplifies our code.

With the help of currying we can essentially pre-load functions with an argument in order to receive a new function that remembers those arguments.

Let's make a function that can help us in Currying in other functions.
Now pay close attention,
This function is going to take a function `fn` and return a function `$curry` that takes a single argument and performs the operation of the function `fn`.

Let's do this step by step

```javascript
// This function takes a function `fn` as a parameter.
function curry(fn) {
  // Let us determine the arity of `fn`
  // Arity is the number of parameter taken by `fn`
  const arity = fn.length

  // ...
}
```

```javascript
function curry(fn) {
  const arity = fn.length

  // Let's return the $curry function.
  // Let's have all the arguments ( ...args ) being passed in $curry
  // Remember we are returning a function so we can pass args in it.
  return function $curry(...args) {
    // ...
  }
}
```

```javascript
function curry(fn) {
  const arity = fn.length
  return function $curry(...args) {
    // Let's return the function with all the passed arguments.
    // This code maybe stupid until you read the next para...
    return $curry.bind(null, ...args)

    // ...
  }
}
```

We can't just keep returning functions and functions we need a result. Let it be adding digits together and getting an output.

Let's add a condition for this.

```javascript
function curry(fn) {
  const arity = fn.length
  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args)
    }
    return fn.call(null, ...args)
  }
}
```

By comparing the length of the arguments `args.length` we can know how many arguments have been passed in the function.

Things will become more clear as I demonstrate how we are using the `curry` function to curry other functions which take multiple parameters.

For the sake of simplicity let's take an `add` function which takes 3 values (parameters) and add them together.

```javascript
const add = (x, y, z) => x + y + z

const curriedAdd = curry(add)

const addFive = curriedAdd(5) // args.length = 1

const addFiveAndSix = addFive(6) // args.length = 2

const output = addFiveAndSix(8) // args.length = 3

// The funciton can be called now as `args.length` < arity is false.
console.log(output) // 19
```

`args.length` is able to give us the number of arguments because of `return $curry.bind(null, ...args)` . The `$curry` function contains all the arguments passed above the any given instance.

I hope this clears everything about how the function is working. If you have any other doubts you can tweet them to me.

( @[yashguptaz](https://twitter.com/yashguptaz) )

## Adding Taste to your Code.

Currying allows a wonderful phenomenon called partial application.
According to Wikipedia partial application can be defined as -

> Partial Application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

The definition is pretty straightforward, we reduce the number of parameters a function takes by currying it.

Let's `curry` a well known function `map` and see how it changes our life.

```javascript
// Before Currying
const allTheChildren = elements => map(elements, getChildren)

// Let's curry map
const map = curry((fn, f) => f.map(fn))

// AFter Currying
const allTheChildren = map(getChildren)
```

The effect becomes really obvious when you are using `map` multiple times. And that's how we reduce a ton of boilerplate code.

You can curry pretty much any function that takes more than one parameter. And use Partial Application.

Isn't it amazing? Although I am myself a beginner at currying I found it exciting to share. If you want to share something or ask a question or would like to solve or understand something together , you can hook me up on twitter. I am [@yashguptaz](https://twitter.com/yashguptaz) on the internet.
