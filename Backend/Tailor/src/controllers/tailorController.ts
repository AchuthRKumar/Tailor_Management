// tailorController.ts
import { Request, Response } from 'express';
import { TailorService } from '../service/tailorService';
import { Tailor } from '../models/Tailor';

export const TailorController = {
    getAllTailors: async (req: Request, res: Response) => {
        const tailors = await TailorService.getAllTailors();
        res.json(tailors);
    },
    getTailorById: async (req: Request, res: Response) => {
        const tailorId = req.params.tailorId;
        const tailor = await TailorService.getTailorById(tailorId);
        if (tailor) {
            res.json(tailor);
        } else {
            res.status(404).send('Tailor not found');
        }
    },
    createTailor: async (req: Request, res: Response) => {
        const tailorData: Partial<Tailor> = { ...req.body };
        const newTailor = await TailorService.createTailor(tailorData);
        res.status(201).json(newTailor);
    },
    updateTailor: async (req: Request, res: Response) => {
        const tailorId = req.params.tailorId;
        const updates = req.body;
        const updatedTailor = await TailorService.updateTailor(tailorId, updates);
        if (updatedTailor) {
            res.json(updatedTailor);
        } else {
            res.status(404).send('Tailor not found');
        }
    },
    deleteTailor: async (req: Request, res: Response) => {
        const tailorId = req.params.tailorId;
        const deletedTailor = await TailorService.deleteTailor(tailorId);
        if (deletedTailor) {
            res.status(204).send();
        } else {
            res.status(404).send('Tailor not found');
        }
    },
};
