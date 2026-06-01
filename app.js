// Organic Chemistry III Practice Questions Database
const questionsDatabase = [
  {
    id: 1,
    examType: "OpenStax",
    chapter: "Ch 26: Amino Acids",
    questionText: "Match each amino acid structure to its correct name by selecting from the dropdowns.",
    interactionType: "matching-list",
    matchItems: [
      { smiles: "NCC(=O)O", correctAnswer: "Glycine" },
      { smiles: "N[C@@H](C)C(=O)O", correctAnswer: "Alanine" },
      { smiles: "N[C@@H](CC(C)C)C(=O)O", correctAnswer: "Valine" },
      { smiles: "N[C@@H](CO)C(=O)O", correctAnswer: "Serine" },
      { smiles: "N[C@@H](Cc1ccccc1)C(=O)O", correctAnswer: "Phenylalanine" }
    ],
    matchOptions: ["Glycine", "Alanine", "Valine", "Serine", "Phenylalanine"],
    tags: ["Amino Acids", "Matching"],
    hint: "Look for distinguishing side chains: no side chain (Gly), methyl (Ala), isopropyl (Val), hydroxymethyl (Ser), benzyl (Phe).",
    textbookRef: "OpenStax Section 26.1",
    textbookUrl: "#",
    options: [
      { text: "All matched correctly", isCorrect: true, explanation: "Glycine has no side chain (H). Alanine has a methyl group. Valine has an isopropyl group. Serine has a hydroxymethyl group. Phenylalanine has a benzyl group." }
    ]
  },
  {
    id: 2,
    examType: "OpenStax",
    chapter: "Ch 25: Carbohydrates",
    questionText: "Identify each D-aldohexose Fischer projection by selecting its name from the dropdown.",
    interactionType: "matching-grid",
    gridColumns: 4,
    gridItems: [
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Glucose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Galactose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Mannose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Allose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Altrose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }] }, correctAnswer: "D-Gulose" },  
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Idose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Talose" }
    ],
    gridOptions: ["D-Glucose", "D-Galactose", "D-Mannose", "D-Allose", "D-Altrose", "D-Gulose", "D-Idose", "D-Talose"],
    tags: ["Carbohydrates", "Fischer Projections", "D-Aldohexoses"],
    hint: "Remember the mnemonic: All Altruists Gladly Make Gum In Gallon Tanks. The OH pattern on C2-C5 distinguishes each sugar.",
    textbookRef: "OpenStax Section 25.2",
    textbookUrl: "#",
    options: [
      { text: "All matched correctly", isCorrect: true, explanation: "The 8 D-aldohexoses differ only in the stereochemistry at C2, C3, C4, and C5. D-Glucose: R-L-R-R. D-Galactose: R-L-L-R. D-Mannose: L-L-R-R. D-Allose: R-R-R-R. D-Altrose: R-R-L-R. D-Gulose: R-L-L-L. D-Idose: L-R-L-R. D-Talose: L-L-L-R." }
    ]
  },
  {
    id: 3,
    examType: "ACS",
    topic: "Amines and Heterocycles",
    questionText: "Rank the following amines in order of increasing basicity (weakest base → strongest base) using the dropdowns below.",
    interactionType: "ranking",
    rankItems: [
      { smiles: "Nc1ccccc1", label: "Aniline" },
      { smiles: "NC1CCCCC1", label: "Cyclohexylamine" },
      { smiles: "Nc1ccc([N+](=O)[O-])cc1", label: "p-Nitroaniline" },
      { smiles: "CCNCC", label: "Diethylamine" }
    ],
    correctRanking: ["C", "A", "B", "D"],
    tags: ["Amines", "Basicity", "Ranking"],
    hint: "Aromatic amines are weaker bases than aliphatic amines. Electron-withdrawing groups (like -NO₂) further reduce basicity. Secondary aliphatic amines are among the strongest.",
    textbookRef: "OpenStax Section 24.3",
    textbookUrl: "#",
    options: [
      { text: "C < A < B < D", isCorrect: true, explanation: "p-Nitroaniline (C) is the weakest base — the nitro group strongly withdraws electron density by resonance. Aniline (A) is next — the benzene ring delocalizes the nitrogen lone pair. Cyclohexylamine (B) is a simple aliphatic amine with no resonance delocalization. Diethylamine (D) is the strongest — two electron-donating alkyl groups increase basicity, and secondary amines are generally stronger bases than primary." }
    ]
  },
  {
    id: 4,
    examType: "OpenStax",
    chapter: "Ch 25: Carbohydrates",
    questionText: "Identify each glucopyranose anomer shown in the Haworth projections below.",
    interactionType: "matching-grid",
    gridColumns: 2,
    gridItems: [
      { media: { type: "haworth", c1: { bottom: "\\text{OH}", top: "\\text{H}" }, c2: { bottom: "\\text{H}", top: "\\text{OH}" }, c3: { bottom: "\\text{OH}", top: "\\text{H}" }, c4: { bottom: "\\text{H}", top: "\\text{OH}" }, c5: { top: "\\text{CH}_2\\text{OH}" } }, correctAnswer: "α-D-Glucopyranose" },
      { media: { type: "haworth", c1: { bottom: "\\text{H}", top: "\\text{OH}" }, c2: { bottom: "\\text{H}", top: "\\text{OH}" }, c3: { bottom: "\\text{OH}", top: "\\text{H}" }, c4: { bottom: "\\text{H}", top: "\\text{OH}" }, c5: { top: "\\text{CH}_2\\text{OH}" } }, correctAnswer: "β-D-Glucopyranose" }
    ],
    gridOptions: ["α-D-Glucopyranose", "β-D-Glucopyranose", "α-D-Galactopyranose", "β-D-Galactopyranose"],
    tags: ["Carbohydrates", "Haworth Projections", "Anomers"],
    hint: "In α-anomers, the anomeric hydroxyl at C1 is trans (axial/down in Haworth) to the CH₂OH group. In β-anomers, it is cis (equatorial/up in Haworth).",
    textbookRef: "OpenStax Section 25.5",
    textbookUrl: "#",
    options: [
      { text: "All matched correctly", isCorrect: true, explanation: "In the α-anomer, the OH on C1 points downward (same side as the ring oxygen's reference plane). In the β-anomer, the C1 OH points upward. Both share the same D-glucose configuration at C2-C5." }
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

  if (media.type === 'scheme') {
    renderDynamicScheme(isReview ? media.schemeData : { ...media.schemeData, products: ['?'] }, container, !isReview);
  } else if (media.type === 'spectroscopy') {
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
              filter: function (tooltipItem) {
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
                callback: function (value, index) {
                  if (allLabels[index] % 5 === 0) {
                    return allLabels[index];
                  }
                  return '';
                }
              },
              grid: {
                color: function (context) {
                  if (context.index % 5 === 0) return '#3f3f46';
                  return '#1e1e24';
                },
                lineWidth: function (context) {
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
          subPeaks.push({ x: x0 - J / 2, fraction: 0.5 });
          subPeaks.push({ x: x0 + J / 2, fraction: 0.5 });
        } else if (label === 'triplet') {
          subPeaks.push({ x: x0 - J, fraction: 0.25 });
          subPeaks.push({ x: x0, fraction: 0.50 });
          subPeaks.push({ x: x0 + J, fraction: 0.25 });
        } else if (label === 'quartet') {
          subPeaks.push({ x: x0 - 1.5 * J, fraction: 0.125 });
          subPeaks.push({ x: x0 - 0.5 * J, fraction: 0.375 });
          subPeaks.push({ x: x0 + 0.5 * J, fraction: 0.375 });
          subPeaks.push({ x: x0 + 1.5 * J, fraction: 0.125 });
        } else {
          subPeaks.push({ x: x0 - 2 * J, fraction: 0.0625 });
          subPeaks.push({ x: x0 - J, fraction: 0.25 });
          subPeaks.push({ x: x0, fraction: 0.375 });
          subPeaks.push({ x: x0 + J, fraction: 0.25 });
          subPeaks.push({ x: x0 + 2 * J, fraction: 0.0625 });
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

    const pointsData = media.points.map((p, i) => ({ x: i, y: p.energy }));
    const maxEnergy = Math.max(...media.points.map(p => p.energy));

    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Energy Path',
            data: pointsData,
            borderColor: '#00e676',
            backgroundColor: 'rgba(0, 230, 118, 0.05)',
            fill: true,
            tension: 0.4, // smooth curve
            borderWidth: 3,
            pointRadius: 0,
            showLine: true
          },
          {
            label: 'Key States',
            data: media.points.map((p, i) => ({ x: i, y: p.energy, stateLabel: p.state })),
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
                if (item && item.raw && item.raw.stateLabel) {
                  return item.raw.stateLabel;
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
            max: media.points.length - 1,
            title: {
              display: true,
              text: 'Reaction Progress',
              color: '#ffffff',
              font: { family: 'Outfit', weight: 'bold', size: 13 }
            },
            ticks: {
              color: '#a0a0ab',
              font: { family: 'Outfit', weight: 'bold', size: 11 },
              callback: function (value) {
                const val = Math.round(value);
                if (val === value && media.points[val]) {
                  return media.points[val].state;
                }
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
            max: maxEnergy + 30
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
    
        // For a left substituent (e.g. "\text{OH}" or "\text{H}"), the atom
    // touching the horizontal bond line should be the FIRST atom of the
    // group (O in OH, H in H). For a right substituent the FIRST atom also
    // touches the line.
    // Strategy: always split so the FIRST capital letter (+ optional lowercase)
    // is the "center" atom rendered flush with the line, and the remaining
    // text is the "rest" displayed away from the line.
    const splitFischerSub = (str, dir) => {
      if (!str) return { center: '', rest: '' };
      if (str.startsWith('\\text{')) {
        const contentMatch = str.match(/^\\text\{([^}]+)\}(.*)$/);
        if (contentMatch) {
          const content = contentMatch[1];
          const afterText = contentMatch[2];
          // First atom = first capital letter + optional following lowercase letters
          const firstAtomMatch = content.match(/^([A-Z][a-z]?)(.*)$/);
          if (firstAtomMatch) {
            const bondAtom = firstAtomMatch[1];
            const restContent = firstAtomMatch[2];
            const centerPart = `\\text{${bondAtom}}`;
            const restPart = (restContent ? `\\text{${restContent}}` : '') + afterText;
            return { center: centerPart, rest: restPart };
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

        if (media.centers && Array.isArray(media.centers)) {
      const N = media.centers.length;
      // 64px columns × 3, 48px rows for each chiral center, 56px for top/bottom
      fischerGrid.style.gridTemplateColumns = 'repeat(3, 64px)';
      fischerGrid.style.gridTemplateRows = `56px repeat(${N}, 48px) 56px`;
      const lineV = document.createElement('div');
      lineV.className = 'fischer-line-v';
      lineV.style.gridColumn = '2';
      lineV.style.gridRow = `1 / ${N + 3}`;
      // Let align-self: stretch (from CSS) handle the height; just nudge via padding
      lineV.style.marginTop = '28px';   // half of top row
      lineV.style.marginBottom = '28px'; // half of bottom row
      fischerGrid.appendChild(lineV);
      for (let i = 0; i < N; i++) {
        const lineH = document.createElement('div');
        lineH.className = 'fischer-line-h';
        lineH.style.gridColumn = '1 / 4';
        lineH.style.gridRow = `${i + 2}`;
        lineH.style.width = 'calc(100% - 80px)';
        lineH.style.margin = '0 auto';
        fischerGrid.appendChild(lineH);
      }
      fischerGrid.appendChild(createSub(media.top, '2', '1', 'right'));
      fischerGrid.appendChild(createSub(media.bottom, '2', `${N + 2}`, 'right'));
      media.centers.forEach((center, i) => {
        fischerGrid.appendChild(createSub(center.left, '1', `${i + 2}`, 'left'));
        fischerGrid.appendChild(createSub(center.right, '3', `${i + 2}`, 'right'));
      });
    } else {
      fischerGrid.style.gridTemplateColumns = 'repeat(3, 64px)';
      fischerGrid.style.gridTemplateRows = 'repeat(3, 64px)';
      const lineH = document.createElement('div');
      lineH.className = 'fischer-line-h';
      const lineV = document.createElement('div');
      lineV.className = 'fischer-line-v';
      fischerGrid.appendChild(lineH);
      fischerGrid.appendChild(lineV);
      fischerGrid.appendChild(createSub(media.top, '2', '1', 'right'));
      fischerGrid.appendChild(createSub(media.bottom, '2', '3', 'right'));
      fischerGrid.appendChild(createSub(media.left, '1', '2', 'left'));
      fischerGrid.appendChild(createSub(media.right, '3', '2', 'right'));
      if (media.center) {
        const centerEl = document.createElement('div');
        centerEl.className = 'fischer-center';
        centerEl.style.gridColumn = '2';
        centerEl.style.gridRow = '2';
        centerEl.textContent = `$${media.center}$`;
        fischerGrid.appendChild(centerEl);
      }
    }
    fischerContainer.appendChild(fischerGrid);
    container.appendChild(fischerContainer);
    renderMath(fischerContainer);
  } else if (media.type === 'newman') {
    const newmanContainer = document.createElement('div');
    newmanContainer.className = 'newman-container';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.style.width = '200px';
    svg.style.height = '200px';

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '100');
    circle.setAttribute('cy', '100');
    circle.setAttribute('r', '50');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#ffffff');
    circle.setAttribute('stroke-width', '2');
    svg.appendChild(circle);

    const drawLine = (x1, y1, x2, y2) => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('stroke', '#ffffff');
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);
    };

    drawLine(100, 100, 100, 40); // Front top
    drawLine(100, 100, 152, 130); // Front right
    drawLine(100, 100, 48, 130); // Front left

    drawLine(100, 150, 100, 180); // Back bottom
    drawLine(143.3, 75, 178, 55); // Back right
    drawLine(56.7, 75, 22, 55); // Back left

    newmanContainer.appendChild(svg);

    const addLabel = (text, cls) => {
      if (!text) return;
      const label = document.createElement('div');
      label.className = `newman-label ${cls}`;
      label.textContent = `$${text}$`;
      newmanContainer.appendChild(label);
    };

    if (media.front) {
      addLabel(media.front.top, 'front-top');
      addLabel(media.front.right, 'front-right');
      addLabel(media.front.left, 'front-left');
    }
    if (media.back) {
      addLabel(media.back.bottom, 'back-bottom');
      addLabel(media.back.right, 'back-right');
      addLabel(media.back.left, 'back-left');
    }

    container.appendChild(newmanContainer);
    renderMath(newmanContainer);
  } else if (media.type === 'chair') {
    const chairContainer = document.createElement('div');
    chairContainer.className = 'chair-container';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 400 300');
    svg.style.width = '400px';
    svg.style.height = '300px';

    // Thin Back Ring Bonds (pointing away)
    const backPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    backPath.setAttribute('d', 'M 280 130 L 240 110 L 150 130');
    backPath.setAttribute('fill', 'none');
    backPath.setAttribute('stroke', '#ffffff');
    backPath.setAttribute('stroke-width', '2.5');
    backPath.setAttribute('stroke-linecap', 'round');
    backPath.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(backPath);

    // Thick Wedged Front Ring Bonds (facing the viewer) - Mathematically Perfect Parallel Polygons
    const frontPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    frontPath.setAttribute('d', 'M 150 130 L 114 192 L 159.4 214.7 L 253.1 193.9 L 280 130 L 246.9 186.1 L 160.6 205.3 L 126 188 Z');
    frontPath.setAttribute('fill', '#ffffff');
    frontPath.setAttribute('stroke', '#ffffff');
    frontPath.setAttribute('stroke-width', '1');
    frontPath.setAttribute('stroke-linejoin', 'miter');
    svg.appendChild(frontPath);

    // Predefined 12 parallel Axial/Equatorial substituent bonds
    const chairBonds = {
      1: {
        axial: { start: { x: 240, y: 110 }, end: { x: 240, y: 70 } },
        equatorial: { start: { x: 240, y: 110 }, end: { x: 270, y: 125 } }
      },
      2: {
        axial: { start: { x: 150, y: 130 }, end: { x: 150, y: 170 } },
        equatorial: { start: { x: 150, y: 130 }, end: { x: 120, y: 115 } }
      },
      3: {
        axial: { start: { x: 120, y: 190 }, end: { x: 120, y: 150 } },
        equatorial: { start: { x: 120, y: 190 }, end: { x: 90, y: 205 } }
      },
      4: {
        axial: { start: { x: 160, y: 210 }, end: { x: 160, y: 250 } },
        equatorial: { start: { x: 160, y: 210 }, end: { x: 130, y: 195 } }
      },
      5: {
        axial: { start: { x: 250, y: 190 }, end: { x: 250, y: 150 } },
        equatorial: { start: { x: 250, y: 190 }, end: { x: 280, y: 205 } }
      },
      6: {
        axial: { start: { x: 280, y: 130 }, end: { x: 280, y: 170 } },
        equatorial: { start: { x: 280, y: 130 }, end: { x: 310, y: 115 } }
      }
    };

    chairContainer.appendChild(svg);

    media.substituents.forEach(sub => {
      const config = chairBonds[sub.position]?.[sub.type];
      if (config) {
        // Draw bond line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', config.start.x);
        line.setAttribute('y1', config.start.y);
        line.setAttribute('x2', config.end.x);
        line.setAttribute('y2', config.end.y);
        line.setAttribute('stroke', '#ffffff');
        line.setAttribute('stroke-width', '2.5');
        svg.appendChild(line);

        // Place substituent label at the end coordinate using absolute HTML overlay
        const label = document.createElement('div');
        label.className = `chair-label pos-${sub.position}-${sub.type}`;
        label.style.position = 'absolute';
        label.style.left = `${config.end.x}px`;
        label.style.top = `${config.end.y}px`;
        label.style.transform = 'translate(-50%, -50%)';
        label.textContent = `$${sub.label}$`;
        chairContainer.appendChild(label);
      }
    });

    container.appendChild(chairContainer);
    renderMath(chairContainer);
  } else if (media.type === 'haworth') {
    // Haworth Projection SVG Generator
    const haworthContainer = document.createElement('div');
    haworthContainer.className = 'haworth-container';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 320 250');
    svg.style.width = '320px';
    svg.style.height = '250px';

    // Hexagon vertices (pyranose ring perspective)
    // Back edge is top, front edge is bottom
    const verts = [
      { x: 60, y: 80 },    // 0: top-left (C4)
      { x: 160, y: 60 },   // 1: top-center (O)
      { x: 260, y: 80 },   // 2: top-right (C1)
      { x: 260, y: 160 },  // 3: bottom-right (C2)
      { x: 160, y: 180 },  // 4: bottom-center (C3)
      { x: 60, y: 160 }    // 5: bottom-left (C5)
    ];

    // Draw ring bonds — bottom 3 bonds are thick (front-facing)
    const bonds = [
      { from: 0, to: 1, thick: false },  // C4-O (back)
      { from: 1, to: 2, thick: false },  // O-C1 (back)
      { from: 2, to: 3, thick: true },   // C1-C2 (front right)
      { from: 3, to: 4, thick: true },   // C2-C3 (front bottom)
      { from: 4, to: 5, thick: true },   // C3-C5 (front left)
      { from: 5, to: 0, thick: false }   // C5-C4 (back left)
    ];

    bonds.forEach(bond => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', verts[bond.from].x);
      line.setAttribute('y1', verts[bond.from].y);
      line.setAttribute('x2', verts[bond.to].x);
      line.setAttribute('y2', verts[bond.to].y);
      line.setAttribute('stroke', '#ffffff');
      line.setAttribute('stroke-width', bond.thick ? '5' : '2');
      line.setAttribute('stroke-linecap', 'round');
      svg.appendChild(line);
    });

    haworthContainer.appendChild(svg);

    // Label mapping: carbon positions to vertices and substituent offsets
    // Vertex indices: C1=2, C2=3, C3=4, C4=0, C5=5, O=1
    const carbonMap = {
      c1: { vertex: verts[2], topOffset: { x: 0, y: -30 }, bottomOffset: { x: 0, y: 30 } },
      c2: { vertex: verts[3], topOffset: { x: 30, y: -20 }, bottomOffset: { x: 30, y: 20 } },
      c3: { vertex: verts[4], topOffset: { x: 0, y: -30 }, bottomOffset: { x: 0, y: 30 } },
      c4: { vertex: verts[0], topOffset: { x: 0, y: -30 }, bottomOffset: { x: 0, y: 30 } },
      c5: { vertex: verts[5], topOffset: { x: -30, y: -20 }, bottomOffset: { x: -30, y: 20 } }
    };

    // Add ring oxygen label
    const oLabel = document.createElement('div');
    oLabel.className = 'haworth-label';
    oLabel.style.left = `${verts[1].x}px`;
    oLabel.style.top = `${verts[1].y - 20}px`;
    oLabel.textContent = '$\\text{O}$';
    haworthContainer.appendChild(oLabel);

    // Add substituent labels for each carbon
    Object.keys(carbonMap).forEach(key => {
      const carbonData = media[key];
      if (!carbonData) return;
      const mapping = carbonMap[key];

      if (carbonData.top) {
        const topLabel = document.createElement('div');
        topLabel.className = 'haworth-label';
        topLabel.style.left = `${mapping.vertex.x + mapping.topOffset.x}px`;
        topLabel.style.top = `${mapping.vertex.y + mapping.topOffset.y}px`;
        topLabel.textContent = `$${carbonData.top}$`;
        haworthContainer.appendChild(topLabel);
      }
      if (carbonData.bottom) {
        const bottomLabel = document.createElement('div');
        bottomLabel.className = 'haworth-label';
        bottomLabel.style.left = `${mapping.vertex.x + mapping.bottomOffset.x}px`;
        bottomLabel.style.top = `${mapping.vertex.y + mapping.bottomOffset.y}px`;
        bottomLabel.textContent = `$${carbonData.bottom}$`;
        haworthContainer.appendChild(bottomLabel);
      }

      // Draw short vertical bond lines from vertex to label positions
      if (carbonData.top) {
        const bondLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        bondLine.setAttribute('x1', mapping.vertex.x);
        bondLine.setAttribute('y1', mapping.vertex.y);
        bondLine.setAttribute('x2', mapping.vertex.x + mapping.topOffset.x);
        bondLine.setAttribute('y2', mapping.vertex.y + mapping.topOffset.y + 8);
        bondLine.setAttribute('stroke', '#ffffff');
        bondLine.setAttribute('stroke-width', '2');
        svg.appendChild(bondLine);
      }
      if (carbonData.bottom) {
        const bondLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        bondLine.setAttribute('x1', mapping.vertex.x);
        bondLine.setAttribute('y1', mapping.vertex.y);
        bondLine.setAttribute('x2', mapping.vertex.x + mapping.bottomOffset.x);
        bondLine.setAttribute('y2', mapping.vertex.y + mapping.bottomOffset.y - 8);
        bondLine.setAttribute('stroke', '#ffffff');
        bondLine.setAttribute('stroke-width', '2');
        svg.appendChild(bondLine);
      }
    });

    container.appendChild(haworthContainer);
    renderMath(haworthContainer);
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
    } else if (question.media.type === 'haworth') {
      return 'Haworth Projection';
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

  // Hide feedback card / explanation box until option selected
  const feedbackCard = document.getElementById('feedback-card');
  if (feedbackCard) feedbackCard.style.display = 'none';
  const explanationBox = document.getElementById('explanation-box');
  if (explanationBox) {
    explanationBox.style.display = 'none';
    explanationBox.classList.add('hidden');
  }

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

  // Populate options grid — or render interactive UI
  const optionsGrid = document.getElementById('options-grid');
  optionsGrid.innerHTML = '';

  if (question.interactionType) {
    // Hide the structure card since interactive types render their own visuals
    document.getElementById('structure-card').style.display = 'none';
    renderInteractiveQuestion(question, optionsGrid);
  } else {
    // Standard multiple-choice buttons
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
  }

  // Trigger KaTeX parsing on the entire quiz card
  renderMath(document.getElementById('quiz-screen'));
}

// ============================================================
// INTERACTIVE QUESTION RENDERER
// ============================================================
function renderInteractiveQuestion(question, container) {
  container.style.display = 'block';

  // Helper to draw a SMILES structure into an SVG element
  const drawSmiles = (smiles, parentEl, w = 180, h = 120) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'smiles-render');
    const uid = `int-${Math.random().toString(36).substr(2, 9)}`;
    svg.setAttribute('id', uid);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.style.width = '100%';
    svg.style.height = '100%';
    parentEl.appendChild(svg);
    const localDrawer = new SmilesDrawer.SvgDrawer({
      ...options,
      width: w, height: h,
      fontSizeLarge: 7, fontSizeSmall: 5,
      bondLength: 15, bondThickness: 1.2, bondSpacing: 2.2
    });
    SmilesDrawer.parse(smiles, (tree) => {
      localDrawer.draw(tree, uid, 'dark');
    }, (err) => { console.error('Interactive SMILES error:', err); });
  };

  // Helper to create a styled select dropdown
  const createSelect = (optionsList, id) => {
    const sel = document.createElement('select');
    sel.className = 'interactive-select';
    sel.id = id;
    const defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '— Select —';
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    sel.appendChild(defaultOpt);
    optionsList.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt;
      o.textContent = opt;
      sel.appendChild(o);
    });
    return sel;
  };

    // ---- MATCHING LIST ----
  if (question.interactionType === 'matching-list') {
    const listContainer = document.createElement('div');
    listContainer.className = 'matching-list-container';

    question.matchItems.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'matching-list-item';

      const numEl = document.createElement('div');
      numEl.className = 'item-number';
      numEl.textContent = `${idx + 1}`;
      row.appendChild(numEl);

      const structDiv = document.createElement('div');
      structDiv.className = 'item-structure';
      row.appendChild(structDiv);

      const selectWrapper = document.createElement('div');
      selectWrapper.className = 'item-select-wrapper';
      // Only include the correct answers as options (no extra distractors shown)
      const sel = createSelect(question.matchOptions.filter(opt =>
        question.matchItems.some(mi => mi.correctAnswer === opt)
      ), `match-sel-${idx}`);
      sel.dataset.correctAnswer = item.correctAnswer;
      selectWrapper.appendChild(sel);
      row.appendChild(selectWrapper);

      listContainer.appendChild(row);
    });

    container.appendChild(listContainer);

    // Defer SMILES rendering until the rows are in the DOM
    setTimeout(() => {
      question.matchItems.forEach((item, idx) => {
        const structDiv = listContainer.querySelectorAll('.item-structure')[idx];
        if (structDiv) drawSmiles(item.smiles, structDiv);
      });
    }, 0);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'btn-submit-interactive';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.onclick = () => submitInteractiveAnswer(question);
    container.appendChild(submitBtn);
  }

  // ---- MATCHING GRID ----
  else if (question.interactionType === 'matching-grid') {
    const cols = question.gridColumns || 4;
    const gridContainer = document.createElement('div');
    gridContainer.className = 'matching-grid-container';
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    question.gridItems.forEach((item, idx) => {
      const cell = document.createElement('div');
      cell.className = 'matching-grid-cell';

      const structDiv = document.createElement('div');
      structDiv.className = 'cell-structure';
      // Render the media type (fischer, haworth, etc.) into the cell
      renderMedia(item.media, structDiv, true);
      cell.appendChild(structDiv);

      const sel = createSelect(question.gridOptions, `grid-sel-${idx}`);
      sel.dataset.correctAnswer = item.correctAnswer;
      cell.appendChild(sel);

      gridContainer.appendChild(cell);
    });

    container.appendChild(gridContainer);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'btn-submit-interactive';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.onclick = () => submitInteractiveAnswer(question);
    container.appendChild(submitBtn);
  }

    // ---- RANKING ----
  else if (question.interactionType === 'ranking') {
    const rankContainer = document.createElement('div');
    rankContainer.className = 'ranking-container';

    // Molecule cards row
    const molRow = document.createElement('div');
    molRow.className = 'ranking-molecules-row';
    const labels = ['A', 'B', 'C', 'D'];
    const rankStructDivs = [];

    question.rankItems.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'ranking-molecule-card';

      const structDiv = document.createElement('div');
      structDiv.className = 'molecule-structure';
      rankStructDivs.push({ div: structDiv, smiles: item.smiles });
      card.appendChild(structDiv);

      const labelEl = document.createElement('div');
      labelEl.className = 'ranking-molecule-label';
      labelEl.textContent = labels[idx];
      card.appendChild(labelEl);

      if (item.label) {
        const nameEl = document.createElement('div');
        nameEl.style.fontSize = '0.75rem';
        nameEl.style.color = 'var(--text-secondary)';
        nameEl.style.textAlign = 'center';
        nameEl.textContent = item.label;
        card.appendChild(nameEl);
      }

      molRow.appendChild(card);
    });
    rankContainer.appendChild(molRow);

    // Instruction
    const instrEl = document.createElement('div');
    instrEl.className = 'ranking-instruction';
    instrEl.textContent = 'Weakest base → Strongest base';
    rankContainer.appendChild(instrEl);

    // Dropdowns row with > separators
    const ddRow = document.createElement('div');
    ddRow.className = 'ranking-dropdowns-row';

    for (let i = 0; i < question.correctRanking.length; i++) {
      const sel = createSelect(labels, `rank-sel-${i}`);
      sel.dataset.correctAnswer = question.correctRanking[i];
      ddRow.appendChild(sel);

      if (i < question.correctRanking.length - 1) {
        const sep = document.createElement('span');
        sep.className = 'ranking-separator';
        sep.textContent = '>';
        ddRow.appendChild(sep);
      }
    }
    rankContainer.appendChild(ddRow);

    container.appendChild(rankContainer);

    // Defer SMILES rendering until cards are in the DOM
    setTimeout(() => {
      rankStructDivs.forEach(({ div, smiles }) => {
        drawSmiles(smiles, div, 160, 110);
      });
    }, 0);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'btn-submit-interactive';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.onclick = () => submitInteractiveAnswer(question);
    container.appendChild(submitBtn);
  }

  // Trigger KaTeX on any rendered media
  setTimeout(() => renderMath(container), 50);
}

// ============================================================
// INTERACTIVE ANSWER GRADING
// ============================================================
function submitInteractiveAnswer(question) {
  const allSelects = document.querySelectorAll('.interactive-select');
  let allCorrect = true;

  allSelects.forEach(sel => {
    sel.disabled = true;
    const correct = sel.dataset.correctAnswer;
    if (sel.value === correct) {
      sel.classList.add('correct');
    } else {
      sel.classList.add('incorrect');
      allCorrect = false;
    }
  });

  // Disable submit button
  const submitBtn = document.querySelector('.btn-submit-interactive');
  if (submitBtn) submitBtn.disabled = true;

  // Record answer
  userAnswers.push({
    questionId: question.id,
    chosenOptionIndex: allCorrect ? 0 : -1,
    isCorrect: allCorrect
  });

  if (allCorrect) score++;

  // Update live score
  document.getElementById('score-display').textContent = `${score}/${quizQuestions.length}`;

  // Update progress bar
  const progressBar = document.getElementById('progress-bar-fill');
  const percent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBar.style.width = `${percent}%`;

  // Show feedback
  const feedbackCard = document.getElementById('feedback-card');
  const feedbackBadge = document.getElementById('feedback-badge');
  const explanationBody = document.getElementById('explanation-body');
  const nextBtn = document.getElementById('btn-next-question');

  const correctOption = question.options.find(opt => opt.isCorrect);

  if (allCorrect) {
    feedbackBadge.textContent = 'Correct';
    feedbackBadge.className = 'feedback-badge correct';
    explanationBody.innerHTML = `<p>${correctOption.explanation}</p>`;
  } else {
    feedbackBadge.textContent = 'Incorrect';
    feedbackBadge.className = 'feedback-badge incorrect';
    explanationBody.innerHTML = `
      <p>Some of your selections were wrong. Review the green (correct) and red (incorrect) outlines above.</p>
      <p style="margin-top: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
        <strong>Explanation:</strong> ${correctOption.explanation}
      </p>
    `;
  }

  const nextSpan = nextBtn.querySelector('span');
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextSpan.textContent = 'View Results';
  } else {
    nextSpan.textContent = 'Next Question';
  }

  if (feedbackCard) {
    feedbackCard.style.display = 'block';
    feedbackCard.classList.remove('hidden');
    renderMath(feedbackCard);
    feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Disable hints
  document.getElementById('btn-show-hint').disabled = true;
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

  const correctOption = question.options.find(opt => opt.isCorrect);

  if (isCorrect) {
    feedbackBadge.textContent = "Correct";
    feedbackBadge.className = "feedback-badge correct";
    explanationBody.innerHTML = `<p>${chosenOption.explanation}</p>`;
  } else {
    feedbackBadge.textContent = "Incorrect";
    feedbackBadge.className = "feedback-badge incorrect";
    explanationBody.innerHTML = `
      <p><strong>Your Answer:</strong> ${chosenOption.explanation}</p>
      <p style="margin-top: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
        <strong>Correct Answer:</strong> ${correctOption.explanation}
      </p>
    `;
  }

  const nextSpan = nextBtn.querySelector('span');
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextSpan.textContent = "View Results";
  } else {
    nextSpan.textContent = "Next Question";
  }

  if (feedbackCard) {
    feedbackCard.style.display = 'block';
    feedbackCard.classList.remove('hidden');
    renderMath(feedbackCard);
  }
  const explanationBox = document.getElementById('explanation-box');
  if (explanationBox) {
    explanationBox.style.display = 'block';
    explanationBox.classList.remove('hidden');
    renderMath(explanationBox);
  }

  // Scroll the visible feedback/explanation card into view
  const visibleCard = (feedbackCard && feedbackCard.style.display !== 'none') ? feedbackCard : explanationBox;
  if (visibleCard) {
    visibleCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
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
