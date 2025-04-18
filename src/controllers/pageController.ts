import { Request, Response } from "express";
import { title } from "process";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';


export const home = (req: Request, res: Response) => {

    let list = Pet.getAll();


    res.render('pages/page', {
        menu: createMenuObject('all'), //Usa função criada na pasta helpers para flag active true.
        banner: {
            title: 'Todos os animiais',
            background: 'allanimals.jpg'
        }, list
    });
};

export const dogs = (req: Request, res: Response) => {
    //res.render('pages/page');
    //res.send('dogs');

    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'), //Usa função criada na pasta helpers para flag active true.
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
            }, list
        });
    };

export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'), //Usa função criada na pasta helpers para flag active true.
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }, list

    });

    };

export const fish = (req: Request, res: Response) => {

    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'), //Usa função criada na pasta helpers para flag active true.
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }, list
    });
};