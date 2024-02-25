import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"


// get all users
export const usersController = async (req, res) => {
	const users = await User.find()
	return res.status(200).json({
		success: true,
		users
	})


}

// register
export const registerController = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body
		if (!firstName) {
			return res.status(422).json({ message: 'Firstname is required !' })

		}
		if (!lastName) {
			return res.status(422).json({ message: 'LastName is required !' })

		}
		if (!email) {
			return res.status(422).json({ message: 'Email is required !' })

		}
		if (!password) {
			return res.status(422).json({ message: 'Password is required !' })

		}
		const existUser = await User.findOne({ email })
		if (existUser) {
			return res.status(400).json({
				success: false,
				message: "User already exist",
			})
		}

		const hashPassword = bcryptjs.hashSync(password)


		const user = new User({ firstName, lastName, email, password: hashPassword })
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' })
		const data = await user.save()

		const { password: pass, ...rest } = user._doc //  hide passwrod

		// console.log(rest);
		return res.status(200).json(
			{
				success: true,
				message: "User register succefully",
				data: rest,
				token
			})
	} catch (error) {
		return res.status(500).json(
			{
				success: false,
				message: "Error with registeration",
				error

			})

	}
}


// login 
export const loginController = async (req, res) => {
	try {
		const { email, password } = req.body

		if (!email) {
			return res.status(422).json({ message: 'Email is required !' })

		}
		if (!password) {
			return res.status(422).json({ message: 'Password is required !' })

		}
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(400).json({
				success: false,
				message: "User does not exist",
			})
		}

		const matchPassword = bcryptjs.compareSync(password, user.password)
		if (!matchPassword) {
			return res.status(500).json({
				success: false,
				message: "Invalid email and password",
			})

		}

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' })
		const { password: pass, ...rest } = user._doc //  hide passwrod

		return res.status(200).json(
			{
				success: true,
				message: "User logged in succefully",
				data: rest,
				token
			})
	} catch (error) {
		return res.status(500).json(
			{
				success: false,
				message: "Error with registeration",
				error

			})

	}
}

// user by id
export const getUserByIdController = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		const { password: pass, ...rest } = user._doc //  hide passwrod

		if (user) {
			res.status(200).json({
				success: true,
				user: rest
			})
			return;
		}
		res.status(200).json({
			success: false,
			message: "User not found",
		})
	} catch (error) {
		res.status(200).json({
			success: false,
			message: "Error with finding user by id",
			error
		})


	}


}


// delete by id
export const deleteUserByIdController = async (req, res) => {
	try {
		const user = await User.findById({ _id: req.params.id })
		if (!user) {
			res.status(401).json({
				success: false,
				message: "User not found",
			})
		}

		await User.findByIdAndDelete({ _id: req.params.id })

		return res.status(200).json({
			success: true,
			message: "User deleted succefully",

		})
	} catch (error) {
		res.status(200).json({
			success: false,
			message: "Error with deleting user by id",
			error
		})


	}


}

// update by id
export const updateUserByIdController = async (req, res) => {
	try {
		const user = await User.findById({ _id: req.params.id })
		if (!user) {
			res.status(401).json({
				success: false,
				message: "User not found",
			})
		}


		const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })


		return res.status(200).json({
			success: true,
			message: "User updated succefully",
			userUpdated
		})
	} catch (error) {
		res.status(200).json({
			success: false,
			message: "Error with updating user",
			error
		})


	}


}


// get current user


export const getCurrentUserController = asyncHandler(async (req, res) => {
	return res
		.status(200)
		.json(new ApiResponse(
			200,
			req.user,
			"User fetched successfully"
		))
})
