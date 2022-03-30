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
                return i;
            }
        }
        return -1
    },
    subArray: function(array, startIndex, endIndex){
        var startIndex= array[0];
        var endIndex= array.length-1;
        var array_2 = array.slice(startIndex, endIndex);
        return array_2; 
    },
    isSameLength: function(a1, a2){
        return a1.length == a2.length;
    },     
    reverse: function(array){
        var newArray=[];
        for(i=array.length-1;i>=0;i--){
            newArray.push(array[i])
        }
        return newArray;
    },
    swap: function(array,index1,index2){
        [array[index1], array[index2]] = [array[index2], array[index1]]
        return array
    },
    contains: function(array, value){
        return this.indexOf(array,value) != -1;
    },
    concatenate: function(a1,a2){
        for(var i=0; i<a1.length; i++){
        a2.push(a1[i])
        }
        return a2
    }
       


}
module.exports = obj;