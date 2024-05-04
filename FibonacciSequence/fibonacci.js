window.onload = function() {
    generateFibonacci();
};

function generateFibonacci() {
    let n = parseInt(prompt("Enter the number of terms in the Fibonacci sequence (less than 100):"));

    if (isNaN(n) || n <= 0 || n >= 100) {
        alert("Invalid input. Please enter a valid integer less than 100.");
        return;
    }

    let fibSeries = [];

    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    let sequenceString = "Fibonacci sequence with " + n + " terms:\n" + fibSeries.join(", ");
    
    alert(sequenceString);
}