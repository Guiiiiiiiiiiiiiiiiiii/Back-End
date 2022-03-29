var obj = {
    isEmpty: function(array){
        return array.length==0;
    },
    max : function(array){
        maxnumber = array[0]
        for(var i=0; i<array.legth;i++){
            if(maxnumber<array[i]){
                maxnumber=array[i]
            }
        }
        return maxnumber;
    },
    min: function(array){
        minmunber = array[0]
        for(var i=0; i<array.length;i++){
            if(minmunber>array[i]){
                minmunber=array[i]
            }
        }
        return minmunber;
    },
    average: function(array){
        sum=0
        for(var i=0; i<array.length; i++){
            sum += array[i]
        }
        return sum / array.length
    },
    indexOf: function(array,value){
        for(var i=0; i<array.length;i++){
            if(array[i]==value){
                var index = i
            }
        }
        return index
    },
    subArray: function(array, startIndex, endIndex){
        var startIndex= array[0];
        var endIndex= array.length-1;
        var array_2 = array.slice(startIndex, endIndex);
        return array_2; 
    },
    isSameLength: function(a1, a2){
        if(a1.length== a2.length){
            return true
        }
        else{
            return false
        }
    }


}
module.exports = obj;