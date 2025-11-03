import { Router, Request, Response } from "express";

import {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad,
} from "../controllers/taller-01.controller";

const taller01Routes = Router();

const postConvertidorTemp = (request: Request, response: Response) => {
  const { temperatura_grados }: { temperatura_grados: number } = request.body;
  const resultado = convertidorTemp(temperatura_grados);
  response.status(200).json({ resultado });
};

const postResolvedor = () => {};
const postMejorParidad = () => {};
const postPeorParidad = () => {};

taller01Routes.post("/convertidorTemp", postConvertidorTemp);
taller01Routes.post("/convertidorTemp", postResolvedor);
taller01Routes.post("/convertidorTemp", postMejorParidad);
taller01Routes.post("/convertidorTemp", postPeorParidad);

export default taller01Routes;
