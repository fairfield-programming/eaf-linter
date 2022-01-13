function detectStateCode(input) {

    var output = [];

    input.forEach(function (item) {

        if (item.type == "IfStatement") {

            if (item.test.type == "BooleanLiteral") {

                if (item.test.value) {

                    output.push({
                        type: "CommentLine",
                        value: "NOTE: stale statement below"
                    });
                
                } else {

                    output.push({
                        type: "CommentLine",
                        value: "NOTE: below code will never run"
                    });

                }
                
            }

        }

        output.push(item);

    });

    return output;

}

module.exports = detectStateCode;