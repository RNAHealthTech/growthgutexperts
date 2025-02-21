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
            name : "Per Rectal Bleeding",
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
        title: "Pediatric Growth Disorders",
        slug: "pediatric-growth-disorders",
        description: "Comprehensive evaluation and  of growth disorders in children, utilizing advanced diagnostic techniques and personalized growth optimization strategies.",
        imageUrl: "/images/services/pediatric-growth-disorders.jpg",
        overview: "Our growth disorders program focuses on identifying and treating various conditions affecting children's growth and development, ensuring they reach their full growth potential.",
        subServices: [
          {
            name: "Short Stature Evaluation",
            slug: "short-stature-evaluation",
            imageUrl: "/images/services/short-stature.jpg",

          },
          {
            name: "Growth Hormone Therapy",
            slug: "growth-hormone-therapy",
            imageUrl: "/images/services/growth-therapy.jpg",

          }
        ]
      },
      {
        title: "Pediatric Diabetes Management",
        slug: "pediatric-diabetes-management",
        description: "State-of-the-art care for all types of diabetes in children and adolescents, incorporating the latest  technologies and educational support.",
        imageUrl: "/images/services/pediatric-diabetes.jpg",
        overview: "Our comprehensive diabetes care program combines medical management with education and lifestyle support to help young patients achieve optimal blood sugar control.",
        subServices: [
          {
            name: "Type 1 Diabetes Care",
            slug: "type-1-diabetes-care",
            imageUrl: "/images/services/type1-diabetes.jpg",

          },
          {
            name: "Diabetes Technology Support",
            slug: "diabetes-technology-support",
            imageUrl: "/images/services/diabetes-tech.jpg",

          }
        ]
      },
      {
        title: "Thyroid Disorders in Children",
        slug: "thyroid-disorders-in-children",
        description: "Specialized care for pediatric thyroid conditions, from congenital to acquired disorders.",
        imageUrl: "/images/services/pediatric-thyroid.jpg",
        overview: "Our pediatric thyroid program provides comprehensive care for all thyroid-related conditions in children and adolescents.",
        subServices: [
          {
            name: "Congenital Hypothyroidism",
            slug: "congenital-hypothyroidism",
            imageUrl: "/images/services/congenital-hypothyroid.jpg",

          },
          {
            name: "Graves Disease Management",
            slug: "graves-disease-management",
            imageUrl: "/images/services/graves-disease.jpg",

          }
        ]
      },
      {
        title: "Disorders of Puberty",
        slug: "disorders-of-puberty",
        description: "Expert management of early and delayed puberty in children and adolescents.",
        imageUrl: "/images/services/puberty-disorders.jpg",
        overview: "Our program addresses various puberty-related concerns, ensuring proper hormonal development and growth.",
        subServices: [
          {
            name: "Precocious Puberty",
            slug: "precocious-puberty",
            imageUrl: "/images/services/precocious-puberty.jpg",

          },
          {
            name: "Delayed Puberty Management",
            slug: "delayed-puberty-management",
            imageUrl: "/images/services/delayed-puberty.jpg",

          }
        ]
      },
      {
        title: "Pediatric Obesity Management",
        slug: "pediatric-obesity-management",
        description: "Comprehensive approach to childhood and adolescent obesity, focusing on healthy lifestyle modifications and medical management when needed.",
        imageUrl: "/images/services/pediatric-obesity.jpg",
        overview: "Our obesity management program combines medical care with lifestyle intervention to achieve healthy weight goals.",
        subServices: [
          {
            name: "Medical Weight Management",
            slug: "medical-weight-management",
            imageUrl: "/images/services/weight-management.jpg",

          },
          {
            name: "Metabolic Syndrome Care",
            slug: "metabolic-syndrome-care",
            imageUrl: "/images/services/metabolic-syndrome.jpg",

          }
        ]
      },
      {
        title: "Pediatric Endocrine Testing",
        slug: "pediatric-endocrine-testing",
        description: "Comprehensive hormonal evaluation using various dynamic testing procedures.",
        imageUrl: "/images/services/endocrine-testing.jpg",
        overview: "Our endocrine testing program utilizes state-of-the-art techniques for accurate diagnosis of hormonal disorders.",
        subServices: [
          {
            name: "Growth Hormone Testing",
            slug: "growth-hormone-testing",
            imageUrl: "/images/services/gh-testing.jpg",

          },
          {
            name: "Glucose Tolerance Testing",
            slug: "glucose-tolerance-testing",
            imageUrl: "/images/services/glucose-testing.jpg",
          }
        ]
      }
    ]
  }
];