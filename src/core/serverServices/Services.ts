import config from '../config/service';
import ResponseError from '../elementaryEntities/ResponseError';
import Token from '../elementaryEntities/Token';

class Services {
    host = config.HOST;

    checkAuth(): void {
        if (!localStorage.getItem('token')) {
            throw new Error('User not authorized');
        }
    }

    getToken(): Token {
        const tokenCondidate = localStorage.getItem('token');

        if (!tokenCondidate) {
            throw new Error('User not authorized');
        }

        return new Token(tokenCondidate);
    }

    async onKnockServer(getResponse: () => Promise<any>): Promise<any> {
        try {
            const response = await getResponse();
            const serializeResponse = await response.json();

            return serializeResponse;
        } catch (error: any) {
            return new ResponseError(error.message);
        }
    }
}

export default Services;