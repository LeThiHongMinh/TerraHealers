const mockMedications = [
    {
      // treats diabetes
      id: 'SIN16255P',
      name: 'ADIMET XR TABLET 1000MG (METFORMIN)',
      indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
      dosage: '1000 MG',
      supplier: 'TEVA PHARMACEUTICAL INVESTMENTS SINGAPORE PTE. LTD.',
      quantity: 250,
    },
    {
      // treats diabetes
      // possibly lower carbon emission due to smaller dose --> can explain overprescription problem
      id: 'SIN16256P',
      name: 'ADIMET XR TABLET 750MG (METFORMIN)',
      indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
      dosage: '750 MG',
      supplier: 'TEVA PHARMACEUTICAL INVESTMENTS SINGAPORE PTE. LTD.',
      quantity: 220,
    },
    {
      // treats diabetes
      id: 'SIN16096P',
      name: 'GLUCIENT XR EXTENDED-RELEASE TABLET 1000MG (METFORMIN)',
      indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
      dosage: '1000 MG',
      supplier: 'GLORIOUS DEXA SINGAPORE PTE. LTD.',
      quantity: 205,
    },
    {
      // treats diabetes
      id: 'SIN16095P',
      name: 'GLUCIENT XR EXTENDED-RELEASE TABLET 750MG (METFORMIN)',
      indications: ['Treatment of type 2 diabetes mellitus in adults, particularly in overweight patients'],
      dosage: '750 MG',
      supplier: 'GLORIOUS DEXA SINGAPORE PTE. LTD.',
      quantity: 212,
    },
    {
      // treats allergic rhinitis = general allergies (e.g. morning sinus)
      id: 'SIN15255P',
      name: 'DYMISTA NASAL SPRAY',
      indications: ['Symptomatic treatment of moderate to severe allergic rhinitis and rhino-conjunctivitis'],
      dosage: '',
      supplier: 'PHARMLINE MARKETING PTE. LTD.',
      quantity: 50,
    },
    {
      // treats asthma
      id: 'SIN08674P',
      name: 'BECLOMET EASYHALER 200 MCG/INHALATION DOSE',
      indications: ['Treatment of bronchial asthma'],
      dosage: '200 MCG/METERED DOSE',
      supplier: 'ORION PHARMA (SG) PTE. LTD.',
      quantity: 30,
    },
    {
      // treats asthma
      id: 'SIN05043P',
      name: 'PULMICORT TURBUHALER 100 MCG/DOSE',
      indications: ['Treatment of bronchial asthma'],
      dosage: '100 MCG/DOSE',
      supplier: '	\ASTRAZENECA SINGAPORE PTE LTD',
      quantity: 50,
    },
    {
      // treats allergic rhinitis
      id: 'SIN10796P',
      name: 'ZYRTEC ORAL SOLUTION 1 MG/ML (CETRIZINE)',
      indications: ['Relief of nasal and ocular symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
      dosage: '1 MG/ML',
      supplier: '	GLAXOSMITHKLINE PTE LTD',
      quantity: 50,
    },
    {
      // treats allergic rhinitis
      id: 'SIN03022P',
      name: 'ZYRTEC TABLET 10 MG (CETRIZINE)',
      indications: ['Relief of symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
      dosage: '10 MG',
      supplier: 'GLAXOSMITHKLINE PTE LTD',
      quantity: 165,
    },
    {
      // treats allergic rhinitis
      id: 'SIN11699P',
      name: 'TELFAST TABLET 180 MG (FEXOFENADINE)',
      indications: ['Relief of symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
      dosage: '180 MG',
      supplier: 'OPELLA HEALTHCARE SINGAPORE PTE. LTD.',
      quantity: 80,
    },
    {
      // treats allergic rhinitis
      // oral suspension --> liquid medication, probably a higher carbon footprint than a pills
      id: 'SIN14199P',
      name: 'TELFAST ORAL SUSPENSION 6 MG/ML (FEXOFENADINE)',
      indications: ['Relief of symptoms of seasonal and perennial allergic rhinitis', 'Relief of symptoms of chronic idiopathic urticaria'],
      dosage: '6 MG/ML',
      supplier: 'OPELLA HEALTHCARE SINGAPORE PTE. LTD.',
      quantity: 64,
    },
    {
      // treats hypertension
      id: 'SIN13417P',
      name: 'EXFORGE TABLET 5MG/160MG',
      indications: ['Treatment of essential hypertension'],
      dosage: '5 MG Amlodipine, 160MG Valsartan', // components here, similar for the other hypertension drugs
      supplier: 'NOVARTIS (SINGAPORE) PTE LTD',
      quantity: 280,
    },
    {
      // treats hypertension
      id: 'SIN14009P',
      name: 'TWYNSTA TABLET 40MG/10MG',
      indications: ['Treatment of essential hypertension'],
      dosage: '10 MG Amlodipine, 40 MG Telmisarten',
      supplier: 'BOEHRINGER INGELHEIM SINGAPORE PTE. LTD.',
      quantity: 305,
    },
    {
      // treats hypertension
      id: 'SIN14192P',
      name: 'COZAAR®XQ® TABLET 5MG/50MG',
      indications: ['Treatment of essential hypertension'],
      dosage: '5 MG Amlodipine, 50 MG Losartan',
      supplier: 'ORGANON SINGAPORE PTE. LTD.',
      quantity: 145,
    },
    {
      // mainly treats hypertension
      id: 'SIN02372P',
      name: 'ZESTRIL TABLET 10 MG (LISONOPRIL)',
      indications: ['Treatment of essential hypertension', 'Management of congestive heart failure', 'Treatment acute myocardial infarction', 'Renal complications of diabetes mellitus'],
      dosage: '10 MG',
      supplier: 'DKSH SINGAPORE PTE. LTD.',
      quantity: 120,
    },
    {
      // treats high cholesterol
      id: 'SIN12329P',
      name: 'LOVASTIN TABLET 20 MG',
      indications: ['Treatment of hypercholesterolemia'],
      dosage: '20 MG',
      supplier: 'YUNG SHIN PHARMACEUTICAL (SINGAPORE) PTE LTD',
      quantity: 180,
    },
    {
      // treats high cholesterol
      id: 'SIN15623P',
      name: 'KARDAK 10 FILM-COATED TABLETS 10 MG (SIMVASTATIN)',
      indications: ['Treatment of hypercholesterolemia', 'Treatment of hyperlipidemia'],
      dosage: '10 MG',
      supplier: 'APOTHECA MARKETING PTE LTD',
      quantity: 120,
    },
    {
      // treats high cholesterol
      id: 'SIN16527P',
      name: 'ATORVASTATIN SANDOZ FILM COATED TABLET 10MG',
      indications: ['Treatment of hypercholesterolemia'],
      dosage: '10 MG',
      supplier: 'SANDOZ SINGAPORE PTE. LTD.',
      quantity: 320,
    },
    {
      // treats gout (a type of arthritis)
      id: 'SIN12301P',
      name: 'COLCITEX TABLET 0.6 MG (COLCHICINE)',
      indications: ['Treatment of gout'],
      dosage: '0.6 MG',
      supplier: 'ALCARE PHARMACEUTICALS PTE LTD',
      quantity: 190,
    },
    {
      // treats gout (a type of arthritis)
      id: 'SIN05804P',
      name: 'ALLOPURINOL TABLET 100 MG',
      indications: ['Treatment of gout'],
      dosage: '100 MG',
      supplier: 'BEACONS PHARMACEUTICALS PTE. LTD.',
      quantity: 136,
    },
  ];

export default mockMedications;