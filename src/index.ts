import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import httpContext from "express-http-context";
import Routing from "./routes/route.pnr";

const PORT = 5001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: true }));
app.use(httpContext.middleware);


const routing = new Routing();

try {
  Promise.all([])
    .then(() => {

      app.use("/", routing.router);

      app.listen(PORT, () => {
        console.log(`API is running on port ${PORT}`);
      });

    })
    .catch((error) => {
      throw error;
    });
} catch (error) {
  console.error(error);
}
