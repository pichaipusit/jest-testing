export async function getProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch product with ID ${id}. Status: ${res.status}`
      );
    }
    return res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
