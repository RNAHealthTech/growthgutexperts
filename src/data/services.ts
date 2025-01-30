export interface SubServiceContent {
  name: string;
  slug: string;
  description: string;
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
  treatments?: string[];
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
        description: "Our liver disease management program offers comprehensive care using cutting-edge diagnostic techniques and personalized treatment plans. We specialize in treating all forms of liver conditions, from acute hepatitis to chronic liver disease and cancer.",
        imageUrl: "/images/services/liver-care.png",
        overview: "The liver is a vital organ that plays a crucial role in metabolism, detoxification, and protein synthesis. Our liver care program encompasses prevention, early detection, and advanced treatment of liver diseases.",
        subServices: [
          {
            name: "Viral Hepatitis Treatment",
            slug: "viral-hepatitis-treatment",
            description: "Comprehensive management of viral hepatitis using the latest antiviral medications and monitoring protocols. We treat all forms of viral hepatitis (A, B, C, D, and E) with personalized care plans.",
            imageUrl: "/images/services/viral-hepatitis.jpg",
            symptoms: [
              "Jaundice (yellowing of skin and eyes)",
              "Fatigue and weakness",
              "Abdominal pain",
              "Loss of appetite",
              "Nausea and vomiting"
            ],
            procedures: [
              "Viral load testing",
              "Liver function monitoring",
              "Antiviral therapy",
              "Regular health assessments",
              "Vaccination (for preventable types)"
            ]
          },
          {
            name: "Cirrhosis Management",
            slug: "cirrhosis-management",
            description: "Advanced care for liver cirrhosis and its complications, including portal hypertension, ascites, and hepatic encephalopathy. Our program focuses on slowing disease progression and managing symptoms effectively.",
            imageUrl: "/images/services/cirrhosis.jpg",
            procedures: [
              "Endoscopic variceal screening",
              "Ascites management",
              "Nutritional assessment and support",
              "Portal pressure monitoring",
              "Hepatic encephalopathy management"
            ]
          },
          {
            name: "Fatty Liver Disease Treatment",
            slug: "fatty-liver-disease-treatment",
            description: "Specialized care for both alcoholic and non-alcoholic fatty liver disease (NAFLD/MASLD), focusing on lifestyle modifications and medical management to prevent disease progression.",
            imageUrl: "/images/services/fatty-liver.jpg",
            whoShouldConsider: [
              "People with obesity or metabolic syndrome",
              "Individuals with diabetes",
              "Those with elevated liver enzymes",
              "Patients with family history of liver disease"
            ]
          }
        ]
      },
      {
        title: "Advanced Endoscopy Services",
        slug: "advanced-endoscopy-services",
        description: "State-of-the-art endoscopic procedures for diagnosis and treatment of various digestive system disorders. Our advanced equipment and expertise ensure precise results with maximum patient comfort.",
        imageUrl: "/images/services/endoscopy.jpg",
        overview: "Our endoscopy unit is equipped with the latest technology for both diagnostic and therapeutic procedures. We prioritize patient comfort and safety while maintaining the highest standards of care.",
        subServices: [
          {
            name: "Diagnostic Gastroscopy",
            slug: "diagnostic-gastroscopy",
            description: "High-definition upper gastrointestinal endoscopy for detailed examination of the esophagus, stomach, and duodenum. This procedure helps diagnose various conditions including ulcers, inflammation, and tumors.",
            imageUrl: "/images/services/gastroscopy.jpg",
            procedures: [
              "Upper GI examination",
              "Tissue biopsy",
              "H. pylori testing",
              "Bleeding source identification"
            ]
          },
          {
            name: "Therapeutic Colonoscopy",
            slug: "therapeutic-colonoscopy",
            description: "Comprehensive lower gastrointestinal examination with advanced therapeutic capabilities, including polyp removal and bleeding control.",
            imageUrl: "/images/services/colonoscopy.jpg",
            procedures: [
              "Polyp removal",
              "Bleeding control",
              "Stricture dilation",
              "Tumor biopsy"
            ]
          }
        ]
      },
      {
        title: "Pancreatic Disorders",
        slug: "pancreatic-disorders",
        description: "Expert diagnosis and treatment of various pancreatic conditions, from inflammation to tumors, using advanced medical approaches and interventional procedures.",
        imageUrl: "/images/services/pancreatic-disorders.jpg",
        overview: "Our pancreatic care program provides comprehensive management of both acute and chronic pancreatic conditions, ensuring optimal outcomes through early detection and appropriate intervention.",
        subServices: [
          {
            name: "Acute Pancreatitis Management",
            slug: "acute-pancreatitis-management",
            description: "Immediate and comprehensive care for acute pancreatic inflammation, including intensive monitoring and supportive therapy.",
            imageUrl: "/images/services/acute-pancreatitis.jpg",
            procedures: [
              "Severity assessment",
              "Nutritional support",
              "Pain management",
              "Complication prevention",
              "Fluid resuscitation monitoring"
            ],
            symptoms: [
              "Severe abdominal pain",
              "Nausea and vomiting",
              "Fever",
              "Rapid pulse"
            ]
          },
          {
            name: "Chronic Pancreatitis Treatment",
            slug: "chronic-pancreatitis-treatment",
            description: "Long-term management of chronic pancreatic inflammation, focusing on pain control, nutritional support, and prevention of complications.",
            imageUrl: "/images/services/chronic-pancreatitis.jpg",
            procedures: [
              "Enzyme replacement therapy",
              "Pain management protocols",
              "Nutritional assessment",
              "Diabetes management"
            ]
          },
          {
            name: "Pancreatic Cancer Care",
            slug: "pancreatic-cancer-care",
            description: "Comprehensive evaluation and management of pancreatic tumors, working in collaboration with oncologists and surgeons.",
            imageUrl: "/images/services/pancreatic-cancer.webp",
            procedures: [
              "Advanced imaging studies",
              "Endoscopic ultrasound",
              "Tissue sampling",
              "Multidisciplinary treatment planning"
            ]
          }
        ]
      },
      {
        title: "Gastrointestinal Disorders",
        slug: "gastrointestinal-disorders",
        description: "Comprehensive care for various digestive system disorders affecting the esophagus, stomach, and intestines.",
        imageUrl: "/images/services/gi-disorders.jpg",
        overview: "Our gastrointestinal program covers the full spectrum of digestive disorders, providing both diagnostic and therapeutic services for optimal patient outcomes.",
        subServices: [
          {
            name: "Inflammatory Bowel Disease (IBD)",
            slug: "inflammatory-bowel-disease",
            description: "Specialized care for Crohn's disease and Ulcerative Colitis, including medical management and monitoring.",
            imageUrl: "/images/services/ibd.png",
            procedures: [
              "Colonoscopy with biopsy",
              "Medical therapy optimization",
              "Nutritional counseling",
              "Regular disease monitoring"
            ]
          },
          {
            name: "GERD Management",
            slug: "gerd-management",
            description: "Comprehensive treatment of gastroesophageal reflux disease and related esophageal conditions.",
            imageUrl: "/images/services/gerd.jpeg",
            symptoms: [
              "Heartburn",
              "Regurgitation",
              "Chest pain",
              "Difficulty swallowing"
            ]
          }
        ]
      },
      {
        title: "Biliary Tract Disorders",
        slug: "biliary-tract-disorders",
        description: "Expert management of conditions affecting the gallbladder and bile ducts using advanced diagnostic and therapeutic techniques.",
        imageUrl: "/images/services/biliary-disorders.png",
        overview: "Our biliary care program encompasses all aspects of gallbladder and bile duct disorders, providing both medical and interventional treatments.",
        subServices: [
          {
            name: "Gallstone Management",
            slug: "gallstone-management",
            description: "Comprehensive care for gallstone disease, including prevention and treatment options.",
            imageUrl: "/images/services/gallstones.webp",
            procedures: [
              "ERCP for stone removal",
              "Minimally invasive treatments",
              "Prevention strategies"
            ]
          },
          {
            name: "Bile Duct Disorders",
            slug: "bile-duct-disorders",
            description: "Treatment of various bile duct conditions including strictures, stones, and inflammatory disorders.",
            imageUrl: "/images/services/bile-duct.jpg",
            procedures: [
              "ERCP with stenting",
              "Stone extraction",
              "Stricture dilation"
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
        description: "Comprehensive evaluation and treatment of growth disorders in children, utilizing advanced diagnostic techniques and personalized growth optimization strategies.",
        imageUrl: "/images/services/pediatric-growth-disorders.jpg",
        overview: "Our growth disorders program focuses on identifying and treating various conditions affecting children's growth and development, ensuring they reach their full growth potential.",
        subServices: [
          {
            name: "Short Stature Evaluation",
            slug: "short-stature-evaluation",
            description: "Detailed assessment of growth patterns and underlying causes of short stature, including genetic, hormonal, and environmental factors.",
            imageUrl: "/images/services/short-stature.jpg",
            procedures: [
              "Growth hormone stimulation testing",
              "Bone age assessment",
              "Genetic testing",
              "Nutritional evaluation"
            ],
            benefits: [
              "Early identification of growth disorders",
              "Customized treatment plans",
              "Regular growth monitoring",
              "Improved final height outcomes"
            ]
          },
          {
            name: "Growth Hormone Therapy",
            slug: "growth-hormone-therapy",
            description: "Specialized growth hormone treatment programs with regular monitoring and dose optimization to ensure optimal growth outcomes.",
            imageUrl: "/images/services/growth-therapy.jpg",
            whoShouldConsider: [
              "Children with growth hormone deficiency",
              "Turner syndrome patients",
              "Children born small for gestational age",
              "Those with certain genetic conditions affecting growth"
            ]
          }
        ]
      },
      {
        title: "Pediatric Diabetes Management",
        slug: "pediatric-diabetes-management",
        description: "State-of-the-art care for all types of diabetes in children and adolescents, incorporating the latest treatment technologies and educational support.",
        imageUrl: "/images/services/pediatric-diabetes.jpg",
        overview: "Our comprehensive diabetes care program combines medical management with education and lifestyle support to help young patients achieve optimal blood sugar control.",
        subServices: [
          {
            name: "Type 1 Diabetes Care",
            slug: "type-1-diabetes-care",
            description: "Comprehensive management program including insulin therapy, blood sugar monitoring, and lifestyle modifications for children with Type 1 diabetes.",
            imageUrl: "/images/services/type1-diabetes.jpg",
            procedures: [
              "Insulin pump therapy initiation",
              "Continuous glucose monitoring",
              "Carbohydrate counting education",
              "Regular HbA1c monitoring"
            ]
          },
          {
            name: "Diabetes Technology Support",
            slug: "diabetes-technology-support",
            description: "Advanced diabetes management using the latest technologies including insulin pumps and continuous glucose monitoring systems.",
            imageUrl: "/images/services/diabetes-tech.jpg",
            benefits: [
              "Better blood sugar control",
              "Reduced risk of complications",
              "Improved quality of life",
              "More flexible lifestyle"
            ]
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
            description: "Early detection and management of thyroid hormone deficiency in newborns.",
            imageUrl: "/images/services/congenital-hypothyroid.jpg",
            procedures: [
              "Newborn screening interpretation",
              "Thyroid hormone replacement",
              "Growth monitoring",
              "Development assessment"
            ]
          },
          {
            name: "Graves Disease Management",
            slug: "graves-disease-management",
            description: "Comprehensive care for pediatric hyperthyroidism including medical therapy and regular monitoring.",
            imageUrl: "/images/services/graves-disease.jpg",
            symptoms: [
              "Rapid heart rate",
              "Weight loss",
              "Anxiety",
              "Growth changes"
            ]
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
            description: "Evaluation and treatment of early puberty signs, including hormone suppression therapy when necessary.",
            imageUrl: "/images/services/precocious-puberty.jpg",
            procedures: [
              "Hormonal evaluation",
              "Bone age assessment",
              "GnRH stimulation testing",
              "Regular monitoring"
            ]
          },
          {
            name: "Delayed Puberty Management",
            slug: "delayed-puberty-management",
            description: "Assessment and treatment of delayed pubertal development.",
            imageUrl: "/images/services/delayed-puberty.jpg",
            whoShouldConsider: [
              "Boys without pubertal signs by age 14",
              "Girls without pubertal signs by age 13",
              "Teens with incomplete puberty"
            ]
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
            description: "Personalized weight management programs including medical evaluation and monitoring.",
            imageUrl: "/images/services/weight-management.jpg",
            procedures: [
              "Body composition analysis",
              "Metabolic evaluation",
              "Nutritional assessment",
              "Regular progress monitoring"
            ]
          },
          {
            name: "Metabolic Syndrome Care",
            slug: "metabolic-syndrome-care",
            description: "Management of obesity-related metabolic complications in children and adolescents.",
            imageUrl: "/images/services/metabolic-syndrome.jpg",
            benefits: [
              "Improved metabolic health",
              "Better weight control",
              "Reduced health risks",
              "Enhanced quality of life"
            ]
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
            description: "Various stimulation tests to assess growth hormone secretion and function.",
            imageUrl: "/images/services/gh-testing.jpg",
            procedures: [
              "Growth hormone stimulation test",
              "IGF-1 level assessment",
              "Dynamic function tests"
            ]
          },
          {
            name: "Glucose Tolerance Testing",
            slug: "glucose-tolerance-testing",
            description: "Comprehensive evaluation of glucose metabolism and insulin function.",
            imageUrl: "/images/services/glucose-testing.jpg",
            procedures: [
              "Oral glucose tolerance test",
              "Insulin sensitivity assessment",
              "Continuous glucose monitoring"
            ]
          }
        ]
      }
    ]
  }
];