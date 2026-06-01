// Organic Chemistry III Practice Questions Database
const questionsDatabase = [
  {
    id: 101,
    examType: "OpenStax",
    chapter: "Ch 12: Spectroscopy",
    questionText: "Based on the provided Mass Spectrum, which compound corresponds to the molecular ion peak at $m/z = 44$ and a significant base peak at $m/z = 29$?",
    media: {
      type: "spectroscopy",
      specType: "ms",
      dataPoints: [
        { x: 15, y: 15, label: "methyl fragment" },
        { x: 29, y: 100, label: "ethyl/formyl base peak" },
        { x: 43, y: 8, label: "propyl fragment" },
        { x: 44, y: 60, label: "molecular ion [M+]" },
        { x: 45, y: 2, label: "M+1 isotope peak" }
      ]
    },
    tags: ["Spectroscopy", "Mass Spectrometry"],
    hint: "Recall that $m/z = 44$ corresponds to the molecular weight of propane ($C_3H_8$) or acetaldehyde ($CH_3CHO$). A base peak at $m/z = 29$ represents the loss of a methyl radical ($M - 15$) to form an acylium ion $[H-C\\equiv O]^+$ or an ethyl cation $[CH_3-CH_2]^+$. Check which fits the fragmentation pattern best.",
    textbookRef: "OpenStax Section 12.1",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/12-1-mass-spectrometry-principles-and-applications",
    options: [
      {
        text: "Propane",
        isCorrect: true,
        explanation: "Correct! Propane ($C_3H_8$, MW = 44 g/mol) exhibits a molecular ion peak at $m/z = 44$. Loss of a methyl radical (15 amu) gives the stable ethyl cation ($CH_3CH_2^+$, $m/z = 29$), which forms the base peak."
      },
      {
        text: "Acetaldehyde",
        isCorrect: false,
        explanation: "Incorrect. While acetaldehyde ($CH_3CHO$, MW = 44 g/mol) also has a molecular ion at $m/z = 44$, its main fragment would be the acylium ion at $m/z = 29$ ($[CH_3-C\\equiv O]^+$, which would actually appear at $m/z = 43$, not 29, representing $M - 1$ or $[H-C\\equiv O]^+$, but the base peak is overwhelmingly at 43 due to loss of H)."
      },
      {
        text: "Ethanol",
        isCorrect: false,
        explanation: "Incorrect. Ethanol has a molecular weight of 46 g/mol, which would show a molecular ion peak at $m/z = 46$, not 44."
      },
      {
        text: "Diethyl ether",
        isCorrect: false,
        explanation: "Incorrect. Diethyl ether has a molecular weight of 74 g/mol, which would show a molecular ion peak at $m/z = 74$, not 44."
      }
    ]
  },
  {
    id: 102,
    examType: "ACS",
    topic: "Mechanisms and Energetics",
    questionText: "The provided reaction coordinate diagram describes a single-step organic transition. What can be concluded about the thermodynamic and kinetic properties of this reaction?",
    media: {
      type: "energyDiagram",
      points: [
        { state: "Reactants", energy: 80 },
        { state: "Transition State (TS)", energy: 150 },
        { state: "Products", energy: 30 }
      ]
    },
    tags: ["Thermodynamics", "Reaction Coordinates", "Kinetics"],
    hint: "An exothermic reaction releases energy (Products energy < Reactants energy). The activation energy ($E_a$) is the difference between the Transition State energy and the Reactants energy.",
    textbookRef: "OpenStax Section 6.8",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/6-8-describing-a-reaction-energy-diagrams-and-transition-states",
    options: [
      {
        text: "It is an exothermic reaction with an activation energy of 70 kJ/mol.",
        isCorrect: true,
        explanation: "Correct! The reaction is exothermic (downward overall step, $\\Delta H = 30 - 80 = -50$ kJ/mol). The activation energy is the barrier from reactants to transition state, $E_a = 150 - 80 = 70$ kJ/mol."
      },
      {
        text: "It is an endothermic reaction with an activation energy of 150 kJ/mol.",
        isCorrect: false,
        explanation: "Incorrect. The product energy (30 kJ/mol) is lower than the reactant energy (80 kJ/mol), meaning energy is released (exothermic, not endothermic). The activation energy is 70 kJ/mol, not the absolute energy of the transition state."
      },
      {
        text: "It is an exothermic reaction with a reaction enthalpy ($\\Delta H$) of -70 kJ/mol.",
        isCorrect: false,
        explanation: "Incorrect. While it is exothermic, the reaction enthalpy is $\\Delta H = E_{\\text{products}} - E_{\\text{reactants}} = 30 - 80 = -50$ kJ/mol, not -70 kJ/mol (which is the negative activation energy)."
      },
      {
        text: "It is a two-step mechanism because there is a transition state peak.",
        isCorrect: false,
        explanation: "Incorrect. A reaction energy diagram with a single peak (one transition state) and no intermediates describes a concerted, single-step reaction mechanism."
      }
    ]
  },
  {
    id: 103,
    examType: "ACS",
    topic: "Stereochemistry",
    questionText: "Determine the stereochemical configuration (R or S) of the chiral center in the following Fischer projection.",
    media: {
      type: "fischer",
      top: "\\text{CHO}",
      bottom: "\\text{CH}_2\\text{OH}",
      left: "\\text{H}",
      right: "\\text{OH}",
      center: ""
    },
    tags: ["Stereochemistry", "Fischer Projections", "R/S Configuration"],
    hint: "Assign priorities to the four substituents around the chiral carbon (1: $-\\text{OH}$, 2: $-\\text{CHO}$, 3: $-\\text{CH}_2\\text{OH}$, 4: $-\\text{H}$). Remember that in Fischer projections, horizontal bonds point towards you (wedges) and vertical bonds point away (dashes). If the lowest priority group (4) is horizontal, reverse the apparent direction.",
    textbookRef: "OpenStax Section 5.5",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/5-5-assigning-configuration-to-chiral-centers",
    options: [
      {
        text: "(R)-Glyceraldehyde",
        isCorrect: true,
        explanation: "Correct! Priorities are: $-\\text{OH}$ (1), $-\\text{CHO}$ (2), $-\\text{CH}_2\\text{OH}$ (3), $-\\text{H}$ (4). Going from 1 -> 2 -> 3 goes counter-clockwise, which seems like (S). However, since the lowest priority group ($-\\text{H}$) is on a horizontal bond (pointing towards you), we reverse the result, giving (R)."
      },
      {
        text: "(S)-Glyceraldehyde",
        isCorrect: false,
        explanation: "Incorrect. Although going from priority 1 -> 2 -> 3 is counter-clockwise, the hydrogen is on a horizontal bond, so we must reverse the configuration from S to R."
      },
      {
        text: "Racemic mixture",
        isCorrect: false,
        explanation: "Incorrect. The molecule has a single chiral center and lacks any internal plane of symmetry (meso), meaning it is optically active and chiral, not a racemic mixture."
      },
      {
        text: "(2R, 3S)-Glyceraldehyde",
        isCorrect: false,
        explanation: "Incorrect. Glyceraldehyde only has a single chiral center at C2, so naming it with multiple chiral center designations is structurally invalid."
      }
    ]
  },
  {
    id: 1,
    examType: "OpenStax",
    chapter: "Ch 19: Diels-Alder and Pericyclics",
    questionText: "Identify the major organic product of the thermal $[4+2]$ cycloaddition (Diels-Alder reaction) between 1,3-butadiene and maleic anhydride.",
    scheme: {
      reactants: ["C=CC=C", "O=C1C=CC(=O)O1"],
      reagents: "Heat ($\\Delta$)",
      conditions: "",
      products: ["O=C1C2C=CCC2C(=O)O1"]
    },
    tags: ["Pericyclic Reactions", "Diels-Alder"],
    hint: "Recall that the Diels-Alder reaction proceeds via a concerted mechanism. The cis-relationship of the carbonyl groups in the starting cyclic anhydride is preserved in the product.",
    textbookRef: "OpenStax Section 14.3",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/14-3-the-diels-alder-cycloaddition-reaction",
    options: [
      {
        text: "cis-1,2,3,6-Tetrahydrophthalic anhydride",
        isCorrect: true,
        explanation: "Correct! The thermal $[4+2]$ cycloaddition between the diene (1,3-butadiene) and the dienophile (maleic anhydride) yields cis-1,2,3,6-tetrahydrophthalic anhydride. This pericyclic reaction is stereospecific, preserving the cis configuration of the starting anhydride carbonyls in the fused cyclohexene product."
      },
      {
        text: "Cyclobut-3-ene-1,2-dicarboxylic anhydride",
        isCorrect: false,
        explanation: "Incorrect. A cyclobutene ring would be the product of a $[2+2]$ cycloaddition. Under thermal conditions, a $[2+2]$ cycloaddition is symmetry-forbidden in the ground state."
      },
      {
        text: "Dimethyl cyclohex-4-ene-1,2-dicarboxylate",
        isCorrect: false,
        explanation: "Incorrect. This product would form if dimethyl maleate was utilized as the dienophile. Because maleic anhydride is used, the cyclic anhydride ring is retained."
      },
      {
        text: "Bicyclo[2.2.1]hept-5-ene-2,3-dicarboxylic anhydride",
        isCorrect: false,
        explanation: "Incorrect. This bridged bicyclic adduct (norbornene derivative) is the product of maleic anhydride reacting with cyclopentadiene (a cyclic diene), not the acyclic 1,3-butadiene."
      }
    ]
  },
  {
    id: 2,
    examType: "OpenStax",
    chapter: "Ch 21: Carbonyl Condensations",
    questionText: "Which conjugated $\\alpha,\\beta$-unsaturated product is formed from the base-catalyzed self-condensation of acetone ($\\ce{(CH3)2CO}$) under heating conditions?",
    scheme: {
      reactants: ["CC(=O)C", "CC(=O)C"],
      reagents: "$\\ce{NaOH}$",
      conditions: "Heat ($\\Delta$)",
      products: ["CC(C)=CC(=O)C"]
    },
    tags: ["Carbonyl Chemistry", "Aldol Condensation"],
    hint: "The reaction begins with the extraction of an $\\alpha$-proton by hydroxide ($\\ce{OH-}$), followed by nucleophilic addition to a second acetone molecule. Heating induces $\\text{E1cB}$ dehydration.",
    textbookRef: "OpenStax Section 22.3",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/22-3-carbonyl-condensation-reactions-aldol-condensation-reactions-of-aldehydes-and-ketones",
    options: [
      {
        text: "4-Methylpent-3-en-2-one (Mesityl oxide)",
        isCorrect: true,
        explanation: "Correct! The base-catalyzed self-condensation of acetone begins with enolate formation and nucleophilic addition to another acetone molecule, yielding diacetone alcohol. Heating induces $\\text{E1cB}$ elimination of water ($\\ce{H2O}$) to form the conjugated $\\alpha,\\beta$-unsaturated ketone, mesityl oxide."
      },
      {
        text: "4-Hydroxy-4-methylpentan-2-one (Diacetone alcohol)",
        isCorrect: false,
        explanation: "Incorrect. Diacetone alcohol is the aldol addition product. While it is the intermediate, heating forces dehydration (loss of water) to yield the conjugated condensation product, mesityl oxide."
      },
      {
        text: "2-Methylpent-2-enal",
        isCorrect: false,
        explanation: "Incorrect. 2-Methylpent-2-enal is the aldol condensation product of two molecules of propionaldehyde (propanal), not acetone."
      },
      {
        text: "2,6-Dimethylhepta-2,5-dien-4-one (Phorone)",
        isCorrect: false,
        explanation: "Incorrect. Phorone is a double-condensation product formed when a third molecule of acetone condenses with mesityl oxide under prolonged basic conditions with heat."
      }
    ]
  },
  {
    id: 3,
    examType: "ACS",
    topic: "Aromaticity and EAS",
    questionText: "Predict the major organic product obtained from the electrophilic aromatic nitration of benzaldehyde using concentrated $\\ce{HNO3}$ and $\\ce{H2SO4}$.",
    scheme: {
      reactants: ["O=Cc1ccccc1"],
      reagents: "$\\ce{HNO3}$, $\\ce{H2SO4}$",
      conditions: "",
      products: ["O=Cc1cccc(c1)[N+](=O)[O-]"]
    },
    tags: ["Electrophilic Aromatic Substitution", "Directing Groups"],
    hint: "The formyl group ($\\ce{-CHO}$) is strongly electron-withdrawing by resonance and induction. How does placing positive charges on the ortho and para positions affect directing ability?",
    textbookRef: "OpenStax Section 16.2",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/16-2-electrophilic-aromatic-substitution-reactions-nitration-and-sulfonation",
    options: [
      {
        text: "3-Nitrobenzaldehyde (meta-product)",
        isCorrect: true,
        explanation: "Correct! The formyl group ($\\ce{-CHO}$) is highly electron-withdrawing. Resonance structures place positive charges on the ortho and para positions of the benzene ring, making them heavily deactivated. The incoming electrophile ($\\ce{NO2+}$) is thus directed to the meta position (3-position)."
      },
      {
        text: "4-Nitrobenzaldehyde (para-product)",
        isCorrect: false,
        explanation: "Incorrect. The aldehyde group is electron-withdrawing and deactivates the para position by placing a formal positive resonance charge on it, directing electrophiles meta."
      },
      {
        text: "2-Nitrobenzaldehyde (ortho-product)",
        isCorrect: false,
        explanation: "Incorrect. Similar to the para position, the ortho position is deactivated by the carbonyl resonance, directing the electrophilic attack to the meta position."
      },
      {
        text: "2,4-Dinitrobenzaldehyde",
        isCorrect: false,
        explanation: "Incorrect. Since both the formyl group and the first nitro group are strongly deactivating, the ring is too deactivated to undergo a second nitration under standard nitrating conditions."
      }
    ]
  },
  {
    id: 4,
    examType: "ACS",
    topic: "Carboxylic Acid Derivatives",
    questionText: "What is the final product formed when excess phenylmagnesium bromide ($\\ce{PhMgBr}$) reacts with methyl benzoate ($\\ce{C6H5CO2CH3}$), followed by treatment with aqueous acid ($\\ce{H3O+}$)?",
    scheme: {
      reactants: ["O=C(OC)c1ccccc1"],
      reagents: "1. excess $\\ce{PhMgBr}$, $\\ce{Et2O}$\n2. $\\ce{H3O+}$",
      conditions: "",
      products: ["OC(c1ccccc1)(c1ccccc1)c1ccccc1"]
    },
    tags: ["Organometallic Chemistry", "Grignard Reagents"],
    hint: "Esters react with two equivalents of Grignard reagents. The intermediate ketone (benzophenone) is more electrophilic than the starting ester and is immediately attacked by a second equivalent.",
    textbookRef: "OpenStax Section 21.6",
    textbookUrl: "https://openstax.org/books/organic-chemistry/pages/21-6-carboxylic-acid-derivatives-reactions-with-grignard-reagents",
    options: [
      {
        text: "Triphenylmethanol",
        isCorrect: true,
        explanation: "Correct! Phenylmagnesium bromide (Grignard reagent) attacks the ester group of methyl benzoate ($\\ce{C6H5CO2CH3}$). The tetrahedral intermediate collapses to form benzophenone ($\\ce{Ph2C=O}$), which reacts immediately with a second equivalent of Grignard reagent. Acidic workup ($\\ce{H3O+}$) yields the tertiary alcohol triphenylmethanol."
      },
      {
        text: "Benzophenone",
        isCorrect: false,
        explanation: "Incorrect. Benzophenone is the intermediate ketone. However, because ketones are much more reactive than esters toward nucleophilic attack, benzophenone cannot be isolated and reacts rapidly with a second equivalent of the Grignard reagent."
      },
      {
        text: "Methyl 3-phenylbenzoate",
        isCorrect: false,
        explanation: "Incorrect. The Grignard reagent is a carbon nucleophile that attacks the electrophilic carbonyl carbon of the ester, not the aromatic ring."
      },
      {
        text: "Phenol",
        isCorrect: false,
        explanation: "Incorrect. Phenol is a single-ring aromatic alcohol. Esters react with Grignard reagents to yield tertiary alcohols containing three carbon ligands."
      }
    ]
  }
];

// App State variables
let activeMode = null; // 'OpenStax' or 'ACS'
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Records user choices: { questionId, chosenOptionIndex, isCorrect }
let activeChartInstance = null; // Global active Chart.js instance for the quiz screen

// Timer variables
let timerEnabled = true;
let timerDuration = 60; // in minutes
let timeRemaining = 0; // in seconds
let timeElapsed = 0; // in seconds
let timerInterval = null;

// Hints state
let hintsEnabled = true;
let hintRevealedForCurrentQuestion = false;

// SmilesDrawer Instance & Configuration options updated to prevent bulky labels
const options = {
  width: 600,
  height: 400,
  bondThickness: 1.5, // Sleek, thin bonds
  bondLength: 30, // Stretch bonds to prevent atom crowding
  bondSpacing: 4.0, // Closer double bonds
  fontSizeLarge: 14, // Milder atom label size
  fontSizeSmall: 10, // Proportional subscripts
  atomVisualization: 'default',
  theme: 'dark',
  themes: {
    dark: {
      C: '#ffffff',
      O: '#ff4d4d', // Red for Oxygen
      N: '#3399ff', // Blue for Nitrogen
      Cl: '#00cc66', // Green for Chlorine
      Br: '#c68642', // Brown/Amber for Bromine
      F: '#da70d6',
      I: '#a020f0',
      P: '#ff7f50',
      S: '#ffd700',
      B: '#ffc0cb',
      H: '#ffffff',
      bond: '#ffffff', // Solid white bonds (no gradients)
      background: 'transparent'
    }
  }
};

const smilesDrawer = new SmilesDrawer.SvgDrawer(options);

// Initial setup on window load
window.addEventListener('DOMContentLoaded', () => {
  if (typeof SmilesDrawer === 'undefined') {
    console.error("SmilesDrawer CDN could not be loaded.");
  }
});

// KaTeX rendering helper for dynamic contents
function renderMath(element) {
  if (typeof renderMathInElement !== 'undefined') {
    renderMathInElement(element || document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}



// Dynamic Reaction Scheme Engine rendering function
function renderDynamicScheme(schemeData, container, hideProducts = false) {
  if (!container) return;
  container.innerHTML = '';

  if (!schemeData) return;

  // Render Reactants
  if (schemeData.reactants && Array.isArray(schemeData.reactants)) {
    schemeData.reactants.forEach((smiles, idx) => {
      // Create SVG element for the reactant
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'smiles-render scheme-molecule');
      const uniqueId = `reactant-${Math.random().toString(36).substr(2, 9)}`;
      svg.setAttribute('id', uniqueId);
      svg.setAttribute('viewBox', '0 0 200 150');
      container.appendChild(svg);

      const localDrawer = new SmilesDrawer.SvgDrawer({
        ...options,
        width: 200,
        height: 150,
        fontSizeLarge: 7,
        fontSizeSmall: 5,
        bondLength: 15,
        bondThickness: 1.2,
        bondSpacing: 2.2
      });

      SmilesDrawer.parse(smiles, (tree) => {
        localDrawer.draw(tree, uniqueId, 'dark');
      }, (err) => {
        console.error("Reactant structure parsing error: ", err);
      });

      // Add a plus sign if it's not the last reactant
      if (idx < schemeData.reactants.length - 1) {
        const plusDiv = document.createElement('div');
        plusDiv.className = 'reaction-plus';
        plusDiv.textContent = '+';
        container.appendChild(plusDiv);
      }
    });
  }

  // Create Reaction Arrow
  const arrowContainer = document.createElement('div');
  arrowContainer.className = 'reaction-arrow-container';

  const reagentsDiv = document.createElement('div');
  reagentsDiv.className = 'reagents-text';
  if (schemeData.reagents) {
    const lines = schemeData.reagents.split('\n');
    lines.forEach(line => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'reagents-line';
      lineDiv.textContent = line;
      reagentsDiv.appendChild(lineDiv);
    });
  }

  const arrowWrapper = document.createElement('div');
  arrowWrapper.className = 'arrow-wrapper';

  const conditionsDiv = document.createElement('div');
  conditionsDiv.className = 'conditions-text';
  if (schemeData.conditions) {
    const lines = schemeData.conditions.split('\n');
    lines.forEach(line => {
      const lineDiv = document.createElement('div');
      lineDiv.className = 'conditions-line';
      lineDiv.textContent = line;
      conditionsDiv.appendChild(lineDiv);
    });
  }

  arrowContainer.appendChild(reagentsDiv);
  arrowContainer.appendChild(arrowWrapper);
  arrowContainer.appendChild(conditionsDiv);
  container.appendChild(arrowContainer);

  // Render Products
  if (hideProducts) {
    const placeholder = document.createElement('div');
    placeholder.className = 'product-placeholder';
    placeholder.textContent = '?';
    container.appendChild(placeholder);
  } else if (schemeData.products && Array.isArray(schemeData.products)) {
    schemeData.products.forEach((prod, idx) => {
      if (prod === '?') {
        const placeholder = document.createElement('div');
        placeholder.className = 'product-placeholder';
        placeholder.textContent = '?';
        container.appendChild(placeholder);
      } else {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'smiles-render scheme-molecule');
        const uniqueId = `product-${Math.random().toString(36).substr(2, 9)}`;
        svg.setAttribute('id', uniqueId);
        svg.setAttribute('viewBox', '0 0 200 150');
        container.appendChild(svg);

        const localDrawer = new SmilesDrawer.SvgDrawer({
          ...options,
          width: 200,
          height: 150,
          fontSizeLarge: 7,
          fontSizeSmall: 5,
          bondLength: 15,
          bondThickness: 1.2,
          bondSpacing: 2.2
        });

        SmilesDrawer.parse(prod, (tree) => {
          localDrawer.draw(tree, uniqueId, 'dark');
        }, (err) => {
          console.error("Product structure parsing error: ", err);
        });
      }

      // Add a plus sign if it's not the last product
      if (idx < schemeData.products.length - 1) {
        const plusDiv = document.createElement('div');
        plusDiv.className = 'reaction-plus';
        plusDiv.textContent = '+';
        container.appendChild(plusDiv);
      }
    });
  }

  // Parse math (KaTeX) on the reagents/conditions we just added
  renderMath(container);
}

// Dynamic Media Visual Engine Router
function renderMedia(media, container, isReview = false) {
  if (!container) return;
  container.innerHTML = '';
  if (!media) return;

  // Clean up global chart instance on quiz screen to prevent event listener leaks
  if (!isReview && activeChartInstance) {
    activeChartInstance.destroy();
    activeChartInstance = null;
  }

  if (media.type === 'spectroscopy') {
    const wrapper = document.createElement('div');
    wrapper.className = 'chart-container';
    const canvas = document.createElement('canvas');
    canvas.id = isReview ? `chart-spec-${Math.random().toString(36).substr(2, 9)}` : 'quiz-spec-chart';
    wrapper.appendChild(canvas);
    container.appendChild(wrapper);

    const ctx = canvas.getContext('2d');
    
    if (media.specType === 'ms') {
      const maxMass = Math.max(...media.dataPoints.map(p => p.x)) + 5;
      const allLabels = [];
      for (let i = 0; i <= maxMass; i++) allLabels.push(i);
      
      const dataMap = {};
      media.dataPoints.forEach(p => { dataMap[p.x] = p.y; });
      const fullData = allLabels.map(x => dataMap[x] || 0);

      const chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: allLabels,
          datasets: [{
            label: 'Relative Abundance (%)',
            data: fullData,
            backgroundColor: '#00b8ff',
            borderColor: '#00b8ff',
            borderWidth: 1,
            barThickness: 3,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              filter: function(tooltipItem) {
                return tooltipItem.raw > 0;
              },
              callbacks: {
                title: (context) => `m/z = ${context[0].label}`,
                label: (context) => {
                  return `Abundance: ${context.raw}%`;
                }
              }
            }
          },
          scales: {
            x: {
              type: 'category',
              position: 'bottom',
              offset: false,
              title: {
                display: true,
                text: 'm/z (Mass-to-Charge Ratio)',
                color: '#ffffff',
                font: { family: 'Outfit', weight: 'bold', size: 13 }
              },
              ticks: {
                color: '#a0a0ab',
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0,
                callback: function(value, index) {
                  if (allLabels[index] % 5 === 0) {
                    return allLabels[index];
                  }
                  return '';
                }
              },
              grid: {
                color: function(context) {
                  if (context.index % 5 === 0) return '#3f3f46';
                  return '#1e1e24';
                },
                lineWidth: function(context) {
                  return context.index % 5 === 0 ? 1.5 : 0.8;
                }
              }
            },
            y: {
              beginAtZero: true,
              max: 100,
              title: {
                display: true,
                text: 'Relative Abundance (%)',
                color: '#ffffff',
                font: { family: 'Outfit', weight: 'bold', size: 13 }
              },
              ticks: { color: '#a0a0ab' },
              grid: { color: '#27272a' }
            }
          }
        }
      });

      if (!isReview) {
        activeChartInstance = chartInstance;
      }
    } else if (media.specType === 'nmr') {
      const xMin = 0;
      const xMax = 12;
      const step = 0.01;
      const xValues = [];
      for (let x = xMin; x <= xMax; x = parseFloat((x + step).toFixed(2))) {
        xValues.push(x);
      }

      const peakComponents = [];
      media.dataPoints.forEach(dp => {
        const x0 = dp.x;
        const totalArea = dp.y; 
        const label = dp.label || 'singlet';
        
        let subPeaks = [];
        const J = 0.03; 
        
        if (label === 'singlet') {
          subPeaks.push({ x: x0, fraction: 1.0 });
        } else if (label === 'doublet') {
          subPeaks.push({ x: x0 - J/2, fraction: 0.5 });
          subPeaks.push({ x: x0 + J/2, fraction: 0.5 });
        } else if (label === 'triplet') {
          subPeaks.push({ x: x0 - J, fraction: 0.25 });
          subPeaks.push({ x: x0,     fraction: 0.50 });
          subPeaks.push({ x: x0 + J, fraction: 0.25 });
        } else if (label === 'quartet') {
          subPeaks.push({ x: x0 - 1.5*J, fraction: 0.125 });
          subPeaks.push({ x: x0 - 0.5*J, fraction: 0.375 });
          subPeaks.push({ x: x0 + 0.5*J, fraction: 0.375 });
          subPeaks.push({ x: x0 + 1.5*J, fraction: 0.125 });
        } else {
          subPeaks.push({ x: x0 - 2*J, fraction: 0.0625 });
          subPeaks.push({ x: x0 - J,   fraction: 0.25 });
          subPeaks.push({ x: x0,       fraction: 0.375 });
          subPeaks.push({ x: x0 + J,   fraction: 0.25 });
          subPeaks.push({ x: x0 + 2*J, fraction: 0.0625 });
        }

        subPeaks.forEach(sp => {
          peakComponents.push({
            xc: sp.x,
            height: totalArea * sp.fraction * 15, 
            sigma: 0.008 
          });
        });
      });

      const yValues = xValues.map(x => {
        let sum = 0;
        peakComponents.forEach(pc => {
          const exponent = -0.5 * Math.pow((x - pc.xc) / pc.sigma, 2);
          if (exponent > -10) {
            sum += pc.height * Math.exp(exponent);
          }
        });
        return sum;
      });

      const dotDataset = media.dataPoints.map(dp => {
        return { x: dp.x, y: dp.y * 15, rawInt: dp.y, rawLabel: dp.label };
      });

      const chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'NMR Spectrum',
              data: xValues.map((x, i) => ({ x: x, y: yValues[i] })),
              borderColor: '#00b8ff',
              borderWidth: 2,
              pointRadius: 0,
              tension: 0.1,
              showLine: true
            },
            {
              label: 'Signals',
              data: dotDataset,
              borderColor: '#ff1744',
              backgroundColor: '#ff1744',
              pointRadius: 6,
              pointHoverRadius: 8,
              showLine: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (context) => {
                  const item = context[0];
                  if (item.datasetIndex === 1) {
                    return `Chemical Shift: ${item.parsed.x} ppm`;
                  }
                  return `Shift: ${item.parsed.x} ppm`;
                },
                label: (context) => {
                  if (context.datasetIndex === 1) {
                    const raw = context.dataset.data[context.dataIndex];
                    return `Signal: ${raw.rawLabel} (${raw.rawInt}H)`;
                  }
                  return `Intensity: ${context.parsed.y.toFixed(1)}`;
                }
              }
            }
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              reverse: true,
              title: {
                display: true,
                text: 'Chemical Shift (ppm)',
                color: '#ffffff',
                font: { family: 'Outfit', weight: 'bold', size: 13 }
              },
              ticks: { color: '#a0a0ab' },
              grid: { color: '#27272a' },
              min: xMin,
              max: xMax
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Intensity (Arbitrary)',
                color: '#ffffff',
                font: { family: 'Outfit', weight: 'bold', size: 13 }
              },
              ticks: { color: '#a0a0ab' },
              grid: { color: '#27272a' }
            }
          }
        }
      });

      if (!isReview) {
        activeChartInstance = chartInstance;
      }
    }
  } else if (media.type === 'energyDiagram') {
    const wrapper = document.createElement('div');
    wrapper.className = 'chart-container';
    const canvas = document.createElement('canvas');
    canvas.id = isReview ? `chart-energy-${Math.random().toString(36).substr(2, 9)}` : 'quiz-energy-chart';
    wrapper.appendChild(canvas);
    container.appendChild(wrapper);

    const ctx = canvas.getContext('2d');

    const rEnergy = media.points[0].energy;
    const tsEnergy = media.points[1].energy;
    const pEnergy = media.points[2].energy;

    const curvePoints = [];
    const steps = 30; // 30 points per half, 60 points total

    // First half: Reactants to TS (starts with a flat reactant shelf, then rises steeply)
    for (let i = 0; i <= steps; i++) {
      const t = i / steps; // 0 to 1
      let energy;
      if (t < 0.6) {
        energy = rEnergy;
      } else {
        const u = (t - 0.6) / 0.4;
        energy = rEnergy + (tsEnergy - rEnergy) * (1 - Math.cos(u * Math.PI)) / 2;
      }
      curvePoints.push({ x: t, y: energy });
    }

    // Second half: TS to Products (falls steeply, then levels out into a flat product shelf)
    for (let i = 1; i <= steps; i++) {
      const t = i / steps; // 0 to 1
      let energy;
      if (t > 0.4) {
        energy = pEnergy;
      } else {
        const u = t / 0.4;
        energy = pEnergy + (tsEnergy - pEnergy) * (1 + Math.cos(u * Math.PI)) / 2;
      }
      curvePoints.push({ x: 1 + t, y: energy });
    }

    const chartInstance = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Energy Path',
            data: curvePoints,
            borderColor: '#00e676',
            backgroundColor: 'rgba(0, 230, 118, 0.05)',
            fill: true,
            tension: 0, // already smoothed mathematically
            borderWidth: 3,
            pointRadius: 0,
            showLine: true
          },
          {
            label: 'Key States',
            data: [
              { x: 0, y: rEnergy, stateLabel: media.points[0].state },
              { x: 1, y: tsEnergy, stateLabel: media.points[1].state },
              { x: 2, y: pEnergy, stateLabel: media.points[2].state }
            ],
            borderColor: '#00e676',
            backgroundColor: '#00e676',
            pointRadius: 8,
            pointHoverRadius: 10,
            showLine: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (context) => {
                if (!context || !context.length) return 'Reaction Progress';
                const item = context[0];
                if (item && item.datasetIndex === 1 && item.raw && item.raw.stateLabel) {
                  return item.raw.stateLabel;
                }
                if (item && item.parsed) {
                  const xVal = Math.round(item.parsed.x * 10) / 10;
                  if (xVal === 0 && media.points && media.points[0]) return media.points[0].state;
                  if (xVal === 1 && media.points && media.points[1]) return media.points[1].state;
                  if (xVal === 2 && media.points && media.points[2]) return media.points[2].state;
                }
                return 'Reaction Progress';
              },
              label: (context) => {
                if (!context || context.parsed === undefined || context.parsed.y === null) return '';
                return `Energy: ${context.parsed.y.toFixed(0)} kJ/mol`;
              }
            }
          }
        },
        scales: {
          x: {
            type: 'linear',
            min: 0,
            max: 2,
            title: {
              display: true,
              text: 'Reaction Progress',
              color: '#ffffff',
              font: { family: 'Outfit', weight: 'bold', size: 13 }
            },
            ticks: {
              color: '#a0a0ab',
              font: { family: 'Outfit', weight: 'bold', size: 11 },
              callback: function(value) {
                const val = Math.round(value * 10) / 10;
                if (val === 0 && media.points && media.points[0]) return media.points[0].state;
                if (val === 1 && media.points && media.points[1]) return media.points[1].state;
                if (val === 2 && media.points && media.points[2]) return media.points[2].state;
                return '';
              }
            },
            grid: { color: '#27272a' }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Potential Energy (kJ/mol)',
              color: '#ffffff',
              font: { family: 'Outfit', weight: 'bold', size: 13 }
            },
            ticks: { color: '#a0a0ab' },
            grid: { color: '#27272a' },
            max: Math.max(rEnergy, tsEnergy, pEnergy) + 30
          }
        }
      }
    });

    if (!isReview) {
      activeChartInstance = chartInstance;
    }
  } else if (media.type === 'roadmap') {
    const xs = media.nodes.map(n => n.x);
    const ys = media.nodes.map(n => n.y);
    const maxX = Math.max(...xs, 1);
    const maxY = Math.max(...ys, 1);
    
    const roadmapContainer = document.createElement('div');
    roadmapContainer.className = 'roadmap-container';
    
    const grid = document.createElement('div');
    grid.className = 'roadmap-grid';
    grid.style.gridTemplateColumns = `repeat(${maxX}, 150px)`;
    grid.style.gridTemplateRows = `repeat(${maxY}, 110px)`;
    
    roadmapContainer.appendChild(grid);
    container.appendChild(roadmapContainer);
    
    media.nodes.forEach(node => {
      const nodeEl = document.createElement('div');
      nodeEl.className = 'roadmap-node';
      nodeEl.style.gridColumn = node.x;
      nodeEl.style.gridRow = node.y;
      nodeEl.setAttribute('data-coord', `${node.x},${node.y}`);
      
      const canvasId = `roadmap-canvas-${Math.random().toString(36).substr(2, 9)}`;
      
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'smiles-render');
      svg.setAttribute('id', canvasId);
      svg.setAttribute('viewBox', '0 0 150 110');
      svg.style.width = '100%';
      svg.style.height = '100%';
      nodeEl.appendChild(svg);
      grid.appendChild(nodeEl);
      
      const nodeDrawer = new SmilesDrawer.SvgDrawer({
        ...options,
        width: 150,
        height: 110,
        fontSizeLarge: 8,
        fontSizeSmall: 6,
        bondLength: 14,
        bondThickness: 1.2,
        bondSpacing: 2.0
      });
      
      SmilesDrawer.parse(node.smiles, (tree) => {
        nodeDrawer.draw(tree, canvasId, 'dark');
      }, (err) => {
        console.error("Roadmap node parsing error: ", err);
      });
    });
    
    const svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOverlay.setAttribute('class', 'roadmap-arrows-overlay');
    grid.appendChild(svgOverlay);
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', 'roadmap-arrowhead');
    marker.setAttribute('viewBox', '0 0 10 10');
    marker.setAttribute('refX', '6');
    marker.setAttribute('refY', '5');
    marker.setAttribute('markerWidth', '6');
    marker.setAttribute('markerHeight', '6');
    marker.setAttribute('orient', 'auto-start-reverse');
    
    const markerPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    markerPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
    markerPath.setAttribute('fill', '#ffffff');
    marker.appendChild(markerPath);
    defs.appendChild(marker);
    svgOverlay.appendChild(defs);
    
    setTimeout(() => {
      const gridRect = grid.getBoundingClientRect();
      
      media.edges.forEach(edge => {
        const fromNode = grid.querySelector(`[data-coord="${edge.from[0]},${edge.from[1]}"]`);
        const toNode = grid.querySelector(`[data-coord="${edge.to[0]},${edge.to[1]}"]`);
        
        if (fromNode && toNode) {
          const fromRect = fromNode.getBoundingClientRect();
          const toRect = toNode.getBoundingClientRect();
          
          const x1 = fromRect.left - gridRect.left + fromRect.width / 2;
          const y1 = fromRect.top - gridRect.top + fromRect.height / 2;
          const x2 = toRect.left - gridRect.left + toRect.width / 2;
          const y2 = toRect.top - gridRect.top + toRect.height / 2;
          
          const angle = Math.atan2(y2 - y1, x2 - x1);
          
          const fromOffset = 70; 
          const toOffset = 70;
          
          const startX = x1 + Math.cos(angle) * fromOffset;
          const startY = y1 + Math.sin(angle) * (fromOffset * 0.7);
          const endX = x2 - Math.cos(angle) * toOffset;
          const endY = y2 - Math.sin(angle) * (toOffset * 0.7);
          
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', startX);
          line.setAttribute('y1', startY);
          line.setAttribute('x2', endX);
          line.setAttribute('y2', endY);
          line.setAttribute('stroke', '#ffffff');
          line.setAttribute('stroke-width', '2');
          line.setAttribute('marker-end', 'url(#roadmap-arrowhead)');
          svgOverlay.appendChild(line);
          
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          
          const label = document.createElement('div');
          label.className = 'roadmap-reagent-label';
          label.style.position = 'absolute';
          label.style.left = `${midX}px`;
          label.style.top = `${midY}px`;
          label.style.transform = 'translate(-50%, -130%)';
          label.textContent = edge.reagents;
          
          grid.appendChild(label);
          renderMath(label);
        }
      });
    }, 100);
  } else if (media.type === 'fischer') {
    const fischerContainer = document.createElement('div');
    fischerContainer.className = 'fischer-container';
    
    const fischerGrid = document.createElement('div');
    fischerGrid.className = 'fischer-grid';
    
    const lineH = document.createElement('div');
    lineH.className = 'fischer-line-h';
    const lineV = document.createElement('div');
    lineV.className = 'fischer-line-v';
    fischerGrid.appendChild(lineH);
    fischerGrid.appendChild(lineV);
    
    const splitFischerSub = (str, dir) => {
      if (!str) return { center: '', rest: '' };
      if (str.startsWith('\\text{')) {
        const contentMatch = str.match(/^\\text\{([^}]+)\}(.*)$/);
        if (contentMatch) {
          const content = contentMatch[1]; 
          const afterText = contentMatch[2]; 
          
          if (dir === 'left') {
            const lastLetterMatch = content.match(/^(.*)([A-Z][a-z]?)$/);
            if (lastLetterMatch) {
              const restContent = lastLetterMatch[1]; 
              const bondAtom = lastLetterMatch[2]; 
              const centerPart = `\\text{${bondAtom}}`;
              const restPart = restContent ? `\\text{${restContent}}` : '';
              return { center: centerPart, rest: restPart + afterText };
            }
          } else {
            const firstLetterMatch = content.match(/^([A-Z][a-z]?)(.*)$/);
            if (firstLetterMatch) {
              const bondAtom = firstLetterMatch[1]; 
              const restContent = firstLetterMatch[2]; 
              const centerPart = `\\text{${bondAtom}}`;
              const restPart = (restContent ? `\\text{${restContent}}` : '') + afterText;
              return { center: centerPart, rest: restPart };
            }
          }
        }
      }
      return { center: str, rest: '' };
    };

    const createSub = (text, gridColumn, gridRow, dir = 'right') => {
      const el = document.createElement('div');
      el.className = 'fischer-substituent';
      el.style.gridColumn = gridColumn;
      el.style.gridRow = gridRow;
      
      const split = splitFischerSub(text, dir);
      if (split.rest) {
        const wrapper = document.createElement('span');
        wrapper.className = 'fischer-sub-wrapper';
        
        const centerSpan = document.createElement('span');
        centerSpan.textContent = `$${split.center}$`;
        wrapper.appendChild(centerSpan);
        
        const restSpan = document.createElement('span');
        restSpan.className = dir === 'left' ? 'fischer-sub-rest-left' : 'fischer-sub-rest-right';
        restSpan.textContent = `$${split.rest}$`;
        wrapper.appendChild(restSpan);
        
        el.appendChild(wrapper);
      } else {
        el.textContent = text ? `$${text}$` : '';
      }
      return el;
    };
    
    const topEl = createSub(media.top, '2', '1', 'right');
    const bottomEl = createSub(media.bottom, '2', '3', 'right');
    const leftEl = createSub(media.left, '1', '2', 'left');
    const rightEl = createSub(media.right, '3', '2', 'right');
    
    fischerGrid.appendChild(topEl);
    fischerGrid.appendChild(bottomEl);
    fischerGrid.appendChild(leftEl);
    fischerGrid.appendChild(rightEl);
    
    if (media.center) {
      const centerEl = document.createElement('div');
      centerEl.className = 'fischer-center';
      centerEl.style.gridColumn = '2';
      centerEl.style.gridRow = '2';
      centerEl.textContent = `$${media.center}$`;
      fischerGrid.appendChild(centerEl);
    }
    
    fischerContainer.appendChild(fischerGrid);
    container.appendChild(fischerContainer);
    renderMath(fischerContainer);
  }
}

// Mode Selection Handler
function selectMode(mode) {
  activeMode = mode;

  // Toggle selection styling
  const openStaxCard = document.getElementById('mode-openstax');
  const acsCard = document.getElementById('mode-acs');

  if (mode === 'OpenStax') {
    openStaxCard.classList.add('selected');
    acsCard.classList.remove('selected');
    document.getElementById('timer-duration').value = 60;
    document.getElementById('filter-section-title').textContent = "Filter by Chapters";
  } else if (mode === 'ACS') {
    acsCard.classList.add('selected');
    openStaxCard.classList.remove('selected');
    document.getElementById('timer-duration').value = 110;
    document.getElementById('filter-section-title').textContent = "Filter by Topics";
  }

  // Compile and render the granular filtering checklist
  renderFilters();

  // Display the configuration panel
  document.getElementById('config-panel').style.display = 'block';

  // Update Start button state based on checklists
  updateStartButtonState();

  // Scroll slightly to reveal configuration
  document.getElementById('config-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Render dynamic checklists for Chapters/Topics based on selected mode
function renderFilters() {
  const filterGrid = document.getElementById('filter-checkboxes-grid');
  filterGrid.innerHTML = '';

  const uniqueFilters = new Set();
  questionsDatabase.forEach(q => {
    if (q.examType === activeMode) {
      if (activeMode === 'OpenStax' && q.chapter) {
        uniqueFilters.add(q.chapter);
      } else if (activeMode === 'ACS' && q.topic) {
        uniqueFilters.add(q.topic);
      }
    }
  });

  if (uniqueFilters.size > 0) {
    let index = 0;
    uniqueFilters.forEach(filterVal => {
      const wrapper = document.createElement('div');
      wrapper.className = 'checkbox-wrapper';
      wrapper.innerHTML = `
        <input type="checkbox" class="filter-checkbox" id="filter-item-${index}" value="${filterVal}" checked onchange="updateStartButtonState()">
        <label for="filter-item-${index}">${filterVal}</label>
      `;
      filterGrid.appendChild(wrapper);
      index++;
    });
    document.getElementById('filter-section').style.display = 'block';
  } else {
    document.getElementById('filter-section').style.display = 'none';
  }
}

// Check/Uncheck all filters
function selectAllFilters(status) {
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  checkboxes.forEach(cb => {
    cb.checked = status;
  });
  updateStartButtonState();
}

// Enable/Disable Start button based on whether filters are selected
function updateStartButtonState() {
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  const startBtn = document.getElementById('btn-start-test');

  let anyChecked = false;
  checkboxes.forEach(cb => {
    if (cb.checked) anyChecked = true;
  });

  startBtn.disabled = !anyChecked;
}

// Toggle Timer Duration Input
function toggleTimerInput() {
  const checkbox = document.getElementById('enable-timer');
  const inputContainer = document.getElementById('duration-input-container');

  if (checkbox.checked) {
    inputContainer.style.display = 'flex';
  } else {
    inputContainer.style.display = 'none';
  }
}

// Shuffle helper (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Start Practice Test
function startPracticeTest() {
  if (!activeMode) return;

  // Get active filters (checked chapters/topics)
  const checkedCheckboxes = document.querySelectorAll('.filter-checkbox:checked');
  const selectedFilterValues = Array.from(checkedCheckboxes).map(cb => cb.value);

  // Filter questions by selected mode AND selected chapters/topics
  let filtered = questionsDatabase.filter(q => {
    if (q.examType !== activeMode) return false;

    if (activeMode === 'OpenStax') {
      return selectedFilterValues.includes(q.chapter);
    } else {
      return selectedFilterValues.includes(q.topic);
    }
  });

  if (filtered.length === 0) {
    alert("No questions found matching your chapter/topic selections.");
    return;
  }

  // Shuffle questions
  filtered = shuffleArray(filtered);

  // Determine question count limits
  const numQuestionsVal = document.getElementById('num-questions').value;
  if (numQuestionsVal !== 'all') {
    const count = parseInt(numQuestionsVal, 10);
    quizQuestions = filtered.slice(0, Math.min(count, filtered.length));
  } else {
    quizQuestions = filtered;
  }

  // Configure timer
  timerEnabled = document.getElementById('enable-timer').checked;
  if (timerEnabled) {
    const durationInput = parseInt(document.getElementById('timer-duration').value, 10);
    timerDuration = (isNaN(durationInput) || durationInput <= 0) ? 60 : durationInput;
    timeRemaining = timerDuration * 60;
    document.getElementById('timer-container').style.display = 'flex';
  } else {
    document.getElementById('timer-container').style.display = 'none';
  }

  // Configure Hints
  hintsEnabled = document.getElementById('enable-hints').checked;

  // Reset quiz states
  currentQuestionIndex = 0;
  score = 0;
  timeElapsed = 0;
  userAnswers = [];

  // Show header indicators & progress bar
  document.getElementById('app-header').classList.add('in-quiz');
  document.getElementById('header-status-group').style.display = 'flex';
  document.getElementById('progress-container').style.display = 'block';
  document.getElementById('score-display').textContent = `0/${quizQuestions.length}`;
  updateProgressBar();

  // Start the timers
  startTimerLoop();

  // Swap screens
  switchScreen('quiz-screen');

  // Load first question
  loadQuestion(0);
}

// Switch Screens helper
function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Timer Loop
function startTimerLoop() {
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeElapsed++;

    if (timerEnabled) {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining <= 60) {
        document.getElementById('timer-container').classList.add('warning');
      } else {
        document.getElementById('timer-container').classList.remove('warning');
      }

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Redirecting to results.");
        endQuiz();
      }
    }
  }, 1000);
}

// Stop Timer
function stopTimerLoop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Format Seconds to MM:SS
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Update display
function updateTimerDisplay() {
  const display = document.getElementById('timer-display');
  if (timerEnabled) {
    display.textContent = formatTime(timeRemaining);
  } else {
    display.textContent = formatTime(timeElapsed);
  }
}

// Update Progress Bar
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar-fill');
  const percent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = `${percent}%`;
}

// Helper to determine active question graphic type for labels
function getQuestionTypeLabel(question) {
  if (!question) return 'Chemical Structure';
  if (question.media) {
    if (question.media.type === 'spectroscopy') {
      return question.media.specType === 'ms' ? 'Mass Spectrum' : 'NMR Spectrum';
    } else if (question.media.type === 'energyDiagram') {
      return 'Reaction Coordinate';
    } else if (question.media.type === 'fischer') {
      return 'Fischer Projection';
    } else if (question.media.type === 'roadmap') {
      return 'Reaction Roadmap';
    }
  } else if (question.scheme) {
    return 'Reaction Scheme';
  }
  return 'Chemical Structure';
}

// Load Question Details
function loadQuestion(index) {
  currentQuestionIndex = index;
  updateProgressBar();

  const question = quizQuestions[index];
  
  // Update the structure card label dynamically
  const labelEl = document.getElementById('structure-card-label');
  if (labelEl) {
    labelEl.textContent = getQuestionTypeLabel(question);
  }

  // Update UI Elements
  document.getElementById('quiz-mode-badge').textContent = `${question.examType} Prep`;
  document.getElementById('question-tracker-text').textContent = `Question ${index + 1} of ${quizQuestions.length}`;

  // Question text
  document.getElementById('question-text').textContent = question.questionText;

  // Hide feedback card until option selected
  document.getElementById('feedback-card').style.display = 'none';

  // Configure Helper UI (Hints & References)
  const hintBtn = document.getElementById('btn-show-hint');
  const refBtn = document.getElementById('btn-textbook-ref');
  const refLabel = document.getElementById('textbook-ref-label');
  const hintBox = document.getElementById('hint-box');

  // Reset Hint states
  hintRevealedForCurrentQuestion = false;
  hintBox.style.display = 'none';
  hintBtn.disabled = false;
  hintBtn.querySelector('span').textContent = "Show Hint";

  // Toggle Hint button visibility
  if (hintsEnabled && question.hint) {
    hintBtn.style.display = 'inline-flex';
  } else {
    hintBtn.style.display = 'none';
  }

  // Toggle Textbook Reference button visibility and assign link dynamically
  if (question.textbookRef && question.textbookUrl) {
    refBtn.style.display = 'inline-flex';
    refBtn.href = question.textbookUrl;
    refLabel.textContent = `Read: ${question.textbookRef}`;
  } else {
    refBtn.style.display = 'none';
    refBtn.removeAttribute('href');
  }

  // Toggle container visibility
  if ((hintsEnabled && question.hint) || (question.textbookRef && question.textbookUrl)) {
    document.getElementById('quiz-helper-section').style.display = 'flex';
  } else {
    document.getElementById('quiz-helper-section').style.display = 'none';
  }

  // Render Chemical Structure or Reaction Scheme
  const stage = document.getElementById('reaction-stage');
  stage.innerHTML = '';

  if (question.media) {
    document.getElementById('structure-card').style.display = 'flex';
    renderMedia(question.media, stage);
  } else if (question.scheme) {
    document.getElementById('structure-card').style.display = 'flex';
    renderDynamicScheme({ ...question.scheme, products: ['?'] }, stage);
  } else if (question.questionSmiles && smilesDrawer) {
    document.getElementById('structure-card').style.display = 'flex';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'smiles-render');
    svg.setAttribute('id', 'molecule-svg');
    svg.setAttribute('viewBox', '0 0 600 400');
    svg.style.width = '100%';
    svg.style.height = '100%';
    stage.appendChild(svg);

    SmilesDrawer.parse(question.questionSmiles, (tree) => {
      smilesDrawer.draw(tree, 'molecule-svg', 'dark');
    }, (err) => {
      console.error("Structure parsing error: ", err);
      document.getElementById('structure-card').style.display = 'none';
    });
  } else {
    document.getElementById('structure-card').style.display = 'none';
  }

  // Populate options grid
  const optionsGrid = document.getElementById('options-grid');
  optionsGrid.innerHTML = '';

  const markers = ['A', 'B', 'C', 'D'];
  question.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.onclick = () => selectOption(idx);

    btn.innerHTML = `
      <span class="option-marker">${markers[idx]}</span>
      <span class="option-text"></span>
    `;
    btn.querySelector('.option-text').textContent = opt.text;

    optionsGrid.appendChild(btn);
  });

  // Trigger KaTeX parsing on the entire quiz card
  renderMath(document.getElementById('quiz-screen'));
}

// Reveal Hint Box
function toggleHint() {
  if (hintRevealedForCurrentQuestion) return;

  const question = quizQuestions[currentQuestionIndex];
  const hintText = document.getElementById('hint-text');
  const hintBox = document.getElementById('hint-box');
  const showHintBtn = document.getElementById('btn-show-hint');

  hintText.textContent = question.hint;
  hintBox.style.display = 'flex';
  hintRevealedForCurrentQuestion = true;

  showHintBtn.disabled = true;
  showHintBtn.querySelector('span').textContent = "Hint Revealed";

  renderMath(hintBox);
}

// Option selection handler
function selectOption(optionIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const optionsGrid = document.getElementById('options-grid');
  const buttons = optionsGrid.querySelectorAll('.option-btn');

  // Disable options
  buttons.forEach(btn => btn.disabled = true);

  const chosenOption = question.options[optionIndex];
  const isCorrect = chosenOption.isCorrect;

  // Record answer
  userAnswers.push({
    questionId: question.id,
    chosenOptionIndex: optionIndex,
    isCorrect: isCorrect
  });

  // Apply visual highlights to choices
  buttons.forEach((btn, idx) => {
    const opt = question.options[idx];

    if (idx === optionIndex) {
      if (isCorrect) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('incorrect');
      }
    } else {
      btn.classList.add('dimmed');
      if (opt.isCorrect) {
        btn.classList.add('reveal-correct');
      }
    }
  });

  // Disable Show Hint button if unused
  document.getElementById('btn-show-hint').disabled = true;

  // Reveal correct product(s) in reaction scheme if applicable
  if (question.scheme) {
    const stage = document.getElementById('reaction-stage');
    renderDynamicScheme(question.scheme, stage);
  }

  // Update live score
  document.getElementById('score-display').textContent = `${score}/${quizQuestions.length}`;

  // Update progress bar
  const progressBar = document.getElementById('progress-bar-fill');
  const percent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBar.style.width = `${percent}%`;

  // Populate and show the feedback card
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackBadge = document.getElementById('feedback-badge');
  const explanationBody = document.getElementById('explanation-body');
  const nextBtn = document.getElementById('btn-next-question');

  if (isCorrect) {
    feedbackBadge.textContent = "Correct";
    feedbackBadge.className = "feedback-badge correct";
  } else {
    feedbackBadge.textContent = "Incorrect";
    feedbackBadge.className = "feedback-badge incorrect";
  }

  explanationBody.textContent = chosenOption.explanation;

  const nextSpan = nextBtn.querySelector('span');
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextSpan.textContent = "View Results";
  } else {
    nextSpan.textContent = "Next Question";
  }

  feedbackCard.style.display = 'block';

  renderMath(feedbackCard);

  // Scroll feedback card into view
  feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Load next question or trigger quiz finish
function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    endQuiz();
  }
}

// End Quiz, gather stats, display Results Screen
function endQuiz() {
  stopTimerLoop();

  const percentage = Math.round((score / quizQuestions.length) * 100);
  const circle = document.getElementById('results-percentage-circle');
  const text = document.getElementById('results-percentage-text');

  text.textContent = `${percentage}%`;

  const offset = 339.29 - (339.29 * percentage) / 100;
  circle.style.strokeDashoffset = offset;

  document.getElementById('results-summary-text').textContent = `You got ${score} out of ${quizQuestions.length} questions correct.`;
  document.getElementById('results-time-taken').textContent = formatTime(timeElapsed);
  document.getElementById('results-mode').textContent = `${activeMode} Prep`;

  document.getElementById('header-status-group').style.display = 'none';
  document.getElementById('progress-container').style.display = 'none';

  buildConceptMastery();

  const reviewMistakesBtn = document.getElementById('btn-review-mistakes');
  if (score === quizQuestions.length) {
    reviewMistakesBtn.style.display = 'none';
  } else {
    reviewMistakesBtn.style.display = 'inline-flex';
  }

  switchScreen('results-screen');
}

// Analyze wrong answers to populate Concept Mastery tags
function buildConceptMastery() {
  const masteryContainer = document.getElementById('mastery-container');
  masteryContainer.innerHTML = '';

  const allTestedTags = new Set();
  quizQuestions.forEach(q => {
    if (q.tags) q.tags.forEach(t => allTestedTags.add(t));
  });

  const tagMistakeCount = {};
  allTestedTags.forEach(tag => {
    tagMistakeCount[tag] = 0;
  });

  userAnswers.forEach(ans => {
    if (!ans.isCorrect) {
      const q = quizQuestions.find(quest => quest.id === ans.questionId);
      if (q && q.tags) {
        q.tags.forEach(tag => {
          tagMistakeCount[tag]++;
        });
      }
    }
  });

  allTestedTags.forEach(tag => {
    const mistakes = tagMistakeCount[tag];
    const item = document.createElement('div');
    item.className = 'mastery-item';

    if (mistakes === 0) {
      item.innerHTML = `
        <span class="mastery-name">${tag}</span>
        <span class="mastery-status mastered">Mastered</span>
      `;
    } else {
      const mistakeLabel = mistakes === 1 ? '1 mistake' : `${mistakes} mistakes`;
      item.innerHTML = `
        <span class="mastery-name">${tag}</span>
        <span class="mastery-status needs-work">Needs Work (${mistakeLabel})</span>
      `;
    }

    masteryContainer.appendChild(item);
  });
}

// Build scrollable list of mistake cards
function showMistakesReview() {
  const mistakesList = document.getElementById('mistakes-list');
  mistakesList.innerHTML = '';

  const wrongAnswers = userAnswers.filter(ans => !ans.isCorrect);

  wrongAnswers.forEach((ans, index) => {
    const q = quizQuestions.find(quest => quest.id === ans.questionId);
    if (!q) return;

    const card = document.createElement('div');
    card.className = 'mistake-card';

    const markers = ['A', 'B', 'C', 'D'];

    let optionsHtml = '';
    q.options.forEach((opt, optIdx) => {
      let pillClass = 'mistake-option-pill';

      if (optIdx === ans.chosenOptionIndex) {
        pillClass += ' user-incorrect';
      } else if (opt.isCorrect) {
        pillClass += ' correct-choice';
      }

      optionsHtml += `
        <div class="${pillClass}">
          <span class="marker">${markers[optIdx]}</span>
          <span class="text">${opt.text}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="mistake-card-header">
        <span class="badge">${q.examType} Prep</span>
        <span class="question-tracker">Mistake #${index + 1}</span>
      </div>
      
      <h3 class="mistake-question-text">${q.questionText}</h3>
      
      <div class="mistake-content-split">
        <div class="structure-card">
          <div class="structure-label">${getQuestionTypeLabel(q)}</div>
          <div class="reaction-stage" id="mistake-stage-${q.id}"></div>
        </div>
        
        <div class="mistake-options-list">
          ${optionsHtml}
        </div>
      </div>
      
      <div class="mistake-explanation-box">
        <h4>Explanation</h4>
        <p>${q.options[ans.chosenOptionIndex].explanation}</p>
        <p style="margin-top: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 0.5rem;">
          <strong>Correct Answer explanation:</strong> ${q.options.find(o => o.isCorrect).explanation}
        </p>
      </div>
    `;

    mistakesList.appendChild(card);
  });

  // Render chemistry drawings or dynamic charts/projections for mistakes
  wrongAnswers.forEach(ans => {
    const q = quizQuestions.find(quest => quest.id === ans.questionId);
    if (!q) return;

    const stage = document.getElementById(`mistake-stage-${q.id}`);
    if (!stage) return;

    if (q.media) {
      renderMedia(q.media, stage, true);
    } else if (q.scheme) {
      renderDynamicScheme(q.scheme, stage);
    } else if (q.questionSmiles && smilesDrawer) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'smiles-render');
      svg.setAttribute('id', `mistake-svg-${q.id}`);
      svg.setAttribute('viewBox', '0 0 250 250');
      svg.style.width = '100%';
      svg.style.height = '100%';
      stage.appendChild(svg);

      SmilesDrawer.parse(q.questionSmiles, (tree) => {
        smilesDrawer.draw(tree, `mistake-svg-${q.id}`, 'dark');
      }, (err) => {
        console.error("Structure parsing error in review: ", err);
      });
    }
  });

  renderMath(mistakesList);

  switchScreen('mistakes-screen');
}

// Navigate back to results screen
function backToResults() {
  switchScreen('results-screen');
}

// Reset App state to Welcome Screen
function resetApp() {
  stopTimerLoop();

  document.getElementById('app-header').classList.remove('in-quiz');
  document.getElementById('header-status-group').style.display = 'none';
  document.getElementById('progress-container').style.display = 'none';
  document.getElementById('timer-container').classList.remove('warning');

  activeMode = null;
  document.getElementById('mode-openstax').classList.remove('selected');
  document.getElementById('mode-acs').classList.remove('selected');
  document.getElementById('config-panel').style.display = 'none';

  switchScreen('start-screen');
}

// Prompt user for confirmation before quitting the quiz and returning to home screen
function confirmQuitQuiz() {
  const confirmQuit = confirm("Are you sure you want to quit this practice test and return to the main menu? Your active progress will be lost.");
  if (confirmQuit) {
    resetApp();
  }
}
