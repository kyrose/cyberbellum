# Markdown compiler in Rust

## Notes on learning Rust
A survey of 6,000 Rust learners found that the two areas which give users the most difficulty are _[[rust_lifetimes|lifetimes]]_ and the _[[rust_ownership-borrowing-system|ownership/borrowing system]]_

## Learning objectives per chapter

[[#Chapter 1]]

[[#Chapter 2]]: _Functions, int_
- [ ] Create a function without errors
- [ ] Create an integer variable without errors
- [ ] Print an integer variable to the command line without errors

[[#Chapter 3]]: _Strings_
- [ ] Create a string variable without errors
- [ ] Return a string variable from a function without errors
- [ ] Concatenate two strings without errors
- [ ] Print a string to the command line without errors

[[#Chapter 4]]: <span style="padding:5px 10px;font-style:italic;font-weight:700;color:#FF2A8A;background:#FFEFF8;text-decoration:underline;">Advanced</span>
- [ ] Describe how a compiler works in general
- [ ] Create a vector without errors
- [ ] Read and parse command-line arguments without errors
- [ ] Implement a match block without errors
- [ ] Pass an argument to a function without errors

[[#Chapter 5]]: _Files_
- [ ] Open a file without errors
- [ ] Read a file line-by-line without errors
- [ ] Describe how a Markdown compiler works
- [ ] Write to a file without errors

[[#Chapter 6]]
- [ ] Build a release version of a project in Rust

## Prologue: Why Rust?
TODO: [read this chapter later](https://jesselawson.org/rust/getting-started-with-rust-by-building-a-tiny-markdown-compiler/#prologue)

## Chapter 1
- [ ] Create a new Rust project on cli without error
- [ ] Compile and build a "Hello World" Rust project without errors

---

use `cargo new` to build a new Rust project

the `--bin` flag for `cargo new` tells Cargo that project results in an [[executable]], not a [[library]]

The structure of the project cargo built:
```
markdown-compiler
├── src/                # This is where the rust lives
│   ├── main.rs
├── .gitignore          # Cargo made this for us!
└── Cargo.toml          # Project manifest (config, depends)
```



## Chapter 2

## Chapter 3

## Chapter 4

## Chapter 5

## Chapter 6