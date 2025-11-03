import { Router, Request, Response } from "express";

import {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion,
} from "../controllers/taller-03.controller";

const taller03Routes = Router();

const postDesglosarString = (request: Request, response: Response): void => {};
const postTwoSum = (request: Request, response: Response): void => {};
const postConversionRomana = (request: Request, response: Response): void => {};
const postDescomposicion = (request: Request, response: Response): void => {};

taller03Routes.post("/desglosarString", postDesglosarString);
taller03Routes.post("/twoSum", postTwoSum);
taller03Routes.post("/conversionRomana", postConversionRomana);
taller03Routes.post("/descomposicion", postDescomposicion);

export default taller03Routes;
