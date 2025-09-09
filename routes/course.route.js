import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCourse, CreateLecture, editCourse, editLecture, getAllCreatorCourses, getCourseById, getCourseLecture, getLectureById, getPublishedCourse, removeCourse, removeLecture, SearchCourse, togglePublicCourse } from "../Controllers/course.controller.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.route("/").post(isAuthenticated,createCourse);
router.route("/:courseId").delete(isAuthenticated,removeCourse);
router.route("/search").get(isAuthenticated, SearchCourse);
router.route("/published-courses").get(getPublishedCourse);
router.route("/").get(isAuthenticated,getAllCreatorCourses);
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);
router.route("/:courseId/lecture").post(isAuthenticated, CreateLecture);
router.route("/:courseId/lecture").get(isAuthenticated, getCourseLecture);
router.route("/:courseId/lecture/:lectureId").post(isAuthenticated,editLecture);
router.route("/lecture/:lectureId").delete(isAuthenticated, removeLecture);
router.route("/lecture/:lectureId").get(isAuthenticated, getLectureById);
router.route("/:courseId").patch(isAuthenticated, togglePublicCourse);

export default router;