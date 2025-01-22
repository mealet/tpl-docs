# Binary Operations
**Binary Operations** - basic math operations on numbers.

## Supported
**Supported Types For Binary Operations:** `int8 / int16 / int32 / int64`

| Sign | Name | Limitations |
|:-----|:-----|:------------|
| **+** | Add | Integer Size Limits |
| **-** | Minus | Integer Size Limits |
| **\*** | Multiply | Integer Size Limits |
| **/** | Divide | Integer Size Limits, Cannot Divide By Zero |

## Examples
Simple binary operations:
```tpl-lang
print(10 + 2);
print(10 - 2);
print(10 * 2);
print(10 / 2);
```

> 12 <br/>
> 8 <br/>
> 20 <br/>
> 5 <br/>

Binary assignment operations:
```tpl-lang
int32 a = 10;

a += 1;
a -= 1;
a *= 2
a /= 5;

print(a);
```

> 4
