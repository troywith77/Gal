import electron from 'electron';
import $ from 'jquery';

$(document).on('click', '.message-content img', function(e) {
  const url = $(this).attr('src')
  const win = new electron.remote.BrowserWindow({
    width: 1280,
    height: 800
  })
  win.loadURL(url)
  win.show()
})