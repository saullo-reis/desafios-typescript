// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
var Profissao;
(function (Profissao) {
    Profissao["padeiro"] = "padeiro";
    Profissao["atriz"] = "atriz";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz
};
var pessoa2 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
};
var pessoa3 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.padeiro
};
var pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
console.log(pessoa1);
