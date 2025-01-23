# Imports
**Imports** allows you to connect other `tpl-lang` modules into one binary program, <br/>
or just separate big file to many different.

## How to import
First of all you should have path to your file (if all files are at the same dir just use filename).
For example if we have file `lib.tpl` near the main file we just can:
```tpl-lang
import "lib.tpl";
```

Or if lib is another dir like _"functions"_:
```tpl-lang
import "functions/lib.tpl";
```

## Remember what...
compiler just inserts code from libraries in place where you did the import. <br/>
Import function initializes temporary ligthweight version of `tplc` (only lexer and parser) and compiles module's abstracted syntax.
