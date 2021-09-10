//Open connection
const request = new XMLHttpRequest();
request.open("GET", "http://worldclockapi.com/api/json/est/now");

//Access request data
request.onload = ()=> {
    if(request.status === 200){
        //Convert from Object To Json
        var JsonResponse = JSON.parse(request.response)

        var htmlOutput = 'Current data time: ' + JsonResponse.currentDateTime + '<br>'
        htmlOutput += 'Current file time: ' + JsonResponse.currentFileTime + '<br>'
        htmlOutput += 'Day of the week: ' + JsonResponse.dayOfTheWeek + '<br>'
        htmlOutput += 'Is daylight savings time: ' + JsonResponse.isDayLightSavingsTime + '<br>'
        htmlOutput += 'Ordinal date: ' + JsonResponse.ordinalDate + '<br>'
        htmlOutput += 'Time zone name: ' + JsonResponse.timeZoneName

        document.write(htmlOutput)
    } else {
        document.write('Connection failed')
    }
}

request.send()
