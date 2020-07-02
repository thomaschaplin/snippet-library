(function () {
    const includeBorderColorsWithZeroWidth = false;

    const allColors = {}
    const props = ["background-color", "color", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color"]
    const skipColors = {
        "rgb(0, 0, 0)": 1,
        "rgba(0, 0, 0, 0)": 1,
        "rgb(255, 255, 255)": 1
    };

    [].forEach.call(document.querySelectorAll("*"), function (node) {
        const nodeColors = {};
        props.forEach(function (prop) {
            const color = window.getComputedStyle(node, null).getPropertyValue(prop)
            const thisIsABorderProperty = (prop.indexOf("border") != -1)
            const notBorderZero = thisIsABorderProperty ? window.getComputedStyle(node, null).getPropertyValue(prop.replace("color", "width")) !== "0px" : true
            let colorConditionsMet

            if (includeBorderColorsWithZeroWidth) {
                colorConditionsMet = color && !skipColors[color];
            } else {
                colorConditionsMet = color && !skipColors[color] && notBorderZero;
            }

            if (colorConditionsMet) {
                if (!allColors[color]) {
                    allColors[color] = {
                        count: 0,
                        nodes: []
                    };
                }

                if (!nodeColors[color]) {
                    allColors[color].count++;
                    allColors[color].nodes.push(node);
                }

                nodeColors[color] = true;
            }
        });
    });

    function rgbTextToRgbArray(rgbText) {
        return rgbText.replace(/\s/g, "").match(/\d+,\d+,\d+/)[0].split(",").map(function (num) {
            return parseInt(num, 10);
        });
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(rgbArray) {
        const r = rgbArray[0]
        const g = rgbArray[1]
        const b = rgbArray[2]
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
    }

    let allColorsSorted = [];
    for (var i in allColors) {
        const rgbArray = rgbTextToRgbArray(i);
        const hexValue = rgbToHex(rgbArray);

        allColorsSorted.push({
            key: i,
            value: allColors[i],
            hexValue: hexValue
        });
    }

    allColorsSorted = allColorsSorted.sort(function (a, b) {
        return b.value.count - a.value.count;
    });

    const nameStyle = "font-weight:normal;";
    const countStyle = "font-weight:bold;";
    function colorStyle(color) {
        return "background:" + color + ";color:" + color + ";border:1px solid #333;";
    };

    console.group("Total colors used in elements on the page: " + window.location.href + " are " + allColorsSorted.length);
    allColorsSorted.forEach(function (c) {
        console.groupCollapsed("%c    %c " + c.key + " " + c.hexValue + " %c(" + c.value.count + " times)",
            colorStyle(c.key), nameStyle, countStyle);
        c.value.nodes.forEach(function (node) {
            console.log(node);
        });
        console.groupEnd();
    });
    console.groupEnd("All colors used in elements on the page");

})()
