// types/doctor.ts
export interface Education {
    degree: string;
    institute: string;
    duration: {
        start: string;
        end: string;
    };
}

export interface WorkExperience {
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
    specialty: string,
    description: string, 
    imageUrl: string,
    imageUrl2?: string, 
    backgroundImage: string, 
    age: number;
    gender: 'Male' | 'Female';
    maritalStatus: string;
    languagesKnown: string[];
    spouse?: {
        name: string;
        qualification: string;
        currentRole: string;
    };
}

export interface ContactDetails {
    address: string;
    phone: string;
    email: string;
    linkedIn?: string;
}

export interface DoctorProfile {
    personalDetails: PersonalDetails;
    contactDetails: ContactDetails;
    about?: string;
    education: Education[];
    workExperience: WorkExperience[];
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
}

// data/doctors.ts
export const drSushovanData: DoctorProfile = {
    personalDetails: {
        name: "Dr Sushovan Baidya",
        nationality: "Indian",
        dateOfBirth: "1990-08-19", 
        specialty: 'Gastroenterologist and Hepatologist',
        description: 'Advanced expertise in liver and digestive health, with specialized focus on transplant hepatology. Providing comprehensive care for complex gastrointestinal conditions with cutting-edge treatments.', 
        age: 34,
        imageUrl: '/images/doc2.png',
        imageUrl2: '/images/doc2.jpg',
        backgroundImage: '/images/dr-sushovan.jpg',
        gender: "Male",
        maritalStatus: "Married",
        languagesKnown: ["English", "Hindi", "Bengali", "Odia"],
        spouse: {
            name: "Dr Moumita Saha",
            qualification: "MBBS, MD, Post Doctoral Fellowship in Ped Endo",
            currentRole: "Junior Consultant, Dept of Pediatric Endocrinology, CMC Vellore"
        }
    },
    contactDetails: {
        address: "St Stephen Hospital Campus, Tis Hazari, Delhi, 110054",
        phone: "9474866692",
        email: "sushovancmc20@gmail.com"
    },
    about: "An experienced and passionate specializing in management of liver, gastrointestinal, pancreatic and biliary diseases. He believes in clinical medicine, ethical practice and a holistic approach towards his patients. He has been trained at Christian Medical College (CMC), Vellore with expertise in managing complex liver conditions, IBD, pancreatitis and biliary diseases.",
    education: [
        {
            degree: "MBBS",
            institute: "Medical College, Kolkata",
            duration: {
                start: "August 2009",
                end: "January 2014"
            }
        },
        {
            degree: "MD General Medicine",
            institute: "M.K.C.G Medical College, Brahmapur, Odisha",
            duration: {
                start: "May 2016",
                end: "May 2019"
            }
        },
        {
            degree: "DM Hepatology",
            institute: "Christian Medical College, Vellore",
            duration: {
                start: "December 2020",
                end: "January 2024"
            }
        }
    ],
    workExperience: [
        {
            role: "Consultant",
            department: "Department of Gastroenterology and Hepatology",
            organization: "St Stephen's Hospital, New Delhi",
            duration: {
                start: "December 2024",
                end: "onwards"
            }
        },
        {
            role: "Assistant Professor",
            department: "Department of Hepatology, Div of GI Sciences",
            organization: "Christian Medical College, Vellore",
            duration: {
                start: "February 2024",
                end: "November 2024"
            }
        },
        {
            role: "Consultant Physician",
            department: "Asst Divisional Medical Officer",
            organization: "Central Railway Hospital Bilaspur, Southeast Central Railways",
            duration: {
                start: "December 2019",
                end: "2020"
            }
        },
        {
            role: "Senior Resident",
            department: "General Medicine",
            organization: "Sikkim Manipal Institute of Medical Sciences, Gangtok",
            duration: {
                start: "July 2019",
                end: "September 2019"
            }
        },
        {
            role: "Junior Resident",
            department: "Department of Neurology",
            organization: "Medical College and Hospital, Kolkata",
            duration: {
                start: "April 2015",
                end: "August 2015"
            }
        }
    ],
    research: [
        {
            title: "Clinical Profile Of Yellow Phosphorus Poisoning In A Tertiary Care Centre In South India",
            comments: ["Submitted To The E-Journal Of Tamil Nadu MGR University"]
        },
        {
            title: "Hyaluronic Acid as a surrogate marker for Liver Sinusoidal Function In Rodenticide Poisoning",
            comments: [
                "Manuscript under preparation",
                "Presented as poster in INASL 2023"
            ]
        },
        {
            title: "Primary Sclerosing Cholangitis: India differs from the West- A tertiary single-center study",
            comments: [
                "Manuscript under preparation",
                "Presented as Poster and Oral Free Paper in the Autoimmune liver diseases, Special interest group, INASL 2024"
            ]
        },
        {
            title: "Profile of Anaemia in Elderly, a hospital based cross sectional study",
            comments: [
                "MD Thesis",
                "Oral Paper presentation in Odisha, APICON 2018 (1st Prize in Oral Paper Category)"
            ]
        }
    ],
    awards: [
        {
            title: "1st Prize in Oral Paper Presentation Category",
            year: "2018",
            category: "Profile of Anaemia in Elderly, APICON Odisha"
        },
        {
            title: "3rd Prize in 'Dr. B.S. Ramakrishna prize for the best D.M. Thesis in Gastroenterology (or) Hepatology'",
            year: "2024"
        }
    ],
    workshops: [
        {
            title: "Research Methodology workshop",
            description: "RMBS - the Tamil Nadu Dr M.G.R Medical University",
            date: "March 2021"
        },
        {
            title: "DRILLS – ILBS 22",
            description: "Platform case presentation - Decisions Reasoning innovations and Learning in Liver Diseases",
            date: "July 2022"
        },
        {
            title: "TNISG 22",
            description: "Poster Presentation - A case of pregnancy associated liver failure managed with therapeutic plasma exchange",
            date: "September 2022"
        }
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
        "Moderator of Hepatology – Pathology MDT",
        "Liver Tumor MDT",
        "Liver Transplant MDT",
        "Trained in management of IBD, Pancreatic, Biliary diseases and other luminal diseases",
        "Experienced in Administrative capacities"
    ],
    interests: ["Transplant Hepatology"]
};


export const drMoumitaData: DoctorProfile = {
    personalDetails: {
        name: "Dr Moumita Saha",
        nationality: "Indian",
        dateOfBirth: "1991-09-30",
        specialty: 'Paediatric and Adolescent Endocrinologist', 
        //description: 'Empowering children to reach their full potential through expert endocrine care and personalized growth management. Specialized in childhood diabetes, thyroid disorders, and growth-related conditions.', 
        description: 'Specialized in growth disorders, childhood obesity, diabetes, thyroid disorders and other endocrine conditions in children.',
        age: 33,
        imageUrl2: '/images/doc1.jpg',
        imageUrl:'/images/doc1.png',
        backgroundImage: '/images/dr-moumita.jpg',
        gender: "Female",
        maritalStatus: "Married",
        languagesKnown: ["English", "Hindi", "Bengali"],
        spouse: {
            name: "Dr Sushovan Baidya",
            qualification: "DM Hepatology, CMC Vellore",
            currentRole: "Consultant (Dept of Gastroenterology and Hepatology), St Stephen's Hospital"
        }
    },
    contactDetails: {
        address: "Room no 2.2, Administrative block, St Stephen's Hospital, Tis Hazari, New Delhi, 110054",
        phone: "8130545130",
        email: "drmoumitasaha.16@gmail.com",
        linkedIn: "www.linkedin.com/in/moumita-saha24"
    },
    about: "Passionate Paediatric and Adolescent Endocrinologist trained from prestigious institutions of the country. Experienced in diagnosing and managing common as well as challenging endocrine disorders in children. Dedicated towards providing holistic and individualized healthcare to empower children with endocrine disorders and help them reach their maximal potential, thus improving their quality of life.",
    education: [
        {
            degree: "Post Doctoral Fellowship (Pediatric Endocrinology)",
            institute: "Christian Medical College, Vellore",
            duration: {
                start: "October 2021",
                end: "2023"
            }
        },
        {
            degree: "MD Pediatrics",
            institute: "Lady Hardinge Medical College and associated Kalawati Saran Children Hospital, New Delhi",
            duration: {
                start: "May 2016",
                end: "April 2019"
            }
        },
        {
            degree: "MBBS",
            institute: "Lady Hardinge Medical College, New Delhi",
            duration: {
                start: "August 2009",
                end: "December 2013"
            }
        }
    ],
    workExperience: [
        {
            role: "Junior Consultant",
            department: "Department of Pediatric Endocrinology",
            organization: "Christian Medical College, Vellore",
            duration: {
                start: "October 2023",
                end: "2024"
            }
        },
        {
            role: "Consultant (Pediatrics)",
            organization: "Naruvi Hospitals, Vellore",
            duration: {
                start: "August 2021",
                end: "October 2021"
            }
        },
        {
            role: "Senior Resident",
            department: "Pediatrics",
            organization: "Lady Hardinge Medical College and associated Kalawati Saran Children Hospital, New Delhi",
            duration: {
                start: "June 2019",
                end: "2021"
            }
        }
    ],
    research: [
        {
            title: "Clinicopathological features and diagnoses in children with hypoglycemia presenting beyond neonatal period mandating Diagnostic fasting study (DFS)",
            comments: ["A single centre retrospective cohort study"]
        },
        {
            title: "Transient Congenital Hypothyroidism in children with eutopic gland/gland in situ",
            comments: ["A single centre retrospective cohort study"]
        },
        {
            title: "Clinical correlates of drug sensitivity pattern in children with TB",
            comments: ["MD Thesis", "A cross-sectional study"]
        }
    ],
    awards: [
        {
            title: "Third Prize - Poster presentation at 8th Biennial Meeting of ISPAE",
            year: "2023"
        },
        {
            title: "Consolation Prize - Poster presentation at ISPAE-ISPAD mid-term meeting",
            year: "2022"
        },
        {
            title: "Quiz winner, CAPE News by ISPAE",
            year: "2023-2024"
        },
        {
            title: "Dr P.N. Taneja Award for best research in General Pediatrics (IAP Delhi)",
            year: "2018"
        }
    ],
    skills: [
        "Childhood Diabetes (Type 1 DM, Neonatal DM, Type 2 DM, MODY)",
        "Congenital and acquired thyroid disorders in children",
        "Childhood Obesity and Metabolic Syndrome",
        "Short Stature and Growth Disorders",
        "Pubertal Disorders (Early and late puberty)",
        "Adrenal Disorders, Congenital adrenal hyperplasia",
        "Hypoglycemia disorders",
        "Disorder of Sexual Differentiation",
        "Pituitary Disorders, DI, SIADH, CSW",
        "Metabolic bone disorders, Rickets, Osteogenesis Imperfecta",
        "Fluid and electrolyte disorders",
        "Menstrual irregularity and PCOS"
    ],
    memberships: [
        "APPES (Asia Pacific Paediatric Endocrine Society)",
        "ISPAE (Indian Society of Pediatric and Adolescent Endocrinology)",
        "IAP (Indian Academy of Pediatrics), Delhi"
    ],
    extraCurricular: [
        {
            title: "Organizing member",
            description: "34th Childhood and Adolescent Diabetes Camp, by Pediatric Endocrinology Division, CMC Vellore"
        },
        {
            title: "Run for Type 1 Diabetes",
            description: "Fund raiser, Organizing member and participant, CMC Vellore"
        },
        {
            title: "Office bearer of Student's Union",
            description: "Lady Hardinge Medical College, 2010"
        },
        {
            title: "Youth Empowerment and Skills Workshop (YES! +)",
            description: "Art of Living"
        },
        {
            title: "Diploma in Music",
            description: "Awarded by Bangiya Sangeet Parishad, Affiliated to Rabindra Bharathi University"
        },
        {
            title: "Certified in Fine Arts",
            description: "Pracheen Kala Kendra"
        }
    ]
};