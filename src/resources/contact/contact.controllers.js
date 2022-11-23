import { crudControllers } from '../../utils/crud'
import { Contact } from './contact.model'

export default {
  ...crudControllers(Contact),
}