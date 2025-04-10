export interface Procedure {
  name: string;
  description?: string;
}

export interface SubServiceContent {
  name: string;
  slug?: string;
  imageUrl?: string;
  description?: string;
  benefits?: string[];
  procedures?: Procedure[] | string[];
  symptoms?: string[];
  whoShouldConsider?: string[];
}

export interface ServiceContent {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  // Direct procedures if there are no subservices
  procedures?: Procedure[] | string[];
  // SubServices if the service has categories
  subServices?: SubServiceContent[];
}

export interface DoctorServices {
  sub: string;
  name: string;
  title: string;
  contact: string;
  specialty: string;
  overview: string;
  imageUrl: string;
  services: ServiceContent[];
}

export const doctorsServices: DoctorServices[] = [
  // Updated services array for Dr. Sushovan
  {
    sub: "drsushovan",
    name: "Dr. Sushovan Baidya",
    contact: "9474866692",
    title: "Gastroenterologist & Hepatologist",
    specialty: "Liver, Digestive System, and Gastrointestinal Disorders",
    overview:
      "Dr. Sushovan Baidya is a distinguished gastroenterologist and hepatologist with extensive experience in treating complex digestive system disorders. His expertise spans across liver diseases, gastrointestinal conditions, and advanced endoscopic procedures, ensuring comprehensive care for patients with various digestive health challenges.",
    imageUrl: "/images/second.png",
    services: [
      {
        title: "Liver Disease Management",
        slug: "liver-disease-management",
        description:
          "Our liver disease management program offers comprehensive care using cutting-edge diagnostic techniques and personalized  plans. We specialize in treating all forms of liver conditions, from acute hepatitis to chronic liver disease and cancer.",
        imageUrl: "/images/services/liver-care.jpg",
        subServices: [
          {
            name: "Viral Hepatitis",
            slug: "viral-hepatitis",
            imageUrl: "/images/services/viral-hepatitis.jpg",
            procedures: [
              "Hepatitis A",
              "Hepatitis B",
              "Hepatitis C",
              "Hepatitis D",
              "Hepatitis E",
            ],
          },
          {
            name: "Fatty Liver Disease",
            slug: "fatty-liver-disease",
            imageUrl: "/images/services/fatty-liver.jpg",
            procedures: ["MASLD / NAFLD"],
          },
          {
            name: "Alcohol related liver diseases",
            slug: "alcohol-related-liver-diseases",
            imageUrl: "/images/services/alcohal-related-liver-diseases.jpg",
          },
          {
            name: "Autoimmune Hepatitis",
            slug: "autoimmune-hepatitis",
            imageUrl: "/images/services/autoimmune-hepatitis.jpg",
          },
          {
            name: "Liver Abscess",
            slug: "liver-abscess",
            imageUrl: "/images/services/liver-abscess.jpg",
            procedures: ["Pyogenic liver abscess ", "Amoebic liver abscess "],
          },
          {
            name: "Jaundice",
            slug: "jaundice",
            imageUrl: "/images/services/jaundice.webp",
          },
          {
            name: "Cirrhosis",
            slug: "cirrhosis",
            imageUrl: "/images/services/cirrhosis.jpg",
          },
          {
            name: "Wilson Disease",
            slug: "wilson-disease",
            imageUrl: "/images/services/wilson-disease.jpg",
          },
          {
            name: "Ascites",
            slug: "ascites",
            imageUrl: "/images/services/ascites.jpg",
          },
          {
            name: "Portal Hypertension",
            slug: "portal-hypertension",
            imageUrl: "/images/services/portal-hypertension.webp",
            procedures: [
              "EHPVO ",
              "NCIPH or PSVD Management",
              "Congenital Hepatic fibrosis ",
            ],
          },
          {
            name: "Liver Failure",
            slug: "liver-failure",
            imageUrl: "/images/services/liver-failure.jpg",
            procedures: [
              "Fulminant liver failure ",
              "Acute liver failure management",
              "Subacute liver failure care",
              "Chronic liver failure ",
              "Acute on Chronic Liver failure (ACLF)",
            ],
          },
          {
            name: "Plasma Exchange (PLEX)",
            slug: "plex",
            imageUrl: "/images/services/plex.png",
          },
          {
            name: "Liver Transplantation",
            slug: "liver-transplantation",
            imageUrl: "/images/services/liver-transplantation.jpeg",
          },
          {
            name: "Infiltrative liver diseases",
            slug: "Infiltrative-liver-diseases",
            imageUrl: "/images/services/infiltrative-liver-diseases.png",
          },

          {
            name: "Liver Tumors",
            slug: "liver-tumors",
            imageUrl: "/images/services/liver-tumors.avif",
            procedures: [
              "Hemangioma",
              "Liver cyst",
              "ADPKD",
              "Fibronodular hyperplasia (FNH)",
              "Hepatic Adenoma",
              "Hepatocellular carcinoma or Liver Cancer",
            ],
          },
          {
            name: "Vascular Liver Diseases",
            slug: "vascular-liver-diseases",
            imageUrl: "/images/services/liver-vascular.webp",
            procedures: [
              "Budd chiari syndrome ",
              "Portal Vein thrombosis management",
              "Non cirrhotic Intrahepatic Portal Hypertension (NCIPH)",
              "Porto Sinusoidal vascular disorder (PSVD)",
              "Sinusoidal Obstruction Syndrome",
            ],
          },
          {
            name: "Drug Induced Liver Injury",
            slug: "drug-induced-liver-injury",
            imageUrl: "/images/services/drug-induced-liver-injury.jpg",
          },
          {
            name: "Cholestatic Liver Diseases",
            slug: "cholestatic-liver-diseases",
            imageUrl: "/images/services/cholestatic-liver-diseases.png",
            procedures: [
              "Sclerosing cholangitis",
              "Primary sclerosing cholangitis (PSC)",
              "Primary biliary cholangitis( PBC)",
            ],
          },
          {
            name: "Metabolic liver diseases",
            slug: "matabolic-liver-diseases",
            imageUrl: "/images/services/metabolic-syndrome.jpg",
          },
          {
            name: "Liver Biopsy",
            slug: "liver-biopsy",
            imageUrl: "/images/services/liver-biopsy.jpg",
            procedures: [
              "Percutaneous liver biopsy",
              "Transjugular liver biopsy",
            ],
          },
          {
            name: "Fibroscan",
            slug: "fibroscan",
            imageUrl: "/images/services/fibroscan.png",
          },
          {
            name: "Trans Jugular Intrahepatic Portosystemic Shunt (TIPS)",
            slug: "tips",
            imageUrl: "/images/services/tips.jpg",
          },
        ],
      },
      {
        title: "Gall Bladder And Bile Duct Diseases",
        slug: "gall-bladder-and-bile-duct-diseases",
        description:
          "Expert management of conditions affecting the gallbladder and bile ducts using advanced diagnostic and therapeutic techniques.",
        imageUrl: "/images/services/biliary-disorders.png",
        subServices: [
          {
            name: "Gallbladder Disorders",
            slug: "gallbladder-disorders",
            imageUrl: "/images/services/gallbladder.jpg",
            procedures: [
              "Gall bladder Polyp ",
              "Gall bladder stones management",
              "Gall bladder cancer ",
            ],
          },
          {
            name: "Bile Duct Disorders",
            slug: "bile-duct-disorders",
            imageUrl: "/images/services/bile-duct.jpg",
            procedures: [
              "Bile duct stones ",
              "Bile duct stricture management",
              "Bile duct cancer ",
              "Cholangitis management",
              "Obstructive jaundice ",
              "IgG4 related cholangiopathy",
            ],
          },
        ],
      },
      {
        title: "Pancreatic Diseases",
        slug: "pancreatic-diseases",
        description:
          "Expert diagnosis and  of various pancreatic conditions, from inflammation to tumors, using advanced medical approaches and interventional procedures.",
        imageUrl: "/images/services/pancreatic-disorders.jpg",
        subServices: [
          {
            name: "Pancreatitis",
            slug: "pancreatitis-management",
            imageUrl: "/images/services/pancreatitis.jpg",
            procedures: [
              "Acute pancreatitis ",
              "Chronic pancreatitis management",
              "Complications of pancreatitis",
              "Autoimmune pancreatitis",
              "IgG4 related pancreatitis",
            ],
          },
          {
            name: "Pancreatic Tumors",
            slug: "pancreatic-tumors",
            imageUrl: "/images/services/pancreatic-cancer.webp",
            procedures: [
              "Cystic lesions of the pancreas",
              "Pancreatic cancer ",
            ],
          },
        ],
      },
      {
        title: "Diseases of The Gastrointestinal System",
        slug: "diseases-of-the-gastrointestinal-system",
        description:
          "Comprehensive care for various digestive system disorders affecting the esophagus, stomach, and intestines.",
        imageUrl: "/images/services/gi-disorders.jpg",
        subServices: [
          {
            name: "Dyspepsia",
            slug: "dyspepsia",
            imageUrl: "/images/services/dyspepsia.png",
            procedures: [
              "Gas Problem",
              "Bloating",
              "Excessive belching ",
              "Gastroesophagel reflux disease",
              "Reflux esophagitis ",
              "Eosinophilic esophagitis",
            ],
          },
          {
            name: "Constipation",
            slug: "constipation",
            imageUrl: "/images/services/constipation.jpg",
          },
          {
            name: "Stomach & Duodenal",
            slug: "stomach-duodenal",
            imageUrl: "/images/services/stomach-duodenal.jpeg",
            procedures: [
              "Ulcer disease",
              "Stomach cancer management",
              "Gastric antral vascular ectasia (GAVE)",
              "Porto hypertensive gastropathy (PHG)",
              "Gastric polyp",
              "Neuro endocrine tumor (NET)",
              "Gastrointestinal stromal tumors (GIST)",
            ],
          },
          {
            name: "Intestinal",
            slug: "intestinal-disorders",
            imageUrl: "/images/services/intestinal.jpg",
            procedures: [
              "Inflammatory Bowel Disease (IBD) ",
              "Crohns disease",
              "Ulcerative colitis ",
              "Colorectal polyp",
              "Intestinal Tuberculosis ",
              "Colon cancer ",
              "Colonic diverticular disease",
            ],
          },
          {
            name: "Per Rectal Bleeding",
            slug: "per-rectal-bleeding",
            imageUrl: "/images/services/per-rectal-bleeding.jpg",
            procedures: [
              "Hemorrhoids",
              "Anal fissure",
              "Rectal ulcers",
              "Rectal cancer",
            ],
          },
          {
            name: "Diarrhea",
            slug: "diarrhea",
            imageUrl: "/images/services/diarrhea.jpg",
            procedures: [
              "Acute gastroenteritis",
              "Dysentry",
              "Celiac disease",
              "Chronic Diarrhea",
              "Small bowel diarrhea",
              "Large bowel diarrhea",
              "Steatorrhea",
              "Irritable bowel syndrome (IBS)",
            ],
          },
          {
            name: "Pain abdomen",
            slug: "abdomen",
            imageUrl: "/images/services/abdomen.webp",
          },
        ],
      },
      {
        title: "Gastrointestinal Bleeding",
        slug: "gastrointestinal-bleeding",
        description:
          "Expert management of various types of gastrointestinal bleeding using advanced endoscopic techniques.",
        imageUrl: "/images/services/gi-bleeding.gif",
        subServices: [
          {
            name: "Variceal Bleeding",
            slug: "variceal-bleeding",
            imageUrl: "/images/services/variceal-bleeding.avif",
            procedures: [
              "Esophageal varices ",
              "Gastric varices",
              "Endoscopic variceal band ligation (EVL)",
              "Endoscopic Sclerotherapy",
              "Glue injection",
            ],
          },
          {
            name: "Non-Variceal Bleeding",
            slug: "non-variceal-bleeding",
            imageUrl: "/images/services/non-variceal.jpg",
            procedures: ["Ulcer related bleeding"],
          },
        ],
      },
      {
        title: "Endoscopy Services",
        slug: "endoscopy-services",
        description:
          "State-of-the-art endoscopic procedures for diagnosis and  of various digestive system disorders.",
        imageUrl: "/images/services/endoscopy.jpg",
        subServices: [
          {
            name: "Upper GI Endoscopy",
            slug: "diagnostic-procedures",
            imageUrl: "/images/services/upper-gi-endo.png",
          },
          {
            name: "Colonoscopy",
            slug: "colonoscopy",
            imageUrl: "/images/services/colonoscopy.jpg",
          },
          {
            name: "Therapeutic",
            slug: "therapeutic-procedures",
            imageUrl: "/images/services/endocopic.jpeg",
            procedures: [
              "Polypectomy",
              "GI bleed management",
              "Argon Plasma coagulation (APC)",
              "Endoscopic Sclerotherapy",
              "Endoscopic variceal band ligation (EVL)",
              "Endoscopic glue injection",
            ],
          },
          {
            name: "ERCP",
            slug: "ercp-services",
            imageUrl: "/images/services/ercp.jpg",
            procedures: [
              "Bile duct Stone extraction",
              "Biliary stenting",
              "Biliary brush Cytology",
            ],
          },
        ],
      },
    ],
  },
  {
    sub: "drmoumita",
    name: "Dr. Moumita Saha",
    contact: "8789567806",
    title: "Pediatric and Adolescent Endocrinologist",
    specialty: "Pediatric Endocrinology and Growth Disorders",
    overview:
      "Dr. Moumita Saha is a renowned pediatric endocrinologist specializing in hormonal disorders and growth-related conditions in children and adolescents. Her patient-centered approach ensures comprehensive care from infancy through adolescence.",
    imageUrl: "/images/first.jpg",
    services: [
      {
        title: "Growth Disorders",
        slug: "growth-disorders",
        description:
          "Comprehensive care including growth asessment, individualised treatment plan and specialised hormone therapy as per requirement.",
        imageUrl: "/images/services/growth-therapy.jpg",
        subServices: [
          {
            name: "Growth Disorders",
            imageUrl: "/images/services/growth-therapy.jpg",
            procedures: [
              "Familial short stature, Idiopathic short stature",
              "Constitutional Delay of Growth and Puberty",
              "Growth Hormone Deficiency",
              "Skeletal Dysplasia",
            ],
          },
        ],
      },
      {
        title: "Childhood Obesity",
        slug: "childhood-obesity",
        description: "Comprehensive management including detailed evaluation, complication and comorbidity screening, timely intervention and individualised treatment plan.",
        imageUrl: "/images/services/metabolic-syndrome.jpg",

        subServices: [
          {
            name: "Childhood Obesity",
            imageUrl:"/images/services/metabolic-syndrome.jpg",
            procedures: [
              "Exogenous obesity",
              "Metabolic syndrome",
              "Fatty liver",
              "Endogenous obesity",
              "Monogenic obesity",
            ],
          },
        ],
      },

      {
        title: "Childhood Diabetes",
        slug: "childhood-diabetes",
        imageUrl: "/images/services/diabetes-tech.jpg",
        description: "Comprehensive diabetes care with individualised insulin therapy, regular HbA1C monitoring / Continuous glucose monitoring (CGM), carbohydrate counting and meal planning, insulin pump therapy.",
        subServices: [
          {
            name: "Diabetes Care",
            imageUrl: "/images/services/diabetes-tech.jpg",
            procedures: [
              "Type 1 Diabetes Mellitus",
              "Type 2 Diabetes Mellitus",
              "MODY",
              "Neonatal Diabetes Mellitus",
              "Diabetic Ketoacidosis",
            ],
          },
        ],
      },
     
      {
        title: "Thyroid Disorders of Children",
        slug: "thyroid-disorders",
        description: "",
        imageUrl: "/images/services/thyroid-disorders.jpg",

        subServices: [
          {
            name: "Thyroid Disorders",
            slug: "thyroid-disorders",
            imageUrl: "/images/services/thyroid-disorders.jpg",
            procedures: [
              "Congenital hypothyroidism (transient/permanent)",
              "Hashimoto thyroiditis",
              "Subacute thyroiditis",
              "Hyperthyroidism",
              "Graves Disease",
              "Goitre",
              "Thyroid nodules",
              "Thyroid malignancy",
            ],
          },
        ],
      },
      {
        title: "Pituitary Disorders",
        slug: "pituitary-disorders",
        description:
          "Comprehensive care for various pituitary disorders affecting children.",
        imageUrl: "/images/services/pituitary-disorders.avif",
        subServices: [
          {
            name: "Pituitary Disorders",
            imageUrl: "/images/services/pituitary-disorders.avif",
            procedures: [
              "Hypopituitarism (congenital/acquired)",
              "Pituitary hypoplasia/tumors",
              "Isolated/Multiple pituitary hormone deficiency",
              "Pituitary hormone excess",
            ],
          },
        ],
      },

      {
        title: "Adrenal Disorders",
        description:
          "Comprehensive evaluation and treatment of adrenal conditions including Cushing's syndrome, Addison's disease, adrenal insufficiency, pheochromocytoma, and adrenal tumors by our expert endocrinologists.",

        imageUrl: "/images/services/adrenals.jpeg",
        slug: "adrenal-disorders",
        subServices: [
          {
            name: "Adrenal Disorders",
            imageUrl: "/images/services/adrenals.jpeg",
            procedures: [
              "Adrenal insufficiency (congenital/acquired)",
              "Congenital adrenal hyperplasia/hypoplasia",
              "Adrenal tumors",
              "Cushing syndrome",
              "Pheochromocytoma",
              "Endocrine hypertension",
            ],
          },
        ],
      },
      {
        title: "Metabolic Bone Disorders",
        slug: "metabolic-bone-disorders",
        description:
          "Comprehensive care for bone metabolism and mineral disorders.",
        imageUrl: "/images/services/rickets.png",
        subServices: [
          {
            name: "Metabolic Bone Disorders",
            slug: "metabolic-bone-disorders",
            imageUrl: "/images/services/rickets.png",
            procedures: [
              "Vitamin D deficiency rickets",
              "Refractory rickets",
              "Vitamin D dependent rickets",
              "Hypophosphatemic rickets",
              "Renal rickets",
              "Juvenile osteoporosis",
            ],
          },
        ],
      },

      {
        title: "Differences of Sex Development (DSD)",
        slug: "dsd",
        description:
          "Comprehensive care for children with atypical genitalia, micropenis, and undescended testis by Dr. Moumita",
        imageUrl: "/images/services/dsd.jpg",

        subServices: [
          {
            name: "Differences of Sex Development",
            slug: "differences-sex-development",
            imageUrl: "/images/services/dsd.jpg",
            procedures: [
              "Atypical genitalia",
              "Micropenis",
              "Undescended testis",
            ],
          },
        ],
      },
      {
        title: "Fluid and Electrolyte disturbances",

        description: "",
        slug: "fluid-electrolyte-disorders",
        imageUrl: "/images/services/ibd.png",
        subServices: [
          {
            name: "Fluid and Electrolyte Disorders",
            imageUrl: "/images/services/ibd.png",
            procedures: [
              "Diabetes Insipidus",
              "Cerebral salt wasting",
              "Hypernatremia/hyponatremia",
              "Hypocalcemia/ hypercalcemia",
              "Hypomagnesemia",
            ],
          },
        ],
      },
      {
        title: "Neonatal Endocrine Disorders",

        description:
          "Expert diagnosis and treatment of hormonal disorders in newborns, including thyroid, adrenal, blood sugar, and genital development conditions.",
        imageUrl: "/images/services/neonate.jpg",
        slug: "neonatal-endocrine-disorders",
        subServices: [
          {
            name: "Neonatal Endocrine Disorders",
            imageUrl: "/images/services/neonate.jpg",
            procedures: [
              "Congenital hyperinsulinemic hypoglycemia",
              "Congenital hypothyroidism",
              "Congenital adrenal hyperplasia",
              "Neonatal severe hyperparathyroidism",
              "Atypical genitalia/ DSD",
            ],
          },
        ],
      },
      {
        title: "Puberty Disorders and Reproductive Health",
        slug: "puberty-reproductive-health",
        description:
          "Expert management of reproductive and puberty-related conditions in children and adolescents.",
        imageUrl: "/images/services/puberty.jpeg",
        subServices: [
          {
            name: "Puberty Disorders and Reproductive Health",
            imageUrl: "/images/services/puberty.png",
            procedures: [
              "Precocious puberty (central/peripheral)",
              "Menstrual irregularity in adolescents / PCOS",
              "Delayed puberty (hypogonadotropic/hypergonadotropic)",
              "Puberty induction",
              "Puberty suppression",
            ],
          },
        ],
      },
      {
        title: "Management of Syndromes",
        slug: "syndromes-treatments",
        description:
          "Management of complex endocrine syndromes and systemic conditions.",
        imageUrl: "/images/services/chromo.jpg",
        subServices: [
          {
            name: "Syndromes",
            imageUrl: "/images/services/chromo.jpg",
            procedures: [
              "Turner syndrome",
              "Prader Willi syndrome",
              "Silver Russell syndrome",
              "Osteogenesis Imperfecta",
              "Skeletal Dysplasia",
              "McCune Albright Syndrome",
              "Polyglandular endocrine syndromes",
              "Down syndrome",
            ],
          },
        ],
      },
      {
        title: "Specialized Endocrine Treatment",
        slug: "specialized-endocrine-treatment",
        description:
          "Advanced treatment for complex hormonal disorders, including diabetes care, growth therapies, and metabolic management in pediatric and adolescent patients.",
        imageUrl: "/images/services/specialized-conditions.jpeg",
        subServices: [
          {
            name: "Specialized Endrocrine Treatment",
            imageUrl: "/images/services/spec.png",
            procedures: [
              "Comprehensive Diabetes Care - Insulin therpay, CGM, Insulin Pump therpy",
              "Medical Nutrition Therapy",
              "Growth Hormone Therapy",
              "Puberty Induction",
              "Puberty Suppression",
              "Bisphosphonate Therapy for Bone Mineral Disorders",
              "Hormone Replacement Therapy (Pituitary/ Adrenal Disorders)",
            ],
          },
        ],
      },
      {
        title: "Miscellaneous Conditions", 
        slug: "miscellaneous-conditions", 
        description: "Advanced treatment for complex hormonal and metabolic disorders, including endocrine complications in chronic illnesses, Small for Gestational Age newborns, lipid disorders, and hypoglycemia management in children.", 
        imageUrl: "/images/services/misc.jpeg", 
        subServices: [
          {
            name: "Miscellaneous Conditions", 
            imageUrl: "/images/services/misc.jpeg", 
            procedures: [
              "Endocrine complications of chronic systemic illness (e.g., thalassemia, malignancy, post-Bone Marrow Transplant, cystic fibrosis)", 
              "Endocrine and metabolic complications in Small for Gestational Age newborns",
              "Pediatric lipid disorders",
              "Hypoglycemia disorders in infancy and childhood / metabolic disorders",
            ]
          }
        ]
      }, 
      {
        title: "Dynamic Endocrine Testing",
        slug: "dynamic-endocrine-testing",
        description: "Comprehensive endocrine testing and evaluation services.",
        imageUrl: "/images/services/lab-diagnostic.jpg",
        subServices: [
          {
            name: "Dynamic Endocrine Testing",
            slug: "dynamic-testing",
            imageUrl: "/images/services/lab-diagnostic.jpg",
            procedures: [
              "Growth hormone stimulation test",
              "GnRH analog stimulation test",
              "hCG stimulation test",
              "ACTH stimulation test",
              "Dexamethasone suppression test",
              "Oral glucose tolerance test",
              "Water deprivation test",
              "Diagnostic fasting study",
            ],
          },
        ],
      },
    ],
  },
];
