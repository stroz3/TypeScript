 interface UserPartReqRead {
    name: string;
    age?: number;
    email: string;
 }

 type patrial = Partial<UserPartReqRead>;
 const pat: patrial = {};

 type required = Required<UserPartReqRead>;
 type readonly = Readonly<UserPartReqRead>;
 type requiredAndReadonly = Required<Readonly<UserPartReqRead>>;