
document.getElementById('collapseButton').addEventListener('click', function () {
    // Show the third card
    document.getElementById('collapseWidthExample').classList.add('show');
    // Hide the fourth card
    document.getElementById('collapseWidthExample2').classList.remove('show');
});

document.getElementById('collapseButton1').addEventListener('click', function () {
    // Show the fourth card
    document.getElementById('collapseWidthExample2').classList.add('show');
    // Hide the third card
    document.getElementById('collapseWidthExample').classList.remove('show');
});




let firstNumber = document.querySelectorAll('.progress-value')[0];
let firstCounter = 0;
let firstIntervalId = setInterval(() => {
    if (firstCounter >= 90) {
        clearInterval(firstIntervalId);
    } else {
        firstCounter += 1;
        firstNumber.innerHTML = `<strong>${firstCounter}%</strong>`;
        document.querySelectorAll('.progress-bar')[0].style.strokeDashoffset = 251 - (251 * firstCounter) / 100;
    }
}, 20);

let secondNumber = document.querySelectorAll('.progress-value')[1];
let secondCounter = 0;
let secondIntervalId = setInterval(() => {
    if (secondCounter >= 95) {
        clearInterval(secondIntervalId);
    } else {
        secondCounter += 1;
        secondNumber.innerHTML = `<strong>${secondCounter}%</strong>`;
        document.querySelectorAll('.progress-bar')[1].style.strokeDashoffset = 251 - (251 * secondCounter) / 100;
    }
}, 20);





window.addEventListener('load', function () {
    // Get all progress bars
    var progressBars = document.querySelectorAll('.progress-bar');

    // Loop through each progress bar
    progressBars.forEach(function (progressBar) {
        var progressValue = progressBar.parentNode.querySelector('.progress-value strong');
        if (progressValue) {
            var value = parseInt(progressValue.innerText);
            var circumference = 2 * Math.PI * 40; // Circumference of the circle

            // Calculate the dash offset based on the percentage value
            var offset = circumference - (value / 100) * circumference;

            // Apply the dash offset
            progressBar.style.strokeDashoffset = offset + "px";
            console.log("Progress bar found and initialized:", progressBar);
        } else {
            console.error("Error: Progress value not found for progress bar:", progressBar);
        }
    });
});

