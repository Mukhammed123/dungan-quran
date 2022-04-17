import { surahNamesURL } from './apiPaths';
import { api } from '@/services/api';

export const getSurahNames = async () => {
    console.log(surahNamesURL)
    const response = await api.get(surahNamesURL);
    if (response.status === 200) return response.data;
    else return [];
}