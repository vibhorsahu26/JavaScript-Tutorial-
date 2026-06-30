const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    if(isNaN(height) || height<=0){
        result.innerHTML='Please enter a valid height';
    }
    else if(isNaN(weight) || weight<=0){
        result.innerHTML='Please enter a valid weight';
    }
    else{
        const bmi=weight / ((height / 100) ** 2);
                if(bmi<18.5){
                    result.innerHTML=`<span>Underweight:- ${bmi}</span>`;
                } 
                else if(bmi>=18.5 && bmi<=24.9){
                    result.innerHTML=`<span>Normal Weight:- ${bmi}</span>`;
                }
                else{
                    result.innerHTML=`<span>Overweight:- ${bmi}</span>`;
                }
    }

})