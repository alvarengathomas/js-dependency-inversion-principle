import Database from './Database'

class UserRepository {

    constructor(database) {

        if (database instanceof Database === false) {
          throw new Error('UserRepository database param is incorrect!');
        }

        this.database = database;
    }

    add(name, age) {
      this.query = this.database.insert('user',`${name}, ${age}`);
      return `Add User - ${this.query}`;
    }

    edit(id, name, age) {
      this.query = this.database.update('user',`name='${name}', age=${age}`, `id=${id}`);
      return `Edit User - ${this.query}`;
    }

    remove(id) {
      this.query = this.database.delete('user',`id=${id}`);
      return `Delete User - ${this.query}`;
    }

    list() {
      this.query = this.database.select('user','*');
      return `List User - ${this.query}`;
    }
}

export default UserRepository;
