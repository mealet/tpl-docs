# While
**While** - loop implementation which compiles condition and then code on every iteration.
Loop will continue until condition's result is true.

## Syntax
> **while** _CONDITION_ **{** _code_ **};**

## Examples

```tpl-lang
int32 a = 0;

while a < 5 {
  print(a);
  a += 1;
}

print("Done");
```
> 0 <br/>
> 1 <br/>
> 2 <br/>
> 3 <br/>
> 4 <br/>
> Done <br/>

----

```tpl-lang
while true {
  // infinite loop
  print("something");
}
```
> something <br/>
> something <br/>
> something <br/>
> something <br/>
> something <br/>
> ... <br/>
