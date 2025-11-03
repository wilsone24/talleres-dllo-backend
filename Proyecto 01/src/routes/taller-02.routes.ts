import { Router, Request, Response } from "express";

import {
  findMax,
  includes,
  sum,
  missingNumbers,
} from "../controllers/taller-02.controller";

const taller02Routes = Router();

const postFindMax = (request: Request, response: Response): void => {
  const { numeros }: { numeros: number[] } = request.body;
  const resultado = findMax(numeros);
  response.status(200).json({ resultado });
};

const postIncludes = (request: Request, response: Response): void => {
  const { numeros, numero }: { numeros: number[]; numero: number } =
    request.body;
  const resultado = includes(numeros, numero);
  response.status(200).json({ resultado });
};
const postSum = (request: Request, response: Response): void => {
  const { numeros }: { numeros: number[] } = request.body;
  const resultado = sum(numeros);
  response.status(200).json({ resultado });
};
const postMissingNumbers = (request: Request, response: Response): void => {
  const { numeros }: { numeros: number[] } = request.body;
  const resultado = missingNumbers(numeros);
  response.status(200).json({ resultado });
};

taller02Routes.post("/findMax", postFindMax);
taller02Routes.post("/includes", postIncludes);
taller02Routes.post("/sum", postSum);
taller02Routes.post("/missingNumbers", postMissingNumbers);

export default taller02Routes;
