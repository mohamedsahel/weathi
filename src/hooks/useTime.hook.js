import React from 'react'


export default function useTime(refreshDelay) {
    const [date, setDate] = React.useState({})

    React.useEffect(() => {
        let id = setInterval(() => {
            const date = new Date()
            const dateArray = date.toString().split(' ')
            const timeArray = dateArray[4].split(':')
            setDate({
                day: dateArray[0],
                dayNumber: dateArray[2],
                month: dateArray[1],
                year: dateArray[3],
                hours: timeArray[0],
                minutes: timeArray[1],
                seconds: timeArray[2],
            })

        }, refreshDelay)

        return () => clearInterval(id)
    }, [refreshDelay])

    return date
}