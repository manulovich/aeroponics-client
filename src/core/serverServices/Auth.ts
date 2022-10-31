import {
    AuthLoginResponse,
    AuthRecoveryResponse,
    AuthRegistrationResponse
} from '../interface/ServerResponse';
import Services from './Services';

class Auth extends Services {
    path = '/auth'

    async registration(
        email: string,
        username: string,
        password: string
    ): Promise<AuthRegistrationResponse> {
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email,
                    username,
                    password
                })
            });
        });
    }

    async login(email: string, password: string): Promise<AuthLoginResponse> {
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
        });
    }

    async recovery(email: string): Promise<AuthRecoveryResponse> {
        return await this.onKnockServer(async () => {
            return await fetch(`${this.host}${this.path}/recovery`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email
                })
            });
        });
    }
}

export default Auth;