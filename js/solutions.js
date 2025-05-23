// This file contains the solutions to the tasks provided in the HTML page.

function showBasicExceptionSolution() {
    const solution = `
        // Basic Exception Handling Example
        function divide(a, b) {
            try {
                if (b === 0) {
                    throw new Error("Cannot divide by zero");
                }
                return a / b;
            } catch (error) {
                console.error(error.message);
                return null;
            }
        }

        console.log(divide(10, 2)); // 5
        console.log(divide(10, 0)); // Error: Cannot divide by zero
    `;
    return solution;
}

function showIntermediateExceptionSolution() {
    const solution = `
        // Intermediate Exception Handling Example
        function parseJSON(jsonString) {
            try {
                const result = JSON.parse(jsonString);
                return result;
            } catch (error) {
                console.error("Invalid JSON string:", error.message);
                return null;
            }
        }

        console.log(parseJSON('{"name": "John"}')); // { name: "John" }
        console.log(parseJSON('Invalid JSON')); // Error: Invalid JSON string
    `;
    return solution;
}

function showAdvancedExceptionSolution() {
    const solution = `
        // Advanced Exception Handling Example
        function fetchData(url) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (url === "valid-url") {
                        resolve("Data fetched successfully");
                    } else {
                        reject(new Error("Failed to fetch data"));
                    }
                }, 1000);
            });
        }

        fetchData("valid-url")
            .then(data => console.log(data))
            .catch(error => console.error(error.message));

        fetchData("invalid-url")
            .then(data => console.log(data))
            .catch(error => console.error(error.message));
    `;
    return solution;
}

// Function to display all solutions
function displaySolutions() {
    console.log("Basic Exception Solution:\n", showBasicExceptionSolution());
    console.log("Intermediate Exception Solution:\n", showIntermediateExceptionSolution());
    console.log("Advanced Exception Solution:\n", showAdvancedExceptionSolution());
}