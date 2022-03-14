import sqlite3 from 'sqlite3'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/bdClientes.db'

export const bdClientes = new sqlite3.Database(filePath);

