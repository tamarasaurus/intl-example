const m = require('malal')

module.exports = {
    start: function() {
        // This should be in the user locale since we set it in index.js
        console.log('sayHello from game.js')
        console.log(m.__('greeting.hello', { name: 'Peter' }))
        console.log('----------------------')
    }
}
