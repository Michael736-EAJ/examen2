import playstation5 from "./imagenes/playstation5.jpg";
import xboxSeriesX from "./imagenes/xboxseriesx.jpg";
import nintendoSwitch from "./imagenes/nintendoswitcholed.jpg";
import zelda from "./imagenes/thelegendofzeldatearsofthekingdom.jpg";
import dualsense from "./imagenes/dualsensecontroller.jpg";
import xboxHeadset from "./imagenes/xbowxirelessheadset.jpg";

const products = [
  {
    id: 1,
    name: "PlayStation 5",
    image: playstation5,
    description: "Consola de última generación de Sony.",
    price: 499.99,
    category: "Consolas"
  },
  {
    id: 2,
    name: "Xbox Series X",
    image: xboxSeriesX,
    description: "La consola más potente de Microsoft.",
    price: 499.99,
    category: "Consolas"
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    image: nintendoSwitch,
    description: "Consola híbrida de Nintendo con pantalla OLED.",
    price: 349.99,
    category: "Consolas"
  },
  {
    id: 4,
    name: "The Legend of Zelda: Tears of the Kingdom",
    image: zelda,
    description: "Aventura épica en el mundo de Hyrule.",
    price: 59.99,
    category: "Juegos"
  },
  {
    id: 5,
    name: "DualSense Controller",
    image: dualsense,
    description: "Control inalámbrico para PS5.",
    price: 69.99,
    category: "Accesorios"
  },
  {
    id: 6,
    name: "Xbox Wireless Headset",
    image: xboxHeadset,
    description: "Auriculares inalámbricos para Xbox.",
    price: 99.99,
    category: "Accesorios"
  }
];

export default products;
