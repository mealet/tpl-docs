# Variables
Variables are the most important mechanism for memory management, which is used in almost all programming languages.
So, `tpl-lang` is no exception and style of variables definition looks exactly like in C language.

### Definition
> **datatype** _varname_; <br/>
> **datatype** _varname_ **=** _value_;

### Explanation
**Variable** - the tool, that provides you to keep and edit information. In low level variable is just a pointer to memory address with ownership on it:


```tpl-lang
int32 no_init;
void empty;
int32 a = 1;
int8 b = 5;
```

```
| 5 | 1 | 0 | 0 |
  |   |   |   |---> int32 no_init;
  |   |   |--------> void empty;
  |   |-------------> int32 a = 1;
  |------------------> int8 b = 5
```

On the another side we have pointers! But there's no different mechanics in this word. <br/>
**Pointers on variables** is just a pointer, that contains pointer to the same variable adress.

```tpl-lang
int32 a = 123;
int32* b = &a;
```

```
| 123 | ... | ... | ... |
   |
   |-----> int32 a = 123;
                 |
                 |--------> int32* b = &a;
```
