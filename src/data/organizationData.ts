export interface ProgramItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  category: 'education' | 'women' | 'digital' | 'health' | 'community';
  iconName: string;
  badge: string;
  accentColor: string; // 'saffron' | 'green' | 'navy'
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  aspect: string;
  sourceOrigin: string;
  date: string;
  isRealPhoto: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  platform: 'tumblr' | 'blogger' | 'linkedin' | 'instagram' | 'facebook';
  status: 'active' | 'archived' | 'profile';
  note: string;
}

export const ORGANIZATION_DETAILS = {
  name: "SCP Foundation NGO",
  legalNames: ["SCP Foundation (Regd.)", "SCP Foundation Society"],
  registeredOffice: "H. No. 1010/121, Madanpur Khadar, Sarita Vihar, New Delhi, Delhi 110076, India",
  phone: "+91 95555 37474",
  phoneHref: "tel:+919555537474",
  email: "scpfoundation021@gmail.com",
  emailHref: "mailto:scpfoundation021@gmail.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=H.+No.+1010/121,+Madanpur+Khadar,+Sarita+Vihar,+New+Delhi,+Delhi+110076",
  establishmentDate: "26 May 2011",
  registrationAct: "Societies Registration Act, 1860 (Act XXI of 1860)",
  primarySlogan: "Educate Today… Empower Tomorrow…",
  communitySlogan: "Together We Can Make a Difference",
  hindiMotto: "छोटा सहयोग • बड़ा बदलाव",
  missionStatement: "SCP Foundation NGO works toward a more empowered and inclusive society through education, skill development, women's empowerment, and community-focused initiatives.",
  disclaimer: "Registered under the Societies Registration Act, XXI of 1860. Independent certification records remain on official file with the organization.",
};

export const PROGRAMS: ProgramItem[] = [
  {
    id: "education",
    title: "Education & Child Development",
    tagline: "Every child deserves the opportunity to learn, grow, and build a brighter future.",
    description: "Providing foundational education support, school supplies, textbooks, tuition assistance, and learning kits to children from underprivileged backgrounds in urban informal settlements.",
    points: [
      "Educational support & study kits for underprivileged students",
      "Books, stationery, and learning materials distribution",
      "Basic tuition support & homework assistance",
      "School enrollment and learning guidance"
    ],
    category: "education",
    iconName: "GraduationCap",
    badge: "Core Campaign",
    accentColor: "saffron"
  },
  {
    id: "women-empowerment",
    title: "Women's Empowerment",
    tagline: "Supporting women and girls through education, skills, knowledge, and opportunities for greater independence.",
    description: "Dedicated to advancing self-reliance among women through vocational training, digital awareness, life skills, and education on equal opportunity and fundamental rights.",
    points: [
      "Education opportunities for adolescent girls and women",
      "Computer literacy & practical digital fundamentals",
      "Vocational training including tailoring & handicraft development",
      "Awareness of equal rights, dignity, and self-confidence"
    ],
    category: "women",
    iconName: "Sparkles",
    badge: "Active Initiative",
    accentColor: "green"
  },
  {
    id: "digital-skills",
    title: "Digital Literacy & Skill Development",
    tagline: "Making learning and digital skills more accessible to communities that need them.",
    description: "Bridging the digital divide by teaching essential computer fundamentals, internet safety, and job-oriented digital proficiencies to youth living in marginalized settlements.",
    points: [
      "Foundational computer training & typing practice",
      "Digital applications & internet literacy for daily life",
      "Practical vocational skills for youth employability",
      "Career exploration workshops & counseling"
    ],
    category: "digital",
    iconName: "Laptop",
    badge: "Vocational Focus",
    accentColor: "navy"
  },
  {
    id: "health-awareness",
    title: "Health & Nutrition Awareness",
    tagline: "Supporting informed communities through awareness, education, and access to useful information.",
    description: "Promoting community well-being through basic hygiene awareness, nutritional guidance for mothers and children, and preventive healthcare knowledge sessions.",
    points: [
      "Nutrition & wellness awareness for young children and mothers",
      "Hygiene, sanitation, and preventive healthcare sessions",
      "Historical community health camps & health information dissemination",
      "Promotion of clean drinking water & wholesome daily habits"
    ],
    category: "health",
    iconName: "HeartPulse",
    badge: "Wellness Outreach",
    accentColor: "green"
  },
  {
    id: "community-welfare",
    title: "Community Welfare & Human Rights",
    tagline: "Encouraging awareness, dignity, inclusion, and collective action in support of communities.",
    description: "Supporting grassroots community upliftment, family counseling, dignity advocacy, and responsive relief operations during unforeseen local crises and environmental disruptions.",
    points: [
      "Slum and community outreach in New Delhi and surrounding areas",
      "Advocacy for human dignity, inclusion, and equal rights",
      "Historical relief support during natural adversities and floods",
      "Collaborative grassroots welfare drives with neighborhood elders"
    ],
    category: "community",
    iconName: "Users",
    badge: "Social Dignity",
    accentColor: "saffron"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "training-center-students",
    title: "SCP Foundation Training Center",
    category: "Women's Empowerment & Skills",
    description: "Authentic photograph outside the SCP Foundation Training Center showing female beneficiaries, students, and training coordinators in Delhi NCR.",
    src: "/assets/empowering-women-poster.jpg",
    aspect: "4/3",
    sourceOrigin: "SCP Foundation Official Tumblr (Post 830101887018745856)",
    date: "October 2026 Archive",
    isRealPhoto: true
  },
  {
    id: "campaign-education-awareness",
    title: "Education Awareness Campaign",
    category: "Education Outreach",
    description: "Official Education Awareness Campaign publication highlighting computer education, study materials support, and community school drives.",
    src: "/assets/donate-education-poster.png",
    aspect: "2/3",
    sourceOrigin: "SCP Foundation Official Tumblr (Post 828352334396637184)",
    date: "September 2026 Campaign",
    isRealPhoto: false
  },
  {
    id: "campaign-donate-education",
    title: "Donate for Education Initiative",
    category: "Child Education Support",
    description: "Official campaign banner: 'Help us give the gift of education to underprivileged children and build a brighter future for them.'",
    src: "/assets/donate-education-campaign.png",
    aspect: "2/3",
    sourceOrigin: "SCP Foundation Official Tumblr (Post 828346314281697280)",
    date: "September 2026 Campaign",
    isRealPhoto: false
  },
  {
    id: "campaign-women-empowerment",
    title: "Empowering Women for a Better Tomorrow",
    category: "Women & Girls Welfare",
    description: "Comprehensive program roadmap detailing skill development, digital awareness, self-reliance, and women's rights education.",
    src: "/assets/women-empowerment-graphic.png",
    aspect: "2/3",
    sourceOrigin: "SCP Foundation Official Tumblr (Post 830102505571713024)",
    date: "October 2026 Campaign",
    isRealPhoto: false
  }
];

export const SOCIAL_CHANNELS: SocialLink[] = [
  {
    name: "Tumblr Blog",
    url: "https://scpfoundation.tumblr.com/",
    handle: "@scpfoundation",
    platform: "tumblr",
    status: "active",
    note: "Contains continuous updates, campaign posters, training center media, and official announcements."
  },
  {
    name: "Blogger Publication",
    url: "https://scpfoundationngo.blogspot.com/",
    handle: "scpfoundationngo.blogspot.com",
    platform: "blogger",
    status: "active",
    note: "Documented archives of education, health, and skill development activities."
  },
  {
    name: "LinkedIn Organization",
    url: "https://www.linkedin.com/in/scp-foundation-01770141/",
    handle: "SCP Foundation",
    platform: "linkedin",
    status: "profile",
    note: "Professional network updates and activity posts based in Sarita Vihar, New Delhi."
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/scp_foundation_delhi/",
    handle: "@scp_foundation_delhi",
    platform: "instagram",
    status: "profile",
    note: "Public social media presence for Delhi youth outreach and awareness."
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/scpfoundation.singh",
    handle: "scpfoundation.singh",
    platform: "facebook",
    status: "profile",
    note: "Historical community updates and announcements."
  }
];

export const VALUES_LIST = [
  {
    title: "Education as a Fundamental Right",
    description: "Every child, regardless of socioeconomic background, deserves unobstructed access to quality learning resources and encouragement.",
    iconName: "BookOpen"
  },
  {
    title: "Empowerment Through Skills",
    description: "Equipping young people and women with tangible vocational and digital capabilities fosters lifelong self-reliance and dignity.",
    iconName: "Award"
  },
  {
    title: "Inclusion & Social Equality",
    description: "Working actively to dismantle barriers of gender, economic deprivation, and social stigma within underserved communities.",
    iconName: "ShieldCheck"
  },
  {
    title: "Community-Led Action",
    description: "Sustainable social change happens when local families, parents, and community members participate directly in progress.",
    iconName: "Handshake"
  }
];
