import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';

const sortByBuildNumber = (data: expandedJenkinsBuildTimeData[]) => {
   return data.sort((a,b) => (parseInt(a.buildNumber) > parseInt(b.buildNumber)) ? 1 : -1);
}

export { sortByBuildNumber };
