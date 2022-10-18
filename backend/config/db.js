import mongoose from 'mongoose'

export const connectDB = async () => {
	try {
		console.log(`${process.env.DB_URI}`.yellow)
		const conn = await mongoose.connect(process.env.DB_URI)
		console.log(`Databases connected sussefuly ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}