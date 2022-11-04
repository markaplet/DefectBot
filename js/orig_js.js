// Filter vendor list when searched
function vendorFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("vendorCommentSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchResultsList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Filter Customer list when searched
function customerFilter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("customerCommentSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("customerSearchResultsList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function duplicateFunc() {
    var vendorCommentResults = document.getElementById('vendorCommentResults');
    var listAction = document.getElementsByClassName('list-action');

    const test = listAction=event.target.innerHTML
    let str = '*';
    str += ' ';
    str += test;
    str += '\n';

    vendorCommentResults.append(str);

    //vendorCommentResults.append(listAction=event.target.innerHTML + '\n');
    //vendorCommentResults.append(listAction=event.target.innerHTML);
    //console.log(event.target.innerHTML);
    //console.log(listAction);
}

function duplicateFuncCust() {
    var customerCommentResults = document.getElementById('customerCommentResults');
    var listAction = document.getElementsByClassName('list-action');

    const test = listAction=event.target.innerHTML
    let str = '*';
    str += ' ';
    str += test;
    str += '\n';

    customerCommentResults.append(str);
}

// Clear saved vendor comments from list
function vendorClear() {
    document.getElementById("vendorForm").reset();
}

// Clear saved customer comments from list
function customerClear() {
    document.getElementById("customerForm").reset();
}

// Copy saved vendor comments to the clipboard.
function vendorCopy() {
    // Get the text field
    var copyText = document.getElementById("vendorCommentResults");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Show toast
    ShowToast();

    function ShowToast(){
        var toastElList = [].slice.call(document.querySelectorAll('.vendor-toast'))
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
    }
}

// Copy saved vendor comments to the clipboard.
function customerCopy() {
    // Get the text field
    var copyText = document.getElementById("customerCommentResults");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Show toast
    ShowToast();

    function ShowToast(){
        var toastElList = [].slice.call(document.querySelectorAll('.customer-toast'))
        var toastList = toastElList.map(function(toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
    }
}