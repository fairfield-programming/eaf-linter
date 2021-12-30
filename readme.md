![Banner Logo](https://github.com/fairfield-programming/eaf-linter/blob/master/.github/banner.png?raw=true)

![Code Grade](https://img.shields.io/badge/dynamic/json?color=green&label=Grade&query=grade&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffairfield-programming%2Feaf-linter%2Fmaster%2F.github%2Fmetrics.json)
![Dependencies](https://img.shields.io/badge/dynamic/json?color=blue&label=Dependencies&query=indirectDependenciesCount&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffairfield-programming%2Feaf-linter%2Fmaster%2F.github%2Fmetrics.json)

## Features

### Fully Featured Code Grading

### Lightweight, Feature-Rich Testing Suite

### Code Linter and Smell Detector

### Customizable Beautifier

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

      - name: Run the EAF Linter
        run: npx eaf-linter

      - name: Commit Changes
        uses: EndBug/add-and-commit@v7
        messages: 🦆 Code Fixed with EaF-Lint!
```

## License

Copyright 2021 Fairfield Programming Association

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
