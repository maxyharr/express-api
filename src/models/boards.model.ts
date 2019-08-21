import mongoose, { Model, Document } from 'mongoose'
const Schema = mongoose.Schema

const BoardSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
})

interface IBoard extends Document {

}

const Board: Model<IBoard> = mongoose.model<IBoard>('User', BoardSchema)
export default Board