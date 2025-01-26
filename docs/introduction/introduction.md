# Introduction

Welcome to the _Toy Programming Language_, a simple compiler with simple and readable syntax!
Toy Programming Language (tpl-lang) provides fast and lightweight code with basic functionality. <br/>
The style of language is similar as C, but with more simplified rules and principles

## What Is This?

**Toy Programming Language** - is a simple compiling language, based on LLVM. <br/>
Project created to learn and show other people how to create compilers in Rust 🦀


## Project Architecture
::: info
* Main Programming Language: **[Rust](https://www.rust-lang.org/)**
* Code Generator: **[LLVM](https://llvm.org)**
* LLVM Wrapper Library: **[Inkwell](https://github.com/TheDan64/inkwell)**
* Colored Terminal Library: **[Colored](https://crates.io/crates/colored)**
----
- Latest compiler version: `v0.3.6` <br/>
- LLVM version: `18.1.6` <br/>
- Inkwell version: `0.5.0` <br/>
:::

Code is separated to 4 tasks and modules for structured code processing and error handling:
1. `tpl-lexer` - Lexical Analyzer with abstracted functionality of processing source code into tokens.
2. `tpl-parser` - Parsing Analyzer, a tool which turns tokens into distributed abstract syntax tree with priorities.
3. `tpl-ir` - Code Generator with type checker and LLVM wrapper for compiling AST into module.
4. `tplc` - Main part of all project, which contains user-side tools: cli, config parser, llvm module compiler and object linker

## Others
- Github Repository: https://github.com/mealet/tpl-lang
- License: https://github.com/mealet/tpl-lang/blob/main/LICENSE
- Releases: https://github.com/mealet/tpl-lang/releases
- Issues: https://github.com/mealet/tpl-lang/issues
