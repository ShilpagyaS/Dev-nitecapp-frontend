export const enUrl = (element) => {
    if (element) {
        const temp = element.replace("/", ' ')
        return encodeURIComponent(temp)
    }
    else {
        return ""
    }

}