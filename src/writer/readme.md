# Writer

EaF-Linter can generate documentation on the fly using your comments.

## How it Works

To start out, the writer system finds all of the block comments inside of the code. It then parses these comments through a 'gin', which removes all of the special characters that you may have put in through your comment style.

After the gin, the code is parsed through a syntax machine. This machine, depending on your documentation style, will highlight specific elements as documentation code. These elements will be saved, and then parsed as 'rich documentation elements'.

These 'rich documentation elements', are elements that may have special markup inside of them. That is why they must be passed through a markup machine. The markup machine parses HTML and Markdown by default, but you can change that in the settings.

The final product is an abstract syntax tree of documentation. This can be put through any of our systems, like our markdown or html generator, or can be left in a plain format and parsed by another program.

## Parameters

Our documentation system can generate whatever you want (besides puppies and unicorns). But, we first need to know what you want- so tell us with optional parameters inside of the EaF part of the package.json file.

### Markdown

Markdown is one of the simpliest markup languages that exists. The documentation for it is availible [here](https://www.markdownguide.org/) if you have never heard of it. We support this syntax inline with the block comment, and when it is parsed, it will be parsed into the syntax tree.

#### Markdown Syntax

```json
{
    ...
    "markdown": false
    ...
}
```

#### Markdown Options

- `true`
  - **default.** If set to true, EaF will parse all of your input values using a markdown parser. An example can be seen in the markdown section.
- `false`
  - If set to false, EaF will just parse your input values as plain text. Please note that if you have markdown in your comments, and this is set to false, you will have wierd, markdown-esque text in your comments.

### Parameter Style

#### Parameter Style Syntax

```json
{
    ...
    "paramStyle": "javadoc",
    ...
}
```

#### Parameter Style Options

- `plain`
  - Everything inside of the block comment will be used as the description of the function.
- `javadoc`
  - **default.** The block comment will be parsed using javadoc syntax elements like `@param`, `@version`, `@returns`, etc.
- `structural`
  - The block comments are parsed using structural syntax elements like `\class`, `\brief`, `\fn`, etc.

### Comment Style

#### Comment Style Syntax

```json
{
    ...
    "commentStyle": "javadoc",
    ...
}
```

#### Comment Style Options

[TALKED ABOUT HERE](https://www.doxygen.nl/manual/docblocks.html)

- `plain`
  - **default.** All block comments will be selected regardless of any special symbols they have on them.
- `javadoc`
  - Only block comments with two asterisks to start will be selected for the documentation.
- `qt`
  - Only block comments with an asterisk and then an exclaimation point will be selected for the documentation.
