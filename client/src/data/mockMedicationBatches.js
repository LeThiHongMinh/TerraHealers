
export const mockMedicationBatches = [
  {
    // treats diabetes
    id: 'SIN16255P',
    medication: 'ADIMET XR TABLET 1000MG (METFORMIN)',
    indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
    expirations: '2024-12-31',
    dosage: '1000 MG',
    manufacturer: 'TEVA PHARMACEUTICAL INVESTMENTS SINGAPORE PTE. LTD.',
    quantity: 250,
  },
  {
    // treats diabetes
    // possibly lower carbon emission due to smaller dose --> can explain overprescription problem
    id: 'SIN16256P',
    medication: 'ADIMET XR TABLET 750MG (METFORMIN)',
    indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
    expirations: '2024-03-31',
    dosage: '750 MG',
    manufacturer: 'TEVA PHARMACEUTICAL INVESTMENTS SINGAPORE PTE. LTD.',
    quantity: 220,
  },
  {
    // treats diabetes
    id: 'SIN16096P',
    medication: 'GLUCIENT XR EXTENDED-RELEASE TABLET 1000MG (METFORMIN)',
    indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
    expirations: '2024-08-03',
    dosage: '1000 MG',
    manufacturer: 'GLORIOUS DEXA SINGAPORE PTE. LTD.',
    quantity: 205,
  },
  {
    // treats diabetes
    id: 'SIN16095P',
    medication: 'GLUCIENT XR EXTENDED-RELEASE TABLET 750MG (METFORMIN)',
    indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
    expirations: '2024-02-29',
    dosage: '750 MG',
    manufacturer: 'GLORIOUS DEXA SINGAPORE PTE. LTD.',
    quantity: 212,
  },
  {
    // treats allergic rhinitis = general allergies (e.g. morning sinus)
    id: 'SIN15255P',
    medication: 'DYMISTA NASAL SPRAY',
    indications: ['Symptomatic treatment of moderate to severe allergic rhinitis and rhino-conjunctivitis'],
    expirations: '2024-05-16',
    dosage: '',
    manufacturer: 'PHARMLINE MARKETING PTE. LTD.',
    quantity: 50,
  },
  {
    // treats asthma
    id: 'SIN08674P',
    medication: 'BECLOMET EASYHALER 200 MCG/INHALATION DOSE',
    indications: ['Treatment of bronchial asthma'],
    expirations: '2025-12-31',
    dosage: '200 MCG/METERED DOSE',
    manufacturer: 'ORION PHARMA (SG) PTE. LTD.',
    quantity: 30,
  },
  {
    // treats asthma
    id: 'SIN05043P',
    medication: 'PULMICORT TURBUHALER 100 MCG/DOSE',
    indications: ['Treatment of bronchial asthma'],
    dosage: '100 MCG/DOSE',
    expirations: '2024-09-31',
    manufacturer: 'ASTRAZENECA SINGAPORE PTE LTD',
    quantity: 50,
  },
  {
    // treats allergic rhinitis
    id: 'SIN10796P',
    medication: 'ZYRTEC ORAL SOLUTION 1 MG/ML (CETRIZINE)',
    indications: ['Relief of nasal and ocular symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
    expirations: '2023-05-12',
    dosage: '1 MG/ML',
    manufacturer: '	GLAXOSMITHKLINE PTE LTD',
    quantity: 50,
  },
  {
    // treats allergic rhinitis
    id: 'SIN03022P',
    medication: 'ZYRTEC TABLET 10 MG (CETRIZINE)',
    indications: ['Relief of symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
    expirations: '2026-12-31',
    dosage: '10 MG',
    manufacturer: 'GLAXOSMITHKLINE PTE LTD',
    quantity: 165,
  },
  {
    // treats allergic rhinitis
    id: 'SIN11699P',
    medication: 'TELFAST TABLET 180 MG (FEXOFENADINE)',
    indications: ['Relief of symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
    dosage: '180 MG',
    expirations: '2024-06-01',
    manufacturer: 'OPELLA HEALTHCARE SINGAPORE PTE. LTD.',
    quantity: 80,
  },
  {
    // treats allergic rhinitis
    // oral suspension --> liquid medication, probably a higher carbon footprint than a pills
    id: 'SIN14199P',
    medication: 'TELFAST ORAL SUSPENSION 6 MG/ML (FEXOFENADINE)',
    indications: ['Relief of symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
    expirations: '2025-10-04',
    dosage: '6 MG/ML',
    manufacturer: 'OPELLA HEALTHCARE SINGAPORE PTE. LTD.',
    quantity: 64,
  },
  {
    // treats hypertension
    id: 'SIN13417P',
    medication: 'EXFORGE TABLET 5MG/160MG',
    indications: ['Treatment of essential hypertension'],
    expirations: '2023-12-31',
    dosage: '5 MG Amlodipine, 160MG Valsartan', // components here, similar for the other hypertension drugs
    manufacturer: 'NOVARTIS (SINGAPORE) PTE LTD',
    quantity: 280,
  },
  {
    // treats hypertension
    id: 'SIN14009P',
    medication: 'TWYNSTA TABLET 40MG/10MG',
    indications: ['Treatment of essential hypertension'],
    expirations: '2023-12-31',
    dosage: '10 MG Amlodipine, 40 MG Telmisarten',
    manufacturer: 'BOEHRINGER INGELHEIM SINGAPORE PTE. LTD.',
    quantity: 305,
  },
  {
    // treats hypertension
    id: 'SIN14192P',
    medication: 'COZAAR®XQ® TABLET 5MG/50MG',
    indications: ['Treatment of essential hypertension'],
    expirations: '2024-02-09',
    dosage: '5 MG Amlodipine, 50 MG Losartan',
    manufacturer: 'ORGANON SINGAPORE PTE. LTD.',
    quantity: 145,
  },
  {
    // mainly treats hypertension
    id: 'SIN02372P',
    medication: 'ZESTRIL TABLET 10 MG (LISONOPRIL)',
    indications: ['Treatment of essential hypertension', 'Management of congestive heart failure', 'Treatment acute myocardial infarction', 'Renal complications of diabetes mellitus'],
    expirations: '2024-06-07',
    dosage: '10 MG',
    manufacturer: 'DKSH SINGAPORE PTE. LTD.',
    quantity: 120,
  },
  {
    // treats high cholesterol
    id: 'SIN12329P',
    medication: 'LOVASTIN TABLET 20 MG',
    indications: ['Treatment of hypercholesterolemia'],
    expirations: '2023-12-31',
    dosage: '20 MG',
    manufacturer: 'YUNG SHIN PHARMACEUTICAL (SINGAPORE) PTE LTD',
    quantity: 180,
  },
  {
    // treats high cholesterol
    id: 'SIN15623P',
    medication: 'KARDAK 10 FILM-COATED TABLETS 10 MG (SIMVASTATIN)',
    indications: ['Treatment of hypercholesterolemia', 'Treatment of hyperlipidemia'],
    expirations: '2024-07-06',
    dosage: '10 MG',
    manufacturer: 'APOTHECA MARKETING PTE LTD',
    quantity: 120,
  },
  {
    // treats high cholesterol
    id: 'SIN16527P',
    medication: 'ATORVASTATIN SANDOZ FILM COATED TABLET 10MG',
    indications: ['Treatment of hypercholesterolemia'],
    expirations: '2023-05-05',
    dosage: '10 MG',
    manufacturer: 'SANDOZ SINGAPORE PTE. LTD.',
    quantity: 320,
  },
  {
    // treats gout (a type of arthritis)
    id: 'SIN12301P',
    medication: 'COLCITEX TABLET 0.6 MG (COLCHICINE)',
    indications: ['Treatment of gout'],
    expirations: '2025-02-02',
    dosage: '0.6 MG',
    manufacturer: 'ALCARE PHARMACEUTICALS PTE LTD',
    quantity: 190,
  },
  {
    // treats gout (a type of arthritis)
    id: 'SIN05804P',
    medication: 'ALLOPURINOL TABLET 100 MG',
    indications: ['Treatment of gout'],
    expirations: '2024-05-31',
    dosage: '100 MG',
    manufacturer: 'BEACONS PHARMACEUTICALS PTE. LTD',
    quantity: 136,
  },
];
