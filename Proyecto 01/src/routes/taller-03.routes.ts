import { Router, Request, Response } from "express";

import {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion,
} from "../controllers/taller-03.controller";

const taller03Routes = Router();

const postDesglosarString = (request: Request, response: Response): void => {
  const {
    string,
    string2,
  }: { string: string; string2: "vocales" | "consonantes" } = request.body;
  const resultado = desglosarString(string, string2);
  response.status(200).json({ resultado });
};
const postTwoSum = (request: Request, response: Response): void => {
  const { numeros, numero }: { numeros: number[]; numero: number } =
    request.body;
  const resultado = twoSum(numeros, numero);
  response.status(200).json({ resultado });
};
const postConversionRomana = (request: Request, response: Response): void => {
  const { romano }: { romano: string } = request.body;
  const resultado = conversionRomana(romano);
  response.status(200).json({ resultado });
};
const postDescomposicion = (request: Request, response: Response): void => {
  const { string }: { string: string } = request.body;
  const resultado = descomposicion(string);
  response.status(200).json({ resultado });
};

taller03Routes.post("/desglosarString", postDesglosarString);
taller03Routes.post("/twoSum", postTwoSum);
taller03Routes.post("/conversionRomana", postConversionRomana);
taller03Routes.post("/descomposicion", postDescomposicion);

export default taller03Routes;
