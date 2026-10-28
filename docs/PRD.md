# PRD — FinanIA: controle financeiro por conversa

**Versão:** 1.1 — revisão colaborativa no ChatGPT, 28/10/2026  
**Projeto:** DIO — App de Organização de Finanças Pessoais com Vibe Coding  
**Situação:** conceito definido, protótipo demonstrativo criado, testes manuais parciais documentados  
**Ferramenta de Vibe Coding declarada:** ChatGPT (sem uso de Copilot ou Lovable nesta etapa)

## 1. Contexto e problema
Muitas pessoas que começam a organizar suas finanças desistem porque precisam digitar dados em vários formulários e não recebem um retorno fácil de compreender. O FinanIA explora um fluxo de conversa para reduzir etapas e tornar visíveis os resultados dos registros.

## 2. Objetivo e proposta de valor
**Objetivo:** permitir que um iniciante registre movimentações com uma frase, revise as informações antes de salvar, acompanhe o saldo e estabeleça metas simples.

**Proposta de valor:** *Seu dinheiro, seu ritmo: converse, confirme e acompanhe.*

## 3. Público-alvo e necessidades
- Pessoas adultas iniciantes no controle de finanças pessoais.
- Usuários que preferem uma interface direta e têm pouca familiaridade com planilhas.
- Necessidades: entender para onde vai o dinheiro, registrar gastos rapidamente, corrigir erros e visualizar progresso em metas.

## 4. Escopo do MVP e critérios de aceite
| Código | Recurso | Critério de aceite verificável | Estado demonstrado |
|---|---|---|---|
| F01 | Registro por conversa | Ao digitar “Gastei R$ 45,90 no supermercado”, exibir tipo **Despesa**, valor **45,90**, categoria **Alimentação** e opção de revisar/confirmar; somente salvar após confirmação. | Interpretação e salvamento observados em prints; edição antes de salvar ainda não evidenciada. |
| F02 | Categorização | Sugerir categoria coerente, permitindo correção antes da confirmação; refletir o lançamento no histórico e nos totais. | Categoria Alimentação e totais atualizados observados. |
| F03 | Metas | Criar meta com objetivo e valor atual; mostrar porcentagem `acumulado ÷ objetivo × 100`; permitir aporte. | Meta de R$ 3.000 de R$ 300 (10%) atualizada para R$ 450 (15%) observada. |
| F04 | Orientações educativas | Apresentar dicas simples com base nos registros sem prometer retorno e sem afirmar acesso bancário. | Dicas e aviso de natureza educativa visíveis no dashboard; testes de perguntas adicionais pendentes. |
| F05 | Painel e histórico | Exibir entradas, saídas, saldo correto e soma das categorias; mostrar o novo lançamento no histórico. | Valores e histórico observados e conferidos nos prints. |

## 5. Histórias de usuário
- **US01:** Como iniciante, quero registrar uma despesa escrevendo uma frase natural.
- **US02:** Como usuário, quero verificar os valores interpretados antes de confirmar, para reduzir erros.
- **US03:** Como usuário, quero entender quanto recebi, gastei e em quais categorias.
- **US04:** Como usuário, quero cadastrar e acompanhar uma meta de economia.
- **US05:** Como usuário, quero receber orientações educativas em linguagem acessível.

## 6. Fluxo principal e telas
1. **Visão geral:** saldo, entradas, saídas, barras de despesas por categoria e dicas educativas.
2. **Conversar:** entrada de texto, interpretação por regras, revisão dos dados e confirmação do lançamento.
3. **Minhas metas:** criação, valor acumulado, barra de progresso, aporte e exclusão.
4. **Lançamentos:** histórico, exclusão e carregamento opcional de dados fictícios.

Fluxo principal: **Visão geral → Conversar → Revisar → Confirmar → Histórico e dashboard atualizados**. Consulte [`FLUXO_TELAS.md`](FLUXO_TELAS.md).

## 7. Regras de negócio
1. Valores monetários em reais (BRL), com separadores locais.
2. Saldo = soma das receitas menos soma das despesas.
3. Não salvar mensagens sem valor válido ou sem confirmação explícita.
4. Metas devem ter valor-alvo maior que zero; progresso de 15% representa R$ 450,00 de R$ 3.000,00.
5. Não registrar a mesma movimentação automaticamente ao responder perguntas ou sugerir metas.
6. Dados da demonstração ficam apenas no armazenamento local do navegador; não há sincronização nem recuperação automática.
7. As dicas são educativas e não constituem recomendação personalizada de investimento.

## 8. Agente financeiro: conceito versus execução
**Conceito:** um agente conversacional capaz de interpretar intenções, pedir esclarecimentos, orientar com respeito e recomendar hábitos de economia a partir de dados autorizados.

**Protótipo entregue:** um assistente demonstrativo **baseado em regras locais de JavaScript**, sem modelo generativo integrado, sem backend e sem acesso a contas. O uso do ChatGPT ocorreu **durante o desenvolvimento e a revisão**, não dentro do aplicativo.

Consulte [`AGENTE_FINANCEIRO.md`](AGENTE_FINANCEIRO.md) para o comportamento proposto.

## 9. Requisitos não funcionais, segurança e privacidade
- Interface em português, legível e com navegação responsiva.
- Mensagens de orientação, revisão e feedback após salvar.
- Teste com dados **fictícios**; não incluir CPF, extratos, chaves, senha nem dados reais.
- Nenhuma chave de API no navegador nem conexão bancária.
- Em um produto real: autenticação, políticas de retenção, consentimento, proteção de dados e avaliação de adequação à LGPD.
- Limitação de uso em computadores compartilhados, pois `localStorage` mantém os dados no perfil local.

## 10. Fora do escopo do MVP demonstrativo
Login, Pix, Open Finance, conexão com bancos, exportação fiscal, acesso multiusuário, previsão com aprendizado de máquina, IA generativa operando no chat e persistência em nuvem.

## 11. Validação e indicadores
**Critérios de teste:** valores do dashboard corretos, classificação e histórico corretos, criação e aporte em meta, persistência após `F5`, rejeição de entradas inválidas e uso em tela de celular.

**Propostas para teste com usuários (ainda não realizado):** cinco iniciantes; sucesso em pelo menos 80% dos cenários; quatro de cinco pessoas conseguindo consultar saldo e criar meta; tempo-alvo de até 45 segundos por lançamento. São metas **planejadas**, não resultados medidos.

Resultados efetivamente observados constam em [`EVIDENCIAS_TESTES_REAIS.md`](EVIDENCIAS_TESTES_REAIS.md).

## 12. Entregáveis do desafio DIO
Prompt final, PRD, conceito do agente, fluxo das telas, plano de MVP, evidências de uso da IA, capturas do protótipo como extra, reflexão real e repositório GitHub público. **O código é um bônus, não um requisito do desafio.**

## 13. Próximas melhorias priorizadas
1. Completar testes de persistência e revisão manual de lançamento.
2. Aumentar a cobertura de mensagens ambíguas e categorizações incorretas.
3. Somente após estudo de segurança, avaliar integração com IA generativa real.