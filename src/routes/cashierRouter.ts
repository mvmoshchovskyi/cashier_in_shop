import { Router } from 'express'
import { create} from '../controllers/cashierController'
const router = Router()

router.get('/', create)
router.get('/:id',)
router.post('/', )

export default router