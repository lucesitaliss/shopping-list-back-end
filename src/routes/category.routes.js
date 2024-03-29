const { Router } = require('express')
const router = Router()
const {
  getCategories,
  insertCategory,
  getCategoryById,
  updateCategory,
  updateDeleteCategory,
  deleteCategory,
} = require('../controllers/category.controller')
const { verifyToken } = require('../middlewares/authJwt')

router.get('/categories', verifyToken, getCategories)
router.get('/category/:id', verifyToken, getCategoryById)
router.post('/category', verifyToken, insertCategory)
router.put('/category/', verifyToken, updateCategory)
router.put('/category/delete/:id', verifyToken, updateDeleteCategory)
router.delete('/category/:id', verifyToken, deleteCategory)

module.exports = router
