import { createApp } from 'vue'
import App from './App.jsx'

import Worker from './worker?worker'

import pkg from '../package.json'

// const worker = new Worker()
// worker.onmessage = function (e) {
//   console.log(e)
// }

console.log(pkg)

createApp(App).mount('#app')
