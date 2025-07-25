const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

// Reviews - post Reviews route
router.post(
  "/:id/reviews", 
  isLoggedIn, 
  validateReview, 
  wrapAsync(reviewController.createReview));

// Post Delete Route
router.delete(
  "/:id/reviews/:reviewId", 
  isLoggedIn, 
  isReviewAuthor, 
  wrapAsync(reviewController.deleteReview));

module.exports = router;