const express = require('express')
const router = express.Router()
const assignmentController = require('../controllers/assignmentController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/assignments', authMiddleware, assignmentController.createAssignment)
router.get('/assignments', authMiddleware, assignmentController.getAssignments)
router.put('/assignments/:id', authMiddleware, assignmentController.updateAssignment)
router.delete('/assignments/:id', authMiddleware, assignmentController.deleteAssignment)

module.exports = router
