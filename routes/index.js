import express from 'express'
const router = express.Router()
router.post(`/smsStatus`, (req, res, next) => {
  console.log(req.body, `REQBODY AKA`)
  return res.status(200).json({ success: true })
})
export default router
