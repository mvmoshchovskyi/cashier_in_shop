import { Router } from 'express'
import cashierRouter from './cashierRouter'
const router = Router()

router.use('/cashier', cashierRouter )

export default router