const contextMenus = {}

function findMenuRefItem(theMenuArray, theMenuRef) {
  for (let menuindex = 0; menuindex < theMenuArray.length; menuindex++) {
    if (theMenuArray[menuindex].menuref === theMenuRef) {
      return theMenuArray[menuindex].id
    }
  }
}

function contextMenuClickHandler(info, tab) {

  let actionToDo

  for (let actionindex = 0; actionindex < menuActions.length; actionindex++) {
    if (menuActions[actionindex].id === info.menuItemId) {
      actionToDo = menuActions[actionindex]
      break
    }
  }

  if (!actionToDo) {
    return
  }

  if (actionToDo.file === "") {
    return
  }

  function errorHandler () {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message)
    }
  }

  function sendFileContentsAsMessage(filecontents) {
    chrome.tabs.sendMessage(tab.id, { type: "display", messageContents: "Script to Run:\n" })
    chrome.tabs.sendMessage(tab.id, { type: "display", messageContents: filecontents })
  }

  function sendFileContentsAsBookmarklet(filecontents) {
    const bookmarklet = "javascript:(function(){" + encodeURI(filecontents) + "})()"
    chrome.tabs.sendMessage(tab.id, { type: "display", messageContents: "As Bookmarklet:\n" })
    chrome.tabs.sendMessage(tab.id, { type: "display", messageContents: bookmarklet })
  }

  if (actionToDo.instant) {
    chrome.tabs.executeScript(null, { file: actionToDo.file }, errorHandler)
  } else {
    chrome.tabs.executeScript(tab.id, { file: 'js/contentscript.js' }, function () {
      chrome.tabs.sendMessage(tab.id, { type: "execfile", filename: actionToDo.file })
    })
  }

  getFileContents(actionToDo.file, errorHandler, sendFileContentsAsMessage)
  getFileContents(actionToDo.file, errorHandler, sendFileContentsAsBookmarklet)

  function getFileContents(filename, errorHandler, callback) {
    chrome.runtime.getPackageDirectoryEntry(function (root) {
      root.getFile(filename, {}, function (fileEntry) {
        fileEntry.file(function (file) {
          const reader = new FileReader()
          reader.onloadend = function (e) {
            callback(this.result)
          }
          reader.readAsText(file)
        }, errorHandler)
      }, errorHandler)
    })
  }
}

chrome.contextMenus.onClicked.addListener(contextMenuClickHandler)

for (let actionindex = 0; actionindex < menuActions.length; actionindex++) {
  if (menuActions[actionindex].menu === "") {
    menuActions[actionindex].id = chrome.contextMenus.create({ "title": menuActions[actionindex].title, "type": "normal", contexts: ["all"] })
  } else {
    const parentId = findMenuRefItem(menuActions, menuActions[actionindex].menu)
    menuActions[actionindex].id = chrome.contextMenus.create({ "title": menuActions[actionindex].title, "type": "normal", contexts: ["all"], "parentId": parentId })
  }
}
