import { CuratedItem, MetricCard, ProcessStep, SpotlightItem, SocialLinks, NailItem } from '../types';

import heroModelImg from '../assets/images/hero_model_exact_1788780228913.jpg';
import flowerImg from '../assets/images/burgundy_peony_exact_1788780244312.jpg';
import flower3dImg from '../assets/images/flower_3d_velvet_1788782229378.jpg';
import flowerCutoutImg from '../assets/images/peony_flower_3d_clean.png';
import noirPackagingImg from '../assets/images/noire_packaging_exact_1788780264082.jpg';
import elysiumPackagingImg from '../assets/images/elysium_packaging_exact_1788780280124.jpg';
import velloraJewelryImg from '../assets/images/vellora_jewelry_exact_1788780294490.jpg';
import aureaWellnessImg from '../assets/images/aurea_wellness_exact_1788780315014.jpg';
import spotlightNoirImg from '../assets/images/noire_beret_model_exact_1788780332159.jpg';
import spotlightAureaImg from '../assets/images/aurea_containers_exact_1788780350378.jpg';
import nailsBurgundyVelvetImg from '../assets/images/nails_burgundy_velvet_1788779846025.jpg';
import nailsGlazedPearlImg from '../assets/images/nails_glazed_pearl_1788779866882.jpg';
import nailsNoirOmbreImg from '../assets/images/nails_noir_ombre_1788779886545.jpg';
import nailsCherryGoldImg from '../assets/images/nails_cherry_gold_1788779906058.jpg';

export const brandImages = {
  heroModel: heroModelImg,
  peonyFlower: flowerImg,
  peonyFlower3d: flower3dImg,
  peonyFlowerCutout: flowerCutoutImg,
  noirCuration: noirPackagingImg,
  elysiumCuration: elysiumPackagingImg,
  velloraCuration: velloraJewelryImg,
  aureaCuration: aureaWellnessImg,
  spotlightNoir: spotlightNoirImg,
  spotlightAurea: spotlightAureaImg,
  nailsBurgundyVelvet: nailsBurgundyVelvetImg,
  nailsGlazedPearl: nailsGlazedPearlImg,
  nailsNoirOmbre: nailsNoirOmbreImg,
  nailsCherryGold: nailsCherryGoldImg,
};

export const defaultSocialLinks: SocialLinks = {
  pinterestUrl: 'https://in.pinterest.com/TheDailyDrape_734/',
  threadsUrl: 'https://www.threads.com/@the_daily_drapee',
  instagramUrl: 'https://instagram.com/the_daily_drapee',
  email: 'hello@marianastudio.com',
  location: 'Warsaw, Poland • Digital Studio',
};

export const metricCards: MetricCard[] = [
  {
    icon: 'sparkles',
    value: '5+',
    label: 'Years Experience',
    description: 'Crafting brands and digital experiences that make an impact.',
  },
  {
    icon: 'flower',
    value: '100+',
    label: 'Projects Completed',
    description: 'From startups to established brands, results that speak.',
  },
  {
    icon: 'search',
    value: 'Brand Strategy',
    label: '& Design Expert',
    description: 'Turning ideas into visual stories that resonate.',
  },
];

export const curatedLookbooks: CuratedItem[] = [
  {
    id: 'noire-cosmetics',
    title: 'NOIRÉ COSMETICS',
    category: 'BRANDING, PACKAGING',
    tags: 'Branding • Packaging • Velvet Edge',
    description: 'A bold luxury cosmetics identity and packaging system designed with timeless elegance and modern noir sophistication.',
    image: brandImages.noirCuration,
    featuredQuote: 'Where shadows sculpt timeless grace.',
  },
  {
    id: 'elysium-studio',
    title: 'ELYSIUM STUDIO',
    category: 'BRANDING, WEB DESIGN',
    tags: 'Branding • Web Design • Minimalist',
    description: 'Organic stationery, floral embossed emblems, and relaxed tailoring crafted for mindful luxury and effortless warmth.',
    image: brandImages.elysiumCuration,
    featuredQuote: 'The poetry of unstudied simplicity.',
  },
  {
    id: 'vellora-jewelry',
    title: 'VÉLLORA JEWELRY',
    category: 'BRANDING, E-COMMERCE',
    tags: 'Branding • E-commerce • Fine Gold',
    description: 'Fine 18k jewelry branding and e-commerce experience showcasing fluid gold necklaces draped over nocturnal velvet.',
    image: brandImages.velloraCuration,
    featuredQuote: 'Liquid gold caught in motion.',
  },
  {
    id: 'aurea-wellness',
    title: 'AUREA WELLNESS',
    category: 'BRANDING, WEB DESIGN',
    tags: 'Branding • Web Design • Wellness',
    description: 'A harmonious skincare and holistic wellness brand celebrating balance, tactile blush tones, and mindful beauty.',
    image: brandImages.aureaCuration,
    featuredQuote: 'Softness as the highest form of strength.',
  },
];

export const nailCurations: NailItem[] = [
  {
    id: 'burgundy-cat-eye',
    title: 'Velvet Wine & Gilded Flakes',
    finish: 'Velvet Cat-Eye & Gold Leaf',
    shape: 'Sculpted Almond',
    palette: 'Deep Burgundy • Rich Bordeaux • 24k Flakes',
    description: 'Luminous magnetic velvet effect that shifts with light like crushed wine silk, finished with hand-placed micro gold leaf flecks. Styled to pair with noir evening drapes.',
    image: brandImages.nailsBurgundyVelvet,
  },
  {
    id: 'glazed-pearl-chrome',
    title: 'Champagne Glaze & Micro French',
    finish: 'Haute Pearl Glaze Chrome',
    shape: 'Medium Soft Almond',
    palette: 'Iridescent Pearl • Milky Oyster • Gilded Rim',
    description: 'Subtle translucent glazed chrome reflecting champagne and rose undertones with ultra-fine metallic micro-tips. Created for serene linen daywear and quiet luxury.',
    image: brandImages.nailsGlazedPearl,
  },
  {
    id: 'noir-ombre-stiletto',
    title: 'Black Cherry Noir Ombré',
    finish: 'High-Gloss Glass Gradient',
    shape: 'Tapered Stiletto',
    palette: 'Midnight Noir • Black Cherry • Deep Crimson',
    description: 'Seamless liquid gradient from inky noir bases into sultry black-cherry tips with high-gloss mirror reflections. Designed for statement evening silhouettes.',
    image: brandImages.nailsNoirOmbre,
  },
  {
    id: 'cherry-mocha-accents',
    title: 'Cherry Mocha & Fine-Line Gold',
    finish: 'Glass Top Coat & Linear Gilding',
    shape: 'Classic Almond',
    palette: 'Dark Cherry Mocha • Warm Espresso • Metallic Gold',
    description: 'Sophisticated deep cherry mocha base crowned with minimalist fluid gold lines, echoing the gentle folds of draped satin cloth.',
    image: brandImages.nailsCherryGold,
  },
];

export const curationProcessSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER',
    description: 'I learn about your brand, goals, and audience.',
  },
  {
    stepNumber: '02',
    title: 'STRATEGIZE',
    description: 'I create a clear plan and visual direction tailored to your brand.',
  },
  {
    stepNumber: '03',
    title: 'DESIGN',
    description: 'I bring your brand to life with intentional and impactful design.',
  },
  {
    stepNumber: '04',
    title: 'REFINE',
    description: 'We collaborate and refine until every detail feels perfect.',
  },
  {
    stepNumber: '05',
    title: 'DELIVER',
    description: 'You receive polished assets that elevate your brand and business.',
  },
];

export const spotlightItems: SpotlightItem[] = [
  {
    id: 'noir-spotlight',
    title: 'NOIRÉ COSMETICS',
    subtitle: 'A bold beauty brand with timeless elegance and edge.',
    description: 'A bold evening beauty identity, velvet packaging, and haute manicure curation crafted to sculpt unforgettable brand presence.',
    category: 'SELECTED CASE STUDIES 01',
    image: brandImages.spotlightNoir,
    targetPlatform: 'pinterest',
    ctaText: 'VIEW PROJECT',
  },
  {
    id: 'aurea-spotlight',
    title: 'AUREA WELLNESS',
    subtitle: 'A wellness brand that promotes balance, beauty, and self-care.',
    description: 'An ethereal beauty and lifestyle identity celebrating balance, warm neutrals, and organic self-care formulas.',
    category: 'SELECTED CASE STUDIES 02',
    image: brandImages.spotlightAurea,
    targetPlatform: 'threads',
    ctaText: 'VIEW PROJECT',
  },
];


