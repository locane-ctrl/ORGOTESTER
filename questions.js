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