const menuActions = [
    { menu: "", "title": "Snippet Library", menuref: "W", file: "" },


    { menu: "W", "title": "Help", menuref: "W>H", file: "" },
    { menu: "W>H", "title": "About", file: "js/web/help/about.js", instant: false },


    { menu: "W", "title": "Exploits", menuref: "W>E", file: "" },
    { menu: "W>E", "title": "XSS Injection", file: "js/web/exploits/xss.js", instant: false },
    { menu: "W>E", "title": "SQL Injection", file: "js/web/exploits/sql.js", instant: false },


    { menu: "W", "title": "Accessibility", menuref: "W>A", file: "" },
    { menu: "W>A", "title": "Enable right click", file: "js/web/accessibility/enableRightClick.js", instant: false },
    { menu: "W>A", "title": "Enable text selection", file: "js/web/accessibility/enableTextSelection.js", instant: false },
    { menu: "W>A", "title": "Highlight elements with the same id", file: "js/web/accessibility/highlightElementsWithTheSameId.js", instant: false },
    { menu: "W>A", "title": "Highlight images with alt tags", file: "js/web/accessibility/highlightImagesWithAltTags.js", instant: false },
    { menu: "W>A", "title": "Highlight images without alt tags", file: "js/web/accessibility/highlightImagesWithoutAltTags.js", instant: false },
    { menu: "W>A", "title": "Highlight inputs without labels", file: "js/web/accessibility/highlightImagesWithoutLabels.js", instant: false },
    { menu: "W>A", "title": "Increase all elements text", file: "js/web/accessibility/increaseAllElementsText.js", instant: false },
    { menu: "W>A", "title": "Increase all buttons text", file: "js/web/accessibility/increaseButtonsText.js", instant: false },
    { menu: "W>A", "title": "Increase all labels text", file: "js/web/accessibility/increaseLabelsText.js", instant: false },
    { menu: "W>A", "title": "Increase all links text", file: "js/web/accessibility/increaseLinksText.js", instant: false },
    { menu: "W>A", "title": "Increase page text", file: "js/web/accessibility/increasePagesText.js", instant: false },
    { menu: "W>A", "title": "List images and alt tags", file: "js/web/accessibility/listImagesAndAltTags.js", instant: false },
    { menu: "W>A", "title": "Make text CAPS", file: "js/web/accessibility/makeTextCapitlise.js", instant: false },
    { menu: "W>A", "title": "Make text lowercase", file: "js/web/accessibility/makeTextLowercase.js", instant: false },
    { menu: "W>A", "title": "Make text uppercase", file: "js/web/accessibility/makeTextUppercase.js", instant: false },
    { menu: "W>A", "title": "Print form controls", file: "js/web/accessibility/printFormControls.js", instant: false },
    { menu: "W>A", "title": "Remove elements with the same id", file: "js/web/accessibility/removeElementWithTheSameId.js", instant: false },
    { menu: "W>A", "title": "Remove images without alt tags", file: "js/web/accessibility/removeImagesWithoutAltTags.js", instant: false },
    { menu: "W>A", "title": "Remove inputs without labels", file: "js/web/accessibility/removeInputsWithoutLabel.js", instant: false },
    { menu: "W>A", "title": "Remove max length", file: "js/web/accessibility/removeMaxLength.js", instant: false },
    { menu: "W>A", "title": "Remove paste restrictions", file: "js/web/accessibility/removePasteRestrictions.js", instant: false },
    { menu: "W>A", "title": "Remove required", file: "js/web/accessibility/removeRequired.js", instant: false },
    { menu: "W>A", "title": "Visualise tab flow", file: "js/web/accessibility/visualiseTabFlow.js", instant: false },


    { menu: "W", "title": "Convert", menuref: "W>C", file: "" },
    { menu: "W>C", "title": "Decode base64 to console", file: "js/web/convert/decodeBase64ToConsole.js", instant: false },
    { menu: "W>C", "title": "Encode base64 to console", file: "js/web/convert/encodeBase64ToConsole.js", instant: false },
    { menu: "W>C", "title": "Pretty print JSON to console", file: "js/web/convert/prettryPrintJsonToConsole.js", instant: false },
    { menu: "W>C", "title": "ROT13", file: "js/web/convert/ROT13.js", instant: false },


    { menu: "W", "title": "DOM", menuref: "W>D", file: "" },
    { menu: "W>D", "title": "Add number column to table", file: "js/web/dom/addNumberColumnToTable.js", instant: false },
    { menu: "W>D", "title": "Console save", file: "js/web/dom/consoleSave.js", instant: false },
    { menu: "W>D", "title": "Convert images to data url", file: "js/web/dom/convertAllImagesToDataUrl.js", instant: false },
    { menu: "W>D", "title": "Convert input types to text", file: "js/web/dom/convertAllInputTypesToText.js", instant: false },
    { menu: "W>D", "title": "Convert bullet points to numbers", file: "js/web/dom/convertBulletpointsToNumbers.js", instant: false },
    { menu: "W>D", "title": "Document design mode off", file: "js/web/dom/documentDesignModeOff.js", instant: false },
    { menu: "W>D", "title": "Document design mode on", file: "js/web/dom/documentDesignModeOn.js", instant: false },
    { menu: "W>D", "title": "Find all colours", file: "js/web/dom/findAllColours.js", instant: false },
    { menu: "W>D", "title": "For every element do this", file: "js/web/dom/forEveryElementDoThis.js", instant: false },
    { menu: "W>D", "title": "Highligh internal and external links", file: "js/web/dom/internalExternalLinks.js", instant: false },
    { menu: "W>D", "title": "Overlay images", file: "js/web/dom/overlayImages.js", instant: false },
    { menu: "W>D", "title": "Preview images", file: "js/web/dom/previewImages.js", instant: false },
    { menu: "W>D", "title": "Remove all images", file: "js/web/dom/removeAllImages.js", instant: false },
    { menu: "W>D", "title": "Show url link text", file: "js/web/dom/showUrlLinkText.js", instant: false },
    { menu: "W>D", "title": "Sort tables", file: "js/web/dom/sortTable.js", instant: false },
    { menu: "W>D", "title": "Transpose tables", file: "js/web/dom/transposeTables.js", instant: false },
    { menu: "W>D", "title": "Wrap element", file: "js/web/dom/wrapElement.js", instant: false },


    { menu: "W", "title": "GitHub", menuref: "W>G", file: "" },
    { menu: "W>G", "title": "Mark files as viewed", file: "js/web/github/markFilesAsViewed.js", instant: false },
    { menu: "W>G", "title": "Mark files as not viewed", file: "js/web/github/markFilesAsNotViewed.js", instant: false },


    { menu: "W", "title": "Libraries", menuref: "W>L", file: "" },
    { menu: "W>L", "title": "Enable JQuery", file: "js/web/libraries/enableJquery.js", instant: false },


    { menu: "W", "title": "Miscellaneous", menuref: "W>M", file: "" },
    { menu: "W>M", "title": "Find public logins", file: "js/web/miscellaneous/findPublicLogins.js", instant: false },
    { menu: "W>M", "title": "Log globals", file: "js/web/miscellaneous/logGlobals.js", instant: false },
    { menu: "W>M", "title": "Remove all cookies", file: "js/web/miscellaneous/removeAllCookies.js", instant: false },
    { menu: "W>M", "title": "Remove bloat", file: "js/web/miscellaneous/removeBloat.js", instant: false },
    { menu: "W>M", "title": "Restore console", file: "js/web/miscellaneous/restoreConsole.js", instant: false },
    { menu: "W>M", "title": "Log website stack", file: "js/web/miscellaneous/stack.js", instant: false },
    { menu: "W>M", "title": "View all scripts", file: "js/web/miscellaneous/viewAllScripts.js", instant: false },
    { menu: "W>M", "title": "View cookies", file: "js/web/miscellaneous/viewCookies.js", instant: false },
    { menu: "W>M", "title": "View partial source", file: "js/web/miscellaneous/viewPartialSource.js", instant: false },
    { menu: "W>M", "title": "View passwords", file: "js/web/miscellaneous/viewPasswords.js", instant: false },
    { menu: "W>M", "title": "Website to qr code", file: "js/web/miscellaneous/websitesToQrCode.js", instant: false },
    { menu: "W>M", "title": "Log word frequency", file: "js/web/miscellaneous/wordFrequency.js", instant: false },


    { menu: "W", "title": "Network", menuref: "W>N", file: "" },
    { menu: "W>N", "title": "Cache buster", file: "js/web/network/cacheBuster.js", instant: false },
    { menu: "W>N", "title": "Generate hash link", file: "js/web/network/generateHashLink.js", instant: false },
    { menu: "W>N", "title": "Network heatmap", file: "js/web/network/heatmap.js", instant: false },
    { menu: "W>N", "title": "Is this website down", file: "js/web/network/isThisWebsiteDown.js", instant: false },
    { menu: "W>N", "title": "Link checker", file: "js/web/network/linkChecker.js", instant: false },
    { menu: "W>N", "title": "Log query strings", file: "js/web/network/logQueryStrings.js", instant: false },
    { menu: "W>N", "title": "Performance", file: "js/web/network/performance.js", instant: false },
    { menu: "W>N", "title": "Performance again", file: "js/web/network/performanceAgain.js", instant: false },
    { menu: "W>N", "title": "Performance stats", file: "js/web/network/performanceStats.js", instant: false },
    { menu: "W>N", "title": "Show headers", file: "js/web/network/showHeaders.js", instant: false },


    { menu: "W", "title": "Convert", menuref: "W>CO", file: "" },
    { menu: "W>CO", "title": "CSS prettifer", file: "js/web/convert/cssPrettifier.js", instant: false },
    { menu: "W>CO", "title": "Insert CSS", file: "js/web/convert/insertCss.js", instant: false },
    { menu: "W>CO", "title": "Plain CSS", file: "js/web/convert/plainCss.js", instant: false },
    { menu: "W>CO", "title": "Plain forms", file: "js/web/convert/plainForms.js", instant: false },
    { menu: "W>CO", "title": "Reload CSS", file: "js/web/convert/reloadCss.js", instant: false },
    { menu: "W>CO", "title": "Remove colours", file: "js/web/convert/removeColours.js", instant: false },
    { menu: "W>CO", "title": "Remove CSS", file: "js/web/convert/removeCss.js", instant: false },
    { menu: "W>CO", "title": "Remove style sheets", file: "js/web/convert/removeStyleSheets.js", instant: false },
    { menu: "W>CO", "title": "View all CSS", file: "js/web/convert/viewAllCss.js", instant: false },
    { menu: "W>CO", "title": "What font is this", file: "js/web/convert/whatFontIsThis.js", instant: false },


    { menu: "W", "title": "Events", menuref: "W>EV", file: "" },
    { menu: "W>EV", "title": "Log Segment Events", file: "js/web/events/logSegmentEvents.js", instant: false },


    { menu: "W", "title": "Validation", menuref: "W>V", file: "" },
    { menu: "W>V", "title": "Remove paste restrictions", file: "js/web/validation/removePasteRestrictions.js", instant: false },

];
