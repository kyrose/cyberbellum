# Markdown compiler in Rust
Following Jesse Lawson's tutorial [Getting Started with Rust by Building a Tiny Markdown Compiler](https://jesselawson.org/rust/getting-started-with-rust-by-building-a-tiny-markdown-compiler/)

## Notes on learning Rust
A survey of 6,000 Rust learners found that the two areas which give users the most difficulty are _[[rust-lifetimes|lifetimes]]_ and the _[[rust-ownership-borrowing-system|ownership/borrowing system]]_

## Prologue: Why Rust?
TODO: [read this chapter later](https://jesselawson.org/rust/getting-started-with-rust-by-building-a-tiny-markdown-compiler/#prologue)

## Chapter 1: Intro
- [x] Create a new Rust project on cli without error
- [x] Compile and build a "Hello World" Rust project without errors

---

- `cargo new` creates a new Rust project
- `cargo build` compiles the project (for dev purposes)
- `cargo run` executes the executable

the `--bin` flag for `cargo new` tells Cargo that project results in an [[executable]], not a [[library]]
 
 ```sh
$ cargo new project-name --bin
  Created binary (application) `project-name` package
  
$ cargo build
   Compiling mdcompile v0.1.0 (/home/nullc00l/dev/markdown-editor/mdcompile)
    Finished dev [unoptimized + debuginfo] target(s) in 1.60s
    
$ cargo run
   Finished dev [unoptimized + debuginfo] target(s) in 0.00s
    Running `target/debug/mdcompile`
Hello, world!
```


## Chapter 2: Integers and functions
- [x] create a function without errors
- [x] create an integer variable without errors
- [x] print an integer variable to the cli without errors

---

>Let’s say our version number is `1000`, and we want to return that from a function and then print it out. Recall that the range of an ==unsigned integer is 0 to 2^x-1==, meaning ==we would need to store the number 1000 in at least a 16-bit unsigned integer (which has a range of 0 to 65,535)==. We denote that in Rust with the keyword `u16`. [^0]

[^0]: Read about uh this, i guess?


### How to write functions in Rust
With no arguments, no return value:
```rust
fn get_version() {
}
```

If a function has a return value, the `type` of the return value **must** be specified.

To tell a function what type to return you write the following following the function declaration with an -> and type to return: `fn get_version() -> u16`

In Rust the return value is the value of the final expression in a function block. It must not be followed by a semi-colon, as a semi-colon changes the expression into a statement (?)[^1]

[^1]:I'm not 100% sure about this, need to double check

There is a `return` keyword that is mostly for returning early in a function. A return statement _is_ followed by a semi-colon.

Now, despite the distinction between the two, the following functions are virtually the same:

```rust
fn get_version() -> u16 {
  1000  // No semi-colon, allllll expression baby
}

fn get_version() -> u16 {
  return 1000;  // A statement!
}
```


### Declaring integer variables in Rust
==All variables in Rust are declared by putting type _after_ their name.== Variables are declared with the `let` keyword, and followed by a colon (`:`) to describe the type. A variable to hold the version of our application would therefore be declared like this:

```rust
let version: u16 // u16 is unsigned 16-bit integer
```

If a variable's type can be inferred by the return value of a function, then we can skip defining it while declaring the variable. Therefore the following code can be improved...

```rust
fn get_version() -> u16 {
  1000
}

fn usage() {
  let the_version: u16; // Declare variable
  the_version = get_version();  // Assign a value to variable
  
  println!("this is my markdown compiler!");
  println!("Version {}", the_version); // Print value assigned
}

fn main() {
  usage();
}
```

...by rewriting the variable declaration in the `usage()` function:
```rust
// specify return values with ->
// -> u16 tells a function to return a 16-bit unsigned integer
fn get_version() -> u16 {
  1000
}

fn usage() {
  // Declare and assign variable
  // Rust will infer var type based on get_version's return value
  let the_version = get_version();  
  println!("mdcompiler is a markdown compiler written by kyrose");
  println!("Version {}", the_version); // Print value assigned
}

fn main() {
  usage();
}
```

## Chapter 3: Strings
- [ ] Create a string variable without errors
- [ ] Return a string variable from a function without errors
- [ ] Concatenate two strings without errors
- [ ] Print a string to the command line without errors

---

Strings aren't _just_ the content between a pair of quotes (`''` or `""`): to a computer, a string is a set of bytes that (in Rust's case) are valid UTF-8.

## Chapter 4 <span style="padding:5px 10px;font-style:italic;font-weight:700;color:#FF2A8A;background:#FFEFF8;text-decoration:underline;">Advanced</span>
- [ ] Describe how a compiler works in general
- [ ] Create a vector without errors
- [ ] Read and parse command-line arguments without errors
- [ ] Implement a match block without errors
- [ ] Pass an argument to a function without errors

---

## Chapter 5
- [ ] Open a file without errors
- [ ] Read a file line-by-line without errors
- [ ] Describe how a Markdown compiler works
- [ ] Write to a file without errors

---

## Chapter 6
- [ ] Build a release version of a project in Rust

---

#rust #markdown-editor #projects