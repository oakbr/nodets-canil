import { Request, Response } from "express";

import { Pet } from '../models/pet'; //Importar o model para ser usado.
import { createMenuObject } from '../helpers/createMenuObject'; // Importar o menuObject para ser usado.


export const search = (req: Request, res: Response) => {
    
    let query: string = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
    };