import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
import { db } from "../fireconfig"
import { createAdapterProductFromFirestore } from "../../../adapters/createAdapterProductFormFirestore"
export const getProducts = (categoryId) => {
  return new Promise ((resolve, reject) => {
        const productsRef = categoryId 
                    ? query (collection(db, 'products'), where('category', '==', categoryId))
                    : collection(db, 'products')

 getDocs(productsRef) 
  .then(snapshot => {
    console.log(snapshot)
    const productsAdapted = snapshot.docs.map(doc => {
      return createAdapterProductFromFirestore(doc)
     
    }) 
    resolve (productsAdapted)
  }).catch(error =>{
    reject(error) 
  })

    })

    
}

export const getProductsById = async (productId) => {
  const productRef = doc(db, 'products', productId)

  try {
    const snapshot = await getDoc(productRef)
    const productsAdapted = createAdapterProductFromFirestore(snapshot)
    return productsAdapted
  } catch (error) {
    return error
  }
    
}
