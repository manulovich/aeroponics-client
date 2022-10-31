import {
    DeviceCreateNewResponse,
    DeviceEdditDescriptionResponse,
    DeviceGetDeviceByIdResponse,
    DeviceGetListResponse,
    DeviceStopCurrentExperimentResponse
} from '../interface/ServerResponse';
import Services from './Services';

class Device extends Services {
    path = '/device';

    async getById(deviceId: string): Promise<DeviceGetDeviceByIdResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/?id=${deviceId}`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
        })
    }

    async getList(): Promise<DeviceGetListResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () =>{
            return await fetch(`${this.host}${this.path}/list`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
        });
    }

    async createNew(name: string, password: string, description: string): Promise<DeviceCreateNewResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/new/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    name,
                    password,
                    description
                })
            });
        });
    }

    async stopCurrentExperiment(
        deviceId: string,
        title: string,
        description: string
    ): Promise<DeviceStopCurrentExperimentResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/experiment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    id: deviceId,
                    title,
                    description
                })
            });
        });
    }

    async edditDescription(deviceId: string, newDescription: string): Promise<DeviceEdditDescriptionResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/description`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    id: deviceId,
                    description: newDescription
                })
            });
        })
    }
}

export default Device