const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const mongoose = require('mongoose');
const { database } = require('./keys');

// Settings
app.set("port", process.env.PORT || 3129);
app.set("views", path.join(__dirname, 'views'));
app.engine("hbs", exphbs);
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: ".hbs"
}));

// Se establece el view engine después de ser configurado.
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a base de datos
mongoose.connect(database.URI, {useNewUrlParser: true}).then((value) => {
    console.log(`Conectado a la base de datos`)
}).catch((reason) => {
    console.log(`Error en la conexión ${reason}`)
});

// Enrutador
app.use(require("./routes/index"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Inicialización del servidor.
app.listen(app.get("port"), () => {
  console.log("connected to port: ", app.get("port"));
});
