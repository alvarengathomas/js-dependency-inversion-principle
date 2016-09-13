import Database from './Database'

class MySQL extends Database {
    
  insert(table, values) {
    return `INSERT INTO ${table} VALUES(${values})`;
  }

  update(table, changes, conditions) {
    return `UPDATE ${table} SET ${changes} WHERE ${conditions}`;
  }

  delete(table, conditions) {
    return `DELETE FROM ${table} WHERE ${conditions}`;
  }

  select(table, fields) {
    return `SELECT ${fields} FROM ${table}`;
  }
}

export default MySQL;