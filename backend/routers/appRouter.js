import express from 'express'
import * as appController from '../controller/appController.js'

// init router
const router = express.Router()

router.get('/', appController.getUserInfo)
router.post('/', appController.setUserInfo)
router.put('/:id', appController.updateUserInfo)
router.delete('/:id', appController.deleteUserInfo)

export default router