# Built-in Functions
**Toy Programming Language Compiler** has built-in standard functions. <br/>
Most of them is just a wrapper of standard functions from C libraries.

## Available

| Function | Type | Arguments | Description | Used C Functions |
|:---------|:-----|:----------|:------------|:-----------------|
| print | int32 | _integers/strings/booleans/arrays/void_ | Prints provided arguments to stdout | printf |
| input | int32 | _string_ (OPTIONAL) | Prints provided string (if not provided leaves empty) and takes input from user | scanf |
| concat | str | _string_, _string_ | Returns two connected strings | strcat |
| type | str | _any_ | Returns type of provided argument | - |
| len | int16 | _array_ | Returns length of an array | - |
| to_str | str | _any_ | Returns stringified value of argument | sprintf |
| to_int8 | int8 | _any integer_ | Converts any integer to int8 by truncating | - |
| to_int16 | int16 | _any integer/string_ | Converts any integer to int16 by truncating or extending bits | - |
| to_int32 | int32 | _any intege/string_ | Converts any integer to int32 by truncating or extending bits | - |
| to_int64 | int64 | _any integer/string_ | Converts any integer to int64 by truncating or extending bits | - |
