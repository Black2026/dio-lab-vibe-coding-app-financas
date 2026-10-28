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
- Persistência da **meta** após atualização da página com `F5` (a persistência dos lançamentos foi confirmada posteriormente na versão online).
- Funcionamento dos botões de editar/cancelar/excluir (estar visível não prova execução).
- Exibição em celular e acessibilidade por teclado.
- Conexão com um modelo de IA generativa ou acesso a contas bancárias (inexistentes no protótipo).
- Testes com pessoas fora deste acompanhamento.

## Homologação da versão online — 28/10/2026

O participante enviou capturas do aplicativo publicado no GitHub Pages e informou que atualizou a página com `F5` entre as verificações. Foram confirmados:

- **Dados fictícios persistidos após F5:** 6 lançamentos, R$ 3.500,00 de receitas, R$ 682,10 de despesas, saldo de R$ 2.817,90.
- **Novo lançamento pelo chat:** “Gastei R$ 45,90 no supermercado”, classificado em Alimentação e visível nas últimas movimentações.
- **Novo F5 após o lançamento:** dashboard exibindo receitas de R$ 3.500,00, despesas de R$ 728,00, saldo de R$ 2.772,00 e Alimentação em R$ 381,60.

A confirmação do recarregamento foi fornecida pelo participante. As novas capturas estão nesta conversa e **ainda não foram adicionadas como PNG ao repositório**. Isso comprova persistência apenas no navegador e armazenamento local testados, não sincronização entre dispositivos.

## Registro técnico separado
O mecanismo financeiro possui **11 testes unitários** localizados em [`../tests/finance-engine.test.cjs`](../tests/finance-engine.test.cjs). Para reproduzir, execute `node --test tests/finance-engine.test.cjs` na raiz do projeto. Testes unitários **não substituem** evidência visual nem pesquisa com usuários.