import { crudControllers } from '../../utils/crud'
import { Contact } from './contact.model'


export const removeMany = model => async (req, res) => {
  try {
    const removed = await model.findAndRemove({
      _id: req.body
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: removed })
  } catch (e) {
    console.error(e)
    res.status(400).end(e)
  }
}

export default {
  ...crudControllers(Contact),
  removeMany: removeMany
}