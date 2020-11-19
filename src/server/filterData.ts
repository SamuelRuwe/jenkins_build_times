import { expandedJenkinsBuildTimeData } from './jenkinsBuildTimeData.interface';

const SUCCESS = 'SUCCESS';

const removeFailures = (data: expandedJenkinsBuildTimeData[]) => data.filter((x) => x.result === SUCCESS);

export { removeFailures };
