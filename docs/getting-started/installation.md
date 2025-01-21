[Latest Release]: https://github.com/mealet/tpl-lang/releases/latest
[Github Repository]: https://github.com/mealet/tpl-lang
[Rust Programming Language]: https://www.rust-lang.org/
[Low Level Virtual Machine]: https://llvm.org/
[clang]: https://clang.llvm.org/

# Installation
## Simple Installation

Here's a quick instruction to install latest version of `tpl-lang` compiler:

**1. Install any of supported C compiler**

_C compiler_ is used to link LLVM built object file to a binary. <br/>
Recommended to use: [clang]

**2. Download the latest archive for your system from [Latest Release] on Github** <br/>
**3. Unpack the downloaded archive in any directory** <br/>
**4. Use the binary file `tplc` (on Windows `tplc.exe`)**

## Building
You can always build latest version from main/dev branch of [Github Repository]. <br/>
How to do this: <br/>

**1. Install [Rust Programming Language] (at least v1.61^)** <br/>
**2. Install [Low Level Virtual Machine] by official guide** <br/>
**3. Download or clone code from github:**
```
git clone https://github.com/mealet/tpl-lang
cd tpl-lang
```
**4.1. Build release binary:**
```
cargo build --release
```
_Binary file will be in directory `./target/release/tplc`_

**4.2. Or just build and install it by:**
```
cargo install --path tplc
```
