export interface SubServiceContent {
  name: string;
  slug: string;
  imageUrl: string;
  benefits?: string[];
  procedures?: string[];
  symptoms?: string[];
  whoShouldConsider?: string[];
}

export interface ServiceContent {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  overview: string;
  s?: string[];
  subServices: SubServiceContent[];
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
    sub: 'drsushovan',
    name: "Dr. Sushovan Baidya",
    contact: '9474866692',
    title: "Gastroenterologist & Hepatologist",
    specialty: "Liver, Digestive System, and Gastrointestinal Disorders",
    overview: "Dr. Sushovan Baidya is a distinguished gastroenterologist and hepatologist with extensive experience in treating complex digestive system disorders. His expertise spans across liver diseases, gastrointestinal conditions, and advanced endoscopic procedures, ensuring comprehensive care for patients with various digestive health challenges.",
    imageUrl: "/images/second.png",
    services: [
      {
        title: "Liver Disease Management",
        slug: "liver-disease-management",
        description: "Our liver disease management program offers comprehensive care using cutting-edge diagnostic techniques and personalized  plans. We specialize in treating all forms of liver conditions, from acute hepatitis to chronic liver disease and cancer.",
        imageUrl: "/images/services/liver-care.png",
        overview: "The liver is a vital organ that plays a crucial role in metabolism, detoxification, and protein synthesis. Our liver care program encompasses prevention, early detection, and advanced  of liver diseases.",
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
              "Hepatitis E"
            ]
          },
          {
            name: "Fatty Liver Disease",
            slug: "fatty-liver-disease",
            imageUrl: "/images/services/fatty-liver.jpg",
            procedures: [
              "MASLD / NAFLD",
            ]
          },
          {
            name: "Alcohol related liver diseases",
            slug: "alcohol-related-liver-diseases",
            imageUrl: "/images/services/alcohol-related-liver-diseases.jpg",
          },
          {
            name: "Autoimmune Hepatitis",
            slug: "autoimmune-hepatitis",
            imageUrl: "/images/services/autoimmune-hepatitis.jpg",
          },
          {
            name: "Wilson Disease",
            slug: "wilson-disease",
            imageUrl: "/images/services/wilson-disease.jpg",
          },
          {
            name: "Liver Abscess",
            slug: "liver-abscess",
            imageUrl: "/images/services/liver-abscess.jpg",
            procedures: [
              "Pyogenic liver abscess ",
              "Amoebic liver abscess "
            ]
          },
          {
            name: "Jaundice",
            slug: "jaundice",
            imageUrl: "/images/services/jaundice.jpg",
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
            imageUrl: "/images/services/ascites.jpg"
          },
          {
            name: "Portal Hypertension",
            slug: "portal-hypertension",
            imageUrl: "/images/services/portal-hypertension.jpg",
            procedures: [
              "EHPVO ",
              "NCIPH or PSVD Management",
              "Congenital Hepatic fibrosis "
            ]
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
              "Acute on Chronic Liver failure (ACLF)"
            ]
          },
          {
            name: "Plasma Exchange (PLEX)",
            slug: "plex",
            imageUrl: "/images/services/plex.jpg"
          },
          {
            name: "Liver Transplantation",
            slug: "liver-transplantation",
            imageUrl: "/images/services/liver-transplantation.jpg"
          },
          {
            name: "Infiltrative liver diseases",
            slug: "Infiltrative-liver-diseases",
            imageUrl: "/images/services/infiltrative-liver-diseases.jpg"
          },

          {
            name: "Liver Tumors",
            slug: "liver-tumors",
            imageUrl: "/images/services/liver-tumors.jpg",
            procedures: [
              "Hemangioma",
              "Liver cyst",
              "ADPKD",
              "Fibronodular hyperplasia (FNH)",
              "Hepatic Adenoma",
              "Hepatocellular carcinoma or Liver Cancer"
            ]
          },
          {
            name: "Vascular Liver Diseases",
            slug: "vascular-liver-diseases",
            imageUrl: "/images/services/vascular-liver.jpg",
            procedures: [
              "Budd chiari syndrome ",
              "Portal Vein thrombosis management",
              "Non cirrhotic Intrahepatic Portal Hypertension (NCIPH)",
              "Porto Sinusoidal vascular disorder (PSVD)",
              "Sinusoidal Obstruction Syndrome"
            ]
          },
          {
            name: "Drug Induced Liver Injury",
            slug: "drug-induced-liver-injury",
            imageUrl: "/images/services/drug-induced-liver-injury.jpg",
          },
          {
            name: "Cholestatic Liver Diseases",
            slug: "cholestatic-liver-diseases",
            imageUrl: "/images/services/cholestatic-liver-diseases.jpg",
            procedures: [
              "Sclerosing cholangitis",
              "Primary sclerosing cholangitis (PSC)",
              "Primary biliary cholangitis( PBC)"
            ]
          },
          {
            name: "Metabolic liver diseases",
            slug: "matabolic-liver-diseases",
            imageUrl: "/images/services/metabolic-liver-diseases.jpg",
          },
          {
            name: "Liver Biopsy",
            slug: "liver-biopsy",
            imageUrl: "/images/services/liver-biopsy.jpg",
            procedures: [
              "Percutaneous liver biopsy",
              "Transjugular liver biopsy"
            ]
          },
          {

            name: "Fibroscan",
            slug: "fibroscan",
            imageUrl: "/images/services/fibroscan.jpg",
          }
          ,
          {
            name: "Trans Jugular Intrahepatic Portosystemic Shunt (TIPS)",
            slug: "tips",
            imageUrl: "/images/services/tips.jpg",
          }
        ]
      },
      {
        title: "GALL BLADDER AND BILE DUCT DISEASES",
        slug: "gall-bladder-and-bile-duct-diseases",
        description: "Expert management of conditions affecting the gallbladder and bile ducts using advanced diagnostic and therapeutic techniques.",
        imageUrl: "/images/services/biliary-disorders.png",
        overview: "Our biliary care program encompasses all aspects of gallbladder and bile duct disorders, providing both medical and interventional s.",
        subServices: [
          {
            name: "Gallbladder Disorders",
            slug: "gallbladder-disorders",
            imageUrl: "/images/services/gallbladder.jpg",
            procedures: [
              "Gall bladder Polyp ",
              "Gall bladder stones management",
              "Gall bladder cancer "
            ]
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
              "IgG4 related cholangiopathy"
            ]
          }
        ]
      },
      {
        title: "Pancreatic Diseases",
        slug: "pancreatic-diseases",
        description: "Expert diagnosis and  of various pancreatic conditions, from inflammation to tumors, using advanced medical approaches and interventional procedures.",
        imageUrl: "/images/services/pancreatic-disorders.jpg",
        overview: "Our pancreatic care program provides comprehensive management of both acute and chronic pancreatic conditions, ensuring optimal outcomes through early detection and appropriate intervention.",
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
              "IgG4 related pancreatitis"
            ]
          },
          {
            name: "Pancreatic Tumors",
            slug: "pancreatic-tumors",
            imageUrl: "/images/services/pancreatic-tumors.jpg",
            procedures: [
              "Cystic lesions of the pancreas",
              "Pancreatic cancer "
            ]
          }
        ]
      },
      {
        title: "Diseases of The Gastrointestinal System",
        slug: "gastrointestinal-system",
        description: "Comprehensive care for various digestive system disorders affecting the esophagus, stomach, and intestines.",
        imageUrl: "/images/services/gi-disorders.jpg",
        overview: "Our gastrointestinal program covers the full spectrum of digestive disorders, providing both diagnostic and therapeutic services for optimal patient outcomes.",
        subServices: [
          {
            name: "Dyspepsia",
            slug: "dyspepsia",
            imageUrl: "/images/services/dyspepsia.jpg",
            procedures: [
              "Gas and bloating management",
              "Excessive belching ",
              "GERD management",
              "Reflux esophagitis ",
              "Eosinophilic esophagitis"
            ]
          },
          {
            name: "Constipation",
            slug: "constipation",
            imageUrl: "/images/services/constipation.jpg"
          },
          {
            name: "Stomach & Duodenal",
            slug: "stomach-duodenal",
            imageUrl: "/images/services/stomach-duodenal.jpg",
            procedures: [
              "Ulcer disease",
              "Stomach cancer management",
              "Gastric antral vascular ectasia (GAVE)",
              "Porto hypertensive gastropathy (PHG)",
              "Gastric polyp removal",
              "Neuro endocrine tumor (NET)",
              "Gastrointestinal stromal tumors (GIST)"
            ]
          },
          {
            name: "Intestinal",
            slug: "intestinal-disorders",
            imageUrl: "/images/services/intestinal.jpg",
            procedures: [
              "Inflammatory Bowel Disease (IBD) ",
              "Crohns disease management",
              "Ulcerative colitis ",
              "Colorectal polyp removal",
              "Intestinal Tuberculosis ",
              "Colon cancer management",
              "Colonic diverticular disease"
            ]
          },
          {
            name: "Per Rectal Bleeding",
            slug: "per-rectal-bleeding",
            imageUrl: "/images/services/per-rectal-bleeding.jpg",
            procedures: [
              "Hemorrhoids",
              "Anal fissure",
              "Rectal ulcers",
              "Rectal cancer"
            ]
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
              "Irritable bowel syndrome (IBS)"
            ]
          },
          {
            name: "Pain abdomen",
            slug: "abdomen",
            imageUrl: "/images/services/abdomen.jpg",
          }
        ]
      },
      {
        title: "Gastrointestinal Bleeding",
        slug: "gi-bleeding",
        description: "Expert management of various types of gastrointestinal bleeding using advanced endoscopic techniques.",
        imageUrl: "/images/services/gi-bleeding.gif",
        overview: "Our program provides comprehensive care for both variceal and non-variceal bleeding, utilizing the latest therapeutic approaches.",
        subServices: [
          {
            name: "Variceal Bleeding",
            slug: "variceal-bleeding",
            imageUrl: "/images/services/variceal.jpg",
            procedures: [
              "Esophageal varices ",
              "Gastric varices management",
              "Endoscopic variceal band ligation (EVL)",
              "Endoscopic Sclerotherapy",
              "Glue injection"
            ]
          },
          {
            name: "Non-Variceal Bleeding",
            slug: "non-variceal-bleeding",
            imageUrl: "/images/services/non-variceal.jpg",
            procedures: [
              "Ulcer related bleeding",
            ]
          }
        ]
      },
      {
        title: "Endoscopy Services",
        slug: "endoscopy-services",
        description: "State-of-the-art endoscopic procedures for diagnosis and  of various digestive system disorders.",
        imageUrl: "/images/services/endoscopy.jpg",
        overview: "Our endoscopy unit is equipped with the latest technology for both diagnostic and therapeutic procedures.",
        subServices: [
          {
            name: "Diagnostic",
            slug: "diagnostic-procedures",
            imageUrl: "/images/services/diagnostic.jpg",
            procedures: [
              "Gastroscopy or Upper GI endoscopy",
              "Colonoscopy"
            ]
          },
          {
            name: "Therapeutic Procedures",
            slug: "therapeutic-procedures",
            imageUrl: "/images/services/therapeutic.jpg",
            procedures: [
              "Polypectomy",
              "GI bleed management",
              "Argon Plasma coagulation (APC)",
              "Endoscopic Sclerotherapy",
              "Endoscopic variceal band ligation (EVL)",
              "Endoscopic glue injection"
            ]
          },
          {
            name: "ERCP Services",
            slug: "ercp-services",
            imageUrl: "/images/services/ercp.jpg",
            procedures: [
              "Bile duct Stone extraction",
              "Biliary stenting",
              "Biliary brush Cytology"
            ]
          }
        ]
      }
    ]
  },
  {
    sub: 'drmoumita',
    name: "Dr. Moumita Saha",
    contact: '8130545130',
    title: "Pediatric and Adolescent Endocrinologist",
    specialty: "Pediatric Endocrinology and Growth Disorders",
    overview: "Dr. Moumita Saha is a renowned pediatric endocrinologist specializing in hormonal disorders and growth-related conditions in children and adolescents. Her patient-centered approach ensures comprehensive care from infancy through adolescence.",
    imageUrl: "/images/first.jpg",
    services: [
      {
        title: "Growth and Development Disorders",
        slug: "growth-development-disorders",
        description: "Comprehensive evaluation and management of various growth disorders in children, utilizing advanced diagnostic techniques and personalized treatment strategies.",
        imageUrl: "/images/services/growth-disorders.jpg",
        overview: "Our growth disorders program focuses on identifying and treating various conditions affecting children's growth and development.",
        subServices: [
          {
            name: "Growth Disorders",
            slug: "growth-disorders",
            imageUrl: "/images/services/growth-disorders.jpg",
            procedures: [
              "Short stature evaluation and management",
              "Tall stature evaluation",
              "Familial short stature",
              "Idiopathic short stature",
              "Constitutional Delay of growth and puberty",
              "Growth hormone deficiency",
              "Skeletal dysplasia"
            ]
          },
          {
            name: "Small for Gestational Age Management",
            slug: "sga-management",
            imageUrl: "/images/services/sga-management.jpg",
            procedures: [
              "Endocrine complications",
              "Metabolic complications",
              "Growth monitoring and intervention"
            ]
          }
        ]
      },
      {
        title: "Metabolic Disorders",
        slug: "metabolic-disorders",
        description: "Expert management of pediatric metabolic conditions including obesity and diabetes.",
        imageUrl: "/images/services/metabolic-disorders.jpg",
        overview: "Our metabolic disorders program provides comprehensive care for various metabolic conditions affecting children.",
        subServices: [
          {
            name: "Obesity Management",
            slug: "obesity-management",
            imageUrl: "/images/services/obesity-management.jpg",
            procedures: [
              "Exogenous obesity",
              "Metabolic syndrome",
              "Fatty liver",
              "Endogenous obesity",
              "Monogenic obesity"
            ]
          },
          {
            name: "Diabetes Care",
            slug: "diabetes-care",
            imageUrl: "/images/services/diabetes-care.jpg",
            procedures: [
              "Type 1 Diabetes Mellitus",
              "Type 2 Diabetes Mellitus",
              "MODY",
              "Neonatal Diabetes Mellitus",
              "Diabetic Ketoacidosis",
              "Comprehensive Diabetes Management"
            ]
          },
          {
            name: "Lipid Disorders",
            slug: "lipid-disorders",
            imageUrl: "/images/services/lipid-disorders.jpg",
            procedures: [
              "Pediatric dyslipidemia",
              "Familial hypercholesterolemia",
              "Secondary lipid disorders"
            ]
          },
          {
            name: "Metabolic Disorders",
            slug: "metabolic-disorders-management",
            imageUrl: "/images/services/metabolic-disorders-management.jpg",
            procedures: [
              "Hypoglycemia disorders in infancy",
              "Childhood metabolic disorders",
              "Congenital hyperinsulinemic hypoglycemia"
            ]
          }
        ]
      },
      {
        title: "Endocrine System Disorders",
        slug: "endocrine-system-disorders",
        description: "Comprehensive care for various endocrine system disorders affecting children.",
        imageUrl: "/images/services/endocrine-disorders.jpg",
        overview: "Our program provides specialized care for various endocrine conditions affecting children.",
        subServices: [
          {
            name: "Thyroid Disorders",
            slug: "thyroid-disorders",
            imageUrl: "/images/services/thyroid-disorders.jpg",
            procedures: [
              "Congenital hypothyroidism (transient/permanent)",
              "Acquired hypothyroidism - Hashimoto thyroiditis",
              "Subacute thyroiditis",
              "Hyperthyroidism",
              "Graves Disease",
              "Goitre",
              "Thyroid nodules",
              "Thyroid malignancy"
            ]
          },
          {
            name: "Pituitary Disorders",
            slug: "pituitary-disorders",
            imageUrl: "/images/services/pituitary-disorders.jpg",
            procedures: [
              "Hypopituitarism (congenital/acquired)",
              "Pituitary hypoplasia/tumors",
              "Isolated/Multiple pituitary hormone deficiency",
              "Pituitary hormone excess",
              "Craniopharyngioma",
              "Germinoma"
            ]
          },
          {
            name: "Adrenal Disorders",
            slug: "adrenal-disorders",
            imageUrl: "/images/services/adrenal-disorders.jpg",
            procedures: [
              "Adrenal insufficiency (congenital/acquired)",
              "Congenital adrenal hyperplasia/hypoplasia",
              "Adrenal tumors",
              "Cushing syndrome",
              "Pheochromocytoma",
              "Endocrine hypertension"
            ]
          }
        ]
      },
      {
        title: "Reproductive Health",
        slug: "reproductive-health",
        description: "Expert management of reproductive and puberty-related conditions in children and adolescents.",
        imageUrl: "/images/services/reproductive-health.jpg",
        overview: "Our reproductive health program addresses various puberty and reproductive system disorders.",
        subServices: [
          {
            name: "Puberty Disorders",
            slug: "puberty-disorders",
            imageUrl: "/images/services/puberty-disorders.jpg",
            procedures: [
              "Precocious puberty (central/peripheral)",
              "Delayed puberty (hypogonadotropic/hypergonadotropic)",
              "Puberty induction",
              "Puberty suppression"
            ]
          },
          {
            name: "Adolescent Reproductive Health",
            slug: "adolescent-reproductive-health",
            imageUrl: "/images/services/adolescent-health.jpg",
            procedures: [
              "Menstrual irregularities",
              "PCOS management",
              "Hormonal imbalances"
            ]
          },
          {
            name: "Differences of Sex Development",
            slug: "differences-sex-development",
            imageUrl: "/images/services/dsd.jpg",
            procedures: [
              "Atypical genitalia",
              "Micropenis",
              "Undescended testis"
            ]
          }
        ]
      },
      {
        title: "Bone and Mineral Disorders",
        slug: "bone-mineral-disorders",
        description: "Comprehensive care for bone metabolism and mineral disorders.",
        imageUrl: "/images/services/bone-disorders.jpg",
        overview: "Our program provides specialized care for various bone and mineral conditions affecting children.",
        subServices: [
          {
            name: "Metabolic Bone Disorders",
            slug: "metabolic-bone-disorders",
            imageUrl: "/images/services/metabolic-bone.jpg",
            procedures: [
              "Vitamin D deficiency rickets",
              "Refractory rickets",
              "Vitamin D dependent rickets",
              "Hypophosphatemic rickets",
              "Renal rickets",
              "Juvenile osteoporosis",
              "Osteogenesis Imperfecta"
            ]
          },
          {
            name: "Calcium Disorders",
            slug: "calcium-disorders",
            imageUrl: "/images/services/calcium-disorders.jpg",
            procedures: [
              "Hypocalcemia",
              "Hypercalcemia",
              "Neonatal severe hyperparathyroidism",
              "Hypomagnesemia"
            ]
          }
        ]
      },
      {
        title: "Specialized Conditions",
        slug: "specialized-conditions",
        description: "Management of complex endocrine syndromes and systemic conditions.",
        imageUrl: "/images/services/specialized-conditions.jpg",
        overview: "Our program provides comprehensive care for various genetic syndromes and complex endocrine conditions.",
        subServices: [
          {
            name: "Genetic Syndromes",
            slug: "genetic-syndromes",
            imageUrl: "/images/services/genetic-syndromes.jpg",
            procedures: [
              "Turner syndrome",
              "Prader Willi syndrome",
              "Silver Russell syndrome",
              "Down syndrome",
              "McCune Albright Syndrome",
              "Polyglandular endocrine syndromes"
            ]
          },
          {
            name: "Complex Medical Conditions",
            slug: "complex-conditions",
            imageUrl: "/images/services/complex-conditions.jpg",
            procedures: [
              "Endocrine complications of thalassemia",
              "Endocrine complications of malignancy",
              "Post-Bone Marrow Transplant complications",
              "Cystic fibrosis related endocrine disorders"
            ]
          },
          {
            name: "Fluid and Electrolyte Disorders",
            slug: "fluid-electrolyte-disorders",
            imageUrl: "/images/services/fluid-disorders.jpg",
            procedures: [
              "Diabetes Insipidus",
              "Cerebral salt wasting",
              "Hypernatremia/hyponatremia",
              "Fluid balance disorders"
            ]
          }
        ]
      },
      {
        title: "Diagnostic Services",
        slug: "diagnostic-services",
        description: "Comprehensive endocrine testing and evaluation services.",
        imageUrl: "/images/services/diagnostic-services.jpg",
        overview: "Our diagnostic services utilize state-of-the-art techniques for accurate evaluation of endocrine conditions.",
        subServices: [
          {
            name: "Dynamic Testing",
            slug: "dynamic-testing",
            imageUrl: "/images/services/dynamic-testing.jpg",
            procedures: [
              "Growth hormone stimulation test",
              "GnRH analog stimulation test",
              "hCG stimulation test",
              "ACTH stimulation test",
              "Dexamethasone suppression test",
              "Oral glucose tolerance test",
              "Water deprivation test",
              "Diagnostic fasting study"
            ]
          }
        ]
      }
    ]
}
]