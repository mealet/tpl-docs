# Types
Data types in `tpl-lang` are the main mechanism for managing memory and data. <br/>
Most of them have size, range and analogue in C (because of LLVM backend) <br/>

**Here's the table of avaible types in compiler:**

| Type | Size (bits) | Description | C analogue | Range |
|:-----|:------------|:------------|:----------|:-------|
| int8 | 8 | 8 bits signed integer type | char | **0** to **255** |
| int16 | 16 | 16 bits signed integer type | short | **-32 768** to **32 767** |
| int32 | 32 | 32 bits signed integer type | int | **-2 147 483 648** to **2 147 483 647** |
| int64 | 64 | 64 bits signed integer type | long | **-9 223 372 036 854 775 808** to **9 223 372 036 854 775 807** |
| bool | 1 | Boolean type (true - 1, false - 0) | bool | **0** to **1** |
| str | 8 | String type | char* | - |
| void | 1 | Void type (for functions) | void | - |
| array | - | Array of any type | int var[], char var[], bool var[]... | - |
| fn | - | Function/Closures type | - | - |
| auto | - | Automatically defines the type | - | - |
| pointer | - | Points to special memory address | - | - |

## Examples
**Integers:**
```tpl-lang
int8 a = 5;
int16 b = 123;
int32 c = 5555;
int64 d = 123123;
```

**String:**
```tpl-lang
str name = "Jason";
str surname = "Statham";
```

**Boolean:**
```tpl-lang
bool is_true = true;
bool is_false = false;

bool it_works = true;
bool any_errors = false;
```

**Void:**
```tpl-lang
void variable;
void another_variable = some_void_func();
```

**Arrays:**
```tpl-lang
int8[3] a = [1, 2, 3];
auto b = [3, 2, 1];
```

**Pointers:**
```tpl-lang
int32* ptr;
*ptr = 5;


int32 variable = 10;
int32* var_ptr = &variable;

*var_ptr = 3;
```
