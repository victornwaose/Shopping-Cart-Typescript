"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var material_1 = require("@mui/material");
var fa_1 = require("react-icons/fa");
var useStyle = styles_1.makeStyles(function (theme) { return ({
    cardContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "80%",
        height: "100%"
    }
}); });
var Cards = function (_a) {
    var data = _a.data;
    var classes = useStyle();
    return (react_1["default"].createElement(material_1.Card, { className: classes.cardContainer },
        react_1["default"].createElement(material_1.CardMedia, { image: data.image, alt: data.title, component: "img", style: { width: "100%", height: "250px" } }),
        react_1["default"].createElement(material_1.CardContent, null,
            react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, data.title)),
        react_1["default"].createElement(material_1.CardContent, { style: { display: "flex" } },
            react_1["default"].createElement(fa_1.FaDollarSign, null),
            react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, data.price)),
        react_1["default"].createElement(material_1.CardContent, null,
            react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, data.description)),
        react_1["default"].createElement(material_1.Button, { style: { background: "#1976D2", color: "#fff" } }, "Add To Cart")));
};
exports["default"] = Cards;
