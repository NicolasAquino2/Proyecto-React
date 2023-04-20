import ItemList from "./components/ItemList/ItemList"

const products = [
      { id: "1",
        name:"Nike Airforce 1",
        price: 30000,
        category:"Urbanas",
        img:"https://footzonespain.com/wp-content/uploads/2019/12/27-1.jpg",
        stock: 30,
        descripion: "descripcion de nike airforce 1"
      },
    {id:"2", name:"Nike Jordan", price:"40000", category:"Deportivas", img:"https://i5.walmartimages.com/asr/c865e758-aaf4-4f66-9b6e-f8fdb973c7ea_1.ab5e3260a30b13933b2470f6757e7024.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", stock:"20", descripion:"descripcion nike jordan"},
    {id:"3", name:"Adidas Predator", price:"45000", category:"Futbol", img:"https://media.futbolmania.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/e/f/ef1645_imagen-de-las-botas-de-futbol-adidas-predator-20.3-ll-fg-2020-negro_1_pie-derecho.jpg", stock:"25", descripcion:"descripcion adidas predarto"},  
 ]




export const getProducts = () => {
      return new Promise ((resolve) =>{
         setTimeout (() => {
            resolve(products)
         }, 500)
      } )

}
 
export const getProductsByCategory = (category) => {

   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products.filter(prod => prod.category === category))
       }, 500)
   })


}

export const getProductById = (productId) => {

   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products.find(prod => prod.id === productId))
         
       }, 500)
   })

}
