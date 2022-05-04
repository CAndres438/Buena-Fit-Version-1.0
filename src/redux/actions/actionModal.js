import { typesModal, typesProductos } from '../types/types'

export const selectedModal = (codigo) => {
  console.log(codigo);
  return {
      type: typesModal.selected,
      payload: codigo
  }
}

export const selectedEdit = (productEdit) => {
  return {
    type: typesProductos.edit,
    payload: productEdit
  }
}