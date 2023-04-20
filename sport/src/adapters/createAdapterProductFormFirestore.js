export const createAdapterProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapter ={
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        stock: data.stock,
        description: data.description
    }
    
    
    return productAdapter
}
