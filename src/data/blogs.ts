import { ReactNode } from 'react';
 

export interface BlogContent {
  id: string;
  subdomain: 'drsushovan' | 'drmoumita';
   
  title: string;
  slug: string;
   
  imageUrl: string;
  description: string;
  tags: string[];
  content: ReactNode[];
}

export const blogs: BlogContent[] = [
  // Dr. Sushovan Blogs
  {
    id: 'liver-health-basics',
    subdomain: 'drsushovan',
   
    title: "Understanding Liver Health: Key Insights for a Healthy Life",
    slug: "liver-health-basics",
    
    imageUrl: "/images/blogs/liver-health.jpg",
    description: "A comprehensive guide to maintaining optimal liver health and preventing common liver diseases.",
    tags: ["liver health", "hepatology", "preventive care"],
    content: [
      "The liver is one of the most crucial organs in our body, performing over 500 essential functions. From detoxification to protein synthesis, its role is irreplaceable.",
      "Maintaining liver health requires a holistic approach. Diet, exercise, and regular check-ups play a pivotal role in preventing liver diseases.",
      "Key recommendations include:\n- Limiting alcohol consumption\n- Maintaining a balanced diet\n- Regular exercise\n- Avoiding processed foods\n- Getting vaccinated against hepatitis",
      "Early detection is critical. Annual liver function tests can help identify potential issues before they become serious health concerns."
    ]
  },
  {
    id: 'managing-digestive-disorders',
    subdomain: 'drsushovan',
   
    title: "Comprehensive Guide to Managing Digestive Disorders",
    slug: "managing-digestive-disorders",
    imageUrl: "/images/blogs/digestive-health.jpg",
    description: "Expert insights into common digestive system disorders and their management strategies.",
    tags: ["digestive health", "gastroenterology", "treatment"],
    content: [
      "Digestive disorders can significantly impact quality of life. Understanding their causes and management is crucial for effective treatment.",
      "Common digestive issues include:\n- Inflammatory Bowel Disease\n- GERD\n- Irritable Bowel Syndrome\n- Chronic Pancreatitis",
      "Modern gastroenterology offers advanced diagnostic and treatment options, including endoscopic procedures and personalized medical therapies.",
      "Lifestyle modifications, including diet changes and stress management, play a crucial role in managing digestive health."
    ]
  },
  {
    id: 'endoscopy-demystified',
    subdomain: 'drsushovan',
 
    title: "Endoscopy Demystified: What Patients Need to Know",
    slug: "endoscopy-demystified",
     
    imageUrl: "/images/blogs/endoscopy.jpg",
    description: "A comprehensive overview of endoscopic procedures, their importance, and what patients can expect.",
    tags: ["endoscopy", "medical procedures", "patient education"],
    content: [
      "Endoscopy is a critical diagnostic and therapeutic tool in modern medicine, allowing doctors to visualize internal organs with minimal invasiveness.",
      "Types of endoscopic procedures include:\n- Gastroscopy\n- Colonoscopy\n- ERCP\n- Endoscopic Ultrasound",
      "Preparation is key to a successful endoscopic procedure. Patients should follow their doctor's instructions carefully regarding fasting and medication.",
      "Advances in endoscopic technology have made procedures safer, more comfortable, and more accurate than ever before."
    ]
  },
  {
    id: 'pancreatic-health-insights',
    subdomain: 'drsushovan',
    
    title: "Pancreatic Health: Beyond Diabetes",
    slug: "pancreatic-health-insights",
    
    imageUrl: "/images/blogs/pancreas-health.jpg",
    description: "Exploring the complexities of pancreatic health and emerging treatment approaches.",
    tags: ["pancreas", "medical research", "health awareness"],
    content: [
      "The pancreas is a vital organ that plays a crucial role in both digestive and endocrine functions.",
      "Common pancreatic conditions include:\n- Acute Pancreatitis\n- Chronic Pancreatitis\n- Pancreatic Cancer\n- Pancreatic Insufficiency",
      "Early detection and multidisciplinary approach are crucial in managing pancreatic disorders.",
      "Emerging treatments and research continue to improve outcomes for patients with complex pancreatic conditions."
    ]
  },
  {
    id: 'biliary-tract-wellness',
    subdomain: 'drsushovan',
    
    title: "Biliary Tract Wellness: Prevention and Management",
    slug: "biliary-tract-wellness",
 
    imageUrl: "/images/blogs/biliary-health.jpg",
    description: "Comprehensive insights into biliary tract health and common disorders.",
    tags: ["biliary health", "gallbladder", "preventive care"],
    content: [
      "The biliary system plays a crucial role in digestion and waste removal from the body.",
      "Key biliary tract conditions include:\n- Gallstones\n- Bile Duct Obstruction\n- Cholecystitis\n- Biliary Cirrhosis",
      "Diet and lifestyle play a significant role in maintaining biliary tract health.",
      "Regular medical check-ups and early intervention can prevent serious biliary tract complications."
    ]
  },
  // Dr. Moumita Blogs
  {
    id: 'pediatric-growth-insights',
    subdomain: 'drmoumita',
    
    title: "Understanding Pediatric Growth Disorders",
    slug: "pediatric-growth-insights",
    
    imageUrl: "/images/blogs/pediatric-growth.jpg",
    description: "Comprehensive guide to identifying and managing growth disorders in children.",
    tags: ["pediatric health", "growth", "endocrinology"],
    content: [
      "Growth is a complex process influenced by multiple factors including genetics, nutrition, and hormonal balance.",
      "Common growth disorders include:\n- Growth Hormone Deficiency\n- Turner Syndrome\n- Constitutional Growth Delay\n- Small for Gestational Age",
      "Early intervention is key in managing pediatric growth disorders.",
      "Comprehensive evaluation includes genetic testing, hormonal assessments, and personalized treatment plans."
    ]
  },
  {
    id: 'pediatric-diabetes-management',
    subdomain: 'drmoumita',
     
    title: "Comprehensive Diabetes Management in Children",
    slug: "pediatric-diabetes-management",
 
    imageUrl: "/images/blogs/pediatric-diabetes.jpg",
    description: "Advanced strategies for managing diabetes in children and adolescents.",
    tags: ["diabetes", "pediatric care", "technology"],
    content: [
      "Type 1 diabetes management has evolved dramatically with technological advancements.",
      "Key management strategies include:\n- Continuous Glucose Monitoring\n- Insulin Pump Therapy\n- Carbohydrate Counting\n- Lifestyle Modifications",
      "Technology has transformed diabetes care, offering children more flexibility and better blood sugar control.",
      "Psychological support is crucial in helping children and families navigate diabetes management."
    ]
  },
  {
    id: 'thyroid-disorders-children',
    subdomain: 'drmoumita',
     
    title: "Thyroid Disorders in Children: What Parents Should Know",
    slug: "thyroid-disorders-children",
    
    imageUrl: "/images/blogs/pediatric-thyroid.jpg",
    description: "Expert insights into thyroid conditions affecting children and adolescents.",
    tags: ["thyroid", "pediatric health", "endocrinology"],
    content: [
      "Thyroid disorders can significantly impact a child's growth, development, and overall health.",
      "Key thyroid conditions include:\n- Congenital Hypothyroidism\n- Graves' Disease\n- Hashimoto's Thyroiditis\n- Thyroid Nodules",
      "Newborn screening plays a crucial role in early detection of thyroid disorders.",
      "Comprehensive management involves regular monitoring, medication, and holistic care approach."
    ]
  },
  {
    id: 'puberty-disorders-guide',
    subdomain: 'drmoumita',
   
    title: "Navigating Puberty Disorders: A Comprehensive Guide",
    slug: "puberty-disorders-guide",
 
    imageUrl: "/images/blogs/puberty-disorders.jpg",
    description: "Understanding and managing early and delayed puberty in children.",
    tags: ["puberty", "adolescent health", "endocrinology"],
    content: [
      "Pubertal development is a complex process influenced by multiple hormonal and genetic factors.",
      "Key puberty disorders include:\n- Precocious Puberty\n- Delayed Puberty\n- Hormonal Imbalances\n- Genetic Variations",
      "Early professional evaluation can help manage potential complications.",
      "Personalized treatment approaches consider individual developmental patterns and underlying causes."
    ]
  },
  {
    id: 'pediatric-obesity-management',
    subdomain: 'drmoumita',
     
    title: "Holistic Approach to Pediatric Obesity Management",
    slug: "pediatric-obesity-management",
    
    imageUrl: "/images/blogs/pediatric-obesity.jpg",
    description: "Comprehensive strategies for managing childhood and adolescent obesity.",
    tags: ["obesity", "pediatric health", "metabolic care"],
    content: [
      "Childhood obesity is a complex condition involving multiple physiological and environmental factors.",
      "Comprehensive management strategies include:\n- Metabolic Assessment\n- Nutritional Counseling\n- Physical Activity Planning\n- Psychological Support",
      "Metabolic syndrome in children requires a multidisciplinary approach.",
      "Early intervention can prevent long-term health complications associated with childhood obesity."
    ]
  }
];