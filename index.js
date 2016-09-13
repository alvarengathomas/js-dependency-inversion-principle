import MySQL from './src/MySQL';
import UserRepository from './src/UserRepository';
import di from 'di4js';


di
  .register('MySQL')
    .as(MySQL)
  .register('UserRepository')
    .as(UserRepository)
    .withConstructor()
      .param('database').ref('MySQL');

let userRepository = di.resolve('UserRepository');

console.log(userRepository.add("Thomas", 20));
console.log(userRepository.edit(1, "Claudio", 15));
console.log(userRepository.remove(2));
console.log(userRepository.list());
