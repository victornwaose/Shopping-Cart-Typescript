"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var Cards_1 = require("./card/Cards");
var useStyle = styles_1.makeStyles(function (theme) { return ({
    shopContainer: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "60px",
        display: "flex",
        justifyContent: "space-between"
    }
}); });
var ShoppingCart = function (_a) {
    var datas = _a.datas, setDatas = _a.setDatas, loading = _a.loading;
    var classes = useStyle();
    return (react_1["default"].createElement("div", { className: classes.shopContainer }, loading ? (react_1["default"].createElement(material_1.Box, { sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto"
        } },
        react_1["default"].createElement(material_1.CircularProgress, null))) : (react_1["default"].createElement(material_1.Grid, { container: true, spacing: { xs: 2, md: 3 }, style: { marginTop: "40px", marginBottom: "20px" } }, datas.map(function (data) { return (react_1["default"].createElement(material_1.Grid, { xs: 12, sm: 4, style: { marginTop: "20px", marginBottom: "20px" } },
        react_1["default"].createElement(Cards_1["default"], { data: data }))); })))));
};
exports["default"] = ShoppingCart;
