(function () {
    'use strict';
    var UGHJS_MIN = 3000,
        UGHJS_MAX = 12000,
        tags = ["div", "article", "section", "nav", "header"].filter(function (tag) {
            return !!$(tag).length;
        }),
        ugHash = {
            "opacityTrolling": function () {
                $(this).css("opacity", (Math.random() + 2.0) / 3.0);
            }
        };

    function getRandom (hash) {
        var isObject = Object.prototype.toString.call(hash) === '[object Object]',
            arr = isObject ? Object.keys(hash) : hash,
            random = Math.floor(Math.random() * arr.length),
            value = isObject ? hash[arr[random]] : arr[random];

        return value;
    }

    function getTags (num) {
        num = num || 1;

        var n = 0,
            str = '',
            selected,
            arr = [].concat(tags);

        for (; n < num; n++) {
            selected = getRandom(arr);
            str += (str ? ',' : '') + selected;
            arr = arr.filter(function (tag) {
                return tag !== selected;
            });
        }

        return str;
    }

    function ughjsRun () {
        var tags = getTags();

        $(tags).each(getRandom(ugHash));

        ughjsInit();
    }

    function ughjsInit () {
        setTimeout(ughjsRun, UGHJS_MIN + Math.random() * (UGHJS_MAX - UGHJS_MIN));
    }

    ughjsInit();
})();
