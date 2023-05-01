interface  RequestToServer {
    sum: number;
    from: number;
    to: number;
}

enum Status {
    Success = 'success',
    Failed = 'failed'
}
interface FailedResponse {
    errorMessage: string;
    errorCode: number;
}

interface SuccessResponse extends RequestToServer{
    dataBaseId: number
}

// interface ResponseFromServer extends BadResponse, GoodResponse{
//     status: Status;
//     data: GoodResponse | BadResponse;
// }

// Более правильно

interface ResponseFromServerSuccess extends SuccessResponse{
    status: Status.Success;
    data: SuccessResponse;
}

interface ResponseFromServerFailed extends FailedResponse{
    status: Status.Failed;
    data: FailedResponse;
}
// function get(): ResponseFromServerSuccess | ResponseFromServerFailed{
//
// }