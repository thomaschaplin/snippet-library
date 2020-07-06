const menuActions = [
    { menu: "", "title": "Snippet Library", menuref: "W", file: "" },


    { menu: "W", "title": "Help", menuref: "W>H", file: "" },
    { menu: "W>H", "title": "About", file: "js/web/help/about.js", instant: false },
    { menu: "W>H", "title": "Version", file: "js/web/help/version.js", instant: false },


    { menu: "W", "title": "Exploits", menuref: "W>E", file: "" },
    { menu: "W>E", "title": "Injection: SQL", file: "js/web/exploits/sql.js", instant: false },
    { menu: "W>E", "title": "Injection: XSS ", file: "js/web/exploits/xss.js", instant: false },


    { menu: "W", "title": "Accessibility", menuref: "W>A", file: "" },
    { menu: "W>A", "title": "Element: Highlight With The Same ID", file: "js/web/accessibility/highlightElementsWithTheSameId.js", instant: false },
    { menu: "W>A", "title": "Element: Remove With The Same ID", file: "js/web/accessibility/removeElementWithTheSameId.js", instant: false },
    { menu: "W>A", "title": "Enable: Right Click", file: "js/web/accessibility/enableRightClick.js", instant: false },
    { menu: "W>A", "title": "Enable: Text Selection", file: "js/web/accessibility/enableTextSelection.js", instant: false },
    { menu: "W>A", "title": "Enable: Pasting", file: "js/web/accessibility/removePasteRestrictions.js", instant: false },
    { menu: "W>A", "title": "Text: Pascalcase", file: "js/web/accessibility/makeTextCapitlise.js", instant: false },
    { menu: "W>A", "title": "Text: Lowercase", file: "js/web/accessibility/makeTextLowercase.js", instant: false },
    { menu: "W>A", "title": "Text: Uppercase", file: "js/web/accessibility/makeTextUppercase.js", instant: false },
    { menu: "W>A", "title": "Text: Increase Length", file: "js/web/accessibility/increasePagesText.js", instant: false },
    { menu: "W>A", "title": "Text: Increase All Length", file: "js/web/accessibility/increaseAllElementsText.js", instant: false },
    { menu: "W>A", "title": "Text: Increase Button Length", file: "js/web/accessibility/increaseButtonsText.js", instant: false },
    { menu: "W>A", "title": "Text: Increase Labels Length", file: "js/web/accessibility/increaseLabelsText.js", instant: false },
    { menu: "W>A", "title": "Text: Increase All Links Length", file: "js/web/accessibility/increaseLinksText.js", instant: false },
    { menu: "W>A", "title": "Image: Remove Without Alt Tags", file: "js/web/accessibility/removeImagesWithoutAltTags.js", instant: false },
    { menu: "W>A", "title": "Image: List Alt Tags", file: "js/web/accessibility/listImagesAndAltTags.js", instant: false },
    { menu: "W>A", "title": "Image: Highlight With Alt Tags", file: "js/web/accessibility/highlightImagesWithAltTags.js", instant: false },
    { menu: "W>A", "title": "Image: Highligh Without Alt Tags", file: "js/web/accessibility/highlightImagesWithoutAltTags.js", instant: false },
    { menu: "W>A", "title": "Input: Remove Max Length", file: "js/web/accessibility/removeMaxLength.js", instant: false },
    { menu: "W>A", "title": "Input: Remove Without Labels", file: "js/web/accessibility/removeInputsWithoutLabel.js", instant: false },
    { menu: "W>A", "title": "Input: Remove Required", file: "js/web/accessibility/removeRequired.js", instant: false },
    { menu: "W>A", "title": "Input: Highlight Without Labels", file: "js/web/accessibility/highlightImagesWithoutLabels.js", instant: false },
    { menu: "W>A", "title": "Form: Print Controls", file: "js/web/accessibility/printFormControls.js", instant: false },
    { menu: "W>A", "title": "Misc: Visualise Tab Flow", file: "js/web/accessibility/visualiseTabFlow.js", instant: false },


    { menu: "W", "title": "Convert", menuref: "W>C", file: "" },
    { menu: "W>C", "title": "Decode: Base64", file: "js/web/convert/decodeBase64ToConsole.js", instant: false },
    { menu: "W>C", "title": "Encode: Base64", file: "js/web/convert/encodeBase64ToConsole.js", instant: false },
    { menu: "W>C", "title": "Pretty Print: JSON", file: "js/web/convert/prettryPrintJsonToConsole.js", instant: false },
    { menu: "W>C", "title": "Minify: JSON", file: "js/web/convert/minifyJsonToConsole.js", instant: false },
    { menu: "W>C", "title": "Convert Highlighted Text: ROT13", file: "js/web/convert/ROT13.js", instant: false },


    { menu: "W", "title": "DOM", menuref: "W>D", file: "" },
    { menu: "W>D", "title": "Table: Add Number Column", file: "js/web/dom/addNumberColumnToTable.js", instant: false },
    { menu: "W>D", "title": "Table: Transpose Tables", file: "js/web/dom/transposeTables.js", instant: false },
    { menu: "W>D", "title": "Table: Sort Tables", file: "js/web/dom/sortTable.js", instant: false },
    { menu: "W>D", "title": "Image: Convert Images To Data URL", file: "js/web/dom/convertAllImagesToDataUrl.js", instant: false },
    { menu: "W>D", "title": "Image: Overlay Images", file: "js/web/dom/overlayImages.js", instant: false },
    { menu: "W>D", "title": "Image: Remove Images", file: "js/web/dom/removeAllImages.js", instant: false },
    { menu: "W>D", "title": "Image: Preview Images", file: "js/web/dom/previewImages.js", instant: false },
    { menu: "W>D", "title": "Input: Convert Input Types To Text", file: "js/web/dom/convertAllInputTypesToText.js", instant: false },
    { menu: "W>D", "title": "Bullet Point: Convert Bullet Points To Numbers", file: "js/web/dom/convertBulletpointsToNumbers.js", instant: false },
    { menu: "W>D", "title": "Colour: Print Colours Used", file: "js/web/dom/findAllColours.js", instant: false },
    { menu: "W>D", "title": "Link: Highligh Internal & External Links", file: "js/web/dom/internalExternalLinks.js", instant: false },
    { menu: "W>D", "title": "Link: Display URLs As Links", file: "js/web/dom/showUrlLinkText.js", instant: false },
    { menu: "W>D", "title": "DOM: Design Mode Off", file: "js/web/dom/documentDesignModeOff.js", instant: false },
    { menu: "W>D", "title": "DOM: Design Mode On", file: "js/web/dom/documentDesignModeOn.js", instant: false },
    { menu: "W>D", "title": "Element: For Each Element Do...", file: "js/web/dom/forEveryElementDoThis.js", instant: false },
    { menu: "W>D", "title": "Element: Wrap", file: "js/web/dom/wrapElement.js", instant: false },


    { menu: "W", "title": "GitHub", menuref: "W>G", file: "" },
    { menu: "W>G", "title": "Review: Mark As Viewed", file: "js/web/github/markFilesAsViewed.js", instant: false },
    { menu: "W>G", "title": "Review: Mark Files As Unviewed", file: "js/web/github/markFilesAsNotViewed.js", instant: false },


    { menu: "W", "title": "Libraries", menuref: "W>L", file: "" },
    { menu: "W>L", "title": "Add Library: JQuery", file: "js/web/libraries/enableJquery.js", instant: false },


    { menu: "W", "title": "Miscellaneous", menuref: "W>M", file: "" },
    { menu: "W>D", "title": "Misc: Console Save", file: "js/web/miscellaneous/consoleSave.js", instant: false },
    { menu: "W>M", "title": "Misc: Log Globals", file: "js/web/miscellaneous/logGlobals.js", instant: false },
    { menu: "W>M", "title": "Misc: Remove Bloat", file: "js/web/miscellaneous/removeBloat.js", instant: false },
    { menu: "W>M", "title": "Misc: Restore Console", file: "js/web/miscellaneous/restoreConsole.js", instant: false },
    { menu: "W>M", "title": "Misc: Find Stack", file: "js/web/miscellaneous/stack.js", instant: false },
    { menu: "W>M", "title": "Misc: Generate QR Code For Current Website", file: "js/web/miscellaneous/websitesToQrCode.js", instant: false },
    { menu: "W>M", "title": "Misc: Log Word Frequency", file: "js/web/miscellaneous/wordFrequency.js", instant: false },
    { menu: "W>M", "title": "Account: Find Public Credentails", file: "js/web/miscellaneous/findPublicLogins.js", instant: false },
    { menu: "W>M", "title": "Cookies: Remove All", file: "js/web/miscellaneous/removeAllCookies.js", instant: false },
    { menu: "W>M", "title": "Cookies: View All", file: "js/web/miscellaneous/viewCookies.js", instant: false },
    { menu: "W>M", "title": "Script: View All", file: "js/web/miscellaneous/viewAllScripts.js", instant: false },
    { menu: "W>M", "title": "Source: View Highlighted Source", file: "js/web/miscellaneous/viewPartialSource.js", instant: false },
    { menu: "W>M", "title": "Input: Display Passwords", file: "js/web/miscellaneous/viewPasswords.js", instant: false },


    { menu: "W", "title": "Network", menuref: "W>N", file: "" },
    { menu: "W>N", "title": "Network: Cache Buster", file: "js/web/network/cacheBuster.js", instant: false },
    { menu: "W>N", "title": "Network: Generate Hash Link", file: "js/web/network/generateHashLink.js", instant: false },
    { menu: "W>N", "title": "Network: Heatmap", file: "js/web/network/heatmap.js", instant: false },
    { menu: "W>N", "title": "Network: Is This Website Down", file: "js/web/network/isThisWebsiteDown.js", instant: false },
    { menu: "W>N", "title": "Network: Link Checker", file: "js/web/network/linkChecker.js", instant: false },
    { menu: "W>N", "title": "Network: Log Query Strings", file: "js/web/network/logQueryStrings.js", instant: false },
    { menu: "W>N", "title": "Network: Performance", file: "js/web/network/performance.js", instant: false },
    { menu: "W>N", "title": "Network: Performance 2", file: "js/web/network/performanceAgain.js", instant: false },
    { menu: "W>N", "title": "Network: Performance Stats", file: "js/web/network/performanceStats.js", instant: false },
    { menu: "W>N", "title": "Network: Show Headers", file: "js/web/network/showHeaders.js", instant: false },


    { menu: "W", "title": "Styling", menuref: "W>S", file: "" },
    { menu: "W>S", "title": "Pritty Print: CSS File", file: "js/web/styling/cssPrettifier.js", instant: false },
    { menu: "W>S", "title": "CSS: Insert", file: "js/web/styling/insertCss.js", instant: false },
    { menu: "W>S", "title": "CSS: Plain", file: "js/web/styling/plainCss.js", instant: false },
    { menu: "W>S", "title": "CSS: Remove", file: "js/web/styling/removeCss.js", instant: false },
    { menu: "W>S", "title": "CSS: Remove 2", file: "js/web/styling/removeStyleSheets.js", instant: false },
    { menu: "W>S", "title": "CSS: View", file: "js/web/styling/viewAllCss.js", instant: false },
    { menu: "W>S", "title": "CSS: Reload", file: "js/web/styling/reloadCss.js", instant: false },
    { menu: "W>S", "title": "CSS: Remove Colours", file: "js/web/styling/removeColours.js", instant: false },
    { menu: "W>S", "title": "Forms: Plain", file: "js/web/styling/plainForms.js", instant: false },
    { menu: "W>S", "title": "Font: What Font", file: "js/web/styling/whatFontIsThis.js", instant: false },


    { menu: "W", "title": "Events", menuref: "W>EV", file: "" },
    { menu: "W>EV", "title": "Log: Segment Events", file: "js/web/events/logSegmentEvents.js", instant: false },

];
