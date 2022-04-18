const surahNames = "SELECT * FROM surah_names ORDER BY surah_num";

const selectSurah = (tableName: string): string => {
    return `SELECT * FROM ${tableName} ORDER BY ayah_num`;
}

const createTable = (tableName: string): string => {
    return `CREATE TABLE IF NOT EXISTS "${tableName}" (ayah_num NUMERIC PRIMARY KEY, ayah_arab VARCHAR(2000), ayah_rus VARCHAR(2000), ayah_dungan VARCHAR(2000))`;
}
const insertSurah = (tableName: string): string => {
    return `INSERT INTO ${tableName} (ayah_num, ayah_arab, ayah_rus, ayah_dungan) VALUES ($1, $2, $3, $4) RETURNING *`;
}

export {
    surahNames,
    selectSurah,
    insertSurah,
    createTable
}