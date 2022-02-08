window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    
    let name=(document
        .querySelector("#fname").value);
    let height = parseInt(document
            .querySelector("#height").value);
  
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    
    else {
  

        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        if (bmi < 18.6) result.innerHTML =
            `Hi <span>${name}</span> your BMI is : <span>${bmi}</span> Under Weight`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Hi <span>${name}</span> your BMI is : <span>${bmi}</span> Noraml`;
        else if (bmi >= 25.0 && bmi < 29.9) 
            result.innerHTML = 
            `Hi <span>${name}</span> your BMI is : <span>${bmi}</span> Over Weight`;

        else result.innerHTML =
            `Hi <span>${name}</span> your BMI is : <span>${bmi}</span> Obese`;
    }
}