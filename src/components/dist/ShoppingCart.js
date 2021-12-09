"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var Cards_1 = require("./card/Cards");
var ShoppingCart = function (_a) {
    var datas = _a.datas, setDatas = _a.setDatas, loading = _a.loading;
    var useStyles = styles_1.makeStyles(function (theme) { return ({
        shopContainer: {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 40
        },
        card: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row"
        }
    }); });
    var classes = useStyles();
    return (react_1["default"].createElement("div", { className: classes.shopContainer }, loading ? (react_1["default"].createElement(material_1.Box, { sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40%"
        } },
        react_1["default"].createElement(material_1.CircularProgress, null))) : (datas.map(function (data) { return (react_1["default"].createElement("div", { className: classes.card },
        react_1["default"].createElement(Cards_1["default"], { key: data.id, data: data }))); }))));
};
exports["default"] = ShoppingCart;
