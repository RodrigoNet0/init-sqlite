import sqlite3 from 'sqlite3';

import { open } from 'sqlite';
 
async function createTable(name, lastname){
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });
    db.run(`CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, lastname TEXT)`

    );
    db.run(`INSERT INTO users (name, lastname) VALUES (?,?)`, [name,
        lastname,
    ]);
}

createTable('Rodrigo', 'Neto');