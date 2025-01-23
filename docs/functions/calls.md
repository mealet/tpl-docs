# Function Calls
To call _built-in_ or _user defined_ function you can use next construction: <br/>
`name(argument1, argument2, ...)` <br/>
Functions can be called in statements and expressions and must return any type. <br/>
For example: print function returns `void` type, so it cannot be used in expressions.

```tpl-lang
print(1 + 1)
```
> 2

----
```tpl-lang
int32 a = print(1 + 1);
```
::: danger
Provided code will cause compile time error! <br/>
Look at this: we're trying to assign `void` type to variable with `int32` type.
:::

## Another Style
You can call function by yanking it as provided expression subelement. <br/>
In that case compiler will put expression as first function argument and parse others (if they exists).

```tpl-lang
define int32 foo(int32 a) {
  return a * a;
}

int32 a = 5;
print(a.foo());

print(10.foo());
```
> 25 <br/>
> 100 <br/>
