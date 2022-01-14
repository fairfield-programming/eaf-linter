# Linter

Our clean code linter is built with only a single dependency, the Babel parser, which we are quickly trying to replace with our own solution. It allows for a pipelined approach, so you can control what rules you would like to inforce in your code formatting. And, we also built all of our systems to be naughty and nice. This means that if you don't want your code to be forcibly changed, it will just leave comments letting you know about possible changes. But, if you want it to change your code automatically, just change the setting to naughty and it will fully lint your code.

## How it Works

1. The whole process starts by parsing your code into an Abstract Syntax Tree (AST) with the Babel parser.
2. From there, we allow scripts (known as pipes), to edit the AST and transform it into a final product
3. Finally, the AST is converted back into code using our prettier system.
