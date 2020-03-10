var arr = [1 ,2 ,[3 , 5 , [5 , 6 , [7 ,8 , [9 , 10 , 12]]]]]

function flatten(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val), [])
                 : arr.slice();
 };
 
 console.log(flatten(arr , Infinity));