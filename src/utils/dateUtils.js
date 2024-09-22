export { toUserFriendlyTimeFormat, toUserFriendlyDateFormat, months }

function toUserFriendlyTimeFormat(dateTime) {
    const date = new Date(dateTime)
    const month = months[date.getMonth()]
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    return `${month} ${day}, ${hours}:${minutes} ${ampm}`
}

function toUserFriendlyDateFormat(dateTime) {
    const date = new Date(dateTime)
    const month = months[date.getMonth()]
    const day = date.getDate()+1
    return `${month} ${day}`
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
