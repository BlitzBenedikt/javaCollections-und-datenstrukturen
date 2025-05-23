// This file contains example code demonstrating advanced exception handling concepts.

function riskyOperation() {
    try {
        // Simulate a risky operation that may throw an error
        let result = performComplexCalculation();
        console.log("Operation successful: ", result);
    } catch (error) {
        // Handle the error gracefully
        console.error("An error occurred: ", error.message);
        // Optionally, rethrow the error for further handling
        throw new Error("Failed to complete the risky operation.");
    } finally {
        // Code that runs regardless of success or failure
        console.log("Cleanup actions can be performed here.");
    }
}

function performComplexCalculation() {
    // Simulate a scenario that throws an error
    throw new Error("Calculation error: Division by zero.");
}

// Execute the risky operation
try {
    riskyOperation();
} catch (error) {
    console.error("Caught in outer scope: ", error.message);
}