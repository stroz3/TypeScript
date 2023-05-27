class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        this.data = data;
        this.error = error
    }

}

const resGen = new Resp<string, number>('data', 9);

class HTTPRes<F> extends Resp<string, number>{
    code: F;
    setCode(code: F){
        this.code = code;
    }
}

const resGen2 = new HTTPRes<string>('data2');

resGen2.error;
