import axios from 'axios';
import {TaxiDto} from "./dto/taxiDto";
import {StockDto} from "./dto/stockDto";

export const API_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_URL
});

export const TaxiAPI = {
    create: (taxiDto: TaxiDto) => api.post('/taxi/', taxiDto),
    createSample: (taxiId: number, stockDto: StockDto) => api.post(`/taxi/${taxiId}/sample`, stockDto),
    findAll: (query?: Record<string, unknown>) => api.get('/taxi/', { params: query }),
    findOne: (taxiNumber: number, query?: Record<string, unknown>) =>
        api.get(`/taxi/${taxiNumber}`, { params: query }),
    findStock: (taxiId: number, query: Record<string, unknown>) =>
        api.get(`/taxi/${taxiId}/stock`, {params: query}),
    findStockByStockId: (taxiId: number, sampleId: number) =>
        api.get(`/taxi/${taxiId}/sample/${sampleId}`),
    updateTaxi: (taxiId: number, taxiDto: TaxiDto) =>
        api.put(`/taxi/${taxiId}`, taxiDto),
    recoverTaxi: (taxiId: number) => api.put(`/taxi/${taxiId}/recover`),
    updateSample: (taxiId: number, sampleId: number) => api.put(`/taxi/${taxiId}/sample/${sampleId}`),
    deleteTaxi: (taxiId: number) => api.delete(`/taxi/${taxiId}`),
    deleteSample: (taxiId: number, sampleId: number) => api.delete(`/taxi/${taxiId}/sample/${sampleId}`),
}