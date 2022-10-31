class ResponseError {
    error: string;

    constructor(message: string = 'unknown error') {
        this.error = message;
    }
}

export default ResponseError;