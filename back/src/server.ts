import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, createConnection} from 'typeorm';
import "reflect-metadata";
import {createServer, acceptParser, queryParser, bodyParser} from "restify";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

let options: ConnectionOptions = {
  driver: {
    type: "sqlite",
    storage: "db/database.db"
  },
  entities: [User],
  autoSchemaSync: true
};


createConnection(options)
  .then(async connection => 
  {
    console.log(`Connected Created ${connection}`);

    ////////////////////////////////////////
    const server = createServer({
      name: 'myapp',
      version: '1.0.0'
    });
    server.use(acceptParser(server.acceptable));
    server.use(queryParser());
    server.use(bodyParser());


    server.post('/user/new', function (req, res, next) {
      res.send(req.params);
      return next();
    });

    server.listen(8080, function () {
      console.log('%s listening at %s', server.name, server.url);
    });


  })
  .catch((error) => {
    console.error(`Connection Error ${JSON.stringify(error)}`);
  });
