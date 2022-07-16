type StringDate = string;
type StringTime = string;

interface Measurement {
    danger: boolean,
    tempRoom: number,
    tempWater: number,
    lightSensor: number,
    lightWorkingTime: StringTime,
    lightOffTime: StringTime,
    pumpTime: number,
    pumpSleep: number,
    date: StringDate
    _id: string;
}

interface Experimet {
    title: string;
    description: string;
    measurements: Measurement[];
    lastUpdate: StringDate;
    _id: string;
}

interface Device {
    name: string;
    description: string;
    cycles: Experimet[];
    currentExperiment: Experimet;
    _id: string;
}

interface MainUserInfo {
    username: string;
    email: string;
    _id: string;
}

interface User extends MainUserInfo {
    password: string;
    deviceList: Device[];
}

export type {
    Measurement,
    Experimet,
    Device,
    MainUserInfo,
    User
}