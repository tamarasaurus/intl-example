const browserLocale = require('browser-locale')
const m = require('malal')
const game = require('./game.js')

// Set the locales
m.set('en', require('./locales/en.json'))
m.set('fr', require('./locales/fr.json'))

function sayHello() {
    console.log('sayHello from index.js')
    console.log(m.__('greeting.hello', { name: 'Peter' }))
    console.log('----------------------')
}

// Say hello for the default (first) locale - english
sayHello()

// Change to french
m.use('fr')

// Say hello in french
sayHello()

const userLocale = browserLocale().split('-')[0]

// Get the user locale from the browser and use that instead
m.use(userLocale)

// Say hello in the user locale
sayHello()

game.start()
