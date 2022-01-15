function write(item, main) {

    var await = (item.await) ? 'await ' : '';

    return `for ${await}(${main.parse(item.left)} of ${main.parse(item.right)}) ${main.parse(item.body)}`;

}

module.exports = { write };