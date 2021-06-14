import { Router } from 'express';
import {signOutController} from "./signout.controller";





export const SignOutRouter = Router();

SignOutRouter.route('/')
    .get(signOutController);