"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var Cards = function (_a) {
    var data = _a.data;
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.Card, null,
            react_1["default"].createElement(material_1.CardMedia, { image: data.image, alt: "imagess", component: "img", height: "194" }),
            react_1["default"].createElement(material_1.CardContent, null)));
};
exports["default"] = Cards;
