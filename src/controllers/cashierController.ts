import { Request, Response } from 'express'
import { Cashier } from '../models/models'
export async function create(req: Request, res: Response) {
  try {
    const { name, surname, age, sex, expiriense, shopId, registerId } = req.body
    const cashier = await Cashier.create({ name, surname, age, sex, expiriense, shopId, registerId })
    return res.status(200).json(cashier)
  } catch (err) {
    res.status(400).json({ message: err })
  }

}
export async function getAll(req: Request, res: Response) {
  try {
    const cashier = await Cashier.findAll()
    return res.status(200).json(cashier)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
export async function getOne(req: Request, res: Response) {
  try {
    const { id } = req.params
    const cashier = await Cashier.findOne({ where: { id } })
    return res.status(200).json(cashier)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params
    await Cashier.deleteOne({ where: { id } })
    return res.status(200).json(`cashier with id${id}  was deleted`)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
export async function updateOne(req: Request, res: Response) {
  try {
    const { id } = req.params
    await Cashier.updateOne({ where: { id } })
  } catch (err) {
    res.status(400).json({ message: err })
  }
}


