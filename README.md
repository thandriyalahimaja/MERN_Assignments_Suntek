# MERN Assignments  week 1 & 2(Suntek)

##   Overview

This contains JavaScript and MERN stack assignments completed during Suntek training. The project focuses on improving programming fundamentals, problem-solving skills, object manipulation, array operations, date handling, module systems, and backend/frontend development concepts.

## MERN Stack Concepts

* MongoDB
* Express.js
* React.js
* Node.js

## Tools

* VS Code
* Git & GitHub
* Node.js Runtime

---

# Project Structure

```bash
MERN_Assignments_Suntek-main/
│
├── ObjOperations.js
├── arrOperationsAdvance.js
├── arrayOperations-2.js
├── arrayOperations-3.js
├── README.md
│
└── assignments-week-2/
    │
    ├── Shallow-Deepcopy/
    │   ├── shallowCopy.js
    │   └── deepCopy.js
    │
    ├── dateHandsOn/
    │   ├── ageCalculator.js
    │   ├── dateCompareValidate.js
    │   └── dateCreateExtract.js
    │
    ├── libBookMgmt/
    │   └── libMgmt.js
    │
    └── todoModuleAssgn/
        ├── app.js
        ├── task.js
        └── validator.js
```

---

# Topics :

## 1️ Object Operations

### File:

* `ObjOperations.js`

### Concepts Practiced:

* Creating JavaScript objects
* Accessing object properties
* Updating object values
* Nested object handling
* Object iteration
* Object methods
* Dynamic property addition/removal

### Learning Outcome:

Understanding how objects work in JavaScript and how data can be structured efficiently.

---

# 2️ Array Operations

### Files:

* `arrayOperations-2.js`
* `arrayOperations-3.js`
* `arrOperationsAdvance.js`

### Concepts Practiced:

* Array creation
* Push, pop, shift, unshift
* Slice and splice
* Map, filter, reduce
* Sorting arrays
* Searching elements
* Looping through arrays
* Array transformations
* Advanced array methods

### Learning Outcome:

Improved understanding of array manipulation and functional programming concepts in JavaScript.

---

# 3️ Shallow Copy vs Deep Copy

### Folder:

`assignments-week-2/Shallow-Deepcopy`

### Files:

* `shallowCopy.js`
* `deepCopy.js`

### Concepts Practiced:

## Shallow Copy

* Copying object references
* Spread operator usage
* `Object.assign()`
* Shared memory references

## Deep Copy

* Independent object cloning
* Nested object copying
* JSON methods for cloning
* Avoiding reference mutation

### Learning Outcome:

Understanding memory references and how object copying works internally in JavaScript.

---

# 4️ Date Handling Assignments

### Folder:

`assignments-week-2/dateHandsOn`

### Files:

* `ageCalculator.js`
* `dateCompareValidate.js`
* `dateCreateExtract.js`

### Concepts Practiced:

## Age Calculator

* Calculating age from birthdate
* Date difference calculations

## Date Comparison & Validation

* Comparing dates
* Validating user-entered dates
* Checking date formats

## Date Creation & Extraction

* Creating Date objects
* Extracting year/month/day
* Working with timestamps

### Learning Outcome:

Practical understanding of JavaScript Date APIs and real-world date-based applications.

---

# 5️ Library Book Management System

### Folder:

`assignments-week-2/libBookMgmt`

### File:

* `libMgmt.js`

### Features:

* Add books
* Remove books
* Search books
* Display book records
* Manage library inventory

### Concepts Practiced:

* Object arrays
* CRUD operations
* Data management
* Functions and modular logic

### Learning Outcome:

Learned how basic management systems work using JavaScript logic.

---

# 6️ To-Do Module Assignment

### Folder:

`assignments-week-2/todoModuleAssgn`

### Files:

* `app.js`
* `task.js`
* `validator.js`

### Features:

* Create tasks
* Validate task inputs
* Organize modules
* Manage task data

### Concepts Practiced:

## Module System

* Import/export
* File separation
* Reusable code structure

## Validation

* Input checking
* Error handling
* Data verification

## Application Logic

* Task management
* Modular architecture

### Learning Outcome:

Understanding modular JavaScript application structure and reusable code organization.

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
-----------------------------------------------------------------------------------------------------------------------------------------
