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
        var params = $("#frm").serialize();
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

        alert('ok');

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