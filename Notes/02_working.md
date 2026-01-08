# TypeScript Working Process

TypeScript works internally in a very simple and easy way.  
When we write TypeScript code, it goes through different steps before becoming JavaScript.

The process is:

tsc → Lexer → Parser → Binder → Checker → Emitter → Output (.js / .d.ts)



## TSC (TypeScript Compiler)

TSC means TypeScript Compiler.  
This is the main program which takes your TypeScript code and starts processing it.

Think of it like a teacher who starts checking your notebook.



## Lexer (Tokenization)

Lexer breaks your TypeScript code into small pieces called “tokens”.

Example idea:
Just like a sentence is split into words,
the lexer splits code into meaningful words like keywords, variables, symbols etc.

This step helps the compiler understand what the code contains.



## Parser

Parser takes the tokens from the lexer and understands the structure of the code.

It builds something called an “Abstract Syntax Tree” (AST), which is like a map or structure of your program.

Here it mainly checks:
- Is the syntax correct?
- Are brackets correct?
- Is the structure valid?

If something is written incorrectly, errors are shown here.


##  Binder

Binder connects different parts of the program together.

It understands:
- Where variables are declared
- Where functions are defined
- Which file belongs to what
- Which thing is linked to which

You can imagine it like a student attendance register
that keeps record of who is where.

This helps the compiler understand relationships in the program.


## Checker

This is the most important step of TypeScript.

Checker verifies types and ensures everything is correct.

It checks:
- Correct type is used or not
- Wrong values are not assigned
- Functions are used properly
- Object shapes and types match

If anything is wrong, TypeScript gives an error before running the program.

This is why TypeScript is safer than JavaScript.



##  Emitter

Emitter is the final step where TypeScript produces the final output.

After everything is checked and confirmed correct,
it generates the required files.

The main outputs are:

### ✔ JavaScript file (.js)
This is the actual runnable file.
Browser and Node.js understand only JavaScript,
so this is the file that finally runs.

### ✔ Type Definition file (.d.ts)
This file contains type information.
It helps editors, tools and libraries to understand the structure and types of the code.

It improves developer experience and IntelliSense.