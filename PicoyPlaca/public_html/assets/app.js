jQuery.fn.exists = function () {
    return this.length > 0;
}

(function (factory) {
    factory(jQuery, window.Inputmask, window);
}
(function ($, Inputmask, window) {
    //set input mask configurations
    $(window.document).ajaxComplete(function (event, xmlHttpRequest, ajaxOptions) {
        if ($.inArray("html", ajaxOptions.dataTypes) !== -1) {
            $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias], [data-inputmask-regex]").each(function (ndx, lmnt) {
                if (lmnt.inputmask === undefined) {
                    Inputmask().mask(lmnt);
                }
            });
        }
    }).ready(function () {
        $(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias],[data-inputmask-regex]").each(function (ndx, lmnt) {
            if (lmnt.inputmask === undefined) {
                Inputmask().mask(lmnt);
            }
        });
    });
}));
$.validate({
    form: '#frm',
    onError: function () {
    },
    onSuccess: function () {
        //var params = $("#frm").serialize();
        var button = $('#frm button[type="submit"]');
        $('.error').hide();
        if ($("select[name=month]").val() == '') {

            $("label#select_error_month").show(); // show Warning 
            $("select#month").focus(); // Focus the select box      
            return false;
        }

        if ($("select[name=year]").val() == '') {

            $("label#select_error_year").show(); // show Warning 
            $("select#year").focus(); // Focus the select box      
            return false;
        }

        generateData(button);
        return false;
    }
});
$(document).ready(function () {

    $(document).on("keyup", ".numeric_only", function () {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });
    //set an input mask to validate the license plate
    $('#licenseplate').inputmask({"mask": "AAA-9999"});
    //chosen component is implemented to beautify select controls
    $("#month").chosen();
    $("#year").chosen();
    //error message when a select component is not selected
    $('.error').hide();
    $("#month").change(function () {
        $("label#select_error_month").hide();
    });
    $("#year").change(function () {
        $("label#select_error_year").hide();
    });
}); /*end docu*/


var generateData = function (button)
{
    var formData = JSON.parse(JSON.stringify($("#frm").serializeArray()));
    console.log(JSON.stringify(formData));
    console.log(JSON.stringify(formData[0].value));
    console.log(JSON.stringify(formData[1].value));
    console.log(JSON.stringify(formData[2].value));
    var dates = [];
    //To get the last digit of the license plate
    var licensePlateLastDigit = formData[0].value.substr(formData[0].value.length - 1);
    var i;
    //here we iterate each day of the month selected
    for (i = 1; i <= getDaysInMonth(formData[1].value, formData[2].value); i++) {
        var dateTemp = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString());
        var day = dateTemp.getDay();
        //We evaluate license plate that ends in 1 and 2 with monday
        if ((licensePlateLastDigit == "1" || licensePlateLastDigit == "2") && (day == 1))
        {
            //we establish an start and end date for pico y placa hours in the morning and in the evening
            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            //we assign the json value to the list 
            picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
            picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
            dates.push(picoyPlacaDateMorning);
            dates.push(picoyPlacaDateEvening);
        }
        //We evaluate license plate that ends in 3 and 4 with tuesday
        if ((licensePlateLastDigit == "3" || licensePlateLastDigit == "4") && (day == 2))
        {
            //we establish an start and end date for pico y placa hours in the morning and in the evening
            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            //we assign the json value to the list 
            picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
            picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
            dates.push(picoyPlacaDateMorning);
            dates.push(picoyPlacaDateEvening);
        }
        //We evaluate license plate that ends in 5 and 6 with wednesday
        if ((licensePlateLastDigit == "5" || licensePlateLastDigit == "6") && (day == 3))
        {
            //we establish an start and end date for pico y placa hours in the morning and in the evening
            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            //we assign the json value to the list 
            picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
            picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
            dates.push(picoyPlacaDateMorning);
            dates.push(picoyPlacaDateEvening);
        }
        //We evaluate license plate that ends in 7 and 8 with thursday
        if ((licensePlateLastDigit == "7" || licensePlateLastDigit == "8") && (day == 4))
        {
            //we establish an start and end date for pico y placa hours in the morning and in the evening
            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            //we assign the json value to the list 
            picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
            picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
            dates.push(picoyPlacaDateMorning);
            dates.push(picoyPlacaDateEvening);
        }
        //We evaluate license plate that ends in 9 and 0 with friday
        if ((licensePlateLastDigit == "9" || licensePlateLastDigit == "0") && (day == 5))
        {
            //we establish an start and end date for pico y placa hours in the morning and in the evening
            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            //we assign the json value to the list 
            picoyPlacaDateMorning = {"title": "Circulation Restriction", "start": dateFromMorning, "end": dateToMorning, "color": '#ff9f89'};
            picoyPlacaDateEvening = {"title": "Circulation Restriction", "start": dateFromEvening, "end": dateToEvening, "color": '#ff9f89'};
            dates.push(picoyPlacaDateMorning);
            dates.push(picoyPlacaDateEvening);
        }
    }
    //We generate the calendar component sending the json value with start and end dates and taking as reference the first day of the month
    generateCalendar(dates, formData[2].value.toString() + "-" + formData[1].value.toString() + "-1");
    console.log(dates);
}

var generateCalendar = function (dates, dateStartString) {
    var dateStart = new Date(dateStartString);
    var calendarEl = document.getElementById('calendar');
    calendarEl.innerHTML = "";
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        defaultDate: dateStart,
        businessHours: true, // display business hours
        editable: true,
        events: dates,
        eventClick: function (arg) {
            console.log(arg);
            Swal.fire({
                icon: 'warning',
                title: arg.event.title,
                html: '<p>From:' + arg.event.start.toLocaleString() + '</p><p>To:' + arg.event.end.toLocaleString() + '</p>',

            })
        }

    });
    calendar.render();
}
var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};