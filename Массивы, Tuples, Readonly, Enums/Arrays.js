"use strict";
const skills = ['Dev', 'DevOps', 'Testings'];
// const skills: any[] = ['Dev', 'DevOps', 1] - плохое
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const result = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(result);
