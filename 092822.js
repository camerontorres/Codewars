function stantonMeasure(intArr){
let ones=0
let stantCount=0
for(let i=0; i<intArr.length; i++){
  if(intArr[i]===1){
    ones++}
  }
for(let j=0; j<intArr.length; j++){
  if(intArr[j]===stantCount){
    stantCount++}
}
return(stantCount)
}
