

// Filter QC Comments list when searched
$("#QCCommentSearch").on('keyup', function(){
    var value = $(this).val().toLowerCase();
    $("#QCCommentList button").each(function () {
        if ($(this).text().toLowerCase().search(value) > -1) {
            $(this).show();
            $(this).prev('.subjectName').last().show();
        } else {
            $(this).hide();
        }
    });
})

// Add clicked button text to textarea
$("#QCCommentList > button").click(function () {
    if ( $("#QCListFormatStar").is(":checked") ) {
        var qcListFormat = "* "
    };

    if ( $("#QCListFormatDash").is(":checked") ) {
        var qcListFormat = "- "
    };

    if ( $("#QCListFormatNumber").is(":checked") ) {
        var qcListFormat = "# "
    };

    var btnText = $(this).html();
    $("#QCCommentResults").append(qcListFormat + btnText + '\n');
});

// Clear QC Comment textarea
function QCClear() {
    $('#QCCommentResults').val('');
    //$('#QCForm').reset();
    //$("#QCForm").trigger("reset");
}
