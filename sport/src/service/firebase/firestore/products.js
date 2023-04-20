import { getDocs, collection, query, where } from "firebase/firestore"
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
    return productsAdapted
  }).catch(error =>{
    return error
  })

    })

    
}
