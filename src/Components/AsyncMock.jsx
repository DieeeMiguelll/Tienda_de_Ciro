

const Products = [
  {
    id: '1',
    nombre: "Muñeco Jamiroquai",
    descripcion: "Impresionante muñeco de tela, único por sus detalles.",
    imgUrl:"https://3.bp.blogspot.com/-VXeJenjfP9I/UaXfnAseUfI/AAAAAAAAAEc/QR_P50Dlejw/s1600/DSC01063.JPG",
    precio: 2000,
    stock: 5,
    categoria: "Música",
  },
  {
    id: '2',
    nombre: "Muñeco Indiana Jones",
    descripcion: "lalalala",
    imgUrl: "",
    precio: 2000,
    stock: 3,
    categoria: "Películas",
  },
  {
    id: '5',
    nombre: "Disco Jamiroquai Automaton",
    descripcion: "Disco de Jamiroquai.",
    imgUrl: "https://th.bing.com/th/id/R.fddfda357cde1776f45a5849ac7d063e?rik=uIpQExl0i0RZrA&riu=http%3a%2f%2fwww.slantmagazine.com%2fassets%2fmusic%2f27347%2fautomaton.jpg&ehk=eH7JpVN%2bQT%2fgm1noj5pPFADwIA5SPaXwqFQ2JrcUVkE%3d&risl=&pid=ImgRaw&r=0",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: '6',
    nombre: "Disco Jamiroquai Dynamite",
    descripcion: "lalalal",
    imgUrl: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: '8',
    nombre:"Disco Boney M Rasputin",
    descripcion: "LALALALA",
    imgUrl: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: '11',
    nombre:"Disco Maria Elena Walsh El Legado",
    descripcion: "LALALAL",
    imgUrl: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: '12',
    nombre:"Indiana Jones remera",
    descripcion: "LALALLA",
    imgUrl: "",
    precio: 2500,
    stock: 10,
    categoria: "Peliculas",
  },
  {
    id: '13',
    nombre: "Boney M remera",
    descripcion: "LALALA",
    imgUrl: "imagen15.jpg",
    precio: 2500,
    stock: 10,
    categoria: "Música",
  },
  {
    id: '14',
    nombre: "El reino del revés Maria Elena Walsh",
    descripcion: "LALALALA",
    imgUrl: "",
    precio: 2500,
    stock: 10,
    categoria: "Libros",
  },
  {
    id: '15',
    nombre: "Indiana Jones y el templo maldito",
    descripcion: "LALALALA",
    imgUrl: "",
    precio: 2500,
    stock: 10,
    categoria: "Libros",
  },
];

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Products)
    }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Products.find(prod => prod.id === productId))
    }, 500)
  })
}  

export const getProductByCategory = (CategoryId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Products.find(prod => prod.categoria === CategoryId))
    }, 500)
  })
}  
