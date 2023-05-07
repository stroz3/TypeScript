"use strict";
class UserMethods {
    constructor() {
        this.skills = [];
    }
    addSkill(skillorSkills) {
        if (typeof skillorSkills === 'string') {
            this.skills.push(skillorSkills);
        }
        else if (Array.isArray(skillorSkills)) {
            for (let i = 0; i < skillorSkills.length; i++) {
                let skill = skillorSkills[i];
                this.skills.push(skill);
            }
        }
    }
}
const usrr = new UserMethods();
usrr.addSkill(['Dev', 'DevOps']);
console.log(usrr.skills);
usrr.addSkill('Front');
console.log(usrr.skills);
