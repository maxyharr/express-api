import mongoose, { Model, Document } from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
})

interface IUser extends Document {
  email: string
  password: string
}

const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema)
export default User