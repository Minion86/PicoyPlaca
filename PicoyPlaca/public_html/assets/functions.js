

module.exports.getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};


module.exports.checkData = function (selectedDate, licensePlate)
{
    var licensePlateLastDigit = licensePlate.substr(licensePlate.length - 1);
    var dateTemp = new Date(selectedDate);
    var day = dateTemp.getDay();

    if ((licensePlateLastDigit == "1" || licensePlateLastDigit == "2") && (day == 1))
    {
        //we establish an start and end date for pico y placa hours in the morning and in the evening
        var dateFromMorning = new Date(selectedDate + " 07:00:00");
        var dateToMorning = new Date(selectedDate + " 09:30:00");
        var dateFromEvening = new Date(selectedDate + " 16:00:00");
        var dateToEvening = new Date(selectedDate + " 19:30:00");
        //we assign the json value to the list 
        var picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
        var picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
        return true;
    }
    //We evaluate license plate that ends in 3 and 4 with tuesday
    if ((licensePlateLastDigit == "3" || licensePlateLastDigit == "4") && (day == 2))
    {
        //we establish an start and end date for pico y placa hours in the morning and in the evening
        var dateFromMorning = new Date(selectedDate + " 07:00:00");
        var dateToMorning = new Date(selectedDate + " 09:30:00");
        var dateFromEvening = new Date(selectedDate + " 16:00:00");
        var dateToEvening = new Date(selectedDate + " 19:30:00");
        //we assign the json value to the list 
        var picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
        var picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
        return true;
    }
    //We evaluate license plate that ends in 5 and 6 with wednesday
    if ((licensePlateLastDigit == "5" || licensePlateLastDigit == "6") && (day == 3))
    {
        //we establish an start and end date for pico y placa hours in the morning and in the evening
        var dateFromMorning = new Date(selectedDate + " 07:00:00");
        var dateToMorning = new Date(selectedDate + " 09:30:00");
        var dateFromEvening = new Date(selectedDate + " 16:00:00");
        var dateToEvening = new Date(selectedDate + " 19:30:00");
        //we assign the json value to the list 
        var picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
        var picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
        return true;
    }
    //We evaluate license plate that ends in 7 and 8 with thursday
    if ((licensePlateLastDigit == "7" || licensePlateLastDigit == "8") && (day == 4))
    {
        //we establish an start and end date for pico y placa hours in the morning and in the evening
        var dateFromMorning = new Date(selectedDate + " 07:00:00");
        var dateToMorning = new Date(selectedDate + " 09:30:00");
        var dateFromEvening = new Date(selectedDate + " 16:00:00");
        var dateToEvening = new Date(selectedDate + " 19:30:00");
        //we assign the json value to the list 
        var picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
        var picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
        return true;
    }
    //We evaluate license plate that ends in 9 and 0 with friday
    if ((licensePlateLastDigit == "9" || licensePlateLastDigit == "0") && (day == 5))
    {
        //we establish an start and end date for pico y placa hours in the morning and in the evening
        var dateFromMorning = new Date(selectedDate + " 07:00:00");
        var dateToMorning = new Date(selectedDate + " 09:30:00");
        var dateFromEvening = new Date(selectedDate + " 16:00:00");
        var dateToEvening = new Date(selectedDate + " 19:30:00");
        //we assign the json value to the list 
        var picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
        var picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
        return true;
    }
    return false;
}



