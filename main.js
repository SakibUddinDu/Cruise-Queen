document.getElementById('bookingIncrement').addEventListener('click', function(){
    handleProductChange('firstClassInput',  true);
})

document.getElementById('bookingDecrement').addEventListener('click', function(){
    handleProductChange('firstClassInput', false);

})

document.getElementById('bookingIncrement1').addEventListener('click', function(){
    handleProductChange('economyClassInput', true);
})

document.getElementById('bookingDecrement1').addEventListener('click', function(){
    handleProductChange('economyClassInput', false);
})
function handleProductChange(productNum, isIncrease){
    const productNumberInput = document.getElementById(productNum);
    // console.log(firstClassInput);
    const  productNumber = parseFloat(productNumberInput.value);
        let productNumberCount = productNumber;
        // const firstClassCount =firstClassNumber - 1;
        if (isIncrease==true) {
            productNumberCount = productNumber + 1;
        }
        if (isIncrease==false  && productNumber > 0){
            productNumberCount = productNumber - 1;
        }
        productNumberInput.value = productNumberCount;
        const productClassTotal = productNumberCount * 100;
        document.getElementById('subTotalInput').innerText = productClassTotal;
}

// function handleProductChange(isIncrease){
//     const firstClassInput = document.getElementById('firstClassInput');
//     console.log(firstClassInput);
//     const firstClassNumber = parseFloat(firstClassInput.value);
//         let firstClassCount = firstClassNumber;
//         // const firstClassCount =firstClassNumber - 1;
//         if (isIncrease==true) {
//             firstClassCount = firstClassNumber + 1;
//         }
//         if (isIncrease==false  && firstClassNumber > 0) {
//             firstClassCount = firstClassNumber - 1;
//         }
//         firstClassInput.value = firstClassCount;
//         const firstClassTotal = firstClassCount * 150;
//         document.getElementById('subTotalInput').innerText = firstClassTotal;
// }


// document.getElementById('bookingIncrement1').addEventListener('click', function(){
//     handleProductChange1(true);
// })

// document.getElementById('bookingDecrement1').addEventListener('click', function(){
//     handleProductChange1(false);

// })
// function handleProductChange1(isIncrease){
//     const economyClassInput = document.getElementById('economyClassInput');
//     // console.log(firstClassInput);
//     const economyClassNumber = parseFloat(economyClassInput.value);
//         let economyClassCount = economyClassNumber;
//         // const firstClassCount =firstClassNumber - 1;
//         if (isIncrease==true) {
//             economyClassCount = economyClassNumber + 1;
//         }
//         if (isIncrease==false  && economyClassNumber > 0){
//             economyClassCount = economyClassNumber - 1;
//         }
//         economyClassInput.value = economyClassCount;
//         const economyClassTotal = economyClassCount * 100;
//         document.getElementById('subTotalInput').innerText = economyClassTotal;
// }








// document.getElementById('bookingIncrement').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('firstClassInput');
//     console.log(firstClassInput);
//     const firstClassNumber = parseFloat(firstClassInput.value);
//         const firstClassCount =firstClassNumber + 1;
//         firstClassInput.value = firstClassCount;
//         const firstClassTotal = firstClassCount * 150;
//         document.getElementById('subTotalInput').innerText = firstClassTotal;
// })

// document.getElementById('bookingDecrement').addEventListener('click', function(){
//      const firstClassInput = document.getElementById('firstClassInput');
//     console.log(firstClassInput);
//     const firstClassNumber = parseFloat(firstClassInput.value);
//     if(firstClassNumber > 0 ){
//         const firstClassCount =firstClassNumber - 1;
//         firstClassInput.value = firstClassCount;
//         const firstClassTotal = firstClassCount * 150;
//         document.getElementById('subTotalInput').innerText = firstClassTotal;
//     }

// })