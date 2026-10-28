# Evidências e testes observados — FinanIA

**Data:** 28/10/2026  
**Fonte:** capturas do navegador compartilhadas pelo participante nesta conversa.  
**Tipo de evidência:** testes manuais do protótipo. **Não** são imagens de conversa com IA.

| Evidência | O que é possível confirmar visualmente | Status |
|---|---|---|
| [01 — Dashboard inicial](../assets/evidencias/01-dashboard-inicial.png) | Entradas R$ 3.500,00; saídas R$ 682,10; saldo R$ 2.817,90; categorias somam R$ 682,10. | Conferido |
| [02 — Chat e registro](../assets/evidencias/02-chat-registro.png) | Mensagem de despesa de R$ 45,90; classificação Alimentação; confirmação textual de salvamento. | Conferido; tela de revisão anterior ao salvamento não capturada |
| [03 — Dashboard atualizado](../assets/evidencias/03-dashboard-atualizado.png) | Entradas R$ 3.500,00; saídas R$ 728,00; saldo R$ 2.772,00; Alimentação R$ 381,60. | Conferido |
| [04 — Histórico](../assets/evidencias/04-historico-lancamentos.png) | Sete lançamentos, com a compra nova de R$ 45,90 no topo. | Conferido |
| [05 — Meta inicial](../assets/evidencias/05-meta-10-porcento.png) | Reserva de emergência R$ 300,00 / R$ 3.000,00 = 10%. | Conferido |
| [06 — Meta atualizada](../assets/evidencias/06-meta-15-porcento.png) | Aporte elevou total a R$ 450,00 / R$ 3.000,00 = 15%. | Conferido |

## Conferência aritmética
- Saldo inicial: 3.500,00 − 682,10 = **R$ 2.817,90**.
- Nova despesa: 682,10 + 45,90 = **R$ 728,00**.
- Saldo após registro: 3.500,00 − 728,00 = **R$ 2.772,00**.
- Alimentação: 335,70 + 45,90 = **R$ 381,60**.
- Meta inicial: 300 ÷ 3.000 = **10%**.
- Meta após aporte: 450 ÷ 3.000 = **15%**.

## O que essas imagens ainda NÃO comprovam
- Persistência dos lançamentos e da meta após atualização da página com `F5`.
- Funcionamento dos botões de editar/cancelar/excluir (estar visível não prova execução).
- Exibição em celular e acessibilidade por teclado.
- Conexão com um modelo de IA generativa ou acesso a contas bancárias (inexistentes no protótipo).
- Testes com pessoas fora deste acompanhamento.

## Registro técnico separado
O mecanismo financeiro possui **11 testes unitários** localizados em [`../tests/finance-engine.test.cjs`](../tests/finance-engine.test.cjs). Para reproduzir, execute `node --test tests/finance-engine.test.cjs` na raiz do projeto. Testes unitários **não substituem** evidência visual nem pesquisa com usuários.