import express from 'express';
import {Signup,getPatients} from "../controllers/user.controller.js";
const app = express();

app.post('/newUser',Signup);

app.get('/patients',getPatients);

export default app;