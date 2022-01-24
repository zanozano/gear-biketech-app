//import
const fs = require('fs');
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");

const { getClient, getValueAndDiscount } = require("../services/getClients");

//slice argv
const argv = process.argv.slice(2)

const [name, value, discount] = argv;

const client = getClient(name);
const discountAmount = getValueAndDiscount(value, discount);

if (client) {
  const file = `
      ${format(Date.now(), `dd-MM-yyyy`)} \n
      Cliente: ${name} \n 
      Su compra es de $${value} pesos porcentaje, aplicando un descuento de ${discount}%, da un total de: $${discountAmount}
      `;
  //new file
  fs.writeFile(`${__dirname}/../reports/${name}-${uuidv4().slice(30)}-${format(Date.now(), `dd-MM-yyyy`)}.txt`, file, () => {
    console.log('El archivo fue creado con éxito');
  });

} else {
  const file = `
      ${format(Date.now(), `dd-MM-yyyy`)} \n
      Don: ${name} \n
      Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras 
    `;
  //new file
  fs.writeFile(`${__dirname}/../reports/${name}-${uuidv4().slice(30)}-${format(Date.now(), `dd-MM-yyyy`)}.txt`, file, 'utf8', () => {
    console.log('El archivo fue creado con éxito');
  });
}