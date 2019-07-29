var appInstance = require("../app");
var {app,db} = appInstance.appConst;
console.log(app,db);

app.get('/api/products', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'Products retrieved successfully',
      data: db.product
    })
  });
app.post("/api/products", (req, res) => {
  if (!req.body.name || req.body.name === "") {
    return res.status(400).send({
      success: "false",
      message: "Name is required"
    });
  }
  const product = {
    id: db.product.length + 1,
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    options: req.body.options,
    reviews: req.body.reviews
  };
  db.product.push(product);
  res.status(200).send({
    success: "true",
    message: "Products Added successfully",
    data: product
  });
});

// get specific products
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  db.product.map(product => {
    if (product.id === id) {
      res.status(200).send({
        success: "true",
        message: "Product retrieved successfully",
        data: product
      });
    }
  });
});

app.get("/api/products/:id/reviews", (req, res) => {
  const id = req.params.id;
  db.product.map(product => {
    if (product.id === id) {
      res.status(200).send({
        success: "true",
        message: "Product review retrieved successfully",
        data: product.reviews
      });
    }
  });
});
