# Hello World!
## Simple Example

Now, once you've installed compiler, it's time to write your first program. Lets follow traditions and make program that prints the text `Hello World!`. <br/>
Here's an example for you, how to write hello world in **Toy Programming Language:**

`hello.tpl`
```tpl-lang
print("Hello World!");
```

Now lets compile and run that binary!

```tpl-lang
tplc hello.tpl hello
./hello
```
And it will return:
> Hello World!

## Advanced Example

Lets make some experiments!
```tpl-lang
print(2 + 2 * 2);
```
> 6

Print also supports concatenation:

```tpl-lang
print("The answer is: ", 5 * 5)
```
> The answer is: 25

Variables? Why not!

```tpl-lang
int32 a = 10;
int32 b = 5;

print(a + b);
print(a - b);
print(a * b);
print(a / b);
```
> 15 <br/>
> 5 <br/>
> 50 <br/>
> 2
