import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
        res.send('home no controller!');
        //res.render('pages/page');

}

export const dogs = (req: Request, res: Response) => {

        res.send('Dogs no Controller!');
        //res.render('pages/page');

}

export const cats = (req: Request, res: Response) => {
        res.send('Cats no Controller!');
        //res.render('pages/page');

}

export const fish = (req: Request, res: Response) => {
        res.send('Fish no Controller!');
        //res.render('pages/page');

}
