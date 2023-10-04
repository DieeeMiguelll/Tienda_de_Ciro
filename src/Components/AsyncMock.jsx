

const Productos = [
  {
    id: 1,
    descripcion: "Muñeco Jamiroquai",
    imagen: "",
    precio: 2000,
    stock: 5,
    categoria: "Música",
  },
  {
    id: 2,
    descripcion: "Muñeco Indiana Jones",
    imagen: "",
    precio: 2000,
    stock: 3,
    categoria: "Películas",
  },
  {
    id: 3,
    descripcion: "Muñeco Maria Elena Walsh",
    imagen: "",
    precio: 2000,
    stock: 5,
    categoria: "Música",
  },
  {
    id: 4,
    descripcion: "Muñeco Boney M",
    imagen: "",
    precio: 2000,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 5,
    descripcion: "Disco Jamiroquai Automaton",
    imagen: "./src/Img/OIP.jpg",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 6,
    descripcion: "Disco Jamiroquai Dynamite",
    imagen: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 7,
    descripcion: "Disco Jamiroquai A funk Odyssey",
    imagen: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 8,
    descripcion: "Disco Boney M Rasputin",
    imagen: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 9,
    descripcion: "Disco Boney M Big And Strong",
    imagen: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 10,
    descripcion: "Disco Boney M The Essential",
    imagen: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 11,
    descripcion: "Disco Maria Elena Walsh El Legado",
    imagen: "",
    precio: 1500,
    stock: 4,
    categoria: "Música",
  },
  {
    id: 12,
    descripcion: "Indiana Jones remera",
    imagen: "",
    precio: 2500,
    stock: 10,
    categoria: "Peliculas",
  },
  {
    id: 13,
    descripcion: "Jamoriquai remera",
    imagen: "",
    precio: 2500,
    stock: 10,
    categoria: "Música",
  },
  {
    id: 13,
    descripcion: "Boney M remera",
    imagen: "imagen15.jpg",
    precio: 2500,
    stock: 10,
    categoria: "Música",
  },
  {
    id: 14,
    descripcion: "El reino del revés Maria Elena Walsh",
    imagen: "",
    precio: 2500,
    stock: 10,
    categoria: "Libros",
  },
  {
    id: 15,
    descripcion: "Indiana Jones y el templo maldito",
    imagen: "",
    precio: 2500,
    stock: 10,
    categoria: "Libros",
  },
];

export const getProducts = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Productos)
    }, 500)
  })
}