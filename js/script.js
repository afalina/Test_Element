//windows
var windowsType = $('#select-of-windows-port');
var windowsPrice = $('#price-of-Windows-port span');
var windowsCountPorts = $('#quantity-windows');
var windowsTotalPrice = $('#total-price-of-windows-port span');
var windowsDiscount = $('#save-for-windows-port');
var windowsDiscountVal = $('#save-for-windows-port span');


//linux
var linuxType = $('#select-of-linux-port');
var linuxPrice = $('#price-of-linux-port span');
var linuxCountPorts = $('#quantity-linux');
var linuxTotalPrice = $('#total-price-of-linux-port span');
var linuxDiscount = $('#save-for-linux-port');
var linuxDiscountVal = $('#save-for-linux-port span');

//mac
var macType = $('#select-of-mac-port');
var macPrice = $('#price-of-mac-port span');
var macCountPorts = $('#quantity-mac');
var macTotalPrice = $('#total-price-of-mac-port span');
var macDiscount = $('#save-for-mac-port');
var macDiscountVal = $('#save-for-mac-port span');

//all
var allItems = $('#all-items');
var allTotalSum = $('#all-total-sum');
var lifetime = $('#lifetime');
var lifetimeCheckbox = 0;
var urgent = $('#urgent');
var urgentCheckbox = 0;



function reCalculateAll() {
    allItems.text(Number(windowsCountPorts.val())
                + Number(linuxCountPorts.val())
                + Number(macCountPorts.val()));

    allTotalSum.text((Number(windowsTotalPrice.text())
                    + Number(linuxTotalPrice.text())
                    + Number(macTotalPrice.text())
                    + Number(lifetimeCheckbox)
                    + Number(urgentCheckbox)).toFixed(2));
}




function reCalculateWindows() {
    if (windowsCountPorts.val() > 1) {
        windowsPrice.text(((windowsType.val() * Math.pow((1-0.0055), windowsCountPorts.val()-1))).toFixed(2));
        windowsDiscountVal.text((100 - ((windowsType.val() * Math.pow((1 - 0.055), windowsCountPorts.val()-1)) * 100) / windowsType.val()).toFixed(0));
        windowsDiscount.show();
    } else {
        windowsPrice.text(windowsType.val());
        windowsDiscount.hide();
    }
    windowsTotalPrice.text((windowsPrice.text() * windowsCountPorts.val()).toFixed(2));
}

function reCalculateLinux() {
    if (linuxCountPorts.val() > 1) {
        linuxPrice.text((linuxType.val()*(1-0.0055) * Math.pow((1-0.0055), linuxCountPorts.val())).toFixed(2));
        linuxDiscountVal.text((100 - ((linuxType.val() * Math.pow((1 - 0.055), linuxCountPorts.val()-1)) * 100) / linuxType.val()).toFixed(0));
        linuxDiscount.show();
    } else {
        linuxPrice.text(linuxType.val());
        linuxDiscount.hide();
    }
    linuxTotalPrice.text((linuxPrice.text() * linuxCountPorts.val()).toFixed(2));
}

function reCalculateMac() {
    if (macCountPorts.val() > 1) {
        macPrice.text(((macType.val() * Math.pow((1-0.0055), macCountPorts.val()-1))).toFixed(2));
        macDiscountVal.text((100 - ((macType.val() * Math.pow((1 - 0.055), macCountPorts.val()-1)) * 100) / macType.val()).toFixed(0));
        macDiscount.show();
    } else {
        macPrice.text(macType.val());
        macDiscount.hide();
    }
    macTotalPrice.text((macPrice.text() * macCountPorts.val()).toFixed(2));
}

$(function(){

    reCalculateWindows();
    reCalculateLinux();
    reCalculateMac();
    reCalculateAll();

    windowsType.on('change', function() {
        reCalculateWindows();
        reCalculateAll();
    });

    windowsCountPorts.on('input', function() {
        reCalculateWindows();
        reCalculateAll();
    });

    linuxType.on('change', function() {
        reCalculateLinux();
        reCalculateAll();
    });

    linuxCountPorts.on('input', function() {
        reCalculateLinux();
        reCalculateAll();
    });

    macType.on('change', function() {
        reCalculateMac();
        reCalculateAll();
    });

    macCountPorts.on('input', function() {
        reCalculateMac();
        reCalculateAll();
    });

    lifetime.on('change', function () {
        allTotalSum.text()
    })

    lifetime.on('change', function() {
        if ($('#lifetime:checkbox:checked').val()) {
            lifetimeCheckbox = $('#lifetime:checkbox:checked').val();
        } else {
            lifetimeCheckbox = 0;
        }
        reCalculateAll();
    });

    urgent.on('change', function() {
        if ($('#urgent:checkbox:checked').val()) {
            urgentCheckbox = $('#urgent:checkbox:checked').val();
        } else {
            urgentCheckbox = 0;
        }
        reCalculateAll();
    });

});