// tailorService.ts
import TailorModel, { Tailor } from '../models/Tailor';

export const TailorService = {
    getAllTailors: async (): Promise<Tailor[]> => {
        return TailorModel.find();
    },
    getTailorById: async (tailorId: string): Promise<Tailor | null> => {
        return TailorModel.findById(tailorId);
    },
    createTailor: async (tailorData: Partial<Tailor>): Promise<Tailor> => {
        const tailor = new TailorModel(tailorData);
        return tailor.save();
    },
    updateTailor: async (tailorId: string, updates: Partial<Tailor>): Promise<Tailor | null> => {
        return TailorModel.findByIdAndUpdate(tailorId, updates, { new: true });
    },
    deleteTailor: async (tailorId: string): Promise<Tailor | null> => {
        return TailorModel.findByIdAndDelete(tailorId);
    },
};
