# MERN Assignments (Suntek)

This repository contains JavaScript assignment files and a Week1  folder with additional hands-on tasks.

## Contents

### Root assignments

- assignment1.js
- assignment2.js
- assignment3.js
- assignment4.js
- assignment5.js
- assignment6.js

### Week 2 assignments

- assignments-week-2/dateHandsOn/
  - ageCalculator.js
  - dateCompareValidate.js
  - dateCreateExtract.js
- assignments-week-2/libBookMgmt/
  - libMgmt.js
- assignments-week-2/Shallow-Deepcopy/
  - deepCopy.js
  - shallowCopy.js
- assignments-week-2/todoModuleAssgn/
  - app.js
  - task.js
  - validator.js

## How to run

Use Node.js to run any file:

```bash
node assignment1.js
node assignments-week-2/dateHandsOn/ageCalculator.js
```

## Theory

### Variables

Variables store data so it can be reused. In JavaScript, `let` allows reassignment, `const` creates read-only bindings, and `var` is function-scoped.

### Loops

Loops repeat a block of code until a condition fails. Common options are `for`, `while`, and `do...while`. Use loops to process arrays or perform repeated checks.

### Functions

Functions group reusable logic. They can accept parameters, return values, and can be declared with `function`, assigned to variables, or written as arrow functions.

### Objects

Objects store related data and behavior as key-value pairs. Properties can be accessed with dot or bracket notation, and methods are functions stored on objects.

### Arrays

Arrays are ordered lists of values. Use indexing to access items and methods like `push`, `map`, `filter`, and `reduce` to transform data.

### Dates

The `Date` object represents points in time. It supports creation, comparison, and extraction of components (year, month, day) and formatting for display.

### Modules

Modules split code into reusable files. In Node.js, `module.exports` and `require` share functionality across files, improving organization and reuse.

### Shallow vs deep copy

A shallow copy duplicates top-level values but keeps nested object references, while a deep copy recursively duplicates nested structures to avoid shared references.

### Validation

Validation checks that data meets expected rules before processing. This prevents errors and keeps inputs consistent, for example verifying types or required fields.

## Notes

- Each file is a standalone script unless the folder indicates module usage.
- No additional dependencies are required unless stated inside a script.
