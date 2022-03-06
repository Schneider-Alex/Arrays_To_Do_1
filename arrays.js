function push(arr,val){
    console.log(arr)
    console.log('hello')
    for (let i = arr.length; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val
    console.log(arr)
    return arr
}

function popFront(arr){
    const newarr=[]
    for (let i = arr.length; i>1; i--){
        newarr[i-2]=arr.pop()
    }
    console.log(newarr)
    var poppedval=arr
    console.log(poppedval)
    return poppedval
}


const array = [1,2,3,4]
var value = 10



var arr=push(array,value)
var  firstval=popFront(array)

// first two problems above this line


function insertAt(arr,index,val){
    for (let i = arr.length; i>index;i--){
        console.log(arr)
        arr[i]=arr[i-1]
    }
    arr[index]=val
    console.log(arr)
    return arr
}

insertAt([1,2,3,4,5,6,7,8],6,77)

// third problem above this line

function swapPairs(arr){
    for (let i = 1; i<arr.length;i+=2){
        if (arr[i]){
            hold = arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=hold
        }
        }
        return arr
    }

    console.log(swapPairs([1,2,3,4,5]))
