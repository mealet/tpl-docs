# Bitwise Operations
**Bitwise Operations** - a subtle tool for operating bits in a number.

## Supported
**Supported Types For Bitwise Operations:** `int8 / int16 / int32 / int64`

| Sign | Name | Description |
|:-----|:-----|:------------|
| **&** | AND | Copies a bit to the result if it exists in both operands | 
| **\|** | OR | Copies a bit if it exists in either operand |
| **^** | XOR | Copies the bit if it set in one operand but not both |
| **<<** | LEFT SHIFT | Shifts bits to left by provided number |
| **>>** | RIGHT SHIFT | Shifts bits to right by provided number |

## Examples
```tpl-lang
print(5 & 1);
print(2 | 4);
print(3 ^ 1);
print(1 << 2);
print(10 >> 2);
```

> 1 <br/>
> 6 <br/>
> 2 <br/>
> 4 <br/>
> 2 <br/>
