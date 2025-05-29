import { Request, Response } from 'express';
import Example from '../models/Example';

export const getExamples = async (_req: Request, res: Response) => {
  try {
    const examples = await Example.findAll();
    return res.status(200).json(examples);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener ejemplos', error });
  }
};

export const createExample = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const example = await Example.create({ name, description });
    return res.status(201).json(example);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear ejemplo', error });
  }
};
