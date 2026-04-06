import banner from '../assets/main-banner.jpeg'
import product001 from '../assets/001.jpeg'
import product003 from '../assets/003.jpeg'
import product004 from '../assets/004.jpeg'
import product005 from '../assets/005.jpeg'
import product006 from '../assets/006.jpeg'
import product007 from '../assets/007.jpeg'
import aboutVideo from '../assets/016.mp4'
import aboutPoster from '../assets/logo.jpg'
import introVideo from '../assets/017.mp4'  
/** Hero banner (from `src/assets`) */
export const BANNER_SRC = banner

/** Intro + About section video & poster (same assets; from `src/assets`) */
export const INTRO_VIDEO_SRC = introVideo
export const INTRO_POSTER_SRC = aboutPoster
export const ABOUT_VIDEO_SRC = aboutVideo
export const ABOUT_POSTER_SRC = aboutPoster

export const PRODUCTS = [
  {
    id: 'desk-shield',
    name: 'Premium Desk Shield',
    tagline: 'Crystal-clear protection for reception and workspaces',
    image: product001,
    description:
      'A stable, freestanding acrylic shield designed for desks and counters where staff interact with visitors. Edges are polished for a premium look, and the base profile is tuned for minimal wobble while keeping sight lines open.',
    highlights: [
      'High-clarity cast acrylic',
      'Polished edges & stable base',
      'Easy to sanitize',
      'Custom heights and widths on request',
    ],
  },
  {
    id: 'counter-shield',
    name: 'Counter-Top Sneeze Guard',
    tagline: 'Wide coverage for retail and service counters',
    image: product003,
    description:
      'Ideal for checkout lanes, cafés, and clinics. The low-profile footprint maximizes usable counter space while maintaining a protective barrier between people and product zones.',
    highlights: [
      'Generous horizontal coverage',
      'Low-profile base options',
      'Fast deployment',
      'Bulk-friendly for chains',
    ],
  },
  {
    id: 'hanging-shield',
    name: 'Hanging Divider Panel',
    tagline: 'Suspended panels for open-plan areas',
    image: product004,
    description:
      'Suspended acrylic panels help define lanes and add a light barrier without heavy framing. Suitable for ceilings with compatible fixing points; we can advise on hardware for your site.',
    highlights: [
      'Minimal visual weight',
      'Configurable panel sizes',
      'Hardware guidance available',
      'Pairs well with signage',
    ],
  },
  {
    id: 'keyring-clear',
    name: 'Clear Acrylic Key Ring',
    tagline: 'Durable everyday blanks ready for your brand',
    image: product005,
    description:
      'A timeless clear key ring profile that shows off inserts, photos, or small printed cards. Perfect for gifts, promotions, and retail lines where clarity and durability matter.',
    highlights: [
      'Robust acrylic construction',
      'Smooth, comfortable edges',
      'Ideal for inserts & mini prints',
      'Volume pricing available',
    ],
  },
  {
    id: 'keyring-logo',
    name: 'Branded Logo Key Ring',
    tagline: 'Custom shapes and printing for your identity',
    image: product006,
    description:
      'Turn your logo or artwork into a pocket-sized keepsake. We work with you on proportions, thickness, and finish so the piece feels substantial and reads clearly at arm’s length.',
    highlights: [
      'Custom contour cutting',
      'Vibrant print options',
      'Corporate & event ready',
      'Design support on request',
    ],
  },
  {
    id: 'custom-bundle',
    name: 'Business Starter Bundle',
    tagline: 'Shields + key rings for new locations',
    image: product007,
    description:
      'Bundle counter protection with branded key rings for opening week handouts. We align quantities, timelines, and packaging so your team can focus on customers—not logistics.',
    highlights: [
      'Coordinated production',
      'Flexible pack sizes',
      'Single point of contact',
      'Consistent acrylic quality',
    ],
  },
]

export const INTRO_HEADING = 'Acrylic Shields'

export const INTRO_PARAGRAPH =
  'Crystal-clear acrylic awards and trophies for desks, counters, and open spaces—crafted to celebrate achievements without compromising elegance or visibility. Alongside our awards, we create customized acrylic key rings that carry your brand with the same attention to polish, thickness, and finish. Whether you are recognizing a single achievement or organizing a full corporate award event, we help you choose dimensions and materials that look refined, display beautifully, and stay easy to maintain.'

export const ABOUT_COPY = {
  title: 'About us',
  paragraphs: [
    'We are a team obsessed with the small details: the way light moves through acrylic, how a key ring sits in a palm, and how a shield frames a smile instead of blocking it. That mindset guides every cut, polish, and print we deliver.',
    'Our workshop combines careful hand finishing with repeatable processes, so one-off prototypes and larger rollouts share the same quality bar. We partner with retailers, clinics, hospitality groups, and creative studios who need dependable timelines and honest guidance.',
    'Sustainability and practicality matter too—we help you choose thicknesses and formats that reduce waste, ship safely, and install quickly on site. Reach out for samples, drawings, or a walkthrough of options tailored to your space.',
  ],
}

export const SITE = {
  name: 'Ali Ahmed Shield',
  phone: '0305 6170385',
  phoneTel: '+923056170385',
  address: 'C43H+7X3 Dhaunkal, Pakistan',
}
