# User Defined Functions
**User Defined Functions** - is a tool for streamlining and simplifying work with code. <br/>
This functions works similar as built-in, but they will be compiled in your binary file.

## Syntax
> **define _type_** _NAME_ **(** _arguments_ **) {** _code_ **};**

## Examples
```tpl-lang
define int32 foo(int32 a, int32 b) {
  return a + b;
}

print(foo(10, 5));
```

> 15

----

```tpl-lang
define void print_doubled(int32 a) {
  print(a * 2);
}

print_doubled(5);
print_doubled(10);
```

> 10 <br/>
> 20
