const API_BASE = 'https://api.alquran.cloud/v1';

export const fetchSurahs = async () => {
  try {
    const response = await fetch(`${API_BASE}/surah`);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};