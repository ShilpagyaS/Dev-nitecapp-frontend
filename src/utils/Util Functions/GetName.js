import moment from 'moment/moment'

function GetName(userName, date) {
    let NameArray = userName.split(' ')
    let NameString
    let FormatedDate = moment(date).format('L')
    let FormatedTime = moment(date).format('LT')
    if (NameArray.length > 1) {
        NameString = `${NameArray[0]} ${NameArray[1][0]}.`
    }
    else {
        NameString = `${NameArray[0]}`
    }
    return (
        `${NameString} (${FormatedDate}) ${FormatedTime}`
    )
}
export function GetNameOnly(userName) {
    let NameArray = userName.split(' ')
    let NameString
    if (NameArray.length > 1) {
        NameString = `${NameArray[0]} ${NameArray[1][0]}.`
    }
    else {
        NameString = `${NameArray[0]}`
    }
    return (
        `${NameString}`
    )
}
export default GetName