var array= []

array.push(function(){
    console.log("Hello 1")
})

array.push(function(){
    console.log("2")
})
array.push(function(){
    console.log("3")
})



for(var i=0;i<array.length;i++){
    array[i]();
}

array.forEach(element => {
    element();
});






