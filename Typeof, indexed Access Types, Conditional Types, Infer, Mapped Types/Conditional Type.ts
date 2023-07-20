const c1: number = Math.random() > 0.5 ? 1 : 0;

 interface HTTPResponse<T extends 'success' | 'failed'> {
     code: number;
     data: T extends 'success' ? Date : Error;
 }

 const suc: HTTPResponse<'success'> = {
     code: 200,
     data: new Date()
 }

 const err: HTTPResponse<'failed'> = {
     code: 400,
     data: new Error()
 }

 class UserCT {
     id: number;
     name: string;
 }
 class UserPersistendCT extends UserCT {
     dbId: string;
 }

 function getUser(id: number): UserCT;
 function getUser(dbId: string): UserPersistendCT;
 function getUser (dbIdOrId: string | number): UserCT | UserPersistendCT {
     if(typeof dbIdOrId === 'number'){
         return new UserCT();
     }
     else{
         return new UserPersistendCT();
     }
 }


 type UserOrUserPersistend <T extends string | number> = T extends number ? UserCT : UserPersistendCT;
 
  function getUser<T extends string | number> (id: T): UserOrUserPersistend<T> {
     if(typeof id === 'number'){
         return new UserCT() as UserOrUserPersistend<T>;
     }
     else{
         return new UserPersistendCT();
     }
 }