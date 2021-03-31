"use strict";
const { Router } = require('express');
const cashierRouter = require('./cashierRouter');
const router = Router();
router.use('/user', cashierRouter);
module.exports = router;
//# sourceMappingURL=index.js.map