import './polyfill';
import "reflect-metadata";
import {createConnection, getConnection, Repository, Transaction, TransactionRepository} from "typeorm";
import {User} from "./entity/User";
import {Photo} from "./entity/Photo";

class Test {
  constructor(readonly userRepository: Repository<User>) {}

  @Transaction()
  async run1() {
    // await this.run3();
    console.log("Inserting a new user into the database...");
    const user = this.userRepository.create({
      firstName: "Timber",
      lastName: "Saw",
      age: 1,
    });
    await this.userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await this.userRepository.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    throw new Error('run1');
  }

  async run2() {
    const connection = await getConnection();
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 2;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    throw new Error('run2');
  }

  @Transaction()
  async run3(@TransactionRepository(User) userRepository?: Repository<User>) {
    console.log("Inserting a new user into the database...");
    const user = await userRepository.create({
      firstName: "Timber1",
      lastName: "Saw",
      age: 1,
    });
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await userRepository.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
  }
}

createConnection().then(async connection => {
  const test = new Test(connection.getRepository(User));
  return test.run1();
}).catch(error => console.log(error));
