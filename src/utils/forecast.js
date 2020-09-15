const request = require('request')

const forecast = (latitude,longitude,callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=cb9508501ad5f7ad1c50c251d46d89ef&query='+ latitude + ',' + longitude +'&units=f'

    request({url , json: true}, (error,{ body })=> {
        if(error){
            callback('Unable to connect server!', undefined)
        }else if(body.error){
            callback('Unable to find loaction!', undefined)
        }else{
            callback(undefined,{
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                description: body.current.weather_descriptions[0]
            })
        }
    })
} 

module.exports = forecast