import express from "express";
import { BookRoutes } from "../modules/book/book.route";

const router = express.Router()
// const moduleRoutes = [
//   {
//     path: "/book",
//     route: BookRoutes
//   }
// ];

// moduleRoutes.forEach((route) => router.use(route.path, route.route));

router.use("/book", BookRoutes)
// router.use("/book-details", BookRoutes)
// router.use("/create-book", BookRoutes)

export default router