
const skills: string[] = ['Dev', 'DevOps', 'Testings'];
// const skills: any[] = ['Dev', 'DevOps', 1] - плохое



for(const skill of skills){
    console.log(skill.toLowerCase());
}

const result = skills
    .filter((s: string) => s !== 'DevOps')
    .map(s => {return 1})
    .reduce((a, b) => a + b);

console.log(result)