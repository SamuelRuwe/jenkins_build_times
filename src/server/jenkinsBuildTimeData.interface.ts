export interface jenkinsBuildTimeData {
    duration: number;
    id: string;
    result: 'SUCCESS' | 'FAILURE' | null;
    timestamp: number;
}

export interface expandedJenkinsBuildTimeData {
    buildNumber: string;
    date: string;
    duration: string;
    minutes: number;
    result: 'SUCCESS' | 'FAILURE' | null;
}
