# Closures
**Closures** - is a tool to define anonymous functions with static type.
If you assigning closures to a variable compiler will assign function type and parameters to variable.
To define closures follow the syntax below in expressions.


## Syntax
> **type (** _arguments_ **) {** _code_ **}**

## Examples:
```tpl-lang
fn<int32> a = int32 (int32 a, int32 b) {
  return a + b;
};

// or

auto a = int32 (int32 a, int32 b) {
  return a + b;
};

print(a(1, 2));
```
> 3
