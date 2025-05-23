// This file contains example code demonstrating basic exception handling concepts.

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// Example usage
console.log(divide(10, 2)); // Should print 5
console.log(divide(10, 0)); // Should print an error message and return null

function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON string:", error.message);
        return null;
    }
}

// Example usage
console.log(parseJSON('{"name": "John", "age": 30}')); // Should print the parsed object
console.log(parseJSON('{"name": "John", "age": 30')); // Should print an error message and return null