import { ipcRenderer as ipc } from 'electron'

ipc.on('new-window', (event, url) => {
  console.log(event, url)
})

ipc.on('message', function(event, text) {
  console.log(text)
})