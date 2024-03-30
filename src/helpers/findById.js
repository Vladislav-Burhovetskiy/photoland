export default function findById(array, id) {
  return array.find(product => product.id === id)
}
