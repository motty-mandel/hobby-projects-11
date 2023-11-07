const router = require('express').Router();
const {
getThoughts,
createThought,
getSingleThought,
deleteThought,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtsId
router
  .route('/:thoughtsId')
  .get(getSingleThought)
  .delete(deleteThought);

module.exports = router;
// .put(updateThought)