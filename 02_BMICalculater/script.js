// const form= document.querySelector('form')
// console.log(form);

// form.addEventListener('submit',function(e){
//     e.preventDefault()
//   const height= parseInt(document.querySelector('#Height').value)
//   const weight= parseInt(document.querySelector('#Weight').value)
//   const results= document.querySelector('#results')
//   const resultstatus= document.querySelector('#resultStaus')
// if(height==='' || height<0 || isNaN(height)){
//     results.innerHTML=`Please a valid height ${height}`
// }else if(weight==='' || weight<0 || isNaN(weight)){
//     results.innerHTML=`Please a valid weight ${weight}`
// }
// else
// {
//   const BMI=  (weight/((height*height)/10000)).toFixed(2)
   
//   if(BMI<18.6)
//   {
//     resultstatus.innerHTML=`<span>Uder weight ${BMI}</Span>`
//   }
// // show the result
// results.innerHTML=`<span>${BMI}</span>`
// }
// })

const form =document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
 const height= parseInt (document.querySelector('#Height').value)
 const Weight= parseInt (document.querySelector('#Weight').value)
 const result= document.querySelector('#results')
 if (height==='' || height<0 || isNaN(height)) {
  result.innerHTML=`Please a valid height ${height}`
 }else if (Weight===''||Weight<0||isNaN(Weight)){
  result.innerHTML=`Please give a valid weight ${Weight}`
 }else{
  const BMI=(Weight/((height*height)/10000)).toFixed(2);
  result.innerHTML=`<spam>${BMI}</spam>`
 }

})
