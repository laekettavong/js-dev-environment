/* THis script generates mock data for local development.
  This is an alternative to pointing to an actual API,
  what is generated is realistic, randomized data
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema))

fs.writeFile('./src/api/db.json', json, (error) => {
  if (error) {
    return console.log(chalk.red(error));
  } else {
      console.log(chalk.green("Mock data generated."));
  }
});
