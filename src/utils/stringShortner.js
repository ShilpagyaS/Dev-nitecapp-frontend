export const shortString = (value) => {
   if (value?.length > 20) {
      return `${value.substring(0, 15)}...`
   }
   else return value
}