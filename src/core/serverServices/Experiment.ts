import {
    ExperimentGetByIdResponse,
    ExperimentGetListResponse,
    ExperimentEdditTitleResponse,
    ExperimentEdditDescriptionResponse,
    ExperimentGetExcelBufferResponse
} from '../interface/ServerResponse';
import Services from './Services';

class Experiment extends Services {
    path = '/experiment'

    async getById(id: string): Promise<ExperimentGetByIdResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
        });
    }

    async getList(deviceName: string): Promise<ExperimentGetListResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/list/?name=${deviceName}`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`
                }
            });
        });
    }

    async getExcelBuffer(experimentId: string): Promise<ExperimentGetExcelBufferResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/excel-buffer/?id=${experimentId}`, {
                headers: {
                    Authorization: `Bearer ${this.getToken().token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
        }, false);
    }

    async edditTitle(id: string, title: string): Promise<ExperimentEdditTitleResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            await fetch(`${this.host}${this.path}/title`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    id,
                    title
                })
            })
        });
    }

    async edditDescription(id: string, description: string): Promise<ExperimentEdditDescriptionResponse> {
        this.checkAuth();
        return await this.onKnockServer(async () => {
            await fetch(`${this.host}${this.path}/description`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${this.getToken().token}`
                },
                body: JSON.stringify({
                    id,
                    description
                })
            })
        });
    }
}

export default Experiment