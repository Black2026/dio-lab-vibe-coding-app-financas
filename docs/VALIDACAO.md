# Plano de testes e validação — FinanIA

## Testes reproduzíveis no protótipo

1. **Abrir o site:** `index.html` deve carregar com valores zerados, sem exigir login.
2. **Inserir receita:** em Conversar, digitar “Recebi R$ 3500 de salário”. Confirmar. Entradas devem aumentar em R$ 3.500,00.
3. **Inserir despesa:** digitar “Gastei R$ 45,90 no supermercado”. Confirmar. Saídas devem aumentar em R$ 45,90 e a categoria sugerida deve ser Alimentação.
4. **Cancelar:** digitar “Paguei R$ 25 de transporte” e cancelar. O saldo não deve mudar.
5. **Corrigir lançamento:** digitar “Paguei R$ 80”, mudar categoria para Lazer e confirmar. A categoria deve refletir a alteração.
6. **Entrada sem número:** digitar “Paguei a conta”. Deve aparecer ajuda, sem salvar.
7. **Metas:** criar “Reserva” com alvo de R$ 1.000 e acumulado R$ 200. Deve mostrar 20% de progresso.
8. **Aporte:** adicionar R$ 300 à meta Reserva. Deve mostrar 50%.
9. **Persistência:** atualizar a página. Lançamentos e metas devem continuar visíveis no mesmo navegador.
10. **Limpar tudo:** clicar em “Limpar meus dados” e confirmar. Dados devem desaparecer.
11. **Dica:** perguntar “Como economizar?”. Deve aparecer orientação educativa, sem prometer ganhos.
12. **Mobile:** abrir a página em uma janela estreita. Menu, botões e campos devem continuar acessíveis.

## Testes técnicos automatizados
Execute no diretório raiz com Node.js (sem instalar pacotes):

```bash
node --test tests/finance-engine.test.cjs
```

Abrangência: interpretação de despesas, receitas, números, entradas inválidas, saldo, agrupamento e geração de dicas. Isso não substitui testes de navegação visual nem testes reais de usuários.

## Plano de validação com usuários (a executar)
- **Participantes:** cinco pessoas que estão começando a organizar o orçamento.
- **Tarefa A:** registrar uma despesa em até 45 segundos.
- **Tarefa B:** consultar saldo e maior categoria de gasto.
- **Tarefa C:** cadastrar uma meta.
- **Perguntas:** O que pareceu fácil? O que causou dúvida? Você confiaria na classificação sem revisão? Qual funcionalidade ficou faltando?
- **Metas propostas:** ≥ 80% de sucesso nos cenários e ≥ 4/5 usuários encontrando o saldo e a criação de metas.
- **Registro:** anotar respostas e tempos reais; não inventar resultados.

| Data | Participante (sem identificar) | Tarefas concluídas | Dificuldades | Melhorias propostas |
|---|---|---|---|---|
| [preencher] | P1 | [preencher] | [preencher] | [preencher] |

## Riscos a observar
- Erros na interpretação de número ou categoria.
- Diferenças entre uma regra simples de texto e um agente real de IA.
- Uso de localStorage em dispositivos compartilhados.
- Perda de dados ao limpar armazenamento do navegador.
- Dicas não personalizadas sem informações suficientes.


## Resultados esperados no teste guiado do protótipo (dados de demonstração)
1. Após **Limpar meus dados**, o painel deve exibir R$ 0,00 em todos os indicadores.
2. Ao clicar **Carregar exemplo fictício** uma única vez, os 6 registros devem resultar em **receitas de R$ 3.500,00, despesas de R$ 682,10 e saldo de R$ 2.817,90**.
3. Ao adicionar e confirmar **“Gastei R$ 45,90 no supermercado”**, os totais devem passar para **receitas de R$ 3.500,00, despesas de R$ 728,00 e saldo de R$ 2.772,00**.
4. Uma mensagem **“Qual é o meu saldo?”** deve informar os valores já registrados, sem criar lançamento.
5. Uma mensagem **“Quero guardar R$ 2.000 para uma viagem”** deve orientar a acessar **Minhas metas**, sem registrar a frase como despesa.
6. Uma mensagem **“Paguei R$ -50 no mercado”** não deve criar um lançamento válido.
7. Após recarregar a página, os dados anteriores devem permanecer no mesmo navegador, desde que seu armazenamento local esteja ativado.
8. Conferir visualmente a interface em largura de tela de celular (ex.: 390 px). **O layout mobile ainda não foi verificado nas capturas enviadas.**

## Resultados observados em 28/10/2026

As capturas enviadas pelo participante permitem conferir **valores do dashboard, salvamento do gasto no histórico e atualização do progresso de metas**. Consulte [`EVIDENCIAS_TESTES_REAIS.md`](EVIDENCIAS_TESTES_REAIS.md), que separa resultados vistos de testes ainda pendentes.

**Pendente:** afirmar que `F5` preserva os registros só após confirmação explícita do participante. Não deduzir persistência de capturas de tela estáticas.