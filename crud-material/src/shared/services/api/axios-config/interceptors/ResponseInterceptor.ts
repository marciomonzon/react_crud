import { AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {

    // response do backend
    // algum tratamento

    return response;
}