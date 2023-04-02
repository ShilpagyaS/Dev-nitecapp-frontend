export const shortString=(value)=>{
if(value?.length>20){
   return  `${value.substring(0,20)}...`
}
else return value
}