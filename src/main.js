// import App from './App.svelte'
import Progress from './lib/Progress.svelte'

const progressbar = new Progress({
  target: document.getElementById('progressbar')
})

export default progressbar
