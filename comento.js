(function (window) {
    var comento;

    comento = function (file) {
        var O = {},
            i, line, key, value;

        file = file.split("\n");

        for (i in file) {
            if (file.hasOwnProperty(i) && !file[i].match(/<!--/)) {
                line = file[i];

                if (line.match(/-->/)) {
                    break;
                }

                line = line.replace(/\r/g, "").split(":");
                key = line[0];
                value = line[1].replace(/^\s+|\s+$/g, "");

                O[key] = value;
            }
        }
        return O;
    };

    window.comento = comento;

}(window));
