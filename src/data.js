const appSeed = [
  {
    name: 'Jaiho Rummy',
    bonus: '₹50',
    withdrawal: '₹100',
    initials: 'J',
    gradient: 'from-emerald-800 to-green-500',
    isNew: false,
  },
  {
    name: 'Bingo 101',
    bonus: '₹20',
    withdrawal: '₹100',
    initials: 'B',
    gradient: 'from-green-800 to-lime-500',
    isNew: false,
  },
  {
    name: 'Joy Rummy',
    bonus: '₹51',
    withdrawal: '₹100',
    initials: 'JR',
    gradient: 'from-emerald-800 to-teal-500',
    isNew: true,
  },
  {
    name: 'All Rummy App',
    bonus: '₹551',
    withdrawal: '₹100',
    initials: 'AR',
    gradient: 'from-fuchsia-700 to-amber-400',
    isNew: false,
  },
  {
    name: 'All New Yono Games',
    bonus: '₹151',
    withdrawal: '₹100',
    initials: 'YG',
    gradient: 'from-yellow-500 to-green-700',
    isNew: true,
  },
  {
    name: 'All Yono App',
    bonus: '₹51',
    withdrawal: '₹100',
    initials: 'AY',
    gradient: 'from-emerald-900 to-green-500',
    isNew: false,
  },
  {
    name: 'All Yono Games',
    bonus: '₹500',
    withdrawal: '₹100',
    initials: 'AG',
    gradient: 'from-green-900 to-lime-500',
    isNew: true,
  },
  {
    name: 'Rummy 365',
    bonus: '₹365',
    withdrawal: '₹100',
    initials: 'R3',
    gradient: 'from-blue-700 to-cyan-400',
    isNew: true,
  },
  {
    name: 'Yono VIP',
    bonus: '₹200',
    withdrawal: '₹100',
    initials: 'VIP',
    gradient: 'from-violet-500 to-indigo-700',
    isNew: true,
  },
  {
    name: 'Ok Rummy',
    bonus: '₹25',
    withdrawal: '₹100',
    icon: '/app-icons/ok-rummy.png',
    isNew: true,
  },
  {
    name: 'Jaiho 777 Vip',
    bonus: '₹155',
    withdrawal: '₹100',
    icon: '/app-icons/jaiho-777-vip.png',
    isNew: true,
  },
  {
    name: 'Rummy 91',
    bonus: '₹191',
    withdrawal: '₹100',
    icon: '/app-icons/rummy-91.png',
    isNew: true,
  },
  {
    name: 'Spin 101',
    bonus: '₹38',
    withdrawal: '₹100',
    icon: '/app-icons/spin-101.png',
    isNew: true,
  },
  {
    name: 'Rumble Rummy',
    bonus: '₹50',
    withdrawal: '₹100',
    icon: '/app-icons/rumble-rummy.png',
    isNew: true,
  },
  {
    name: 'Top Rummy',
    bonus: '₹50',
    withdrawal: '₹100',
    icon: '/app-icons/top-rummy.png',
    isNew: true,
  },
  {
    name: 'Boss Rummy',
    bonus: '₹50',
    withdrawal: '₹100',
    icon: '/app-icons/boss-rummy.png',
    isNew: true,
  },
]

export const defaultApps = appSeed.map((app, index) => ({
  ...app,
  id: `demo-app-${index + 1}`,
  section: app.icon ? 'new' : 'all',
  downloadUrl: '#download-notice',
}))

export const categories = [
  {
    title: 'Yono Rummy Apk',
    description: 'Popular rummy apps, fresh bonuses and quick access.',
    icon: '♠',
    style: 'from-blue-600 to-cyan-400',
  },
  {
    title: 'New Yono Games',
    description: 'Discover newly added games updated every day.',
    icon: '✦',
    style: 'from-violet-600 to-pink-400',
  },
  {
    title: 'All Yono Apps',
    description: 'Browse our complete collection in one simple list.',
    icon: '▦',
    style: 'from-orange-500 to-amber-300',
  },
]

export const faqs = [
  {
    question: 'Do these apps provide a signup bonus?',
    answer:
      'Many listed apps advertise a new-user or signup reward. Bonus amounts and eligibility can change, so always review the offer terms inside the app before joining.',
  },
  {
    question: 'How do I download a Yono app?',
    answer:
      'Choose an app from the listing and select “Download Now.” On Android, you may need to allow installation from your browser after verifying the file source.',
  },
  {
    question: 'What is the minimum withdrawal amount?',
    answer:
      'Minimum withdrawal limits vary by app. Check the wallet or withdrawal section in the selected app for its latest limit, processing time and verification rules.',
  },
  {
    question: 'Are all listed apps safe to use?',
    answer:
      'We recommend checking permissions, publisher details, user reviews and local regulations before installing or using any third-party app. Never share passwords or OTPs.',
  },
]
