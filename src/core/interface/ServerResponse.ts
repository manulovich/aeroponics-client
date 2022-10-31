import ResponseError from '../elementaryEntities/ResponseError'
import Token from '../elementaryEntities/Token'
import { Device, Experimet, MainUserInfo, User } from './User';

type AuthLoginResponse = Token | ResponseError;
type AuthRegistrationResponse = Token | ResponseError;
type AuthRecoveryResponse = { status: true } | ResponseError;
type AuthLogoutResponse = boolean;

type UserGetDataResponse = { user: MainUserInfo } | ResponseError;
type UserGetDataFullFullResponse = { user: User } | ResponseError;
type UserChangePasswordResponse = { status: true } | ResponseError;
type UserChangeUsernameResponse = { status: true } | ResponseError;

type DeviceGetDeviceByIdResponse = { device: Device } | ResponseError;
type DeviceGetListResponse = { devices: Device[] } | ResponseError;
type DeviceCreateNewResponse = { status: true } | ResponseError;
type DeviceStopCurrentExperimentResponse = { status: true } | ResponseError;
type DeviceEdditDescriptionResponse = { status: true } | ResponseError;

type ExperimentGetByIdResponse = { experiment: Experimet } | ResponseError;
type ExperimentGetListResponse = {
    experimentsInCycle: Experimet[]
    currentExperiment: Experimet
} | ResponseError;
type ExperimentGetExcelBufferResponse = ArrayBuffer | ResponseError;
type ExperimentEdditDescriptionResponse = { experiment: Experimet } | ResponseError;
type ExperimentEdditTitleResponse = { experiment: Experimet } | ResponseError;
type ExperimentCreateNewResponse = { status: true } | ResponseError;



export type {
    AuthLoginResponse,
    AuthRegistrationResponse,
    AuthLogoutResponse,
    AuthRecoveryResponse,

    UserGetDataResponse,
    UserGetDataFullFullResponse,
    UserChangePasswordResponse,
    UserChangeUsernameResponse,

    DeviceGetDeviceByIdResponse,
    DeviceGetListResponse,
    DeviceCreateNewResponse,
    DeviceStopCurrentExperimentResponse,
    DeviceEdditDescriptionResponse,

    ExperimentGetByIdResponse,
    ExperimentGetListResponse,
    ExperimentEdditDescriptionResponse,
    ExperimentEdditTitleResponse,
    ExperimentCreateNewResponse,
    ExperimentGetExcelBufferResponse
}