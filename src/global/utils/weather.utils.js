
import { date } from './date.utils'


export const getCurrentWeather = current => 
    ({
        temp: Math.floor(current.temp),
        icon: current.weather[0].icon
    })


export const getDailyForecast = days => 
    days.map(day => ({
        name: date(day.dt).day,
        temp: Math.floor(day.temp.day),
        icon: day.weather[0].icon
    }))


const HOURS = [8, 10, 12, 14, 16, 18, 20, 22]
export const getHourlyForecast = hours => 
    hours
    .map(hour => ({
        name: date(hour.dt).hour,
        temp: Math.floor(hour.temp),
        icon: hour.weather[0].icon
    }))
    .filter((hour, index) => index % 2 === 0 && index < 24)
