# Revisão pré-entrega — FinanIA (28/10/2026)

## Escopo e fonte
Comparação com README do repositório oficial da DIO (`digitalinnovationone/dio-lab-vibe-coding-app-financas`) e análise estática da pasta `finania-dio`.

## Conferência concluída
- PRD: contexto, problema, público, funcionalidades e entregáveis definidos.
- Agente e fluxo: comportamentos, telas, limites e proposta de validação documentados.
- Código demonstrativo: quatro telas, linguagem natural por regras, confirmação, metas, lançamentos, balanço e dicas educativas.
- Documentação: README, PRD, PROMPTS, PLANO_MVP, AGENTE_FINANCEIRO, FLUXO_TELAS, VALIDACAO e ENTREGA_DIO existentes.
- Sintaxe JS: `node --check app.js` e `node --check finance-engine.js` concluídos sem erro.
- 11 testes unitários do núcleo financeiro: aprovados localmente com Node.js v22.16.0.
- Correções feitas nesta revisão: rejeição de valores negativos em mensagens, resposta a consultas de saldo e tratamento de pedido de meta como objetivo em vez de despesa.

## Ainda não concluído ou comprovado
- **Parcialmente resolvido:** a automação visual não abriu a página, mas o participante enviou seis capturas reais do navegador. Os fluxos visíveis foram conferidos; ainda falta testar `F5`, edição/cancelamento e mobile.
- Capturas da **conversa real com ChatGPT**, ainda não anexadas. Copilot e Lovable não foram usados neste processo.
- Histórico de decisões documentado em `HISTORICO_VIBE_CODING.md`; falta aprovação da reflexão autoral e prints de ChatGPT.
- Upload para o repositório público do participante; GitHub Pages é opcional.
- Envio do link na atividade na DIO.

## Roteiro manual em ordem
1. Baixe e extraia o ZIP. Abra `index.html` no navegador ou, preferencialmente, inicie `python -m http.server 8000` na pasta do projeto e acesse `http://localhost:8000`.
2. Clique em **Limpar meus dados** e confirme. Volte à **Visão geral**; tudo deve estar em R$ 0,00.
3. Abra **Lançamentos** → **Carregar exemplo fictício** uma única vez. Na **Visão geral**, confira: entradas R$ 3.500,00, saídas R$ 682,10 e saldo R$ 2.817,90.
4. Abra **Conversar** e envie `Gastei R$ 45,90 no supermercado`. Confira tipo Despesa, categoria Alimentação, descrição e valor; só então confirme. No painel, saídas R$ 728,00 e saldo R$ 2.772,00.
5. Ainda no chat, envie `Qual é o meu saldo?` e confira que o resumo mostra os mesmos totais, sem criar uma movimentação.
6. Envie `Quero guardar R$ 2.000 para uma viagem`; deve orientar para a tela **Minhas metas**, sem salvar despesa.
7. Em **Minhas metas**, crie `Reserva de emergência`, alvo `1000` e saldo inicial `200`; confira 20%; adicione `300` e confira 50%.
8. Teste **Cancelar** ao analisar uma nova despesa. O saldo não deve mudar.
9. Atualize a página. Os dados devem continuar no mesmo navegador.
10. Confira o app em tela estreita (Chrome: F12 → Toggle device toolbar, ícone de celular). Navegue nas quatro telas, sem conteúdo cortado.
11. Refaça **Limpar meus dados**, se não quiser preservar dados fictícios.
12. Capture uma imagem real do protótipo para `assets/evidencias/04-prototipo.png` (extra opcional).

## Evidências obrigatórias para o GitHub
- Refinamento de PRD em conversa com IA, com print legível.
- Interação que resultou em fluxo de telas ou plano de MVP.
- Interação de especificação do agente financeiro.
- Reflexão autoral: o que funcionou, o que não funcionou e o que foi aprendido.
- Link público do repositório após verificar arquivos e links.

> **Não confundir:** screenshot do aplicativo demonstrativo não substitui print de conversa com IA, exigido pela DIO. Não inventar prints, resultados de testes com usuários ou uso de ferramentas.

## Atualização — testes manuais com imagens do participante (28/10/2026)

Seis capturas reais do navegador foram adicionadas em `assets/evidencias/` e descritas em [`EVIDENCIAS_TESTES_REAIS.md`](EVIDENCIAS_TESTES_REAIS.md). Foram conferidos o dashboard inicial e atualizado, sete registros, a categorização do gasto de R$ 45,90 e a meta passando de 10% para 15%. Isso substitui a pendência antiga sobre *nenhuma validação visual*, **apenas nos fluxos efetivamente vistos**. Persistência após F5, edição, cancelamento, testes mobile e evidência de conversa com IA continuam pendentes. A ferramenta de trabalho escolhida é o ChatGPT, sem Copilot/Lovable.