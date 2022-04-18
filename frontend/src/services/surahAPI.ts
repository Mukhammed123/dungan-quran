import { surahNamesURL, surahURL } from './apiPaths';
import { api } from '@/services/api';

export const getSurahNames = async () => {
    const response = await api.get(surahNamesURL);
    if (response.status === 200) return response.data;
    else return [];
}

export const getSurah = async (surahNum: string) => {
    const response = await api.get(surahURL + surahNum);
    if (response.status === 200) return response.data;
    else return [];
}