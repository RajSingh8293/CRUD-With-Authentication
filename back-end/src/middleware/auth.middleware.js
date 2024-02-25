import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
export const authorizeUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization
		if (token) {
			const decode = token.split(" ")[1]
			const decodeToken = jwt.verify(decode, process.env.JWT_SECRET)
			const user = await User.findById(decodeToken._id)
			req.user = user
			return next()
		} else {
			return res.status(400).json({ success: false, message: "Please provide token" })
		}
	} catch (error) {
		return res.status(500).json({ success: false, message: "Unauthorized user" })



	}
}