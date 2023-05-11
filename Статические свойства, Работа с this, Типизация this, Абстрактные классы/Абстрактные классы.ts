abstract class Controller {
    abstract handle(req: any): void;

    handleWithLogs(req: any): void{
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}


class UserController extends Controller {
    handle(req: any): void {
        console.log(req);
    }

}


let c = new UserController();

c.handleWithLogs('sdf')


