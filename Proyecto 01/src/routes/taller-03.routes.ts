import { Router, Request, Response } from "express";

import {
  findMax,
  includes,
  sum,
  missingNumbers,
} from "../controllers/taller-02.controller";

const taller02Routes = Router();

const postFindMax = (request: Request, response: Response): void => {};
const postIncludes = (request: Request, response: Response): void => {};
const postSum = (request: Request, response: Response): void => {};
const postMissingNumbers = (request: Request, response: Response): void => {};

taller02Routes.post("/findMax", postFindMax);
taller02Routes.post("/includes", postIncludes);
taller02Routes.post("/sum", postSum);
taller02Routes.post("/missingNumbers", postMissingNumbers);

export default taller02Routes;
