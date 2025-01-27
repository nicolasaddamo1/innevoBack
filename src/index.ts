import  express  from "express";
import indexRoutes from "./routes/index";
import cors from "cors";

const corsOptions = {
    origin: ['http://localhost:8001',], // Allow requests only from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies, if your application uses them
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) choke on 204
    // headers: 'Content-Type, Authorization, Content-Length, X-Requested-With',
};

const app = express();
const port = 3000;
app.use(cors(corsOptions));

app.use(indexRoutes);

app.listen(port, () => {
        console.log("Server running on port", port);
    }
);
