const inputDisplay = document.getElementById('inputDisplay');

        // Append value to the input display
        function appendValue(value) {
            inputDisplay.value += value;
        }

        // Clear both displays
        function clearDisplay() {
            inputDisplay.value = '';
            // outputDisplay.value = '';
        }

        function calculateMath(){
            const mathSection = document.getElementById('math');
            mathSection.style.display = 'block';
        }

        // Delete the last character in the input
        function deleteLast() {
            inputDisplay.value = inputDisplay.value.slice(0, -1);
        }

        // Perform the calculation and show the result
        function calculate() {
            try {
                const result = eval(inputDisplay.value); // Evaluate the input
                inputDisplay.value = result; // Display the result
            } catch {
                inputDisplay.value = 'Error'; // Display error for invalid input
            }
        }


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('math').style.display = 'none';
    document.getElementById('bmi').style.display = 'none';
});