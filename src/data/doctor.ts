// types/doctor.ts
export interface Education {
  degree: string;
  institute: string;
  duration: {
    start: string;
    end: string;
  };
}

export interface PastWorkExperience {
  role: string;
  department?: string;
  organization: string;
  duration: {
    start: string;
    end: string;
  };
}

export interface CurrentWorkExperience {
  role: string;
  department?: string;
  organization: string;
  duration: {
    start: string;
    end: string;
  };
}

export interface Research {
  title: string;
  comments?: string[];
  status?: string;
}

export interface Award {
  title: string;
  year: string;
  category?: string;
}

export interface Workshop {
  title: string;
  description: string;
  date: string;
}

export interface PersonalDetails {
  name: string;
  nationality: string;
  dateOfBirth: string;
  specialty: string;
  description: string;
  imageUrl: string;
  imageUrl2?: string;
  imageUrl3: string;
  backgroundImage: string;
  age: number;
  gender: "Male" | "Female";
  maritalStatus: string;
  languagesKnown: string[];
  spouse?: {
    name: string;
    qualification: string;
    currentRole: string;
  };
}

export interface ContactDetails {
  address?: string;
  phone?: string;
  email?: string;
  linkedIn?: string;
  instagram: string;
}

export interface DoctorProfile {
  personalDetails: PersonalDetails;
  contactDetails: ContactDetails;
  about?: string;
  education: Education[];
  pastworkExperience: PastWorkExperience[];
  currentworkExperience: CurrentWorkExperience[];
  research: Research[];
  awards: Award[];
  workshops?: Workshop[];
  memberships: string[];
  skills: string[];
  interests?: string[];
  extraCurricular?: {
    title: string;
    description?: string;
  }[];
  offline: {
    hospital: string;
    schedules: {
      day: string;
      timing: string;
    }[];
  }[];
  offlineTiming: string;
  onlineTiming: string;
  days: string;
}

// data/doctors.ts
export const drSushovanData: DoctorProfile = {
  personalDetails: {
    name: "Dr Sushovan Baidya",
    nationality: "Indian",
    dateOfBirth: "1990-08-19",
    specialty: "Gastroenterologist and Hepatologist",
    description:
      "Advanced expertise in liver and digestive health, with specialized focus on transplant hepatology. Providing comprehensive care for complex gastrointestinal conditions with cutting-edge treatments.",
    age: 34,
    imageUrl: "/images/doc2.png",
    imageUrl2: "/images/doc2.JPG",
    imageUrl3: "/images/doc2.png",
    backgroundImage: "/images/dr-sushovan.jpg",
    gender: "Male",
    maritalStatus: "Married",
 
    languagesKnown: ["English", "Hindi", "Bengali", "Odia"],
    spouse: {
      name: "Dr Moumita Saha",
      qualification: "MBBS, MD, Post Doctoral Fellowship in Ped Endo",
      currentRole:
        "Junior Consultant, Dept of Pediatric Endocrinology, CMC Vellore",
    },
  },
  
  contactDetails: {
    phone: "919474866692",
    email: "drbaidya25@gmail.com",
    instagram: 'https://instagram.com/growthgutexperts'
  },
  about:
    "An experienced and passionate physician specializing in management of liver, gastrointestinal, pancreatic and biliary diseases. He believes in clinical medicine, ethical practice and a holistic approach towards his patients. He has been trained at Christian Medical College (CMC), Vellore with expertise in managing complex liver conditions, IBD, pancreatitis and biliary diseases.",
  education: [
    {
      degree: "MBBS",
      institute: "Medical College, Kolkata",
      duration: {
        start: "August 2009",
        end: "January 2014",
      },
    },
    {
      degree: "MD General Medicine",
      institute: "M.K.C.G Medical College, Brahmapur, Odisha",
      duration: {
        start: "May 2016",
        end: "May 2019",
      },
    },
    {
      degree: "DM Hepatology",
      institute: "Christian Medical College, Vellore",
      duration: {
        start: "December 2020",
        end: "January 2024",
      },
    },
  ],
  
  offline: [
    {
      hospital: "St Stephen's Hospital, Tis Hazari, Delhi",
      schedules: [
        { day: "Tuesday", timing: "10 AM - 12 PM" },
        { day: "Thursday", timing: "10 AM - 4 PM" },
        { day: "Saturday", timing: "10 AM - 12 PM" }
      ]
    },
    {
      hospital: "Sanjeevan Hospital, Daryaganj, Delhi",
      schedules: [
        { day: "Monday to Friday", timing: "5 PM - 7 PM" },
      ]
    },
    {
      hospital: "Santom Hospital, Prasanth Vihar, Pitampura, New Delhi",
      schedules: [
         { day: "Monday, Wednesday, Friday", timing: "8 AM - 10 AM" },
        
      ]
    }
  ], 
  currentworkExperience: [
    {
      role: "Consultant",
      department: "Department of Gastroenterology and Hepatology",
      organization: "St Stephen's Hospital, New Delhi",
      duration: {
        start: "December 2024",
        end: "onwards",
      },
    },
    {
      role: "Visiting Consultant", 
      department: "Department of Gastroenterology and Hepatology", 
      organization: "Sanjeevan Hospital, Daryaganj, New Delhi", 
      duration: {
        start: "", 
        end:""
      }
    }
  ],
  pastworkExperience: [
    {
      role: "Assistant Professor",
      department: "Department of Hepatology, Div of GI Sciences",
      organization: "Christian Medical College, Vellore",
      duration: {
        start: "February 2024",
        end: "November 2024",
      },
    },
    {
      role: "Consultant Physician",
      department: "Asst Divisional Medical Officer",
      organization:
        "Central Railway Hospital Bilaspur, Southeast Central Railways",
      duration: {
        start: "December 2019",
        end: "2020",
      },
    },
    {
      role: "Senior Resident",
      department: "General Medicine",
      organization: "Sikkim Manipal Institute of Medical Sciences, Gangtok",
      duration: {
        start: "July 2019",
        end: "September 2019",
      },
    },
    {
      role: "Junior Resident",
      department: "Department of Neurology",
      organization: "Medical College and Hospital, Kolkata",
      duration: {
        start: "April 2015",
        end: "August 2015",
      },
    },
  ],
  research: [
    {
      title:
        "Clinical Profile Of Yellow Phosphorus Poisoning In A Tertiary Care Centre In South India",
      comments: ["Submitted To The E-Journal Of Tamil Nadu MGR University"],
    },
    {
      title:
        "Hyaluronic Acid as a surrogate marker for Liver Sinusoidal Function In Rodenticide Poisoning",
      comments: [
        "Manuscript under preparation",
        "Presented as poster in INASL 2023",
      ],
    },
    {
      title:
        "Primary Sclerosing Cholangitis: India differs from the West- A tertiary single-center study",
      comments: [
        "Manuscript under preparation",
        "Presented as Poster and Oral Free Paper in the Autoimmune liver diseases, Special interest group, INASL 2024",
      ],
    },
    {
      title:
        "Profile of Anaemia in Elderly, a hospital based cross sectional study",
      comments: [
        "MD Thesis",
        "Oral Paper presentation in Odisha, APICON 2018 (1st Prize in Oral Paper Category)",
      ],
    },
  ],
  awards: [
    {
      title: "Prize in Oral Paper Presentation Category",
      year: "2018",
      category: "Profile of Anaemia in Elderly, APICON Odisha",
    },
    {
      title:
        "Prize in 'Dr. B.S. Ramakrishna prize for the best D.M. Thesis in Gastroenterology (or) Hepatology'",
      year: "2024",
    },
  ],
  workshops: [
    {
      title: "Research Methodology workshop",
      description: "RMBS - the Tamil Nadu Dr M.G.R Medical University",
      date: "March 2021",
    },
    {
      title: "DRILLS – ILBS 22",
      description:
        "Platform case presentation - Decisions Reasoning innovations and Learning in Liver Diseases",
      date: "July 2022",
    },
    {
      title: "TNISG 22",
      description:
        "Poster Presentation - A case of pregnancy associated liver failure managed with therapeutic plasma exchange",
      date: "September 2022",
    },
  ],
  memberships: ["Indian Society of Gastroenterology"],
  skills: [
    "Gastroscopy",
    "Colonoscopy",
    "Endoscopic procedures like UGI bleed management",
    "Foreign body removal",
    "APC",
    "Polypectomy",
    "ERCP - CBD stone extraction",
    "Biliary stenting",
    "Experience in managing post Liver transplant cases (DDLT)",
    "Management of IBD", 
    "Pancreatic Diseases", 
    "Biliary Diseases",  
    "Luminal Diseases",
  ],
  interests: ["Transplant Hepatology"],
  onlineTiming: "7 PM - 8PM ",
  offlineTiming: "",
  days: "Monday - Saturday",
};

export const drMoumitaData: DoctorProfile = {
  personalDetails: {
    name: "Dr Moumita Saha",
    nationality: "Indian",
    dateOfBirth: "1991-09-30",
    specialty: "Paediatric and Adolescent Endocrinologist",
    //description: 'Empowering children to reach their full potential through expert endocrine care and personalized growth management. Specialized in childhood diabetes, thyroid disorders, and growth-related conditions.',
    description:
      "Specialized in growth disorders, childhood obesity, diabetes, thyroid disorders and other endocrine conditions in children.",
    age: 33,
    imageUrl2: "/images/drmoumita.JPG",
    imageUrl: "/images/about.png",
    imageUrl3: "/images/front.png", 
    backgroundImage: "/images/dr-moumita.jpeg",
    gender: "Female",
    maritalStatus: "Married",
    languagesKnown: ["English", "Hindi", "Bengali"],
    spouse: {
      name: "Dr Sushovan Baidya",
      qualification: "DM Hepatology, CMC Vellore",
      currentRole:
        "Consultant (Dept of Gastroenterology and Hepatology), St Stephen's Hospital",
    },
  },
  offline: [
    {
      hospital: "Fortis C-DOC , Greater Kailash, New Delhi",
      schedules: [
        { day: "Monday", timing: "10 AM - 12 PM" },
        {day: "Wed", timing: "10 AM - 12 PM"}, 
        { day: "Friday", timing: "10 AM - 12 PM" },
        {day : 'Saturday', timing:"Prior Appointments only"}
      ]
    },
    {
      hospital: "Sitaram Bhartia Institute of Science and Research, Qutub Institutional area, New Delhi",
      schedules: [
        { day: "Tuesday", timing: "10 PM -12 PM" },
        { day: "Friday", timing: "4 PM - 5 PM" }
      ]
    }, 
    {
      hospital: "Holy Family Hospital , Okhla, New Delhi", 
      schedules: [
        {
          day: "Mon, Wed", timing: "2 PM - 3:30 PM"
        }, 
        {
          day: "Fri", timing: "1:30 PM - 3:30 PM"
        }
      ]
    }, 
    {
      hospital: "CK Bilra, West Punjabi Bagh, Delhi",
      schedules: [
        {day: "Tues, Thurs", timing: "2 PM - 4 PM"}
      ]
    }, 
    {
      hospital: "Sanjeevan Hospital, Daryaganj, Delhi", 
      schedules: [
        {day: "Wed", timing: "5 PM - 6:30 PM"}
      ]
    }
  ], 
  contactDetails: {
    phone: "918789567806",
    email: "drmoumita.paedendo@gmail.com",
    linkedIn: "https://www.linkedin.com/in/moumita-saha24",
    instagram: "https://instagram.com/growthgutexperts"
  },
  about:
    "Passionate Paediatric and Adolescent Endocrinologist trained from prestigious institutions of the country. Experienced in diagnosing and managing common as well as challenging endocrine disorders in children. Dedicated towards providing holistic and individualized healthcare to empower children with endocrine disorders and help them reach their maximal potential, thus improving their quality of life.",
  education: [
    {
      degree: "Post Doctoral Fellowship (Pediatric Endocrinology)",
      institute: "Christian Medical College, Vellore",
      duration: {
        start: "October 2021",
        end: "2023",
      },
    },
    {
      degree: "MD Pediatrics",
      institute:
        "Lady Hardinge Medical College and associated Kalawati Saran Children Hospital, New Delhi",
      duration: {
        start: "May 2016",
        end: "April 2019",
      },
    },
    {
      degree: "MBBS",
      institute: "Lady Hardinge Medical College, New Delhi",
      duration: {
        start: "August 2009",
        end: "December 2013",
      },
    },
  ],
  currentworkExperience: [
    {
      role: "Consultant",
      department: "Paediatric Endocrinologist",
      organization: "Fortis C DOC, Greater Kailash, New Delhi",
      duration: {
        start: "",
        end: "",
      },
    },
    {
      role: "Consultant",
      department: "Paediatric Endocrinologist",
      organization: "Holy Family Hospital, Okhla, New Delhi",
      duration: {
        start: "Jan 2025",
        end: "onwards",
      },
    },
    {
      role: "Consultant",
      department: "Paediatric Endocrinologist",
      organization:
        "Sitaram Bhartia Institute of Science and Research, Qutub Institutional Area, New Delhi",
      duration: {
        start: "Jan 2025",
        end: "onwards",
      },
    },
    {
      role: "Consultant",
      department: "Paediatric Endocrinologist",
      organization: "CK Birla Hospital, West Punjab Bagh, New Delhi",
      duration: {
        start: "Jan 2025",
        end: "onwards",
      },
    },
    {
      role: "Consultant",
      department: "Paediatric Endocrinologist",
      organization: "Sanjeevan Hospital ,Daryaganj, New Delhi",
      duration: {
        start: "Jan 2025",
        end: "onwards",
      },
    },
  ],
  pastworkExperience: [
    {
      role: "Senior Resident",
      department: "Department of Paediatrics",
      organization: "Kalawati Saran Children Hospital, New Delhi",
      duration: {
        start: "",
        end: "",
      },
    },
    {
      role: "Consultant", 
      department: "Department of Paediatrics", 
      organization: "Naruvi Hospital, Vellore", 
      duration: {
        start: "", 
        end: ""
      }
    }, 
    {
      role: "Paediatric Endocrinologist",
      department: "Department of Pediatric Endocrinology",
      organization: "Christian Medical College, Vellore",
      duration: {
        start: "October 2023",
        end: "2024",
      },
    },
  ],
  research: [
    {
      title:
        "Clinicopathological features and diagnoses in children with hypoglycemia presenting beyond neonatal period mandating Diagnostic fasting study (DFS)",
      comments: ["A single centre retrospective cohort study"],
    },
    {
      title:
        "Transient Congenital Hypothyroidism in children with eutopic gland/gland in situ",
      comments: ["A single centre retrospective cohort study"],
    },
    {
      title:
        "Clinical correlates of drug sensitivity pattern in children with TB",
      comments: ["MD Thesis", "A cross-sectional study"],
    },
  ],
  awards: [
    {
      title:
        "Prize - Poster presentation at 8th Biennial Meeting of ISPAE",
      year: "2023",
    },
    {
      title:
        "Prize - Poster presentation at ISPAE-ISPAD mid-term meeting",
      year: "2022",
    },
    {
      title: "Quiz winner, CAPE News by ISPAE",
      year: "2023-2024",
    },
    {
      title:
        "Dr Veena Taluja Memorial Research Award on Child Health, Kalawati Saran Children Hospital and LHMC, New Delhi, ",
      year: "2018",
    },
    {
      title:
        "Dr P.N. Taneja Award for best research in General Pediatrics (IAP Delhi)",
      year: "2018",
    },
  ],
  skills: [
    "Childhood Diabetes (Type 1 DM, Neonatal DM, Type 2 DM, MODY)",
    "Congenital and acquired thyroid disorders in children",
    "Childhood Obesity and Metabolic Syndrome",
    "Short Stature and Growth Disorders",
    "Pubertal Disorders (Early and late puberty)",
    "Adrenal Disorders, Congenital adrenal hyperplasia",
    "Hypoglycemia disorders",
    "Differences of Sex Development",
    "Pituitary Disorders, DI, SIADH, CSW",
    "Metabolic bone disorders, Rickets, Osteogenesis Imperfecta",
    "Fluid and electrolyte disorders",
    "Menstrual irregularity and PCOS",
  ],
  memberships: [
    "APPES (Asia Pacific Paediatric Endocrine Society)",
    "ISPAE (Indian Society of Pediatric and Adolescent Endocrinology)",
    "IAP (Indian Academy of Pediatrics), Delhi",
  ],
  extraCurricular: [
    {
      title: "Organizing member",
      description:
        "34th Childhood and Adolescent Diabetes Camp, by Pediatric Endocrinology Division, CMC Vellore",
    },
    {
      title: "Run for Type 1 Diabetes",
      description:
        "Fund raiser, Organizing member and participant, CMC Vellore",
    },
    {
      title: "Office bearer of Student's Union",
      description: "Lady Hardinge Medical College, 2010",
    },
    {
      title: "Youth Empowerment and Skills Workshop (YES! +)",
      description: "Art of Living",
    },
    {
      title: "Diploma in Music",
      description:
        "Awarded by Bangiya Sangeet Parishad, Affiliated to Rabindra Bharathi University",
    },
    {
      title: "Certified in Fine Arts",
      description: "Pracheen Kala Kendra",
    },
  ],
  onlineTiming: "7 PM - 8 PM ",
  days: "Monday - Saturday",
  offlineTiming: "",
};
