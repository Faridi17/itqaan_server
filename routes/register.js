import express from 'express'
import { deleteRegistered, getAllRegistered, getRegisteredByCapitalName, getRegisteredById } from '../controllers/register.js'

const router = express.Router()

router.get('/' , getAllRegistered)
router.get('/:capital', getRegisteredByCapitalName)
router.get('/id/:id', getRegisteredById)
router.delete('/:id', deleteRegistered)

export default router