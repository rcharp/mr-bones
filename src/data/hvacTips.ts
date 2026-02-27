export interface HVACTip {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  readTime: string;
  relatedServices: { label: string; href: string }[];
  relatedAreas?: { label: string; href: string }[];
}

const hvacTips: HVACTip[] = [
  {
    slug: "how-often-should-you-change-ac-filter",
    title: "How Often Should You Change Your AC Filter?",
    excerpt: "A dirty air filter is the #1 cause of HVAC breakdowns. Learn the right replacement schedule to keep your system running efficiently and your air clean.",
    category: "Maintenance",
    readTime: "4 min read",
    content: [
      "Your air conditioning filter is one of the most important — and most overlooked — parts of your HVAC system. A clogged filter restricts airflow, forces your system to work harder, and can lead to expensive repairs down the road.",
      "For most homes in Palmetto, Bradenton, and Manatee County, we recommend changing your filter every 30 to 60 days during peak cooling season (April through October). If you have pets, allergies, or a larger household, every 30 days is ideal.",
      "During the cooler months when your system runs less frequently, every 60 to 90 days is usually sufficient. However, if you notice reduced airflow, higher energy bills, or more dust in your home, it's time for a change regardless of the schedule.",
      "Here's a quick guide by filter type: Fiberglass filters should be replaced every 30 days. Pleated filters last 60 to 90 days. HEPA filters can go 6 to 12 months but should be checked monthly.",
      "Not sure which filter is right for your system? Our technicians can recommend the best option during a routine AC maintenance visit. Regular filter changes are one of the easiest ways to prevent costly breakdowns and keep your energy bills low.",
    ],
    relatedServices: [
      { label: "AC Maintenance", href: "/services/ac-maintenance" },
      { label: "AC Repair", href: "/services/ac-repair" },
    ],
    relatedAreas: [
      { label: "Palmetto", href: "/areas/palmetto" },
      { label: "Bradenton", href: "/areas/bradenton" },
    ],
  },
  {
    slug: "signs-your-ac-needs-repair",
    title: "5 Signs Your AC Needs Repair Before It Breaks Down",
    excerpt: "Don't wait for a total breakdown in the Florida heat. Here are five warning signs that your air conditioner needs professional attention.",
    category: "Repair",
    readTime: "5 min read",
    content: [
      "Florida summers are no joke — and the last thing you want is your AC giving out on a 95°F day. The good news is that most air conditioning failures don't happen overnight. Your system will usually give you warning signs before a major breakdown.",
      "1. Warm or weak airflow: If the air coming from your vents isn't as cold or strong as usual, something is off. It could be a refrigerant leak, a failing compressor, or a clogged filter. Don't ignore it — this is one of the earliest signs of trouble.",
      "2. Strange noises: Grinding, squealing, rattling, or banging sounds are never normal. These typically indicate loose or worn parts that need immediate attention before they cause more damage.",
      "3. Unusual odors: A musty smell could mean mold in your ductwork. A burning smell could indicate an electrical issue. Either way, shut off the system and call for AC repair right away.",
      "4. Frequent cycling: If your AC is turning on and off more often than usual (short cycling), it could be oversized for your space, have a faulty thermostat, or be low on refrigerant. This wastes energy and puts extra wear on your system.",
      "5. Higher energy bills: A sudden spike in your electric bill without a change in usage is a clear sign your system is working harder than it should. A professional diagnosis can identify the root cause and save you money long-term.",
      "If you notice any of these signs, don't wait. Contact Emmons Air for a fast, honest diagnosis. We serve Palmetto, Memphis, Ellenton, and the entire Manatee County area with same-day emergency service.",
    ],
    relatedServices: [
      { label: "AC Repair", href: "/services/ac-repair" },
      { label: "Duct Cleaning", href: "/services/duct-cleaning" },
    ],
    relatedAreas: [
      { label: "Memphis", href: "/areas/memphis" },
      { label: "Ellenton", href: "/areas/ellenton" },
    ],
  },
  {
    slug: "benefits-of-regular-ac-maintenance",
    title: "Why Annual AC Maintenance Saves You Thousands",
    excerpt: "Regular HVAC maintenance isn't an expense — it's an investment. Learn how a simple tune-up can extend your system's life and slash energy costs.",
    category: "Maintenance",
    readTime: "4 min read",
    content: [
      "Many homeowners skip annual AC maintenance because everything seems to be working fine. But just like your car needs regular oil changes, your air conditioning system needs professional tune-ups to perform at its best.",
      "A well-maintained AC system uses 15-25% less energy than a neglected one. In Florida, where your AC runs 8+ months of the year, that can add up to hundreds of dollars in savings annually.",
      "During a professional maintenance visit, our technicians inspect and clean key components: evaporator and condenser coils, refrigerant levels, electrical connections, thermostat calibration, drain lines, and moving parts. We catch small problems before they become expensive emergencies.",
      "The average AC system lasts 10-15 years. With regular maintenance, many systems exceed 15-20 years of reliable performance. Without it, you might be looking at a full replacement in as little as 7-8 years.",
      "Most manufacturer warranties also require proof of annual maintenance. Skipping it could void your coverage when you need it most.",
      "Emmons Air offers comprehensive maintenance services throughout Palmetto, Bradenton, Palma Sola, and surrounding areas. Schedule your tune-up before the summer rush and enjoy peace of mind all season long.",
    ],
    relatedServices: [
      { label: "AC Maintenance", href: "/services/ac-maintenance" },
      { label: "AC Installation", href: "/services/ac-installation" },
    ],
    relatedAreas: [
      { label: "Palma Sola", href: "/areas/palma-sola" },
      { label: "Bradenton", href: "/areas/bradenton" },
    ],
  },
  {
    slug: "when-to-replace-your-ac-system",
    title: "Repair vs. Replace: When It's Time for a New AC System",
    excerpt: "Is your aging AC system costing more to repair than it's worth? Here's how to know when replacement makes more financial sense.",
    category: "Installation",
    readTime: "5 min read",
    content: [
      "The decision to repair or replace your air conditioning system is one of the biggest home comfort investments you'll make. Here's a practical guide to help you decide.",
      "Consider the age of your system. If your AC is over 10 years old and needs a major repair (compressor, evaporator coil, or refrigerant leak), replacement often makes more financial sense. Modern systems are 30-50% more energy efficient than units from a decade ago.",
      "Use the $5,000 rule: Multiply the age of your system by the repair cost. If the result is more than $5,000, it's typically better to replace. For example, a 12-year-old system needing a $500 repair = $6,000, suggesting replacement is the smarter move.",
      "R-22 refrigerant (Freon) has been phased out and is now extremely expensive. If your system uses R-22, a replacement with a modern R-410A system will save you significantly on future repairs and refrigerant costs.",
      "New AC installations also come with manufacturer warranties (typically 5-10 years), improved humidity control, quieter operation, and smart thermostat compatibility. Many homeowners see their investment pay for itself within 3-5 years through energy savings alone.",
      "At Emmons Air, we provide honest assessments — we'll never push a replacement when a repair will do. We help homeowners across Palmetto, Bradenton, Ellenton, and Manatee County make the right choice for their budget and comfort.",
    ],
    relatedServices: [
      { label: "AC Installation", href: "/services/ac-installation" },
      { label: "AC Repair", href: "/services/ac-repair" },
    ],
    relatedAreas: [
      { label: "Palmetto", href: "/areas/palmetto" },
      { label: "Ellenton", href: "/areas/ellenton" },
    ],
  },
  {
    slug: "improve-indoor-air-quality",
    title: "How to Improve Indoor Air Quality in Your Florida Home",
    excerpt: "Florida's humidity and allergens can wreak havoc on your indoor air. Here are proven ways to breathe easier at home.",
    category: "Air Quality",
    readTime: "4 min read",
    content: [
      "Did you know that indoor air can be 2-5 times more polluted than outdoor air? In Florida, where we keep our homes sealed tight against the heat and humidity, indoor air quality is especially important.",
      "Start with your ductwork. Over time, dust, pollen, mold spores, and pet dander accumulate in your air ducts and get recirculated every time your AC runs. Professional duct cleaning removes these contaminants and immediately improves the air your family breathes.",
      "Upgrade your air filter. Moving from a basic fiberglass filter to a higher-rated pleated or HEPA filter can capture significantly more allergens and particles. Ask your HVAC technician which MERV rating is right for your system — going too high can actually restrict airflow.",
      "Control humidity. Florida's humidity creates ideal conditions for mold and mildew growth. Your AC system naturally dehumidifies, but if you notice condensation on windows or a musty smell, you may need additional dehumidification or a maintenance check.",
      "Consider UV germicidal lights. Installed in your air handler, these lights kill bacteria, viruses, and mold spores as air passes through your system. It's an increasingly popular upgrade for health-conscious homeowners.",
      "Regular AC maintenance also plays a critical role in air quality. Dirty coils, clogged drain lines, and neglected systems can become breeding grounds for mold and bacteria. Schedule annual maintenance to keep your system — and your air — clean.",
      "Emmons Air provides duct cleaning, air quality assessments, and maintenance services throughout Palmetto, Memphis, Palma Sola, and all of Manatee County. Breathe easier — call us today.",
    ],
    relatedServices: [
      { label: "Duct Cleaning", href: "/services/duct-cleaning" },
      { label: "AC Maintenance", href: "/services/ac-maintenance" },
    ],
    relatedAreas: [
      { label: "Memphis", href: "/areas/memphis" },
      { label: "Palma Sola", href: "/areas/palma-sola" },
    ],
  },
  {
    slug: "lower-energy-bills-summer",
    title: "7 Ways to Lower Your Energy Bills This Summer in Florida",
    excerpt: "Keep your home cool without breaking the bank. These practical tips can cut your summer cooling costs by 20% or more.",
    category: "Energy Savings",
    readTime: "5 min read",
    content: [
      "Air conditioning accounts for up to 60% of your summer energy bills in Florida. But you don't have to choose between comfort and savings. Here are seven proven strategies to keep costs down.",
      "1. Set your thermostat to 78°F when you're home and 82-85°F when you're away. Every degree lower costs about 3-5% more on your energy bill. A programmable or smart thermostat makes this effortless.",
      "2. Change your air filter regularly. A dirty filter makes your system work 5-15% harder. In peak summer months, check it every 30 days.",
      "3. Keep vents clear and open. Closing vents in unused rooms actually increases pressure in your ductwork and can make your system less efficient — not more.",
      "4. Use ceiling fans. Fans create a wind-chill effect that makes a room feel 4-6 degrees cooler, allowing you to raise your thermostat without sacrificing comfort. Remember to set fans to counter-clockwise in summer.",
      "5. Seal air leaks. Check around windows, doors, and ductwork for gaps that let cool air escape and hot air in. Weatherstripping and caulking are cheap, easy fixes that make a big difference.",
      "6. Schedule professional maintenance. A tune-up ensures your system runs at peak efficiency. Our technicians optimize refrigerant levels, clean coils, and check electrical connections — all of which directly impact energy consumption.",
      "7. Consider upgrading to a high-efficiency system. If your AC is over 10 years old, a new ENERGY STAR-rated system can cut cooling costs by 20-40%. Emmons Air can help you find the right system for your home and budget.",
      "Serving Palmetto, Bradenton, Ellenton, Memphis, and Palma Sola — contact Emmons Air for energy-saving solutions tailored to your home.",
    ],
    relatedServices: [
      { label: "AC Maintenance", href: "/services/ac-maintenance" },
      { label: "AC Installation", href: "/services/ac-installation" },
    ],
    relatedAreas: [
      { label: "Palmetto", href: "/areas/palmetto" },
      { label: "Bradenton", href: "/areas/bradenton" },
    ],
  },
];

export default hvacTips;
