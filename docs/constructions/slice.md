# Slice
**Slicing** is a tool to get specified element of provided expression. <br/>
Compiler `tplc` supports slicing construction of next types: `strings`, `pointers`, `arrays`

## Slice Get

To get required element just use brackets and index, <br/>
but remember that slice index always starts from 0:
```tpl-lang
int32[3] a = [1, 2, 3];
print(a[0]);
```
> 1

----

```tpl-lang
str a = "hello";
print(a[0]);
print(a[1]);
```
> h <br/>
> e

## Slice Assign
You can also assign the value to provided index of element. <br/>
To do this just use similar syntax in statement and add assign:
```tpl-lang
str a = "something";
a[0] = 'b';

print(a);
```
> bomething

----
```tpl-lang
auto array = [1, 5, 3];
array[1] = 2;

print(array);
```
> [1, 2, 3]
