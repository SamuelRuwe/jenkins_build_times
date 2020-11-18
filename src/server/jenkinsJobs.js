const mergeMasterLink = 'http://stnext-jenkins.planaria.cloud.cas.org/job/merge-master/api/json?tree=allBuilds[number,id,timestamp,result,duration]';
const mergeSequenceSearchLink = 'http://stnext-jenkins.planaria.cloud.cas.org/job/merge-sequence-search/api/json?tree=allBuilds[number,id,timestamp,result,duration]';

const jobLinks = {
  MERGE_MASTER: {
    link: mergeMasterLink,
    request: 'merge-master'
  },
  MERGE_SEQUENCE_SEARCH: {
    link: mergeSequenceSearchLink,
    request: 'merge-sequence-search'
  },
  STN_PLANARIA_BUILD: {
    link: 'http://stnext-jenkins.planaria.cloud.cas.org/job/stn-planaria-build/api/json?tree=allBuilds[number,id,duration,result]',
    request: 'stn-planaria-build'
  }
};

exports.jobLinks = jobLinks;
