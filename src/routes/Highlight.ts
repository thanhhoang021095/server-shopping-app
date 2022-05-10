import Services from '../controller/highlight'
import express from 'express'
const router = express.Router()

router.post('/', Services.post)
router.get('/', Services.get)

export default router
