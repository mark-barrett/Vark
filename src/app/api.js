import { MongoDb } from 'mongodb';

const connection = (closure) => {
    return MongoDb.connection('mongodb://admin:admin@ds227045.mlab.com:27045/vark')
}