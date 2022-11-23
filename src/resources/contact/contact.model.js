import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: false,
      unique: true,
      trim: true
    },

    telephone: {
      callingCode: {
          type: String,
          required: false,
          default: '228',
          trim: true
      },
      value: {
        type: String,
        trim: true
      },
      alpha: String,
    },
  },
  { timestamps: true }
)

contactSchema.index(
  { 'telephone.value': 1, 'telephone.callingCode': 1 },
  { unique: true }
)

contactSchema.index({ email: 1 }, { unique: true })

/*function hashPassword(next) {
  const update = this.getUpdate()
  console.log(update)

  if (update.password !== '' && update.password !== undefined) {
    bcrypt.hash(update.password, 8, (err, hash) => {
      if (err) {
        return next(err)
      }
      this.getUpdate().password = hash
      next()
    })
  } else {
    console.log('no password')
    return next()
  }
}*/
// contactSchema.pre('updateOne', hashPassword)
// contactSchema.pre('findOneAndUpdate', hashPassword)

export const Contact = mongoose.model('contacts', contactSchema)
