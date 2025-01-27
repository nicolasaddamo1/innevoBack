import  express  from "express";
import indexRoutes from "./routes/index";

const app = express();
const port = 3000;
app.use(indexRoutes);

app.listen(port, () => {
        console.log("Server running on port", port);
    }
);
