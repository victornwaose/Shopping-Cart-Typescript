"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var useStyle = styles_1.makeStyles(function () { return ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
    }
}); });
var Header = function () {
    var classes = useStyle();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(material_1.AppBar, null,
            react_1["default"].createElement(material_1.Toolbar, { className: classes.header },
                react_1["default"].createElement(material_1.Typography, { variant: "h4" }, "shopCart"),
                react_1["default"].createElement(material_1.TextField, { label: "search for products", variant: "outlined" })))));
};
exports["default"] = Header;
