(function () {
    'use strict';
    var UGHJS_MIN = 3000,
        UGHJS_MAX = 12000;

    function opacityTrolling () {
        $(this).css("opacity", (Math.random() + 2.0) / 3.0);
    }

    function ughjsRun () {
        $('div').each(opacityTrolling);
        ughjsInit();
    }

    function ughjsInit () {
    	setTimeout(ughjsRun, UGHJS_MIN + Math.random() * (UGHJS_MAX - UGHJS_MIN));
    }

    ughjsInit();
})();
