"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let input;
input = 3;
input = ['s', 's2'];
// let resU: string = input; // нужно класть в unknown или any
function run(i) {
    if (typeof i == 'number') {
        i++;
    }
    else {
        i;
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message); // Такое не приведет к неожиданной ошибке
                /*
                * Так же можно сделать const e = error as Error;
                * console.log(err.message);
                * Но в таком случае может возникнуть непридвиденная ошибка, если придет что-то другое
                * */
            }
            // console.log(err.message); если просто задать err  catch, то нельзя использовать его
        }
    });
}
