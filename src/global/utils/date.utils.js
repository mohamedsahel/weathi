
export const date = dt => {
    const newdate = new Date(dt * 1000)
    const dateArray = newdate.toString().split(' ')

    return {
        hour: dateArray[4].split(':')[0],
        day: dateArray[0]
    }
}