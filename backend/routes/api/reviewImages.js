const express = require('express');

const { ReviewImage, Review, Spot, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();



router.delete("/:imageId", requireAuth, async (req, res, next) => {

    try {

        const userId = req.user.id;
        const imageId = req.params.imageId;

        // const reviewImage = await ReviewImage.findByPk(imageId);
        const reviewImage = await ReviewImage.findOne({
            where: {
                id: imageId
            }
        })

        if (!reviewImage) return res.status(404).json({ message: "Review Image couldn't be found" });

        const review = await Review.findByPk(reviewImage.reviewId);

        if (review.userId !== userId) return res.status(403).json({ message: "Unauthorized" });

        await reviewImage.destroy();

        res.status(200).json({ message: "Successfully deleted" });

    } catch (err) {
        next(err)
    }
})

module.exports = router;
