type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {}

}

type ListType = GConstructor<List>;

class ExtendedListClass extends List {
    first(){
        return this.items[0];
    }
}

function ExtendedList<TBase extends ListType & AccordionList>(Base: TBase){
    return class ExtendedList extends Base {
        first(){
            return this.items[0];
        }
    }
}

class AccordionList {
    isOpened: boolean;
    constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const resfff = new List(['first', 'second']);
console.log(resfff)
