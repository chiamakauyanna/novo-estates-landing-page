import { FaComments, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";
import property1 from "../assets/images/property5.jpg";
import property2 from "../assets/images/property3.jpg";
import property3 from "../assets/images/property4.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const featureCards = [
  {
    id: 1,
    icon: <FaComments />,
    title: "Communication",
    description:
      "We keep you informed every step of the way. Clear, honest and timely communication is at the heart of what we do.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Reliability",
    description:
      "Count on us to deliver. We follow through on every commitment and make sure your property journey is smooth.",
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Quality First",
    description:
      "We only present properties that meet our high standards. Quality is never compromised at Novo Estates.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Families",
    description:
      "We understand that buying a home is a family decision. We make sure every member feels considered and valued.",
  },
];

export const properties = [
  {
    id: 1,
    name: "The Meridian Villa",
    description: "Modern home with open plan living and premium finishes.",
    image: property1,
    bedrooms: 4,
    bathrooms: 3,
    location: "Lekki, Lagos",
    size: "320 sqm",
    price: "95,000,000",
  },
  {
    id: 2,
    name: "Oakwood Residence",
    description:
      "Elegant family home in a quiet neighbourhood with a spacious garden.",
    image: property2,
    bedrooms: 3,
    bathrooms: 2,
    location: "Maitama, Abuja",
    size: "250 sqm",
    price: "75,000,000",
  },
  {
    id: 3,
    name: "Skyline Apartments",
    description: "Contemporary apartment with breathtaking city views.",
    image: property3,
    bedrooms: 2,
    bathrooms: 2,
    location: "Victoria Island, Lagos",
    size: "120 sqm",
    price: "45,000,000",
  },
];

export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Properties", href: "#properties" },
  { id: 3, name: "Services", href: "#features" },
  { id: 4, name: "About Us", href: "#about" },
  { id: 5, name: "Contact", href: "#contact" },
];

export const stats = [
  { id: 1, value: "9K+", label: "Premium Properties" },
  { id: 2, value: "5K+", label: "Happy Customers" },
  { id: 3, value: "58+", label: "Awards Winning" },
];

export const aboutPoints = [
  "Verified and trusted property listings",
  "Dedicated agents for every client",
  "Transparent pricing with no hidden fees",
];

export const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    role: "Property Buyer",
    review:
      "Novo Estates made buying my first home completely stress free. Their team was patient, knowledgeable and always available.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emeka Adeyemi",
    role: "Property Investor",
    review:
      "I have worked with several agencies but Novo Estates stands out. Professional, transparent and genuinely invested in finding the right property.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Bello",
    role: "Home Owner",
    review:
      "From the first call to getting my keys, the experience was seamless. I would recommend Novo Estates to anyone looking for a home in Nigeria.",
    rating: 5,
  },
];

export const footerLinks = {
  quickLinks: [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Properties", href: "#properties" },
    { id: 3, name: "About Us", href: "#about" },
    { id: 4, name: "Contact", href: "#contact" },
  ],
  services: [
    { id: 1, name: "Property Sales", href: "#" },
    { id: 2, name: "Property Rentals", href: "#" },
    { id: 3, name: "Property Management", href: "#" },
    { id: 4, name: "Investment Advisory", href: "#" },
    { id: 5, name: "Property Valuation", href: "#" },
  ],
};

export const socialLinks = [
  { id: 1, name: "facebook", icon: <FaFacebook />, href: "#" },
  { id: 2, name: "instagram", icon: <FaInstagram />, href: "#" },
  { id: 3, name: "twitter", icon: <FaTwitter />, href: "#" },
  { id: 4, name: "linkedin", icon: <FaLinkedin />, href: "#" },
];
