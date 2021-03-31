import {Request, Response } from 'express'

export function  create(req:Request,res:Response):Response{
return res.json('success')
}
