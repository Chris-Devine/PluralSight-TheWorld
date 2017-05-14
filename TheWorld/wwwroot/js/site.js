// site.js

(function() {


    //var ele = $("#username");
    //ele.text("Chris Thomas Devine");

    //var main = $("#main");

    //main.on("mouseenter",
    //    function() {
    //        main.style = "background: #888";
    //    });


    //main.on("mouseleave",
    //    function() {
    //        main.style = "";
    //    });

    //var manuItems = $("ul.menu li a");
    //manuItems.on("click",
    //    function () {
    //        var me = $(this);
    //        alert(me.text());
    //    });

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebar-toggle i.fa");

    $("#sidebar-toggle").on("click",
        function() {
            $sidebarAndWrapper.toggleClass("hide-sidebar");
            if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
                $icon.removeClass("fa-angle-left");
                $icon.addClass("fa-angle-right");
            } else {
                $icon.removeClass("fa-angle-right");
                $icon.addClass("fa-angle-left");
            }
        });


})();