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
            `Hi <span>${name}</span> your BMI is : <span>${bmi}</span>. <br>
            This BMI is considered Underweight.<br>
            Being underweight may pose certain health risks, including nutrient deficiencies and hormonal changes.
             Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more 
             complete picture of any health risks. A person should consult with their healthcare provider and 
             consider making lifestyle changes through healthy eating and fitness to improve their health indicators.
            `;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Hi <span>${name}</span> your BMI is : <span>${bmi}</span>. <br>
                This BMI is considered Normal.<br>
                Maintaining a healthy weight may lower the risk of developing certain health conditions,
                including cardiovascular disease and type 2 diabetes.
                 Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a
                more complete picture of any health risks.`;
        else if (bmi >= 25.0 && bmi < 29.9) 
            result.innerHTML = 
            `Hi <span>${name}</span> your BMI is : <span>${bmi}</span>. <br>
            This BMI is considered Overweight.<br>
             Being overweight may increase the risk of certain health conditions, including cardiovascular disease,
              high blood pressure, and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat 
              percentage measurements can provide a more complete picture of any health risks. A person should 
              consult with their healthcare provider and consider making lifestyle changes through healthy eating 
              and fitness to improve their health indicators.
            `;

        else result.innerHTML =
            `Hi <span>${name}</span> your BMI is : <span>${bmi}</span>. <br>
            This BMI is considered Obese.<br>
             People with obesity have increased risk of cardiovascular disease, type 2 diabetes, high blood pressure,
            and other health conditions. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage
             measurements can provide a more complete picture of any health risks. A person should consult with 
             their healthcare provider and consider making lifestyle changes through healthy eating and fitness to
              improve their health indicators.
            `;
    }
}
