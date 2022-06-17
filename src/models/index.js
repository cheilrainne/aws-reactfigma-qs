// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Registration } = initSchema(schema);

export {
  Registration
};