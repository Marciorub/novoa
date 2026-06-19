document.addEventListener("DOMContentLoaded", () => {
  // ==================================================
  // 1. PÁGINA INICIAL (HOME): SPOTLIGHT & DYNAMIC HOVER
  // ==================================================
  const telaBlueprint = document.querySelector(".tela-blueprint");
  const etiquetaDinamica = document.getElementById("etiqueta-dinamica");
  const linksNavegacao = document.querySelectorAll(".navegacao-apresentacao a");
  const etiquetaOriginal = "NOVOA_2023 // METAMORFOSE";

  if (telaBlueprint) {
    telaBlueprint.addEventListener("mousemove", (evento) => {
      const x = (evento.clientX / window.innerWidth) * 100;
      const y = (evento.clientY / window.innerHeight) * 100;
      telaBlueprint.style.setProperty("--cursor-x", `${x}%`);
      telaBlueprint.style.setProperty("--cursor-y", `${y}%`);
    });

    linksNavegacao.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        const novoTema = this.getAttribute("data-tema");
        if (etiquetaDinamica && novoTema) {
          etiquetaDinamica.innerText = `DESTINO // ${novoTema}`;
          etiquetaDinamica.style.color = "var(--cor-link)";
        }
      });

      link.addEventListener("mouseleave", function () {
        if (etiquetaDinamica) {
          etiquetaDinamica.innerText = etiquetaOriginal;
          etiquetaDinamica.style.color = "var(--azul-blueprint-claro)";
        }
      });
    });
  }

  // ==================================================
  // 2. CHAVES DE LEITURA: METAMORFOSE ESPACIAL INTERATIVA
  // ==================================================
  const palcoTransicao = document.querySelector(".palco-transicao");
  const sliderMetamorfose = document.getElementById("slider-metamorfose");
  const legendaTransicao = document.getElementById("legenda-transicao");

  if (sliderMetamorfose && palcoTransicao) {
    const obsoleto = palcoTransicao.querySelector(".obsoleto");
    const futuro = palcoTransicao.querySelector(".futuro");

    const legendas = [
      "**Forma Celular (Século XIX)**: Sala de aula fechada, carteiras enfileiradas e tempos fragmentados de 50 minutos. Domina a solidão docente e a passividade discente.",
      "**Primeiras Rupturas**: Tentativas de reorganizar carteiras em círculo e criação de laboratórios de informática separados. A essência celular ainda permanece intocada.",
      "**Transição Ecológica**: Abertura de paredes, agrupamentos flexíveis de alunos e projetos interdisciplinares compartilhados por dois ou mais professores.",
      "**Ecologia de Aprendizagem (Futuro Presente)**: Espaços fluidos, colaborativos e hiperconectados. A escola consolida-se como um lugar comum de convivência profissional coletiva.",
    ];

    const atualizarMetamorfose = (valor) => {
      const val = parseInt(valor);

      if (obsoleto && futuro) {
        obsoleto.style.opacity = (100 - val) / 100;
        obsoleto.style.transform = `scale(${1 + val / 600})`;

        futuro.style.opacity = val / 100;
        futuro.style.transform = `scale(${0.8 + (val / 100) * 0.2})`;
      }

      if (val > 50) {
        palcoTransicao.classList.add("ativa");
      } else {
        palcoTransicao.classList.remove("ativa");
      }

      let indexLegenda = 0;
      if (val > 25 && val <= 50) indexLegenda = 1;
      else if (val > 50 && val <= 75) indexLegenda = 2;
      else if (val > 75) indexLegenda = 3;

      if (legendaTransicao) {
        legendaTransicao.innerHTML = legendas[indexLegenda].replace(
          /\*\*(.*?)\*\*/g,
          "<strong>$1</strong>",
        );
      }
    };

    atualizarMetamorfose(sliderMetamorfose.value);

    sliderMetamorfose.addEventListener("input", (e) => {
      atualizarMetamorfose(e.target.value);
    });
  }

  // ==================================================
  // 3. GLOSSÁRIO: CARTOGRAFIA CONCEITUAL PROFUNDA (12 ITENS REAIS)
  // ==================================================
  const painelGlossario = document.querySelector(".painel-glossario");
  const inputBusca = document.getElementById("busca-conceito");
  const gridBotoes = document.getElementById("grid-conceitos");
  const cartaoDetalhe = document.getElementById("cartao-detalhe");

  if (painelGlossario) {
    const conceitos = [
      {
        id: "metamorfose",
        nome: "Metamorfose da Escola",
        categoria: "Ruptura de Paradigma",
        citacao: `A forma da escola, o conhecimento escolar e a ligação com a economia têm de ser repensados à luz das realidades contemporâneas, por meio de um processo de metamorfose da escola. A metamorfose não é uma reforma; é a transmutação estrutural dos pilares institucionais.`,
        paginas: "Páginas 37, 118 e 123",
        provocacao: `De que forma as amarras administrativas do gerencialismo de resultados e as avaliações externas baseadas em ranqueamento burocrático bloqueiam o surgimento desse 'princípio de uma nova instituição'?`,
      },
      {
        id: "celular",
        nome: "Forma Escolar Celular",
        categoria: "Organização do Espaço",
        citacao: `Organizacionalmente, a escola adquire a configuração que, na essência, se mantém até os dias de hoje: um edifício próprio, que tem como núcleo estruturante a sala de aula celular. Essa gramática de tempos fragmentados e professores isolados encerrou o seu século histórico.`,
        paginas: "Páginas 91 e 124",
        provocacao: `Quais são as implicações epistemológicas e de classe decorrentes da persistência estrutural do isolamento celular no cotidiano das escolas de periferia sob pressões neoliberais?`,
      },
      {
        id: "contingente",
        nome: "Conhecimento Contingente",
        categoria: "Epistemologia Docente",
        citacao: `É um conhecimento que não existe fora da ação, que se constrói no seu interior. O trabalho pedagógico é definido pela imprevisibilidade, pela capacidade de os professores darem respostas reflexivas imediatas a situações educativas singulares.`,
        paginas: "Páginas 58 e 68",
        provocacao: `Como os docentes da rede básica podem legitimar academicamente esse saber produzido na contingência do chão da escola, frente à tradicional hegemonia positivista universitária?`,
      },
      {
        id: "coletivo",
        nome: "Conhecimento Coletivo",
        categoria: "Epistemologia Docente",
        citacao: `A segunda característica do conhecimento profissional docente é a sua natureza coletiva, o fato de se constituir no interior de uma profissão ou, melhor dizendo, de um coletivo profissional de trabalho. A docência não é um ato de indivíduos isolados, mas uma colegialidade.`,
        paginas: "Páginas 69-70 e 75",
        provocacao: `De que maneira as políticas públicas contemporâneas de precarização contratual e terceirização docente nas redes estaduais sabotam a consolidação dessa dimensão coletiva e colaborativa?`,
      },
      {
        id: "publico",
        nome: "Conhecimento Público",
        categoria: "Epistemologia Docente",
        citacao: `A terceira característica do conhecimento profissional docente é a sua natureza pública, o que implica um processo de escrita e de publicação. Sem a documentação sistemática e a partilha do saber, a docência permanece invisibilizada pelas burocracias escolares.`,
        paginas: "Páginas 58, 71 e 72",
        provocacao: `Que estratégias metodológicas de pesquisa-ação ou escrita coletiva podem estimular a transição da oralidade da prática docente para a documentação acadêmica sistemática?`,
      },
      {
        id: "publica-acao",
        nome: "Pública Ação (Escrita Docente)",
        categoria: "Epistemologia e Política",
        citacao: `A escrita do professor é o mecanismo de inserção da categoria no debate social. A escrita e a publicação constituem-se como um ato político de autoria docente. Publicação? Pública ação. Um conhecimento profissional não se constrói se for puramente privado.`,
        paginas: "Páginas 71-72 e 76",
        provocacao: `De que forma a 'pública ação' da escrita pedagógica age como força de resistência intelectual contra a invasão silenciosa de materiais padronizados e apostilados pelas secretarias estaduais?`,
      },
      {
        id: "terceiro-lugar",
        nome: "O Terceiro Lugar Institucional",
        categoria: "Formação de Professores",
        citacao: `A saída está sempre num 'terceiro lugar' que é muito mais do que a simples soma dos dois lugares anteriores (teoria e prática). É um espaço híbrido de co-governança compartilhada, unindo a universidade, escolas básicas e coletivos profissionais.`,
        paginas: "Páginas 46, 47 e 74",
        provocacao: `Quais os principais desafios políticos e corporativos na implantação sustentável de 'Casas Comuns de Formação' frente ao produtivismo individualista imposto à pós-graduação acadêmica pela regulação ministerial?`,
      },
      {
        id: "terceiro-instruido",
        nome: "O Terceiro Instruído",
        categoria: "Filosofia do Aprendizado",
        citacao: `O aprendizado implica sempre uma viagem, um deslocamento, um descolar da nossa margem de origem rumo à outra margem... É nesse deslocamento que nos tornamos outros, que aprendemos. O terceiro instruído carrega em si a pele existencial e intelectual de ambas as margens.`,
        paginas: "Páginas 55-56 (Apoiado em Michel Serres)",
        provocacao: `Como a metáfora do descolamento cultural e epistemológico de Michel Serres tensiona o inatismo psicológico ou o espontaneísmo das correntes pedagógicas não diretivas no debate contemporâneo?`,
      },
      {
        id: "comum",
        nome: "O Comum vs. Identitarismo",
        categoria: "Finalidade Social",
        citacao: `Este comum não remete para uma 'comunidade de identidade' (onde convivemos com iguais), mas para uma 'comunidade de trabalho' (onde cooperamos com diferentes). Assenta num princípio de encontro e comunicação intercultural na esfera pública.`,
        paginas: "Página 38",
        provocacao: `Em tempos de bolhas algorítmicas que nos confinam ao convívio com os semelhantes, de que modo a escola pública física se ergue como o único espaço de socialização forçada com a alteridade democrática?`,
      },
      {
        id: "liberdades",
        nome: "As Seis Liberdades",
        categoria: "Autonomia Pedagógica",
        citacao: `Ficam aqui três liberdades que definem a educação pública: a liberdade que é igualdade, a liberdade que é diversidade e a liberdade que é aprendizagem. E completam-se com três liberdades de ação: participação, autonomia e criação.`,
        paginas: "Páginas 53-56",
        provocacao: `Como reatar a agência docente e as 'seis liberdades' sem expor os profissionais da educação básica a perseguições ideológicas promovidas por movimentos neoconservadores de patrulhamento de conteúdo?`,
      },
      {
        id: "humana-docencia",
        nome: "A Humana Docência",
        categoria: "Missão Humanista",
        citacao: `A defesa de uma 'humana docência', de um trabalho de 'educar humanos por humanos para o bem da humanidade', justifica-se na perspectiva de libertar o futuro. A mediação emocional e intelectual presencial é a barreira inegociável contra a desumanização.`,
        paginas: "Páginas 22 e 24",
        provocacao: `De que maneira a incorporação irrestrita de Inteligências Artificiais e plataformas adaptativas pelas redes públicas básicas de ensino fragiliza as bases intersubjetivas e amorosas que constituem a relação pedagógica real?`,
      },
      {
        id: "transbordante",
        nome: "Escola Transbordante",
        categoria: "Limites da Instituição",
        citacao: `Não vale a pena alimentarmos ilusões, trazendo tudo para dentro da escola, uma 'escola transbordante', sem rumo e sem sentido. Ao sobrecarregarmos a escola com demandas de toda ordem social, descaracterizamos a sua missão fundamental de cultura e socialização.`,
        paginas: "Página 126",
        provocacao: `Que critérios epistemológicos e limites de atuação podem ser delimitados coletivamente para que a escola pública preserve a sua especificidade formativa democrática sem ignorar as demandas éticas de sua comunidade?`,
      },
      {
        id: "inducao",
        nome: "Indução Profissional (Mentoria)",
        categoria: "Desenvolvimento Docente",
        citacao: `Concentremo-nos nos primeiros anos de exercício docente, esse tempo entre dois, entre o fim da licenciatura e o princípio da profissão. É um período crucial no qual os novatos necessitam do acolhimento intergeracional de professores mentores estáveis.`,
        paginas: "Páginas 77, 81 e 82",
        provocacao: `Que arranjos curriculares de contratação e plano de carreira podem viabilizar que professores iniciantes dediquem tempo ao planejamento em parceria e à co-docência em vez de serem atirados ao isolamento de salas difíceis?`,
      },
      {
        id: "capilaridade",
        nome: "Capilaridade Educativa",
        categoria: "Territorialidade",
        citacao: `É preciso pensar o que designamos por capilaridade educativa, metáfora que procura traduzir uma disseminação da educação por diferentes espaços e tempos do território comum, rompendo com o isolamento do edifício escolar clássico.`,
        paginas: "Página 101",
        provocacao: `De que forma essa disseminação capilar da educação pela cidade pode ser operada sem enfraquecer o estatuto e a centralidade política da escola pública presencial física como lugar do comum?`,
      },
      {
        id: "pilares-democracia",
        nome: "Professores como Pilares da Democracia",
        categoria: "Política e Democracia",
        citacao: `O papel [dos professores] é primordial como pilares da democracia, numa educação baseada nos direitos humanos e nos deveres que esses direitos nos impõem.`,
        paginas: "Página 19",
        provocacao: `“A democracia deve renascer a cada geração, e esse trabalho é uma missão central dos professores”, para afirmar que a escola pública é uma instituição democrática antes de ser um serviço de instrução. Mas o que sustenta essa afirmação quando a própria escola é organizada de forma hierárquica, curricular e avaliativa por instâncias que os professores não controlam?`,
      },
      {
        id: "pedagogia-encontro",
        nome: "Pedagogia do Encontro",
        categoria: "Pedagogia",
        citacao: `Nada substitui um bom professor. Nada. Nada mesmo. Nada o substitui para apresentar o mundo, todos os mundos, aos mais novos. Nada o substitui para dar aos alunos a possibilidade de chegarem mais longe, aonde nunca chegariam sem o seu trabalho, sem a sua dedicação.`,
        paginas: "Página 43",
        provocacao: `Nóvoa afirma que a escola deve apresentar “a humanidade toda”, e não uma visão parcial, familiar, religiosa ou ideológica. Mas o encontro pedagógico sempre ocorre entre sujeitos situados: um professor com sua própria “cor”, história, cultura de classe; um aluno com a sua. A neutralidade do “encontro com todos os mundos” é possível, ou é, ela mesma, uma posição cultural particular que se universaliza?`,
      },
      {
        id: "inducao-jovens",
        nome: "Indução dos Jovens Professores",
        categoria: "Desenvolvimento Docente",
        citacao: `É nos diálogos e vínculos entre jovens professores e professores mais experientes que se define a possibilidade de novos processos e de novas práticas pedagógicas. [...] A profissão docente não terá futuro se não cuidar melhor dos seus professores mais jovens. Esse período entre dois, entre a formação e a profissão, é decisivo.`,
        paginas: "Página 81",
        provocacao: `Nóvoa identifica três silêncios que marcam o período de indução: o das universidades (que consideram sua missão encerrada com o diploma), o das políticas educativas (incapazes de organizar o acolhimento) e o da própria profissão docente (que pouco acompanha seus mais jovens). No Brasil, esses três silêncios se aprofundam em contextos de precarização, alta rotatividade e ausência de carreira estruturada, especialmente nas redes municipais periféricas.`,
      },
      {
        id: "racionalidade-neoliberal",
        nome: "Racionalidade Neoliberal",
        categoria: "Crítica ao Neoliberalismo",
        citacao: `Nos últimos anos, assistimos à proliferação de rankings de escolas, de exames padronizados e de formas de controle exterior que tendem a reduzir o professor ao papel de um mero técnico ou executor de decisões tomadas noutros locais.`,
        paginas: "Páginas 43 e 44",
        provocacao: `A organização do sistema educacional segundo lógicas de mercado: eficiência, mérito individual, gestão por resultados e competição entre escolas e alunos. Nóvoa critica diretamente essa racionalidade ao denunciar a proliferação de rankings, avaliações estandardizadas e a redução do professor a “executor de programas” definidos externamente. No Brasil, manifesta-se em reformas como a BNCC, o modelo de escolas charter e a lógica de bônus por desempenho.`,
      },
      {
        id: "contradicoes-neoliberal",
        nome: "Contradições do Neoliberalismo na Educação",
        categoria: "Crítica ao Neoliberalismo",
        citacao: `Nos últimos anos, a queixa mais ouvida dos professores é a burocracia, a imensidão de tarefas, tantas vezes inúteis, que infernizam o seu dia a dia. E têm razão. As possibilidades tecnológicas multiplicam infinitamente os impulsos burocráticos [...] que têm custos elevadíssimos para os burocratizados.`,
        paginas: "Páginas 47 e 57",
        provocacao: `Tensão estrutural entre o discurso de melhoria da qualidade educacional — prometida pelas reformas orientadas pelo mercado — e os resultados reais, que incluem aprofundamento das desigualdades, precarização docente e exclusão dos mais vulneráveis. As políticas que afirmam “libertar” a educação frequentemente aprisionam os professores em burocracia e métricas. A contradição expressa no Brasil tem intensidade particular devido à herança colonial e desigualdades históricas.`,
      },
      {
        id: "desigualdades-educacionais",
        nome: "Desigualdades Educacionais",
        categoria: "Finalidade Social",
        citacao: `Quando se compara a escolha da escola à escolha das malas, dos sapatos, do jornal, do carro ou da casa, perde-se todo o sentido, social e cultural, individual e coletivo, do ato de educar. A escola pública cria um público, forma públicos, cidadãos.`,
        paginas: "Páginas 16, 57 e 58",
        provocacao: `Diferenças sistemáticas no acesso, permanência e qualidade associadas a classe social, raça, território e geração. Para Nóvoa, a educação reproduz estratificações se não for um lugar de encontro. No Brasil, essas desigualdades são fruto de escolhas históricas acumuladas que a racionalidade neoliberal tende a naturalizar como mérito individual.`,
      },
      {
        id: "especificidade-brasileira",
        nome: "Especificidade Brasileira",
        categoria: "Brasil e Globalização",
        citacao: `Por outro lado, graças a uma expansão sem precedentes de uma “indústria global da educação” [...], fortemente assente no digital, com ofertas privadas, mas interessada sobretudo na produção de conteúdos, materiais e instrumentos de gestão para a educação pública.`,
        paginas: "Página 95",
        provocacao: `Condição pela qual o Brasil exemplifica tendências mundiais da educação — como a pressão neoliberal, a crise de valorização docente e a desigualdade estrutural — mas com determinantes históricos próprios: colonialismo, escravidão, concentração fundiária e regionalismo. Nóvoa não trata do Brasil diretamente, mas seu diagnóstico de enfraquecimento profissional e mercantilização do ensino aplica-se aqui com particular intensidade.`,
      },
      {
        id: "consumismo-pedagogico",
        nome: "Consumismo Pedagógico",
        categoria: "Crítica ao Neoliberalismo",
        citacao: `Com discursos atraentes, inovadores, empreendedores, criativos, negam a herança histórica da escola e procuram fomentar uma educação esvaziada das dimensões públicas e comuns, pautada pelo ritmo do “consumismo pedagógico” e do “solucionismo tecnológico”.`,
        paginas: "Página 95",
        provocacao: `Como a mercantilização do ensino reduz o ato educativo a um produto de consumo individualizável e adaptável às demandas imediatas de mercado, desmantelando a função pública, civilizatória e socializadora que define a instituição escolar?`,
      },
      {
        id: "solucionismo-tecnologico",
        nome: "Solucionismo Tecnológico",
        categoria: "Crítica ao Neoliberalismo",
        citacao: `As questões digitais, enquanto fatores de ligação, mas também de divisão, com as ilusões de um “solucionismo tecnológico” e os perigos de uma inteligência artificial sem limites.`,
        paginas: "Páginas 16 e 95",
        provocacao: `De que maneira a pressuposição de que a tecnologia digital e o ensino remoto ou híbrido podem resolver os problemas de qualidade e cobertura de ensino mascara o desinvestimento real na infraestrutura escolar pública e na valorização da humana docência?`,
      },
      {
        id: "industria-global",
        nome: "Indústria Global da Educação",
        categoria: "Crítica ao Neoliberalismo",
        citacao: `Caso contrário, deixaremos as dinâmicas de transformação nas mãos de interesses privados, da grande indústria global da educação, o que pode mesmo pôr em risco a renovação da educação como bem público e comum.`,
        paginas: "Páginas 57 e 95",
        provocacao: `Quais as consequências éticas e políticas quando a produção de conteúdo curricular, plataformas digitais e sistemas de avaliação padronizada é terceirizada para corporações multinacionais de tecnologia que operam a educação sob a lógica do lucro?`,
      },
    ];

    const renderizarBotoes = (filtro = "") => {
      if (!gridBotoes) return;
      gridBotoes.innerHTML = "";

      const filtrados = conceitos.filter(
        (c) =>
          c.nome.toLowerCase().includes(filtro.toLowerCase()) ||
          c.categoria.toLowerCase().includes(filtro.toLowerCase()),
      );

      if (filtrados.length === 0) {
        gridBotoes.innerHTML =
          "<p style='color: var(--cor-link); font-style: italic; padding: 1rem;'>Nenhum conceito teórico encontrado...</p>";
        return;
      }

      filtrados.forEach((conceito, index) => {
        const botao = document.createElement("button");
        botao.className = "botao-conceito";
        botao.setAttribute("data-id", conceito.id);
        botao.innerText = conceito.nome;

        if (index === 0 && !filtro) {
          botao.classList.add("selecionado");
          exibirDetalhes(conceito);
        }

        botao.addEventListener("click", () => {
          document
            .querySelectorAll(".botao-conceito")
            .forEach((b) => b.classList.remove("selecionado"));
          botao.classList.add("selecionado");
          exibirDetalhes(conceito);
        });

        gridBotoes.appendChild(botao);
      });
    };

    const exibirDetalhes = (conceito) => {
      if (!cartaoDetalhe) return;

      cartaoDetalhe.classList.add("carregando");

      setTimeout(() => {
        cartaoDetalhe.innerHTML = `
          <span class="categoria-conceito">${conceito.categoria}</span>
          <h3>${conceito.nome}</h3>
          <p style="font-size: 0.85rem; color: #888; font-family: monospace; margin-bottom: 1rem;">
            Citação Real: ${conceito.paginas}
          </p>
          <div class="citacao-livro">
            "${conceito.citacao}"
          </div>
          <div class="provocacao-doutoral">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle;">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              Provocação Epistemológica
            </h4>
            <p>${conceito.provocacao}</p>
          </div>
        `;
        cartaoDetalhe.classList.remove("carregando");
      }, 150);
    };

    if (inputBusca) {
      inputBusca.addEventListener("input", (e) => {
        renderizarBotoes(e.target.value);
      });
    }

    renderizarBotoes();
  }

  // ==================================================
  // 4. DIÁLOGOS: ARENA DIALÓGICA & LENTES CRÍTICAS (3 CARD DEBATES PROFUNDOS)
  // ==================================================
  const arenaDialogica = document.querySelector(".arena-dialogica");

  if (arenaDialogica) {
    const debates = {
      tese1: {
        sociologia: {
          texto:
            "A defesa da escola física como o 'lugar público do comum' e 'espaço de relação e convivialidade' opõe-se diretamente à tendência de atomização social neoliberal. Alain Touraine, referenciado por Nóvoa, conceitua a escola como o 'espaço do sujeito e da comunicação intercultural' (p. 19). Ela retira a criança do casulo privado doméstico (onde ela só convive com iguais) e a lança na esfera pública (onde ela é confrontada pela diferença). Perder esse espaço físico em nome de plataformas virtuais é dissolver o próprio tecido da democracia representativa.",
          autor:
            "Lente da Sociologia da Educação (A Perspectiva da Socialização Pública)",
        },
        politicas: {
          texto:
            "Ao denunciar o confinamento doméstico e a 'escola virtual', Nóvoa atinge o cerne dos movimentos neoconservadores de 'homeschooling' e das políticas neoliberais de privatização. Diane Ravitch (2020), amplamente citada por Nóvoa na página 108, alerta para a ofensiva de 'bilionários imprudentes' que utilizam a retórica da inovação digital para desmantelar a escola pública, substituindo prédios escolares por vouchers de acesso a plataformas edtech corporativas, transformando o direito público constitucional em um bem de consumo individual de mercado.",
          autor: "Lente das Políticas Públicas e Economia Política",
        },
        cotidiano: {
          texto:
            "No cotidiano, a mediação é a marca da pedagogia. Como argumenta Bernard Charlot (p. 100), a educação não se dá por mera 'imersão no social'. Exige uma mediação intencional do professor que apresenta o mundo à criança. A escola física permite a 'desaceleração' do tempo social veloz. Ela constitui-se como um tempo lento de estudo e escuta (p. 101, 104), proporcionando o 'encontro' entre o saber e o sentir, algo impossível de ser substituído por um chip ou por uma trilha automatizada algorítmica de aprendizagem.",
          autor: "Lente das Práticas Pedagógicas e do Cotidiano Escolar",
        },
      },
      tese2: {
        sociologia: {
          texto:
            "A formação profissional no 'terceiro espaço' ataca as divisões estruturais de classe e poder entre o trabalho intelectual (a teoria produzida nas torres de marfim da universidade) e o trabalho prático (a execução cotidiana no chão da escola básica). Nóvoa baseia-se em Richard Sennett e na ideia de que a cooperação e a colegialidade são práticas sociais complexas que precisam ser aprendidas e exercitadas no interior de uma nova arrumação institucional horizontalizada.",
          autor: "Lente da Sociologia do Trabalho Docente",
        },
        politicas: {
          texto:
            "A proposta de um 'terceiro lugar' institucional colide diretamente com a tendência de 'desprofissionalização' promovida pelo praticismo ingênuo e tecnocrático. Ken Zeichner (p. 62, 74) denuncia as políticas curriculares de formação que esvaziam a teoria e mandam os licenciandos para treinamento puramente prático nas escolas de forma rápida e instrumentalizada. Sem a formação científica universitária profunda e sem uma casa comum que dê suporte horizontal à indução profissional, os novos professores são lançados ao isolamento burocrático.",
          autor: "Lente das Políticas de Formação de Professores",
        },
        cotidiano: {
          texto:
            "No cotidiano, a formação continuada baseada em 'catálogos de cursos edtech' falhou miseravelmente. Gilles Ferry (p. 69) defende que o saber docente se legitima na reflexão conjunta sobre as situações educativas cotidianas singulares, contingentes e imprevisíveis. É no dia a dia, por meio do planejamento em parceria (co-docência), da escrita coletiva e da partilha de reflexões que o professor constrói sua 'pele profissional' (p. 91). A universidade deve apoiar essa reflexão interna e não impor receitas externas.",
          autor: "Lente da Didática e Formação de Professores no Cotidiano",
        },
      },
      tese3: {
        sociologia: {
          texto:
            "A escrita do professor é o mecanismo de inserção da categoria docente no debate social amplo. Quando os professores abdicam da escrita pública de suas reflexões e práticas, eles se tornam 'invisíveis' (p. 71, 76) e abrem espaço para que técnicos governamentais, economistas e especialistas corporativos de institutos privados prescrevam o que deve ser ensinado. O ato de escrever e publicar confere poder político de autoria aos profissionais da escola básica, forçando as políticas curriculares a se curvarem à realidade das práticas.",
          autor: "Lente da Sociologia da Ação Coletiva e Linguagem",
        },
        politicas: {
          texto:
            "A redução da escola pública à 'indústria global das medidas' (Biesta, p. 108) impôs uma racionalidade técnica instrumentalizante, regulada por testes padronizados (como o SAEB e as avaliações globais do PISA). O conhecimento profissional de Nóvoa, por ser contingente e coletivo, exige que as políticas de avaliação educacional sejam reconfiguradas de forma formativa, devolvendo aos professores o poder de deliberação sobre o currículo e os rumos da escola pública.",
          autor: "Lente de Políticas de Avaliação Educacional e Currículo",
        },
        cotidiano: {
          texto:
            "A escrita no cotidiano escolar rompe o retraimento docente. Como aponta Adorno (p. 56), a finalidade da educação é a produção de uma 'consciência verdadeira' e emancipação. No cotidiano, a escrita ajuda o professor a sistematizar o conhecimento contingente de sua docência, transformando o isolamento da prática individual em uma 'pública ação' de resistência pedagógica coletiva e compartilhamento de saberes emancipatórios.",
          autor: "Lente do Desenvolvimento Curricular Vivido",
        },
      },
    };

    document.querySelectorAll(".card-tese").forEach((card) => {
      const teseId = card.getAttribute("data-tese");
      const botoes = card.querySelectorAll(".botao-lente");
      const corpoDebate = card.querySelector(".corpo-debate");

      if (!teseId || !debates[teseId] || !corpoDebate) return;

      botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
          botoes.forEach((b) => b.classList.remove("ativa"));
          botao.classList.add("ativa");

          const lente = botao.getAttribute("data-lente");
          const dadosLente = debates[teseId][lente];

          if (dadosLente) {
            corpoDebate.innerHTML = `
              <div class="resposta-lente">
                <blockquote style="font-size: 1.15rem; line-height: 1.6; margin-bottom: 1.5rem; text-align: justify;">
                  "${dadosLente.texto}"
                </blockquote>
                <cite class="autor-critico" style="border-top: 1px dashed var(--cor-grade); padding-top: 0.8rem; font-style: normal;">
                  ${dadosLente.autor}
                </cite>
              </div>
            `;
          }
        });
      });

      const primeiroBotao = botoes[0];
      if (primeiroBotao) primeiroBotao.click();
    });
  }

  // ==================================================
  // 5. RUMOS: DASHBOARD DE AUTODIAGNÓSTICO ESCOLAR (6 AXES DO LIVRO)
  // ==================================================
  const painelRumos = document.querySelector(".painel-rumos");

  if (painelRumos) {
    const sliders = painelRumos.querySelectorAll(
      ".item-slider input[type='range']",
    );
    const mediaDisplay = painelRumos.querySelector(".numero-grande");
    const diagnosticoTexto = painelRumos.querySelector(
      ".diagnostico-feedback p",
    );
    const diagnosticoTitulo = painelRumos.querySelector(
      ".diagnostico-feedback h3",
    );

    const retornosDiagnostico = [
      {
        titulo: "Modelo Escolar Celular Rígido",
        texto:
          "Sua escola opera sob a forte influência da normalização e padronização do século XIX. A rigidez dos horários fragmentados (aulas celulares estanques de uma hora), o isolamento individual dos professores em salas de aula fachadas e o foco exclusivo no currículo centrado na lição passiva impedem o desenvolvimento do conhecimento profissional coletivo. De acordo com António Nóvoa, esta estrutura está em desagregação. É urgente criar 'terceiros espaços' internos para que os docentes iniciem práticas experimentais coletivas e comecem a desmoronar as paredes físicas e curriculares do isolamento.",
      },
      {
        titulo: "Estrutura Escolar em Transição",
        texto:
          "Sua escola apresenta importantes iniciativas de mudança e rupturas, como a abertura de espaços temáticos, projetos interdisciplinares periódicos ou tentativas de planejamento compartilhado. No entanto, as forças inerciais da administração escolar (burocracia, controle de carga horária fatiada e ranqueamento por testes de medidas padronizadas) ainda limitam o avanço sistêmico rumo a uma verdadeira metamorfose. O caminho sugerido por Nóvoa é fortalecer as redes internas de colegialidade, garantir a autoria pedagógica docente por meio da escrita de suas práticas e resistir ao gerencialismo burocrático.",
      },
      {
        titulo: "Ecologia de Aprendizagem Emancipatória",
        texto:
          "Excepcional! A instituição apresenta características marcantes da escola como 'lugar comum' e ecologia aberta. Existe uma cultura sólida de co-docência (professores trabalhando de forma coletiva e intergeracional), os espaços escolares são fluidos e adaptáveis, os tempos de estudo são integrados e contínuos, e a agência dos alunos é o motor central do currículo de linguagens. A escola age como instituição democrática de deliberação. O desafio, no nível de pós-graduação, é transformar essa prática escolar em 'pública ação' documentada, publicando essas experiências para inspirar outras redes de ensino.",
      },
    ];

    const calcularDiagnostico = (evento) => {
      let soma = 0;
      sliders.forEach((slider) => {
        const val = parseInt(slider.value);
        soma += val;

        const itemSlider = slider.closest(".item-slider");
        if (itemSlider) {
          const displayValor = itemSlider.querySelector(".valor-slider");
          if (displayValor) {
            let estagioIndividual = "Experimentação";
            if (val <= 3) estagioIndividual = "Sensibilização";
            else if (val >= 8) estagioIndividual = "Consolidação";
            displayValor.innerText = estagioIndividual;
          }
        }
      });

      const media = Math.round((soma / sliders.length) * 10) / 10;

      let estagioGlobal = "Transição";
      let diagnosticoIndex = 1;
      if (media < 4.0) {
        estagioGlobal = "Inicial";
        diagnosticoIndex = 0;
      } else if (media >= 8.0) {
        estagioGlobal = "Consolidada";
        diagnosticoIndex = 2;
      }

      // Disparar animação de pulso reativa ao interagir com o slider
      if (evento) {
        const radialMedia = painelRumos.querySelector(".radial-media");
        if (radialMedia) {
          radialMedia.classList.remove("pulso-ativo");
          void radialMedia.offsetWidth; // Forçar reflow para reiniciar animação
          radialMedia.classList.add("pulso-ativo");
        }
      }

      if (mediaDisplay) {
        mediaDisplay.innerText = estagioGlobal;
      }

      if (diagnosticoTitulo && diagnosticoTexto) {
        diagnosticoTitulo.innerText =
          retornosDiagnostico[diagnosticoIndex].titulo;
        diagnosticoTexto.innerText =
          retornosDiagnostico[diagnosticoIndex].texto;
      }
    };
    sliders.forEach((slider) => {
      slider.addEventListener("input", (e) => calcularDiagnostico(e));
    });

    calcularDiagnostico();
  }

  // ==================================================
  // 6. GUIA DE LEITURA AVANÇADO POR CAPÍTULOS (CHAVES DE LEITURA)
  // ==================================================
  const seletorCapitulos = document.getElementById("seletor-capitulos");
  const painelDetalheCapitulo = document.getElementById(
    "painel-detalhe-capitulo",
  );

  if (seletorCapitulos && painelDetalheCapitulo) {
    const capitulos = [
      {
        numero: "Capítulo 01",
        titulo: "Os professores e os futuros da educação",
        lema: "Dia Mundial 2013 // Professores: pilares da democracia",
        foco: "Reflexão crítica sobre o Relatório UNESCO (2021) 'Reimaginar juntos os nossos futuros: um novo contrato social da educação'. Nóvoa argumenta que a transição civilizatória atual exige um novo posicionamento ético, contrapondo-se ao reducionismo de mercado e à privatização corporativa que tratam a educação como um bem de consumo individual. Ele advoga a preservação da escola como o 'espaço público do comum' e defende os professores como agentes intelectuais e pilares indispensáveis da democracia deliberativa.",
        citacao:
          "Vale a pena transcrever alguns excertos do resumo que abre o relatório: “A nossa humanidade e o planeta Terra estão ameaçados. A pandemia serviu para revelar a nossa fragilidade e a nossa interdependência. Agora, são necessárias ações urgentes, realizadas em conjunto, para alterar o rumo e reimaginar os nossos futuros. Este Relatório reconhece o poder da educação para realizar mudanças profundas. […] Para isso, é necessário um novo contrato social da educação, que possa reparar as injustiças enquanto transforma o futuro. Este novo contrato social deve basear-se nos direitos humanos e em princípios de não discriminação, justiça social, respeito pela vida, dignidade humana e diversidade cultural. Deve integrar uma ética de cuidado, reciprocidade e solidariedade. Deve fortalecer a educação como um esforço público e um bem comum” (UNESCO, 2021, p. i).",
        comentario:
          "A crítica de Nóvoa direciona-se às tendências globais de desmantelamento da esfera pública escolar. Sob o manto do 'solucionismo tecnológico' acelerado pela pandemia, forças corporativas do capitalismo de plataforma visam à fragmentação do espaço-tempo da escola presencial. Ao dialogar com o relatório da UNESCO, Nóvoa salienta que um contrato social autêntico não se constrói na atomização dos indivíduos em suas telas domésticas, mas na sustentação coletiva de uma ecologia de aprendizagem onde o outro é sujeito ativo da formação.",
        paginas:
          "Páginas 14 e 15 (Texto original) e página 9 (Abertura do capítulo)",
        provocacao:
          "Como podemos, nos termos de um novo contrato social da educação, desenhar políticas públicas curriculares que se valham da inclusão digital sem subordinar a autonomia pedagógica dos professores aos interesses e algoritmos proprietários das EdTechs globais?",
        autores:
          "Edgar Morin, Audrey Azoulay, Gert Biesta, John Dewey, Hannah Arendt",
      },
      {
        numero: "Capítulo 02",
        titulo: "Professores: alargar as possibilidades de futuro",
        lema: "Dia Mundial 2014 // Investir no futuro, investir nos professores",
        foco: "Desenvolvimento da atitude proativa perante as incertezas civilizatórias. Apoiando-se nas teses de Keri Facer e no pensamento de Paul Valéry, Nóvoa desafia a postura de mera 'preparação defensiva' ou adaptação instrumental às demandas de mercado. Ele postula que a escola deve atuar ativamente na construção e escolha dos caminhos éticos desejáveis de futuro, operando experimentações no presente. O investimento nos professores representa o pilar fundamental para garantir essa capacidade coletiva de imaginação utópica.",
        citacao:
          "Num tempo de grandes mudanças, muitos alimentam visões “fantásticas” de um futuro sem escolas e sem professores. Seria um futuro sem futuro, pois a educação implica a existência de um trabalho em comum num espaço público, implica uma relação humana marcada pelo imprevisto, pelas vivências e pelas emoções, implica um encontro entre professores e alunos mediado pelo conhecimento e pela cultura. Perder essa presença seria diminuir as possibilidades da educação. As tecnologias fazem parte da nossa vida, do dia a dia das nossas crianças, mas a educação dá-se sempre num contexto de relação humana. A educação não é apenas um ato individual, é uma dinâmica de aprendizagem com os outros. Ninguém se educa sozinho. É impossível. A relação humana é tão importante que não consigo imaginar que a educação possa ser feita de forma totalmente virtual, a distância. Os dispositivos digitais que temos ao nosso alcance são úteis. Ninguém deve recusá-los. Mas dizer que a educação vai passar a ser feita unicamente a distância seria perder a dimensão da relação humana, do imprescindível encontro humano.",
        comentario:
          "Nóvoa desconstrói as narrativas neoliberais do fim da escola física e da obsolescência dos professores. O autor reitera que 'ninguém se educa sozinho' (p. 25); a educação exige copresença física, alteridade e empatia emocional. O ato de conhecer é inseparável do ato de sentir. A tecnologia digital deve servir como ferramenta de mediação cultural, jamais como substituto da densa relação intersubjetiva que constitui o cerne pedagógico da humana docência.",
        paginas: "Páginas 24 e 25",
        provocacao:
          "De que modo a lógica pragmática do produtivismo docente e da performatividade (ranqueamento em testes padronizados) aniquila a capacidade dos professores de experimentar novos arranjos organizacionais e exercitar a imaginação crítica nas salas de aula?",
        autores: "Paul Valéry, Keri Facer, Richard Sennett, Yara Alvim",
      },
      {
        numero: "Capítulo 03",
        titulo: "A educação e os nossos futuros comuns",
        lema: "Dia Mundial 2015 // Reforçar os professores, construir sociedades sustentáveis",
        foco: "Discussão aprofundada da Agenda 2030 (ODS 4) e do programa multilateral 'A nossa agenda comum' das Nações Unidas, articulado com a cúpula 'Transformando a Educação' (2022). Nóvoa problematiza a finalidade social da educação, sustentando que ensinar não é meramente transferir saberes fragmentados instrumentais, mas coparticipar da co-construção de um sentido de humanidade sustentável. Ele recupera a reflexão de Ivan Illich sobre 'convivialidade' para propor uma escola que funcione como instrumento comum de convivência democrática.",
        citacao:
          "Este comum não remete para uma 'comunidade de identidade', mas para uma 'comunidade de trabalho', isto é, para aquilo que fazemos uns com os outros, independentemente de quem somos ou de onde vimos. Assenta num princípio de comunicação, de encontro, não entre semelhantes, mas entre diferentes. A diversidade humana é o tesouro da unidade humana e a unidade é o tesouro da diversidade... É este o sentido do trabalho em comum nas escolas. A educação não é só conectividade, é também coletividade, exercício que junta pessoas diferentes num trabalho em comum.",
        comentario:
          "A partir da distinção entre 'identidade' e 'trabalho em comum', Nóvoa desenha a escola pública como o principal espaço profanador (no sentido de Agamben) de conhecimentos segregados. O comum se constrói no encontro com o diferente e na cooperação cotidiana ativa. Em tempos de bolhas algorítmicas de redes sociais e de isolamento identitário, a escola se ergue como o único espaço de socialização forçada com a alteridade, onde a cooperação horizontal é exercitada.",
        paginas: "Páginas 31, 32 e 38",
        provocacao:
          "Como a escola pública pode resistir à fragmentação social das bolhas de internet e à privatização curricular, erguendo-se como espaço comum de encontro de diferenças sem, no entanto, apagar as lutas por reconhecimento e as identidades singulares dos grupos marginalizados?",
        autores: "Ivan Illich, Giorgio Agamben, Edgar Morin, Gert Biesta",
      },
      {
        numero: "Capítulo 04",
        titulo: "Nada substitui um bom professor",
        lema: "Dia Mundial 2016 // Valorizar os professores, melhorar o seu estatuto",
        foco: "Análise histórica e jurídica do estatuto docente a partir da recomendação OIT/UNESCO de 1966. Nóvoa rebate frontalmente as tendências de desprofissionalização que caracterizam o professor como um mero 'facilitador de aprendizagens' ou aplicador burocrático de apostilas. Defende a centralidade da autonomia pedagógica e intelectual da profissão. Propõe a constituição do 'Terceiro Lugar' institucional como articulação horizontal e recíproca entre a universidade e a escola básica.",
        citacao:
          "A ideia de “terceiro lugar” ou de “terceiro espaço” explica bem a necessidade de juntar universidades e escolas, com base numa “terceira realidade”, sem cair nos discursos dicotômicos habituais, valorizando ora a universidade como lugar da teoria, ora a escola como lugar da prática. As dicotomias fecham o pensamento e impedem a construção de novas ideias e propostas. Nada se faz numa lógica binária. A saída está sempre num “terceiro lugar” que é muito mais do que a simples soma dos dois lugares anteriores. E nesse lugar tem de haver profissão, e escolas, e professores, e cultura profissional.",
        comentario:
          "Nóvoa se choca com o historicismo acadêmico que coloca a universidade no pedestal produtor da teoria e a escola básica no patamar subalterno da aplicação prática. O 'Terceiro Espaço' institucional é um constructo epistemológico-político que demanda novos arranjos institucionais onde docentes da escola básica e pesquisadores universitários partilham a governança e o desenvolvimento de saberes pedagógicos contingentes.",
        paginas: "Páginas 46 e 47",
        provocacao:
          "Quais são as relações de poder e as barreiras burocrático-corporativas dentro da academia que impedem o reconhecimento dos saberes docentes construídos nas escolas públicas como conhecimentos científicos legítimos e válidos nas pós-graduações stricto sensu?",
        autores: "Donald Schön, Ken Zeichner, João dos Santos, Gilles Ferry",
      },
      {
        numero: "Capítulo 05",
        titulo: "A liberdade como princípio e como fim",
        lema: "Dia Mundial 2017 // Ensinar em liberdade, fortalecer os professores",
        foco: "Desenvolvimento do conceito de liberdade sob o prisma de uma educação emancipadora e democrática. Nóvoa rompe com a concepção abstrata, atomizada e liberal de liberdade associada à 'livre escolha de escola' pelas famílias (voucherização), redefinindo a liberdade como compromisso coletivo. Estrutura a liberdade escolar em três dimensões substantivas: a igualdade, a diversidade e a aprendizagem; e três liberdades de ação profissional: a participação, a autonomia e a criação.",
        citacao:
          "O propósito maior da educação é aumentar as possibilidades de cada um, para podermos ser aquilo que quisermos ser. Cita-se muitas vezes, erradamente, a célebre frase de Píndaro: “Torna-te naquilo que és”. A frase original é diferente: “Torna-te naquilo que aprendeste a ser” (Quérini, 2016). A melhor educação é exatamente isto: a liberdade – o imperativo – de pensar, imaginar, desafiar, mudar. Inovar com uma corrente profunda de humanidade, é para isso que servem as universidades. O nosso propósito não é apenas criar empregos melhores, mas criar vidas melhores – promover o pensamento criativo, que distinguimos da mera informação ou do conhecimento recebido, pôr em causa certezas, abrir as nossas mentes e expandir o nosso sentido partilhado de possibilidades.",
        comentario:
          "Nóvoa apóia-se em Michel Serres e no seu clássico 'O Terceiro Instruído' (1991) para conceber a aprendizagem como uma jornada de descolamento (viagem) da nossa margem original para o encontro da outra margem, na qual o sujeito se transforma pelo contato com a cultura. Essa liberdade não é ausência de regulação, mas a agência docente e discente na cocriação de caminhos curriculares grávidos de sentido ético.",
        paginas: "Páginas 53 e 55",
        provocacao:
          "Considerando a 'liberdade como imperativo de pensar e mudar', como os professores da escola básica podem resistir aos movimentos de perseguição ideológica de caráter neoconservador (como o 'Escola sem Partido') que pretendem domesticar a docência?",
        autores:
          "Michel Serres, Theodor Adorno, Hannah Arendt, Paulo Freire, Píndaro",
      },
      {
        numero: "Capítulo 06",
        titulo:
          "O conhecimento profissional docente: consequências para a formação",
        lema: "Dia Mundial 2018 // O direito a um professor qualificado",
        foco: "Eixo teórico e metodológico central da epistemologia de Nóvoa. O autor conceitua o saber do professor como um 'terceiro gênero de conhecimento' que difere radicalmente do conhecimento puramente acadêmico das disciplinas científicas e das teorias psicopedagógicas. Esse conhecimento profissional é definido por três características intrínsecas: contingente (gerado na imprevisibilidade e singularidade do cotidiano pedagógico), coletivo (construído no interior de uma comunidade profissional solidária) e público (escrito, compartilhado e publicado).",
        citacao:
          "A cada ano, em todo o mundo, publicam-se milhares de títulos sobre a profissão docente e a formação de professores. Essa literatura prolixa tem uma falha maior: reflete insuficientemente sobre os professores como detentores de um conhecimento próprio, como produtores de um conhecimento profissional docente. [...] Se desconsiderarmos a existência desse conhecimento, podemos manter os atuais modelos de formação de professores, com pequenos retoques. Mas, se afirmarmos o conhecimento profissional docente como a base do trabalho dos professores, e da sua identidade, impõem-se mudanças profundas na arquitetura e nos processos de formação de professores. A terceira característica do conhecimento profissional docente é a sua natureza pública, o que implica um processo de escrita e de publicação. Publicação? Pública ação.",
        comentario:
          "Este capítulo convoca a uma revolução copernicana na formação docente. Para legitimar o conhecimento contingente, coletivo e público, Nóvoa advoga a urgência da escrita pedagógica. Escrever e publicar é um ato político de autoria, que ele nomeia como 'pública ação'. Sem a documentação reflexiva e a escrita sistemática de suas práticas, o professor permanece silenciado pelas burocracias escolares e subordinado às receitas impostas por especialistas corporativos externos.",
        paginas: "Páginas 57, 58 e 71-72",
        provocacao:
          "Em que medida o produtivismo exigido pela pós-graduação acadêmica e a regulação ministerial baseada em competências instrumentais (como as impostas pela BNC-Formação no Brasil) boicotam a criação de comunidades coletivas de escrita e autoria pedagógica no interior das escolas públicas?",
        autores:
          "Lee Shulman, Gilles Ferry, Richard Sennett, Ken Zeichner, Donald Schön",
      },
      {
        numero: "Capítulo 07",
        titulo: "Jovens professores: o futuro da profissão",
        lema: "Dia Mundial 2019 // Jovens professores: o futuro da profissão",
        foco: "Diagnóstico urgente da crise de atratividade da carreira docente e do abandono precoce dos jovens licenciados. Nóvoa analisa o período crucial da 'indução profissional', definindo-o como um 'tempo entre dois' (a formação inicial universitária e o exercício pleno da profissão). Denuncia as estratégias de caráter meramente probatório, individualista e burocrático, argumentando que a sobrevivência da profissão reside no acolhimento horizontal dos docentes iniciantes por meio da cooperação intergeracional estruturada em rede.",
        citacao:
          "Adquiri a consciência clara de que os primeiros anos como professores iniciantes ou principiantes são os mais decisivos na vida profissional docente, pois marcam, de muitas maneiras, a nossa relação com os alunos, com os colegas e com a profissão. É o tempo mais importante na maneira como nos tornamos professores, na construção da nossa identidade profissional. Mas é também um tempo decisivo para a renovação da profissão. É nos diálogos e vínculos entre jovens professores e professores mais experientes que se define a possibilidade de novos processos e de novas práticas pedagógicas. A profissão docente não terá futuro se não cuidar melhor dos seus professores mais jovens. Esse período entre dois, entre a formação e a profissão, é decisivo.",
        comentario:
          "A indução profissional não deve ser um 'rito de passagem' solitário e excludente onde o professor iniciante assume as turmas mais difíceis e as maiores cargas administrativas sem qualquer apoio. Nóvoa, ancorado em Huberman, defende a criação de arranjos de mentoria e co-docência sistemática na escola. O acolhimento coletivo protege o jovem de suas angústias e, simultaneamente, oxigena as práticas dos professores experientes através do diálogo horizontal com as novas perspectivas trazidas da universidade.",
        paginas: "Páginas 77, 81 e 82",
        provocacao:
          "Como as redes estaduais e municipais de ensino básico podem redesenhar suas políticas de carreira de modo a reduzir a carga horária de regência direta de professores novatos, redirecionando esse tempo para o planejamento conjunto com professores mentores estáveis?",
        autores:
          "Michael Huberman, Ken Zeichner, Gilles Ferry, Richard Sennett",
      },
      {
        numero: "Capítulo 08",
        titulo: "Os professores depois da pandemia: a reinvenção do futuro",
        lema: "Dia Mundial 2020 // Professores: liderar em tempos de crise",
        foco: "Análise reconstrutiva pós-Covid-19. Nóvoa refuta categoricamente as 'três ilusões tecnológicas' consolidadas no auge do confinamento sanitário: a ilusão de que a aprendizagem ocorre naturalmente em qualquer ambiente virtualizado, a ilusão de que a escola física será gradualmente substituída pela 'escola virtual', e a ilusão de que a tecnologia de ponta substitui a relação mediadora pedagógica humana. Defende a escola como a 'ecologia da relação' presencial incondicional e os professores como líderes da reconstrução pública.",
        citacao:
          "Com a pandemia, terminou o longo século escolar, que começou na segunda metade do século XIX. A escola, tal como a conhecíamos, acabou. Começa, agora, uma outra escola... Desde o início do século XXI, vêm-se reforçando as tendências de crítica à escola, sobretudo à escola pública e aos professores. Por um lado, por meio de uma dinâmica crescente de retraimento da educação em espaços domésticos, protegidos... Por outro lado, graças a uma expansão sem precedentes de uma “indústria global da educação” (Verger, Lubienski, & Steiner-Khamsi, 2016), fortemente assente no digital, com ofertas privadas, mas interessada sobretudo na produção de conteúdos, materiais e instrumentos de gestão para a educação pública. Com discursos atraentes, inovadores, empreendedores, criativos, negam a herança histórica da escola e procuram fomentar uma educação esvaziada das dimensões públicas e comuns, pautada pelo ritmo do “consumismo pedagógico” e do “solucionismo tecnológico”.",
        comentario:
          "Nóvoa invoca Pierre Furter e o conceito de 'esperança sem otimismo e sem ilusão' (1966) para encarar a ruína do modelo oitocentista clássico. A desagregação da forma celular histórica abre uma brecha civilizatória: ou caímos nas garras da privatização das plataformas corporativas de EdTech que individualizam e mercantilizam o ensino, ou lideramos ativamente a metamorfose da escola como um lugar de convivialidade democrática e capilaridade educativa territorial.",
        paginas: "Páginas 91, 95 e 96",
        provocacao:
          "Quais os riscos éticos e políticos decorrentes da legitimação governamental de plataformas automatizadas de Inteligência Artificial para a correção de redações e prescrição de roteiros de estudo individualizados nas redes de ensino básico público?",
        autores:
          "Pierre Furter, Bernard Charlot, Diane Ravitch, Gert Biesta, Alain Touraine",
      },
      {
        numero: "Capítulo 09",
        titulo: "E depois da pandemia? Recuperar ou transformar?",
        lema: "Dia Mundial 2021 // Os professores no centro da recuperação educacional",
        foco: "Problematização da escolha histórica imposta às redes de ensino no pós-pandemia: limitar-se a uma postura conservadora de 'recuperação burocrática' (tentando recompor lacunas curriculares sob a velha forma escolar do século XIX) ou assumir a audácia da 'metamorfose estrutural'. O autor propõe desestruturar sistematicamente a rigidez espaçotemporal celular da escola clássica, reorganizando as salas de aula em espaços dinâmicos de projetos colaborativos e flexibilizando os tempos estanques e fragmentados.",
        citacao:
          "A pandemia veio reforçar tendências que se vinham manifestando nas últimas décadas, apontando a “morte da escola” e a sua substituição por espaços familiares e comunitários com forte acesso às tecnologias digitais... Por um lado, um conjunto díspar de referências à transição digital, à inteligência artificial ou às “máquinas de ensino”, que apelam a novas formas de aprendizagem cada vez mais “personalizadas”. Um autor como Laurent Alexandre acredita que o futuro passa por uma cada vez maior “individualização do ensino por meio de uma utilização crescente das tecnologias digitais ampliadas pela inteligência artificial” (2019, p. 203). Por outro lado, um conjunto de autores e de cientistas que, nas últimas décadas, têm promovido as chamadas “ciências da aprendizagem” (learning sciences). Os estudos sobre o cérebro e as aprendizagens constituem um poderoso universo simbólico, reforçando a ideia de que é possível encontrar uma resposta personalizada para cada criança e que essa resposta pode ser dada num espaço doméstico ou familiar... Porém, seria trágico que essas práticas se perpetuassem no tempo, pois a educação exige uma forte relação humana e não se faz em contextos de isolamento e de “distanciamento social”.",
        comentario:
          "Nóvoa estabelece um duro embate com as chamadas 'learning sciences' (ciências do aprendizado individualizado de base neurocognitiva), que advogam que a escola física é dispensável e que algoritmos personalizados podem instruir o aluno isolado no lar. Para o autor, a escola pública é uma instituição insubstituível porque sua finalidade primordial não é puramente cognitiva, mas sim a socialização intercultural democrática, o ato de viver coletivamente com estranhos diferentes.",
        paginas: "Páginas 109, 115 e 117",
        provocacao:
          "De que modo a imposição de avaliações em larga escala reguladas por indicadores gerenciais de metas quantitativas (SAEB) atua como força conservadora e inercial que sabota tentativas inovadoras de romper com a organização escolar em salas de aula e tempos lineares estanques?",
        autores:
          "Laurent Alexandre, Gert Biesta, Yara Alvim, Giorgio Agamben, Diane Ravitch",
      },
      {
        numero: "Capítulo 10",
        titulo: "Os professores e a mudança: que papel para a formação?",
        lema: "Dia Mundial 2022 // A transformação começa com os professores",
        foco: "Síntese teórica e programática que fecha a obra. Nóvoa conclui que a metamorfose da escola só triunfará se a própria formação profissional docente sofrer uma reviravolta radical. Rejeita o modelo de formação concebido como mero acúmulo individualizado de créditos curriculares ou de títulos acadêmicos formais. Defende que a formação se consolide como um processo de 'dar corpo à profissão', fundamentado na co-governança entre universidade, escolas básicas e coletivos docentes, sediados no 'Terceiro Lugar' institucional (como as Casas Comuns de Formação).",
        citacao:
          "A criação das escolas normais, em meados do século XIX, revela bem o papel que os professores desempenham na produção do modelo escolar. É nessas instituições especializadas de formação de professores que nasce e se reforça o corpo profissional que, a serviço do Estado, promove a educação popular (em língua inglesa, o conceito é mais preciso, “mass schooling”, escola de massas). Mas é também nessas instituições que se “normaliza” o modelo escolar, conseguindo que, em um tempo histórico curto, se passe de certa desordem nos espaços e nos processos educativos para uma forma escolar estruturada e padronizada. A transformação da educação começa com os professores, mas exige que a formação de professores se transforme radicalmente, assumindo-se como o lugar onde se produz e se escreve o conhecimento pedagógico a partir de dentro da própria profissão.",
        comentario:
          "Ao recuperar a gênese do modelo celular instituído a partir das Escolas Normais e dos professores no século XIX, Nóvoa postula uma tese de extrema finura sociológica: se foram as instituições formadoras de professores e o corpo profissional que estruturaram e padronizaram o modelo escolar clássico para atender à escola de massas oitocentista, é exatamente desse mesmo corpo profissional e de uma nova arquitetura institucional formadora (o Terceiro Lugar/Casa Comum) que deve brotar a energia reconstrutiva e a normalização de uma forma escolar ecológica e fluida para o século XXI.",
        paginas: "Páginas 119, 125 e 130",
        provocacao:
          "Como redefinir os modelos de carreira e financiamento das redes públicas escolares para assegurar contratualmente que de 30% a 40% da jornada semanal dos professores da educação básica seja dedicada à pesquisa, à partilha coletiva de casos de docência e à escrita científica de suas próprias práticas pedagógicas?",
        autores:
          "Yara Alvim, bell hooks, Ken Zeichner, Gilles Ferry, Lee Shulman, Viñao Frago",
      },
    ];

    const renderizarCapitulos = () => {
      seletorCapitulos.innerHTML = "";
      capitulos.forEach((cap, idx) => {
        const botao = document.createElement("button");
        botao.className = "botao-capitulo";
        botao.setAttribute("data-idx", idx);
        botao.setAttribute("title", cap.titulo);

        botao.innerHTML = `
          <span class="numero-cap">${cap.numero}</span>
        `;

        if (idx === 0) {
          botao.classList.add("selecionado");
          exibirDetalheCapitulo(cap);
        }

        botao.addEventListener("click", () => {
          document
            .querySelectorAll(".botao-capitulo")
            .forEach((b) => b.classList.remove("selecionado"));
          botao.classList.add("selecionado");
          exibirDetalheCapitulo(cap);
        });

        seletorCapitulos.appendChild(botao);
      });
    };

    const exibirDetalheCapitulo = (cap) => {
      painelDetalheCapitulo.classList.add("carregando");
      setTimeout(() => {
        painelDetalheCapitulo.innerHTML = `
          <span class="tema-unesco-cap">${cap.lema}</span>
          <h3>${cap.numero} // ${cap.titulo}</h3>

          <div class="foco-teorico-cap">
            <strong>Eixo Temático Central:</strong> ${cap.foco}
          </div>

          <div class="citacao-comentada-cap">
            <blockquote>"${cap.citacao}"</blockquote>
            <p style="font-size: 0.8rem; font-family: monospace; color: var(--cor-link); margin-bottom: 0.8rem;">
              Referência do Texto: ${cap.paginas}
            </p>
            <div class="comentario">
              <strong>Comentário Crítico:</strong> ${cap.comentario}
            </div>
          </div>

          <div class="provocacao-doutoral" style="margin-top: 1.5rem;">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle;">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              Tensionamento Epistemológico
            </h4>
            <p>${cap.provocacao}</p>
          </div>

          <div class="conexoes-cap" style="margin-top: 2.2rem;">
            <h4>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle;">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Pensadores em Diálogo no Capítulo
            </h4>
            <p>Nóvoa fundamenta sua análise articulando este capítulo com as contribuições teóricas de:</p>
            <span class="lista-autores">${cap.autores}</span>
          </div>
        `;
        painelDetalheCapitulo.classList.remove("carregando");
      }, 150);
    };

    renderizarCapitulos();
  }

  // ==================================================
  // 7. DIRETRIZES PRÁTICAS PARA O COTIDIANO DOCENTE (RUMOS.HTML)
  // ==================================================
  const gridDicasContainer = document.getElementById("grid-dicas-container");
  const filtrosDicasContainer = document.getElementById(
    "filtros-dicas-container",
  );

  if (gridDicasContainer && filtrosDicasContainer) {
    const dicas = [
      {
        id: 1,
        numero: "Dica 01",
        paginas: "p. 15–17",
        categoria: "Pedagogia",
        titulo:
          "Adote pedagogias cooperativas: o aprendizado é sempre com o outro",
        descricao:
          "Nóvoa defende que a educação não é um ato individual — ninguém se educa sozinho. O professor deve organizar sua sala para o trabalho em comum, por meio de projetos colaborativos, temas transversais e aprendizagem em grupo.",
        quote:
          "Aprender juntos implica ligar o conhecimento à solidariedade, à ética e à empatia.",
        tabs: [
          {
            rotulo: "Ver exemplos práticos",
            conteudo: `<strong>Estratégias de Cooperação em Sala:</strong><ul><li><strong>Aprendizagem por Projetos:</strong> Os estudantes trabalham juntos para resolver problemas da vida real ou de pesquisa.</li><li><strong>Seminários em Grupo:</strong> Debates horizontais baseados na leitura prévia compartilhada e tensionamento de ideias.</li><li><strong>Peer Teaching (Tutoria de Pares):</strong> Espaço de co-aprendizado onde alunos explicam conceitos uns aos outros.</li><li><strong>Sala de Aula Invertida Coletiva:</strong> O estudo autônomo individual é consolidado em oficinas dinâmicas presenciais.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"A educação é um percurso pessoal de apropriação do conhecimento, mas que se dá no encontro com os outros, sobretudo com os diferentes de nós... nada substitui as dinâmicas de cooperação e de colaboração na pedagogia e na escola."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 15)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Lev Vygotsky:</strong> O conceito de Mediação Social e Zona de Desenvolvimento Proximal (ZDP).</li><li><strong>Richard Sennett:</strong> <em>Together: The Rituals, Pleasures and Politics of Cooperation</em> (2012).</li><li><strong>Relatório UNESCO (2021):</strong> <em>Reimaginar nossos futuros juntos: um novo contrato social para a educação</em>.</li></ul>`,
          },
        ],
      },
      {
        id: 2,
        numero: "Dica 02",
        paginas: "p. 26",
        categoria: "Identidade profissional",
        titulo:
          "Ensine a disciplina como meio, não como fim: a Matemática forma o humano",
        descricao:
          "O autor provoca: a missão de um professor de Matemática não é ensinar Matemática — é formar um aluno por meio da Matemática. Cada aula deve ter consciência de que o conteúdo é o veículo; o destino é o desenvolvimento humano do estudante.",
        quote:
          "A nossa palavra como educadores será inútil se não for capaz de despertar a palavra própria do educando.",
        tabs: [
          {
            rotulo: "Aplicar na minha aula",
            conteudo: `<strong>Foco na Formação Humana:</strong><br>Selecione uma disciplina para ver sua finalidade humana:<br><div style='margin-top:0.8rem; display:flex; flex-wrap:wrap; gap:0.4rem;'><button class='btn-dica-tab' onclick='this.closest(".dica-painel-conteudo").querySelector(".feedback-disciplina").innerHTML = "<strong>Matemática:</strong> Desenvolver o raciocínio lógico estruturado e a capacidade de resolução ética de problemas complexos.";'>Matemática</button><button class='btn-dica-tab' onclick='this.closest(".dica-painel-conteudo").querySelector(".feedback-disciplina").innerHTML = "<strong>História:</strong> Desenvolver a empatia histórica e a consciência crítica de agência social frente ao presente.";'>História</button><button class='btn-dica-tab' onclick='this.closest(".dica-painel-conteudo").querySelector(".feedback-disciplina").innerHTML = "<strong>Ciências:</strong> Praticar o método científico como atitude de questionamento crítico da realidade e de responsabilidade socioambiental.";'>Ciências</button></div><div class='feedback-disciplina' style='margin-top:1rem; font-style:italic; color:var(--cor-destaque); min-height:1.5rem;'>Escolha uma área acima para analisar o objetivo...</div>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Educar humanos. [...] a missão de um professor de Matemática não é ensinar Matemática, é formar um aluno por meio da Matemática. [...] A educação é um processo pessoal de apropriação do conhecimento, pelo qual nos tornamos mais preparados e capazes."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 26)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Mikhail Epstein:</strong> <em>The Transformative Humanities</em> (2012) - a humana docência.</li><li><strong>Paulo Freire:</strong> <em>Pedagogia do Oprimido</em> (diálogo e humanização).</li><li><strong>Martha Nussbaum:</strong> <em>Not for Profit: Why Democracy Needs the Humanities</em> (2010).</li></ul>`,
          },
        ],
      },
      {
        id: 3,
        numero: "Dica 03",
        paginas: "p. 24–25",
        categoria: "Escola & ambiente",
        titulo:
          "Proteja a dimensão presencial: tecnologia não substitui o encontro humano",
        descricao:
          "O livro alerta para o risco de uma educação exclusivamente virtual. Nóvoa é claro: não há educação sem afeto, sem sentimento, sem relação humana profunda. O professor deve valorizar o encontro presencial e usar o digital como complemento, nunca como substituto.",
        quote:
          "Não se pode conhecer sem sentir, não se pode aprender sem emoção, sem empatia.",
        tabs: [
          {
            rotulo: "Explorar o equilíbrio",
            conteudo: `<strong>Equilíbrio Presencial-Digital:</strong><ul><li><strong>Presencial (Onde o Encontro Brilha):</strong> Debates, problematizações coletivas, dinâmicas de afeto, escuta ativa e mediação de conflitos.</li><li><strong>Digital (Como Ferramenta):</strong> Acesso a bases científicas, mapeamento visual, portfólios digitais e compartilhamento rápido de dados.</li><li><em>Nota:</em> O digital complementa a cultura; jamais substitui o encontro presencial do saber comum.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"As tecnologias fazem parte da nossa vida, do dia a dia das nossas crianças, mas a educação dá-se sempre num contexto de relação humana. [...] Não há educação sem afeto, não há educação sem sentimento, não há educação sem relação humana profunda."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 24)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Gert Biesta:</strong> <em>Good Education in an Age of Measurement</em> (2010).</li><li><strong>Michel Serres:</strong> <em>Polegarzinha</em> (2012) - a transição geracional-tecnológica.</li><li><strong>François Dubet:</strong> Reflexões sobre a superioridade ética da escola presencial física.</li></ul>`,
          },
        ],
      },
      {
        id: 4,
        numero: "Dica 04",
        paginas: "p. 46–48",
        categoria: "Formação docente",
        titulo:
          "Reduza a burocracia e libere tempo para o que importa: ensinar e refletir",
        descricao:
          "O ponto 85 da Recomendação OIT/UNESCO de 1966, citado por Nóvoa, diz que o trabalho do professor é tão especial que deveria ser organizado de modo a evitar toda a perda de tempo e de energias. O professor deve ser agente na redução de tarefas inúteis em sua rotina.",
        quote:
          "Precisamos limpar o dia a dia dos professores de tudo o que traz esgotamento e desmotivação.",
        tabs: [
          {
            rotulo: "Otimizar minha rotina",
            conteudo: `<strong>Checklist de Simplificação Docente (Marque para otimizar):</strong><ul><li><label><input type='checkbox' checked style='accent-color:var(--cor-destaque)'> Atas descritivas longas (Mudar para ata rápida em tópicos de decisão)</label></li><li><label><input type='checkbox' style='accent-color:var(--cor-destaque)'> Planejamento individual isolado (Compartilhar planejamentos no coletivo)</label></li><li><label><input type='checkbox' checked style='accent-color:var(--cor-destaque)'> Estudo e escrita científica do próprio fazer (Reservar tempo inviolável na rotina)</label></li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Nos últimos anos, a queixa mais ouvida dos professores é a burocracia, a imensidão de tarefas, tantas vezes inúteis, que infernizam o seu dia a dia. E têm razão. Precisamos limpar o dia a dia dos professores de tudo o que traz esgotamento e desmotivação."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 47)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Recomendação OIT/UNESCO (1966):</strong> Ponto 85 relativo ao estatuto dos professores.</li><li><strong>Andy Hargreaves:</strong> <em>Changing Teachers, Changing Times: Teachers' Work and Culture in the Postmodern Age</em> (1994).</li></ul>`,
          },
        ],
      },
      {
        id: 5,
        numero: "Dica 05",
        paginas: "p. 49–50",
        categoria: "Identidade profissional",
        titulo: "Use sua autoridade para libertar o aluno, não para controlar",
        descricao:
          "Nóvoa retoma Rousseau para mostrar que a autoridade do professor existe para instaurar uma realidade nova, para autorizar a autonomia daqueles que estão dando os primeiros passos. A sala de aula deve ser espaço de emancipação — autoridade a serviço da liberdade do estudante.",
        quote:
          "É para isso que serve a liberdade dos professores: para despertar a liberdade dos alunos.",
        tabs: [
          {
            rotulo: "Ver estratégias práticas",
            conteudo: `<strong>Agência e Emancipação em Sala:</strong><ul><li><strong>Contratos de Convivência:</strong> Regras básicas cocriadas entre estudantes e professor.</li><li><strong>Avaliação Formativa:</strong> Diálogo reflexivo sobre erros como disparadores cognitivos, não punição.</li><li><strong>Autonomia Progressiva:</strong> Ampliação das decisões discentes sobre prazos e formatos de projetos pedagógicos.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"A autoridade existe para instaurar uma realidade nova, para autorizar a autonomia daqueles que estão dando os primeiros passos. [...] Os humanos não se educam sozinhos. Precisam de mestres e de colegas."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 49–50)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>George Steiner:</strong> <em>Lições dos Mestres</em> (2005) - citado diretamente por Nóvoa.</li><li><strong>Hannah Arendt:</strong> <em>Entre o Passado e o Futuro</em> (2001) - sobre autoridade e educação.</li><li><strong>Theodor Adorno:</strong> <em>Educação e Emancipação</em> (2020).</li></ul>`,
          },
        ],
      },
      {
        id: 6,
        numero: "Dica 06",
        paginas: "p. 61–72",
        categoria: "Formação docente",
        titulo: "Valorize e sistematize seu conhecimento profissional docente",
        descricao:
          "Um dos eixos centrais do livro: o professor possui um 'terceiro gênero de conhecimento' — contingente, coletivo e público — que não é apenas teórico nem apenas prático. O professor deve refletir sobre sua própria prática, registrar e partilhar esse saber.",
        quote:
          "A formalização desse conhecimento é muito importante para o reconhecimento profissional e público dos professores.",
        tabs: [
          {
            rotulo: "Como documentar",
            conteudo: `<strong>Roteiro de Registro Docente:</strong><ul><li><strong>Diário Reflexivo:</strong> Breve nota semanal focando em: <em>(1) O planejado; (2) Os incidentes contingentes em sala; (3) As táticas docentes improvisadas.</em></li><li><strong>Portfólio de Evidências:</strong> Mapear os produtos dos alunos para documentar o avanço conceitual real.</li><li><strong>Relato de Pública Ação:</strong> Sistematização de uma boa prática para partilha em redes de professores.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"O conhecimento profissional docente tem características próprias, é um 'terceiro gênero de conhecimento'. [...] Não é um conhecimento facilmente reconhecível, pois escapa aos parâmetros habituais. Precisamos adotar novos pontos de vista a fim de conseguirmos captar a sua natureza e sentido."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 67)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Donald Schön:</strong> <em>The Reflective Practitioner</em> (1983) - a epistemologia da prática.</li><li><strong>John Dewey:</strong> <em>The Sources of a Science of Education</em> (1929) - saber experiencial.</li><li><strong>Gilles Ferry:</strong> <em>Le trajet de la formation</em> (1983) - o trabalho contínuo sobre si.</li></ul>`,
          },
        ],
      },
      {
        id: 7,
        numero: "Dica 07",
        paginas: "p. 70–72",
        categoria: "Formação docente",
        titulo:
          "Escreva e publique: a voz pública do professor é parte da profissão",
        descricao:
          "Nóvoa insiste que uma profissão que não se escreve não se inscreve no ponto de vista social. Escrever artigos, relatos de experiência, textos para blogs educacionais ou redes de professores é um ato profissional. Publicar é uma forma de pública ação.",
        quote:
          "É preciso que os professores tenham a possibilidade e a coragem de escrever e de publicar.",
        tabs: [
          {
            rotulo: "Primeiros passos",
            conteudo: `<strong>Roteiro de Textos Docentes:</strong><ol><li><strong>Escolher:</strong> Foque em um projeto prático singular ou um incidente resolvido com a turma.</li><li><strong>Estruturar:</strong> Descreva em: Contexto ➔ Prática Pedagógica ➔ Tensionamentos ➔ Aprendizados.</li><li><strong>Legitimidade:</strong> Rompa o retraimento corporativo em relação à escrita acadêmica.</li></ol>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Os professores têm um certo retraimento em relação à escrita, como se esse exercício lhes estivesse vedado e pertencesse apenas à esfera acadêmica. [...] O conhecimento profissional docente ganha legitimidade e relevância quando se difunde na sociedade."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 71-72)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Simone Weil:</strong> Citada por Nóvoa sobre a reflexão escrita e o papel público do sujeito.</li><li><strong>Relatório UNESCO (2021):</strong> O professor no centro das esferas públicas deliberativas.</li><li><strong>Revistas sugeridas:</strong> <em>Cadernos de Pesquisa</em> (FCC), <em>Revista Brasileira de Educação</em> (ANPEd).</li></ul>`,
          },
        ],
      },
      {
        id: 8,
        numero: "Dica 08",
        paginas: "p. 81–84",
        categoria: "Formação docente",
        titulo:
          "Cuide e acolhe os professores iniciantes: a indução é decisiva",
        descricao:
          "O capítulo 7 dedica-se inteiro ao tema: os primeiros anos de docência são os mais formativos. Professores experientes têm responsabilidade de acolher os jovens colegas. Criar grupos de mentoria e acompanhamento nos primeiros semestres fortalece a profissão.",
        quote:
          "A profissão docente não terá futuro se não cuidar melhor dos seus professores mais jovens.",
        tabs: [
          {
            rotulo: "Estruturar mentoria",
            conteudo: `<strong>Passos para um Programa de Indução:</strong><ul><li><strong>Co-docência:</strong> Planejamento e docência compartilhados no primeiro semestre entre novato e experiente.</li><li><strong>Grupos de Mentoria Horizontal:</strong> Encontros quinzenais para discutir gestão de sala, relações com alunos e cansaço mental.</li><li><strong>Proteção Institucional:</strong> Garantir que o professor iniciante receba turmas e horários equilibrados.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Adquiri a consciência clara de que os primeiros anos como professores iniciantes ou principiantes são os mais decisivos na vida profissional docente, pois marcam, de muitas maneiras, a nossa relação com os alunos, com os colegas e com a profissão. É no acolhimento coletivo que o jovem professor constrói a segurança."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 81)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Michael Huberman:</strong> <em>A Vida dos Professores</em> (1989) -  ciclos de vida da docência.</li><li><strong>Ken Zeichner:</strong> <em>The Struggle for the Soul of Teacher Education</em> (2017).</li><li><strong>Complexo de Formação de Professores da UFRJ:</strong> Exemplo prático de indução e residência docente.</li></ul>`,
          },
        ],
      },
      {
        id: 9,
        numero: "Dica 09",
        paginas: "p. 102–103",
        categoria: "Escola & ambiente",
        titulo: "Repense o espaço da sala de aula: o ambiente educa",
        descricao:
          "O autor defende que novos ambientes educativos — espaços abertos, laboratórios, ateliês — são essenciais para outras formas de aprender. No ensino superior, isso pode significar reorganizar cadeiras, propor atividades fora da sala convencional ou criar espaços de pesquisa coletiva.",
        quote:
          "Precisamos desenhar os espaços escolares com a mesma ousadia com que foram pensados no século XIX.",
        tabs: [
          {
            rotulo: "Ideias para minha sala",
            conteudo: `<strong>Modelos de Organização Espacial:</strong><ul><li><strong>Ferradura/U:</strong> Perfeito para debates e seminários, integrando visualmente todo o grupo.</li><li><strong>Ilhas de Trabalho:</strong> Grupos de 4 a 5 alunos cooperando sobre projetos, estimulando o co-aprendizado.</li><li><strong>Ateliê Flexível:</strong> Uso de mobiliários empilháveis ou móveis rápidos para reconfigurar a sala em 5 minutos.</li><li><strong>Fileira Tradicional:</strong> Usada pontualmente para momentos de foco e testes individuais, nunca como única forma.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Estamos falando de arquitetura? Certamente. Precisamos desenhar ou remodelar os edifícios escolares com a mesma ousadia e criatividade com que foram pensados no século XIX. Agora, têm de ser espaços abertos, adaptáveis e flexíveis."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 103)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Ivan Illich:</strong> <em>Tools for Conviviality</em> (1973) - a convivialidade física.</li><li><strong>Edgar Morin:</strong> Conceitos de Metamorfose Institucional perante o século XXI.</li><li><strong>Relatório UNESCO (2021):</strong> A proteção física da escola presencial.</li></ul>`,
          },
        ],
      },
      {
        id: 10,
        numero: "Dica 10",
        paginas: "p. 105–107",
        categoria: "Pedagogia",
        titulo: "Pratique uma pedagogia do encontro: lide com o imprevisto",
        descricao:
          "O capítulo 8 apresenta a pedagogia do encontro em seis princípios. Um dos mais aplicáveis: transformar imprevistos em momentos de aprendizagem. O que parece ruído em sala — a pergunta fora do tema, o conflito entre alunos, o silêncio — é matéria pedagógica.",
        quote:
          "Para um professor, não há nada mais importante do que saber lidar com a imprevisibilidade de cada momento.",
        tabs: [
          {
            rotulo: "Explorar princípios",
            conteudo: `<strong>Os 6 Apontamentos da Pedagogia do Encontro:</strong><ul><li><strong>1. Relação Humana:</strong> É o cerne da docência.</li><li><strong>2. Encontro Intenso:</strong> Docência como mergulho no conhecimento cultural.</li><li><strong>3. Busca Contínua:</strong> Ensinar é pesquisar e se transformar, nunca repetição burocrática.</li><li><strong>4. Historicização:</strong> O conhecimento é fruto histórico das lutas do homem.</li><li><strong>5. Emoção como Cognição:</strong> Aprende-se com afeto.</li><li><strong>6. Pertencimento Mútuo:</strong> Formar um coletivo comunitário de trabalho comum.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"A relação pedagógica faz-se também com perguntas e dedos no ar, desentendimentos, sobrancelhas franzidas, sussurros, suspiros, olhares de surpresa, risos, tédio [...]. Para um professor, não há nada mais importante do que saber lidar com a imprevisibilidade de cada momento, transformando cada incidente numa ocasião de aprendizagem."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 106)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>António Damásio:</strong> <em>Sentir & Saber</em> (2020) - base neurológica da indissociabilidade entre emoção e razão.</li><li><strong>Gilles Deleuze:</strong> A docência e o pensamento como ato de busca e agenciamento.</li><li><strong>Nel Noddings:</strong> <em>Philosophy of Education</em> (a centralidade do cuidado).</li></ul>`,
          },
        ],
      },
      {
        id: 11,
        numero: "Dica 11",
        paginas: "p. 115–117",
        categoria: "Escola & ambiente",
        titulo: "Conecte a escola ao território: a educação vai além da sala",
        descricao:
          "Após a pandemia, ficou claro que as melhores respostas vieram de escolas que mantiveram vínculos com as famílias e com o entorno. O professor universitário pode fazer o mesmo: propor projetos de extensão, parcerias com comunidades, visitas técnicas e pesquisa aplicada.",
        quote:
          "As melhores respostas vieram dos professores que, por dinâmicas de colaboração, conseguiram propostas robustas com preocupações inclusivas.",
        tabs: [
          {
            rotulo: "Estratégias de conexão",
            conteudo: `<strong>Mapa de Conectividade do Território:</strong><ul><li><strong>Extensão Universitária:</strong> Projetos com impacto comunitário real nos bairros vizinhos.</li><li><strong>Diálogo com as Famílias:</strong> Canais abertos de comunicação horizontal, compartilhando diagnósticos de cuidado.</li><li><strong>Parcerias Intersetoriais:</strong> Integração com redes de assistência, saúde e cultura locais para amparo integral.</li></ul>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Os professores. A pandemia tornou evidente que o potencial de resposta está mais nos professores do que nas políticas ou nas instituições. Professores bem preparados, com liberdade, trabalhando em conjunto, dentro e fora do espaço escolar, em ligação com as famílias, são sempre a melhor garantia de soluções oportunas e adequadas."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 115–116)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Ivan Illich:</strong> Conceito de capilaridade educativa e teias de convivência social.</li><li><strong>Bernard Charlot:</strong> <em>Éducation ou Barbarie: Pour uma Anthropologie de l'Éducation</em> (2020).</li><li><strong>Relatório UNESCO (2021):</strong> A escola integrada ao tecido territorial e comunitário.</li></ul>`,
          },
        ],
      },
      {
        id: 12,
        numero: "Dica 12",
        paginas: "p. 133–134",
        categoria: "Política educacional",
        titulo:
          "Participe das políticas: professores são agentes de transformação",
        descricao:
          "O capítulo final cita Macron: dar aos professores mais autonomia, mais liberdade, novas margens de ação e de iniciativa. O professor deve participar de comitês, colegiados, projetos pedagógicos institucionais — não como obrigação burocrática, mas como protagonismo profissional.",
        quote:
          "A transformação da educação começa mesmo com os professores. A metamorfose da escola, também.",
        tabs: [
          {
            rotulo: "Como agir",
            conteudo: `<strong>Roteiro de Engajamento Institucional:</strong><ol><li><strong>Ocupar Espaços:</strong> Participe ativamente de colegiados, comissões de curso e reuniões de planejamento.</li><li><strong>Sólido Embasamento:</strong> Proponha modificações curriculares embasadas em dados pedagógicos reais da realidade do chão da escola.</li><li><strong>Alianças Coletivas:</strong> Articule planejamentos conjuntos com outros professores da rede.</li><li><strong>Inovações Testáveis:</strong> Inicie pequenas inovações que possam ser registradas e publicadas como prova de viabilidade.</li></ol>`,
          },
          {
            rotulo: "Ler o trecho",
            conteudo: `<em>"Sim, é preciso libertar a energia individual e coletiva dos professores. É preciso criar as condições favoráveis à 'coragem dos começos'. [...] A renovação da formação de professores é um dos pilares deste processo. [...] A transformação da educação começa mesmo com os professores."</em><br><br><strong>— António Nóvoa (Professores: Libertar o Futuro, p. 134)</strong>`,
          },
          {
            rotulo: "Indicação bibliográfica",
            conteudo: `<strong>Referências Recomendadas:</strong><ul><li><strong>Paulo Freire:</strong> Conceito de Utopia, Esperança e a dialética do Denúncia/Anúncio.</li><li><strong>Ken Zeichner:</strong> <em>The Struggle for the Soul of Teacher Education</em> (2017).</li><li><strong>CFP/UFRJ:</strong> Estudo prático de modelo de Nova Institucionalidade na formação continuada.</li></ul>`,
          },
        ],
      },
    ];

    const coresCategorias = {
      "Formação docente": "#1D9E75",
      Pedagogia: "#7F77DD",
      "Escola & ambiente": "#D85A30",
      "Identidade profissional": "#D4537E",
      "Política educacional": "#BA7517",
    };

    const renderizarDicas = (categoriaFiltrada = "todas") => {
      gridDicasContainer.innerHTML = "";
      let totalVisivel = 0;

      dicas.forEach((dica) => {
        if (
          categoriaFiltrada !== "todas" &&
          dica.categoria !== categoriaFiltrada
        ) {
          return;
        }
        totalVisivel++;

        const card = document.createElement("article");
        card.classList.add("cartao-dica");
        card.style.borderTop = `5px solid ${coresCategorias[dica.categoria] || "#ccc"}`;

        // Render header
        const header = document.createElement("div");
        header.classList.add("dica-header");
        header.innerHTML = `
          <span class="dica-meta">${dica.numero} // ${dica.paginas}</span>
          <span class="dica-categoria" style="background-color: ${coresCategorias[dica.categoria]}">${dica.categoria}</span>
        `;
        card.appendChild(header);

        // Render Title
        const title = document.createElement("h3");
        title.innerText = dica.titulo;
        card.appendChild(title);

        // Render Description
        const desc = document.createElement("p");
        desc.classList.add("dica-descricao");
        desc.innerText = dica.descricao;
        card.appendChild(desc);

        // Render Quote
        const quote = document.createElement("blockquote");
        quote.classList.add("dica-quote");
        quote.innerText = `"${dica.quote}"`;
        card.appendChild(quote);

        // Render Tabs Container
        const tabsContainer = document.createElement("div");
        tabsContainer.classList.add("dica-botoes-tabs");

        const painelAbas = document.createElement("div");
        painelAbas.classList.add("dica-paineis-tabs");

        dica.tabs.forEach((tab, index) => {
          const btnTab = document.createElement("button");
          btnTab.classList.add("btn-dica-tab");
          btnTab.innerText = tab.rotulo;

          const painelConteudo = document.createElement("div");
          painelConteudo.classList.add("dica-painel-conteudo");
          painelConteudo.innerHTML = tab.conteudo;

          btnTab.addEventListener("click", () => {
            const jaEstavaAtivo = btnTab.classList.contains("ativo");

            // Remove active classes inside this card
            tabsContainer
              .querySelectorAll(".btn-dica-tab")
              .forEach((b) => b.classList.remove("ativo"));
            painelAbas
              .querySelectorAll(".dica-painel-conteudo")
              .forEach((p) => p.classList.remove("ativo"));

            if (!jaEstavaAtivo) {
              btnTab.classList.add("ativo");
              painelConteudo.classList.add("ativo");
            }
          });

          tabsContainer.appendChild(btnTab);
          painelAbas.appendChild(painelConteudo);
        });

        card.appendChild(tabsContainer);
        card.appendChild(painelAbas);

        gridDicasContainer.appendChild(card);
      });

      // Update count
      const btnTodas = filtrosDicasContainer.querySelector(
        "[data-categoria='todas']",
      );
      if (btnTodas) {
        btnTodas.innerText = `Todas (${totalVisivel})`;
      }
    };

    // Filter bar event listeners
    filtrosDicasContainer
      .querySelectorAll(".btn-filtro-dica")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          filtrosDicasContainer
            .querySelectorAll(".btn-filtro-dica")
            .forEach((b) => b.classList.remove("ativo"));
          btn.classList.add("ativo");
          renderizarDicas(btn.getAttribute("data-categoria"));
        });
      });

    // Initial render
    renderizarDicas();
  }

  // ==================================================
  // 8. NAVEGAÇÃO DE ABAS (TABS) PARA RUMOS.HTML
  // ==================================================
  const abasRumos = document.querySelectorAll(".aba-rumos");
  const paineisAba = document.querySelectorAll(".painel-aba");

  if (abasRumos.length > 0 && paineisAba.length > 0) {
    abasRumos.forEach((aba) => {
      aba.addEventListener("click", () => {
        // Remover classe ativa de todas as abas
        abasRumos.forEach((a) => a.classList.remove("ativa"));
        // Adicionar classe ativa na aba clicada
        aba.classList.add("ativa");

        // Ocultar todos os painéis
        paineisAba.forEach((painel) => {
          painel.classList.remove("ativo");
        });

        // Exibir o painel correspondente
        const abaAlvo = aba.getAttribute("data-aba");
        const painelAlvo = document.getElementById(`conteudo-${abaAlvo}`);
        if (painelAlvo) {
          painelAlvo.classList.add("ativo");
        }
      });
    });
  }
});
