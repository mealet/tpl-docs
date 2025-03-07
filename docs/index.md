---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Toy Programming Language"
  # text: "made in Rust"
  tagline: Simple, Fast, Clear
  image:
    src: ./logo.png
    alt: tpl-lang
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/introduction
    - theme: alt
      text: Installation
      link: /getting-started/installation

features:
  - title: Simple
    details: Clear and readable syntax (similar as C-like)
  - title: Honest
    details: The compiler will tell you exactly where you made a mistake
  - title: Compiling
    details: Compiler uses LLVM as a backend, which provides small and fast binaries
---

