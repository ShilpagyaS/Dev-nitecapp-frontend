export const whatsthestrength = (Nabv) => {
    let abv = parseFloat(Nabv)
    console.log(abv);
    if (abv > 15) return 'High'
    if (abv > 8 && abv < 15) return 'Medium'
    if (abv > 0 && abv < 8) return 'Low'
    if (abv == 0) return 'No alcohol'
    return ''
}