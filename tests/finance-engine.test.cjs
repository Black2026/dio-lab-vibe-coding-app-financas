const test = require('node:test');
const assert = require('node:assert/strict');
const E = require('../finance-engine.js');
test('interpreta despesa em português e classifica categoria',()=>{const r=E.parseEntry('Gastei R$ 45,90 no supermercado');assert.equal(r.amount,45.9);assert.equal(r.type,'expense');assert.equal(r.category,'Alimentação');});
test('interpreta salário como receita',()=>{const r=E.parseEntry('Recebi R$ 3.500,00 de salário');assert.equal(r.amount,3500);assert.equal(r.type,'income');});
test('interpreta valor depois de por e evita número em produto',()=>{assert.equal(E.parseEntry('Comprei iPhone 15 por 3900').amount,3900);});
test('rejeita valores ausentes, negativos e nulos',()=>{assert.equal(E.parseEntry('Paguei a conta'),null);assert.equal(E.parseEntry(''),null);assert.equal(E.parseEntry('Paguei R$ 0'),null);});
test('soma receitas e despesas corretamente',()=>{assert.deepEqual(E.summary([{type:'income',amount:120},{type:'expense',amount:35.5}]),{income:120,expenses:35.5,balance:84.5});});
test('agrega despesas por categoria',()=>{assert.deepEqual(E.byCategory([{type:'expense',category:'Alimentação',amount:40},{type:'expense',category:'Alimentação',amount:10},{type:'income',category:'Outros',amount:600}]),[['Alimentação',50]]);});
test('dicas sem dados e com despesas',()=>{assert.ok(E.tips([]).length>0);assert.ok(E.tips([{type:'expense',category:'Lazer',amount:100}]).some(x=>x.includes('Lazer')));});

test('rejeita despesas com sinal negativo em formatos variados',()=>{
 assert.equal(E.parseEntry('Gastei -R$ 50,00 no mercado'),null);
 assert.equal(E.parseEntry('Gastei R$ -50 no mercado'),null);
 assert.equal(E.parseEntry('Paguei -20'),null);
 assert.ok(Number.isNaN(E.money('-R$ 20,00')));
});
test('valores brasileiros e decimais no parser',()=>{
 assert.equal(E.parseEntry('Recebi R$ 1.234,56 de salário').amount,1234.56);
 assert.equal(E.parseEntry('Paguei R$ 12,50 de café').amount,12.5);
});
test('resumo financeiro usa números registrados',()=>{
 const r=E.overview([{type:'income',amount:1000,category:'Outros'},{type:'expense',amount:60,category:'Transporte'}]);
 assert.match(r,/R\$\s?1\.000,00/);
 assert.match(r,/R\$\s?60,00/);
 assert.match(r,/R\$\s?940,00/);
 assert.match(r,/Transporte/);
});
test('distingue pedido de meta de gasto',()=>{
 assert.equal(E.isGoalRequest('Quero guardar R$ 2.000 para uma viagem'),true);
 assert.equal(E.isGoalRequest('Gastei R$ 200 em uma viagem'),false);
});
