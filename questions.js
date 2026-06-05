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
      { smiles: "C[C@@H](C(=O)O)N", correctAnswer: "Alanine" },
      { smiles: "CC(C)[C@@H](C(=O)O)N", correctAnswer: "Valine" },
      { smiles: "OC[C@@H](C(=O)O)N", correctAnswer: "Serine" },
      { smiles: "c1ccc(cc1)C[C@@H](C(=O)O)N", correctAnswer: "Phenylalanine" }
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
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Allose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Altrose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Glucose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Mannose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Gulose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Idose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Galactose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Talose" }
    ],
    gridOptions: ["D-Allose", "D-Altrose", "D-Glucose", "D-Mannose", "D-Gulose", "D-Idose", "D-Galactose", "D-Talose"],
    tags: ["Carbohydrates", "Fischer Projections", "D-Aldohexoses"],
    hint: "Remember the mnemonic: All Altruists Gladly Make Gum In Gallon Tanks. The OH pattern on C2-C5 distinguishes each sugar.",
    textbookRef: "OpenStax Section 25.2",
    textbookUrl: "#",
    options: [
      { text: "All matched correctly", isCorrect: true, explanation: "The 8 D-aldohexoses differ only in the stereochemistry at C2, C3, C4, and C5. D-Allose: R-R-R-R. D-Altrose: L-R-R-R. D-Glucose: R-L-R-R. D-Mannose: L-L-R-R. D-Gulose: R-R-L-R. D-Idose: L-R-L-R. D-Galactose: R-L-L-R. D-Talose: L-L-L-R." }
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
  },
  {
    id: 5,
    examType: "ACS",
    topic: "Multistep Synthesis",
    questionText: "Complete the following multistep synthesis by selecting the missing reagents.",
    interactionType: "roadmap",
    steps: [
      { type: "molecule", isBlank: false, smiles: "CC(=O)C" },
      { type: "arrow", isBlank: true, options: ["NaBH4, MeOH", "LiAlH4, ether", "CH3MgBr, ether; then H3O+", "CrO3, H2SO4"], correctAnswer: "NaBH4, MeOH" },
      { type: "molecule", isBlank: false, smiles: "CC(O)C" },
      { type: "arrow", isBlank: true, options: ["PBr3", "SOCl2, pyridine", "HCl", "TsCl, pyridine"], correctAnswer: "PBr3" },
      { type: "molecule", isBlank: false, smiles: "CC(Br)C" }
    ],
    tags: ["Synthesis", "Reagents"],
    hint: "Think about how to reduce a ketone to an alcohol, and then how to convert an alcohol to an alkyl bromide.",
    textbookRef: "OpenStax Section 17.4",
    textbookUrl: "#",
    options: [
      { text: "Correct synthesis", isCorrect: true, explanation: "Acetone is reduced to 2-propanol using NaBH4. The secondary alcohol is then converted to 2-bromopropane using PBr3." }
    ]
  },
  {
    id: 6,
    examType: "OpenStax",
    chapter: "Ch 10: Alkyl Halides",
    questionText: "Order the mechanistic steps of the following SN1 reaction.",
    interactionType: "sequence",
    sequenceItems: [
      { smiles: "CC(C)(C)Br" },
      { smiles: "C[C+](C)C" },
      { smiles: "CC(C)(C)O" }
    ],
    correctSequence: ["A", "B", "C"],
    tags: ["Mechanism", "SN1"],
    hint: "Reactant -> Carbocation Intermediate -> Product",
    textbookRef: "OpenStax Section 10.3",
    textbookUrl: "#",
    options: [
      { text: "Correct mechanism", isCorrect: true, explanation: "The leaving group (Br) leaves to form a tertiary carbocation. Then water attacks the carbocation to form the alcohol product." }
    ]
  },
  {
    id: 7,
    examType: "ACS",
    topic: "Stereochemistry",
    questionText: "Determine the R/S configuration for each stereocenter in (2R, 3S)-2-bromo-3-chlorobutane.",
    interactionType: "labeling",
    media: { type: "smiles", smiles: "C[C@@H](Cl)[C@H](Br)C" },
    labels: [
      { text: "C2 Configuration", correctAnswer: "R" },
      { text: "C3 Configuration", correctAnswer: "S" }
    ],
    labelOptions: ["R", "S", "None"],
    tags: ["Stereocenters", "R/S"],
    hint: "Assign priorities using Cahn-Ingold-Prelog rules. Br > Cl > C > H.",
    textbookRef: "OpenStax Section 5.3",
    textbookUrl: "#",
    options: [
      { text: "Correct configurations", isCorrect: true, explanation: "At C2, Br is priority 1, C3 is priority 2, methyl is priority 3. Hydrogen is in the back. 1->2->3 is clockwise, so R. At C3, Cl is priority 1, C2 is priority 2, methyl is priority 3. Hydrogen is in the back. 1->2->3 is counterclockwise, so S." }
    ]
  },
  {
    id: 8,
    examType: "OpenStax",
    chapter: "Ch 11: Elimination",
    questionText: "Which of the following are requirements or characteristics of an E2 elimination mechanism? (Select all that apply)",
    interactionType: "sata",
    sataOptions: [
      { text: "Requires a strong base", isCorrect: true },
      { text: "Proceeds via a carbocation intermediate", isCorrect: false },
      { text: "Requires an anti-periplanar transition state", isCorrect: true },
      { text: "Rate depends only on the substrate", isCorrect: false },
      { text: "Reaction rate follows second-order kinetics", isCorrect: true }
    ],
    tags: ["Elimination", "E2"],
    hint: "E2 is a concerted bimolecular elimination.",
    textbookRef: "OpenStax Section 11.2",
    textbookUrl: "#",
    options: [
      { text: "Correct choices", isCorrect: true, explanation: "E2 is bimolecular (depends on substrate and base), requires a strong base to pull off the proton concurrently with leaving group departure, and geometrically requires an anti-periplanar arrangement to form the pi bond." }
    ]
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
    examType: "ACS",
    topic: "Spectroscopy",
    questionText: "Based on the provided Infrared (IR) Spectrum, which compound exhibits a strong, sharp absorption band at $1715\\text{ cm}^{-1}$ and no O-H stretch?",
    media: {
      type: "spectroscopy",
      specType: "ir",
      dips: [
        { xc: 2950, w: 40, d: 50 },
        { xc: 1715, w: 20, d: 85 }
      ]
    },
    tags: ["Spectroscopy", "Infrared Spectroscopy"],
    hint: "A strong, sharp peak around 1715 cm⁻¹ indicates a carbonyl group (C=O). The lack of a broad band around 3300 cm⁻¹ excludes alcohols.",
    textbookRef: "OpenStax Section 12.4",
    textbookUrl: "#",
    options: [
      {
        text: "Acetone",
        isCorrect: true,
        explanation: "Correct! Acetone ($CH_3COCH_3$) contains a carbonyl group (sharp peak at 1715 cm⁻¹) and C-H sp3 stretch at 2950 cm⁻¹, but no O-H group."
      },
      {
        text: "Ethanol",
        isCorrect: false,
        explanation: "Incorrect. Ethanol contains an O-H group, which would show a very broad, strong absorption band at 3300 cm⁻¹."
      },
      {
        text: "Diethyl ether",
        isCorrect: false,
        explanation: "Incorrect. Diethyl ether has no carbonyl group, so it would not exhibit a peak at 1715 cm⁻¹."
      },
      {
        text: "Propene",
        isCorrect: false,
        explanation: "Incorrect. Propene has a C=C double bond (around 1650 cm⁻¹) and =C-H stretch (above 3000 cm⁻¹), but no carbonyl stretch at 1715 cm⁻¹."
      }
    ]
  },
  {
    id: 12,
    examType: "ACS",
    topic: "Aromatics",
    questionText: "Predict the major organic product of the following electrophilic aromatic substitution reaction.",
    scheme: {
      reactants: ["c1ccccc1"],
      reagents: "HNO3\nH2SO4",
      conditions: "50 °C",
      products: ["[N+](=O)([O-])c1ccccc1"]
    },
    tags: ["Aromatics", "Nitration", "EAS"],
    hint: "Mixing concentrated nitric and sulfuric acids generates the nitronium ion ($NO_2^+$), which is a strong electrophile that attacks benzene.",
    textbookRef: "OpenStax Section 16.2",
    textbookUrl: "#",
    options: [
      {
        text: "Nitrobenzene",
        isCorrect: true,
        explanation: "Correct! Benzene undergoes nitration with HNO3/H2SO4 to yield nitrobenzene via a sigma complex intermediate."
      },
      {
        text: "Aniline",
        isCorrect: false,
        explanation: "Incorrect. Aniline (aminobenzene) is formed by the reduction of nitrobenzene, not by direct electrophilic nitration."
      },
      {
        text: "Benzenesulfonic acid",
        isCorrect: false,
        explanation: "Incorrect. Sulfonation requires SO3 and H2SO4, which produces benzenesulfonic acid."
      },
      {
        text: "Chlorobenzene",
        isCorrect: false,
        explanation: "Incorrect. Chlorination requires Cl2 and a Lewis acid catalyst like FeCl3."
      }
    ]
  },
  {
    id: 13,
    examType: "OpenStax",
    chapter: "Ch 25: Carbohydrates",
    questionText: "Identify each aldopentose Fischer projection by selecting its correct name.",
    interactionType: "matching-grid",
    gridColumns: 2,
    gridItems: [
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Ribose" },
      { media: { type: "fischer", top: "\\text{CHO}", bottom: "\\text{CH}_2\\text{OH}", centers: [{ left: "\\text{OH}", right: "\\text{H}" }, { left: "\\text{H}", right: "\\text{OH}" }, { left: "\\text{H}", right: "\\text{OH}" }] }, correctAnswer: "D-Arabinose" }
    ],
    gridOptions: ["D-Ribose", "D-Arabinose", "D-Xylose", "D-Lyxose"],
    tags: ["Carbohydrates", "Fischer Projections", "Aldopentoses"],
    hint: "D-Ribose has all OH groups on the right side. D-Arabinose has the C2 OH on the left, and C3/C4 on the right.",
    textbookRef: "OpenStax Section 25.2",
    textbookUrl: "#",
    options: [
      { text: "All matched correctly", isCorrect: true, explanation: "D-Ribose has R-R-R configuration. D-Arabinose has L-R-R configuration." }
    ]
  },
  {
    id: 14,
    examType: "OpenStax",
    chapter: "Ch 17: Alcohols",
    questionText: "Complete the following multistep retrosynthetic pathway by identifying the missing reagents.",
    interactionType: "roadmap",
    steps: [
      { type: "molecule", isBlank: false, smiles: "CC=C" },
      { type: "arrow", isBlank: true, options: ["1) BH3, THF; 2) H2O2, NaOH", "H2O, H2SO4", "PCC", "OsO4, H2O2"], correctAnswer: "1) BH3, THF; 2) H2O2, NaOH" },
      { type: "molecule", isBlank: false, smiles: "CCCO" },
      { type: "arrow", isBlank: true, options: ["PCC", "Na2Cr2O7, H2SO4", "LiAlH4", "O3, Zn"], correctAnswer: "PCC" },
      { type: "molecule", isBlank: false, smiles: "CCC=O" }
    ],
    tags: ["Synthesis", "Alcohols", "Aldehydes"],
    hint: "Propene undergoes anti-Markovnikov hydroboration-oxidation to yield 1-propanol. 1-Propanol is oxidized to propanal using the mild oxidant PCC.",
    textbookRef: "OpenStax Section 17.5",
    textbookUrl: "#",
    options: [
      { text: "Correct synthesis path", isCorrect: true, explanation: "Hydroboration-oxidation gives the primary alcohol 1-propanol, which is selectively oxidized to the aldehyde propanal by PCC." }
    ]
  },
  {
    id: 15,
    examType: "ACS",
    topic: "Amines and Heterocycles",
    questionText: "Rank the following aromatic and aliphatic amines in order of increasing basicity (weakest base → strongest base).",
    interactionType: "ranking",
    rankItems: [
      { smiles: "Nc1ccc([N+](=O)[O-])cc1", label: "p-Nitroaniline" },
      { smiles: "Nc1ccccc1", label: "Aniline" },
      { smiles: "CN", label: "Methylamine" },
      { smiles: "CNC", label: "Dimethylamine" }
    ],
    correctRanking: ["A", "B", "C", "D"],
    tags: ["Amines", "Basicity", "Ranking"],
    hint: "Basicity ranking rules: electron-withdrawing aromatics < simple aromatics < primary alkyl < secondary alkyl.",
    textbookRef: "OpenStax Section 24.3",
    textbookUrl: "#",
    options: [
      { text: "p-Nitroaniline < Aniline < Methylamine < Dimethylamine", isCorrect: true, explanation: "p-Nitroaniline is extremely weak due to the nitro group's strong -R effect. Aniline is aromatic (lone pair delocalized). Methylamine is a simple aliphatic primary amine. Dimethylamine is a secondary aliphatic amine (more electron-donating groups)." }
    ]
  }
];