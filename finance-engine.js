/* Núcleo sem dependências externas. Interpretador demonstrativo baseado em regras, NÃO é uma IA generativa. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports){module.exports=api;}
  root.FinanIAEngine=api;
})(typeof window!=='undefined'?window:globalThis,function(){
  'use strict';
  const categories=['Alimentação','Moradia','Transporte','Saúde','Educação','Lazer','Compras','Outros'];
  const incomeWords=/\b(recebi|receber|ganhei|ganho|sal[aá]rio|pagamento recebido|freelanc\w*|renda extra|vendi|dep[oó]sito recebido|b[oô]nus|reembolso recebido)\b/i;
  const expenses={
    'Alimentação':/mercado|supermercado|restaurante|lanche|almo[cç]o|jantar|padaria|comida|caf[eé]|pizza|delivery|ifood|refei[cç][aã]o/i,
    'Moradia':/aluguel|condom[ií]nio|energia|luz|[aá]gua|internet|g[aá]s|casa|moradia/i,
    'Transporte':/uber|99pop|[oô]nibus|gasolina|combust[ií]vel|transporte|metr[oô]|estacionamento|corrida|passagem/i,
    'Saúde':/farm[aá]cia|rem[eé]dio|m[eé]dico|consulta|hospital|dentista|sa[uú]de/i,
    'Educação':/curso|livro|escola|faculdade|mensalidade|educa[cç][aã]o/i,
    'Lazer':/cinema|show|viagem|lazer|passeio|jogo|parque|streaming|netflix/i,
    'Compras':/roupa|sapato|celular|presente|compras?|loja|notebook|eletr[oô]nico/i
  };
  function money(raw){
    const original=String(raw).trim();
    if(/(?:^|[^\d])-\s*(?:R\$\s*)?\d/i.test(original)||/R\$\s*-\s*\d/i.test(original))return NaN;
    let s=original.replace(/[^0-9.,]/g,'');
    if(!s)return NaN;
    const comma=s.lastIndexOf(','),dot=s.lastIndexOf('.');
    if(comma>=0&&dot>=0){s=comma>dot?s.replace(/\./g,'').replace(',','.'):s.replace(/,/g,'');}
    else if(comma>=0){s=s.replace(/\./g,'').replace(',','.');}
    else if((s.match(/\./g)||[]).length>1||/\.\d{3}$/.test(s)){s=s.replace(/\./g,'');}
    return Number(s);
  }
  function inferCategory(text,type){
    if(type==='income')return 'Outros';
    for(const [cat,re] of Object.entries(expenses))if(re.test(text))return cat;
    return 'Outros';
  }
  function inferType(text){return incomeWords.test(text)?'income':'expense';}
  function parseEntry(text){
    if(typeof text!=='string'||!text.trim())return null;
    const cleaned=text.trim();
    const re=/(?:R\$\s*)?\d{1,3}(?:\.\d{3})+(?:,\d{1,2})?|(?:R\$\s*)?\d+(?:[,.]\d{1,2})?/gi;
    const matches=[...cleaned.matchAll(re)];
    if(!matches.length)return null;
    const preferred=matches.find(m=>/R\$/.test(m[0]));
    const precededByPor=matches.find(m=>/\bpor\s*$/i.test(cleaned.slice(Math.max(0,m.index-8),m.index)));
    const candidate=preferred||precededByPor||matches[matches.length-1];
    const prefix=cleaned.slice(Math.max(0,candidate.index-10),candidate.index);
    if(/-\s*$/.test(prefix))return null;
    const value=money(candidate[0]);
    if(!Number.isFinite(value)||value<=0||value>999999999)return null;
    const type=inferType(cleaned);
    return {amount:Math.round(value*100)/100,type,category:inferCategory(cleaned,type),description:cleaned.slice(0,100)};
  }
  function summary(transactions){const income=transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);const expenses=transactions.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);return {income,expenses,balance:income-expenses};}
  function byCategory(transactions){const result={};for(const t of transactions){if(t.type==='expense')result[t.category]=(result[t.category]||0)+t.amount;}return Object.entries(result).sort((a,b)=>b[1]-a[1]);}
  function tips(transactions){const total=summary(transactions);const byCat=byCategory(transactions);const result=[];
    if(!transactions.length)return ['Comece registrando receitas e despesas fictícias para observar seus padrões de gastos.','Defina uma meta pequena e realista para criar o hábito de acompanhar suas finanças.'];
    if(total.expenses>total.income)result.push('Suas despesas registradas superam suas receitas. Revise os gastos essenciais e identifique onde pode ajustar.');
    if(byCat.length){const [cat,val]=byCat[0];result.push('Sua maior categoria de despesas é '+cat+' ('+formatMoney(val)+'). Verifique se existe alguma oportunidade de redução.');}
    if(total.income>total.expenses)result.push('Seu saldo registrado é positivo. Considere separar parte do valor para uma reserva, conforme sua realidade.');
    result.push('Reveja os lançamentos regularmente. Estas dicas são educativas e não constituem recomendação de investimento.');
    return result;
  }
  function formatMoney(v){return Number(v).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});}
  function overview(transactions){
    const totals=summary(transactions);
    const categoriesByValue=byCategory(transactions);
    const most=categoriesByValue.length?' A maior categoria de despesas é '+categoriesByValue[0][0]+' ('+formatMoney(categoriesByValue[0][1])+').':'';
    return 'Resumo dos lançamentos deste navegador: receitas '+formatMoney(totals.income)+', despesas '+formatMoney(totals.expenses)+' e saldo '+formatMoney(totals.balance)+'.'+most;
  }
  function isGoalRequest(text){return /^\s*(?:eu\s+)?(?:quero|pretendo|gostaria|preciso|vou|desejo)\s+(?:de\s+)?(?:juntar|guardar|economizar|poupar)\b/i.test(text);}
  return {categories,money,inferType,inferCategory,parseEntry,summary,byCategory,tips,formatMoney,overview,isGoalRequest};
});
