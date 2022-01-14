![Banner Logo](https://github.com/fairfield-programming/eaf-linter/blob/master/.github/banner.png?raw=true)

![Code Grade](https://img.shields.io/badge/dynamic/json?color=green&label=Grade&query=grade&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffairfield-programming%2Feaf-linter%2Fmaster%2F.github%2Fmetrics.json)
![Dependencies](https://img.shields.io/badge/dynamic/json?color=blue&label=Dependencies&query=indirectDependenciesCount&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffairfield-programming%2Feaf-linter%2Fmaster%2F.github%2Fmetrics.json)
![GitHub repo size](https://img.shields.io/github/repo-size/fairfield-programming/eaf-linter)
![GitHub](https://img.shields.io/github/license/fairfield-programming/eaf-linter)

## Features

### [Fully Featured Code Grading](https://github.com/fairfield-programming/eaf-linter/tree/master/src/reporter)

_Knowing if you need to work on your code is important-_ that's why we grade your code automatically. But, unlike other code-grading solutions, we let _you_ choose how you want to be graded. If you project isn't supposed to have a bunch of comments, why should your grade drop because you don't have enough comments? We beat our competitors because _you get to choose_ what you want to work on.

### [Lightweight, Feature-Rich Testing Suite](https://github.com/fairfield-programming/eaf-linter/tree/master/src/tester)

Our testing system gets as close-to-the-metal as possible. What this means for you is that the tests run fast, and since they run on JavaScript's V8 engine, everything you expect to happen, will happen. Nothing can be simplier than writing tests for the EaF linter, its as easy as writing things in plain English. Don't believe me, look at the code below!

```javascript
describe(`A simple test!`, () => {
  expect(32 + 8).toBe(40); // passing
  expect(20 * 40).toBeGreaterThan(40 * 40); // failed
  expect("New String").toExist().and().length().toBe(10); // passing
});
```

### [Code Linter and Smell Detector](https://github.com/fairfield-programming/eaf-linter/tree/master/src/linter)

Our code-linter is built using an Abstract Syntax Tree approach. This allows for the code to be quickly and easily restructured into a more performant and readible program. Our linter also supports custom piping. This means that users can define scripts tell how they would like the resulting code to look. If you don't want to use custom scripts, we already have tons of prebuilt scripts just for you.

### [Customizable Beautifier](https://github.com/fairfield-programming/eaf-linter/tree/master/src/prettier)

We have one of the most customizable code beautifiers in the JavaScript world. You can choose how you want spacing to work, if you want semicolins, how comments should be structured, how variable naming should work, etc. And, since our beautifier works alongside our code linter, you can also choose things like: should all methods be changed to arrow functions? should only `let` and `const` be allowed as variable declarors? should object properties be arranged by alphabetical order?

### [Performance Analysis Tool](https://github.com/fairfield-programming/eaf-linter/tree/master/src/performer)

Performance anaylsis is very important, especially if you are managing a ton of data that has rapid changes to it. That is why EaF offers some of the most robust and detailed tools for measuring your codes execution time. We will run it in thousands of test cases, and you can setup different scenarios to make sure that the code you put out, stays on top.

## For Github Actions

When we were building EaF, we realized that most of its users will want to use it for continous integration and development. That is why we are one of the first NPM packages that is designed not to be downloaded, you can just run EaF with the `npx` command- its that easy. You don't need any special command parameters or files that stink up your root directory- our impact is as minimal as possible. If you really want to customize EaF, just add what you want to the `package.json` file.

```yml
name: Lint, Prettify, Test, and Score Code

on:
  push:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Run the EaF Linter
        run: npx eaf-linter

      - name: Commit Changes
        uses: EndBug/add-and-commit@v7
        with:
          messages: 🦆 Code Fixed with EaF-Lint!
```

## License

Copyright 2021 Fairfield Programming Association

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
