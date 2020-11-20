import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';

const sortByBuildNumber = (data: expandedJenkinsBuildTimeData[]) => data.sort((a, b) => ((Number(a.buildNumber) > Number(b.buildNumber)) ? 1 : -1));

export { sortByBuildNumber };
