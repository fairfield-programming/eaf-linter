function iterate(data, method) {

    if (data == null) return;

    if (typeof data != "object") return;

    if (data.type != undefined) method.call(data);

    var output = {};

    for (const key in data) {
        
        var element = data[key];

        output[key] = iterate(element, method) || element;

    } 

    return output;

}

module.exports = {
    iterate
};