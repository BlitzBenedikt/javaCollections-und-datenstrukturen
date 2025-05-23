// This file contains example code demonstrating intermediate exception handling concepts.

function divideNumbers(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return num1 / num2;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON string:", error.message);
        return null;
    }
}

// Example usage
const result1 = divideNumbers(10, 2); // Should return 5
const result2 = divideNumbers(10, 0); // Should log an error and return null

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30'; // Missing closing brace

const parsedValid = parseJSON(validJSON); // Should return the object
const parsedInvalid = parseJSON(invalidJSON); // Should log an error and return null

console.log(result1, result2);
console.log(parsedValid, parsedInvalid);