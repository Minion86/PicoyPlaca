jQuery.fn.exists = function () {
    return this.length > 0;
}

(function (factory) {
    factory(jQuery, window.Inputmask, window);
}
(function ($, Inputmask, window) {
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
            $("select#month").focus();  // Focus the select box      
            return false;

        }

        if ($("select[name=year]").val() == '') {

            $("label#select_error_year").show(); // show Warning 
            $("select#year").focus();  // Focus the select box      
            return false;

        }

        generateCalendar(button);

        return false;
    }
});


$(document).ready(function () {

    $(document).on("keyup", ".numeric_only", function () {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });

    $('#licenseplate').inputmask({"mask": "AAA-9999"});

    $("#month").chosen();

    $("#year").chosen();

    $('.error').hide();

    $("#month").change(function () {
        $("label#select_error_month").hide();
    });

    $("#year").change(function () {
        $("label#select_error_year").hide();
    });



}); /*end docu*/


var generateCalendar = function (button)
{
    var formData = JSON.parse(JSON.stringify($("#frm").serializeArray()));
    console.log(JSON.stringify(formData));
    console.log(JSON.stringify(formData[0].value));
    console.log(JSON.stringify(formData[1].value));
    console.log(JSON.stringify(formData[2].value));
    var dates = [];
    var licensePlateLastDigit = formData[0].value.substr(formData[0].value.length - 1);
    var i;
    for (i = 1; i <= getDaysInMonth(formData[1].value, formData[2].value); i++) {
        var dateTemp = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString());
        var day = dateTemp.getDay();
        if ((licensePlateLastDigit == "1" || licensePlateLastDigit == "2") && (day == 1))
        {

            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            var dateMorning = new PicoyPlacaDates(dateFromMorning, dateToMorning);
            var dateEvening = new PicoyPlacaDates(dateFromEvening, dateToEvening);

            dates.push(dateMorning);
            dates.push(dateEvening);
        }
        if ((licensePlateLastDigit == "3" || licensePlateLastDigit == "4") && (day == 2))
        {

            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            var dateMorning = new PicoyPlacaDates(dateFromMorning, dateToMorning);
            var dateEvening = new PicoyPlacaDates(dateFromEvening, dateToEvening);

            dates.push(dateMorning);
            dates.push(dateEvening);
        }
        if ((licensePlateLastDigit == "5" || licensePlateLastDigit == "6") && (day == 3))
        {

            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            var dateMorning = new PicoyPlacaDates(dateFromMorning, dateToMorning);
            var dateEvening = new PicoyPlacaDates(dateFromEvening, dateToEvening);

            dates.push(dateMorning);
            dates.push(dateEvening);
        }
        if ((licensePlateLastDigit == "7" || licensePlateLastDigit == "8") && (day == 4))
        {
            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            var dateMorning = new PicoyPlacaDates(dateFromMorning, dateToMorning);
            var dateEvening = new PicoyPlacaDates(dateFromEvening, dateToEvening);

            dates.push(dateMorning);
            dates.push(dateEvening);

        }
        if ((licensePlateLastDigit == "9" || licensePlateLastDigit == "0") && (day == 5))
        {

            var dateFromMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 07:00:00");
            var dateToMorning = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 09:30:00");
            var dateFromEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 16:00:00");
            var dateToEvening = new Date(formData[2].value.toString() + "-" + formData[1].value.toString() + "-" + i.toString() + " 19:30:00");
            var dateMorning = new PicoyPlacaDates(dateFromMorning, dateToMorning);
            var dateEvening = new PicoyPlacaDates(dateFromEvening, dateToEvening);

            dates.push(dateMorning);
            dates.push(dateEvening);
        }
    }

    console.log(dates);
}


var getDaysInMonth = function (month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
// Here January is 0 based
// return new Date(year, month+1, 0).getDate();
};

class PicoyPlacaDates {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}