
let  filter = (arr) => {

  let distinct = new Set();

  for(let i in arr)
  {
      distinct.add(arr[i]);
  }
 return distinct;
}

export  {filter}