const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// prefix route
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;