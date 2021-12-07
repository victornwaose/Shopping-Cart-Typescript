"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var ShoppingCart = function (_a) {
    var data = _a.data, setData = _a.setData, loading = _a.loading;
    return (react_1["default"].createElement("div", null, loading ? (react_1["default"].createElement(material_1.Box, { sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50%"
        } },
        react_1["default"].createElement(material_1.CircularProgress, null))) : (react_1["default"].createElement("h1", null, "datas"))));
};
exports["default"] = ShoppingCart;
