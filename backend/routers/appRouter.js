import express from 'express'
import * as appController from '../controllers/appController.js'

// init router
const router = express.Router()

router.get('/', appController.getHomePage)
router.post('/', appController.setHomePage)
router.put('/:id', appController.updateHomePage)
router.delete('/:id', appController.deleteHomePage)

export default router