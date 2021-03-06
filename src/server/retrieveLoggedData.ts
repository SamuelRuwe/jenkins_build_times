import fs from 'fs';
import path from 'path';

const dataLocation = path.join(__dirname, 'jenkinsBuildData.json');

const getData = (dataLocation: string) => {
  const jsonData = fs.readFileSync(dataLocation)
    .toString();
  return JSON.parse(jsonData);
};

export { getData };
