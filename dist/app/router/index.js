"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const router = express_1.default.Router();
// const moduleRoutes = [
//   {
//     path: "/book",
//     route: BookRoutes
//   }
// ];
// moduleRoutes.forEach((route) => router.use(route.path, route.route));
router.use("/book", book_route_1.BookRoutes);
// router.use("/book-details", BookRoutes)
// router.use("/create-book", BookRoutes)
exports.default = router;
