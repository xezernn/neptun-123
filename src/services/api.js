import axiosInstance from "./instance"

async function getAllCategories() {
  const res = await axiosInstance.get("/categories")
  return res.data
}

async function getAllProducts() {
  const res = await axiosInstance.get("/products")
  return res.data
}

async function getDiscounted() {
  const res = await axiosInstance.get('/products/discounted')
  return res.data
}
async function getProductsBySubId(id, page = 1, limit) {
  const res = await axiosInstance.get(`/products/subcategory/${id}?page=${page}&limit=${limit}`)
  return res.data
}
async function getDetailById(id) {
  const res = await axiosInstance.get(`/products/${id}`)
  return res.data
}

export { getAllCategories, getAllProducts, getDiscounted, getProductsBySubId, getDetailById }
