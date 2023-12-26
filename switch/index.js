let day='monday';
let period='physics';

// nested if else
// if(day === 'monday'){
//        console.log('its monday');

//     if(period === 'physics'){
//         console.log('Physics is on Monday');
    
// }}
// else if (day==='teusday') {
//     if(period==="chemistry"){
//         console.log('Chemistry is on Tuesday');
//     } 
// }
// else if (day==="wednesday") {
//     if(period==="maths"){
//         console.log('Maths is on Wednesday');
// }
// }
// else if(day==="thursday"){
//     if(period==="english"){
//         console.log('English is on Thursday');
// }}
// else if(day==="friday"){
//     if(period==="urdu"){
//         console.log('urdu is on Thursday');
// }}
// else{
//     console.log("enjoy the weekend")}



// ternary

// function period(day){
//    return day === 'monday' ? 'Physics is on Monday' : null}
//     console.log(period('monday'));


// nested switch

switch (day) {
    case "monday":console.log("its monday");
    switch(period){
        case "physics": console.log("Physics is on Monday"); 
    }    
     break;
    case"tuesday":console.log("its tuesday");
    switch(period) {
        case "chemistry": console.log("Chemistry is on Tuesday");
    }
    break;
    case"wednesday":console.log("its wednesday");
    switch (period){
        case "maths": console.log("Maths is on Wednesday");
    }
    break;
    case"thursday":console.log("its thursday");
    switch(period){
        case "english": console.log("English is on thursday");
    }
    break;
    default: console.log("It's a weekend, enjoy it!");
    
}