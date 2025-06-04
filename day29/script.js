
const products = [
    {
        name: "smartphone",
        price: "1000$",
        specs: {
            model: "s25 Ultra",
            storage: "256GB",
            camera: "200mp"
        }

    },
    {
        id: 2,
        name: "laptop",
        price: "1200$",
        specs: {
            brand: "HP",
            model: "15s",
            processor: "intel core i9 gen 12",
            ram: "16gb",
            rom: "1tb"
        }
    }

];
const container = document.getElementById("product-list");

products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>দাম: ${product.price}</p>
    <h4>স্পেসিফিকেশন:</h4>
    <ul>
      ${Object.entries(product.specs)
        .map(([key, value]) => `<li>${key}: ${value}</li>`)
        .join("")}
    </ul>
    <hr/>
  `;
  container.appendChild(productDiv);
});