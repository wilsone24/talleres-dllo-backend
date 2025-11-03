import { Router, Request, Response } from "express";

import {
  convertidorTemp,
  resolvedor,
  mejorParidad,
  peorParidad,
} from "../controllers/taller-01.controller";

const taller01Routes = Router();

const postConvertidorTemp = (request: Request, response: Response): void => {
  const { temperatura_grados }: { temperatura_grados: number } = request.body;
  const resultado = convertidorTemp(temperatura_grados);
  response.status(200).json({ resultado });
};

const postResolvedor = (request: Request, response: Response): void => {
  const {
    a,
    b,
    c,
    signo,
  }: { a: number; b: number; c: number; signo: "+" | "-" } = request.body;
  const resultado = resolvedor(a, b, c, signo);
  response.status(200).json({ resultado });
};

const postMejorParidad = (request: Request, response: Response): void => {
  const { numero }: { numero: number } = request.body;
  const resultado = mejorParidad(numero);
  response.status(200).json({ resultado });
};

const postPeorParidad = (request: Request, response: Response): void => {
  const { numero }: { numero: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 } =
    request.body;
  const resultado = peorParidad(numero);
  response.status(200).json({ resultado });
};

taller01Routes.post("/convertidorTemp", postConvertidorTemp);
taller01Routes.post("/resolvedor", postResolvedor);
taller01Routes.post("/mejorParidad", postMejorParidad);
taller01Routes.post("/peorParidad", postPeorParidad);

export default taller01Routes;
