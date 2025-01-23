# For
**For** - a loop implementation which compiles 2 statements and 1 expression for work. <br/>
First of all (before loop) compiler compiles _initializer_ statement, then on every iteration matching _expression_ and calling _iterator_ expression. <br/>
This style of **for loop** is similar as in C language.

## Syntax
> **for (**_INITIALIZER_**;** _CONDITION_**;** _ITERATOR_**) {** _code_ **};**

## Examples
```tpl-lang
for (int8 a = 0; a < 5; a++) {
  print(a);
}
```

> 0 <br/>
> 1 <br/>
> 2 <br/>
> 3 <br/>
> 4 <br/>

----
```tpl-lang
for (int8 a = 5; a > 0; a--) {
  print(a);
}
```

> 5 <br/>
> 4 <br/>
> 3 <br/>
> 2 <br/>
> 1 <br/>
