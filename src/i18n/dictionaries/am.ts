import type { Dictionary } from "@/i18n/dictionaries/en";

/** Amharic (አማርኛ) UI text. Must have every key that en.ts has — TypeScript enforces it. */
export const am: Dictionary = {
  meta: {
    description:
      "ንጋት ፋናዊ ኮንስትራክሽን በአዲስ አበባ ለመኖሪያ ቤቶች፣ ለቢሮዎች እና ለንግድ ቦታዎች የውስጥ ማጠናቀቂያ፣ የወለል እና የግድግዳ፣ የእንጨት ሥራ እና የእድሳት አገልግሎቶችን ይሰጣል።",
    titles: {
      about: "ስለ እኛ",
      contact: "ያግኙን",
      services: "አገልግሎቶቻችን",
      notFound: "ገጹ አልተገኘም",
    },
  },
  pages: {
    about: { title: "ስለ እኛ", crumb: "ስለ እኛ" },
    contact: { title: "ያግኙን", crumb: "ያግኙን" },
    services: { title: "አገልግሎቶቻችን", crumb: "አገልግሎቶች" },
    notFound: { title: "ገጹ አልተገኘም", crumb: "404 የስህተት ገጽ" },
  },
  common: {
    language: "ቋንቋ",
    home: "መነሻ",
    breadcrumb: "የገጽ መንገድ",
    getQuote: "የዋጋ ግምት ይጠይቁ",
    requestQuote: "የዋጋ ግምት ይጠይቁ",
    toggleMenu: "ምናሌ ክፈት/ዝጋ",
    backToTop: "ወደ ላይ ተመለስ",
    learnMore: "ተጨማሪ ይመልከቱ",
    allServices: "ሁሉም አገልግሎቶች",
    address: "አዲስ አበባ",
    hours: "ከጠዋቱ 3:00 – ከቀኑ 11:00 ሰዓት",
    copyright: "የቅጂ መብት © 2026 Nigat Fanawi Trading PLC። መብቱ በሕግ የተጠበቀ ነው።",
  },
  nav: {
    home: "መነሻ",
    about: "ስለ እኛ",
    services: "አገልግሎቶች",
    contact: "ያግኙን",
  },
  footer: {
    quickLinks: "ፈጣን ማገናኛዎች",
    ourServices: "አገልግሎቶቻችን",
  },
  group: {
    tagline: "Nigat Fanawi Trading PLC — አንድ እናት ኩባንያ፣ ሦስት ዘርፎች።",
    youAreHere: "እዚህ ነዎት",
    sectors: "የንጋት ግሩፕ ዘርፎች",
  },
  form: {
    name: "ስምዎ",
    phone: "ስልክ ቁጥር",
    service: "የሚፈልጉት አገልግሎት",
    generalEnquiry: "አጠቃላይ ጥያቄ / ገና አልወሰንኩም",
    message: "ስለ ፕሮጀክትዎ ይንገሩን (ቦታ፣ መጠን፣ ጊዜ)",
    send: "ጥያቄ ላክ",
    sending: "በመላክ ላይ…",
    honeypot: "ይህን መስክ ባዶ ይተዉት",
    errors: {
      name: "እባክዎ ስምዎን ያስገቡ።",
      phone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ፤ ለምሳሌ 0911 234 567።",
      message: "እባክዎ አጭር መልእክት ይጻፉ (ቢያንስ 10 ፊደላት)።",
    },
    sent: "እናመሰግናለን! ጥያቄዎ ደርሶናል፤ መልሰን እንደውልልዎታለን።",
    notConfigured: "የኦንላይን ጥያቄ ገና አልተጀመረም። እባክዎ ይደውሉልን ወይም በቴሌግራም ወይም በዋትስአፕ መልእክት ይላኩልን።",
    failed: "ጥያቄዎ ሊላክ አልቻለም። እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ ይደውሉልን።",
  },
  contact: {
    subtitle: "ያግኙን",
    title: "ስለ ፕሮጀክትዎ እንነጋገር",
    description: "ይደውሉልን፣ በቴሌግራም ወይም በዋትስአፕ መልእክት ይላኩ፣ ወይም ቅጹን ይሙሉ። ብዙውን ጊዜ በአንድ የሥራ ቀን ውስጥ እንመልሳለን።",
    phoneLabel: "ይደውሉልን",
    emailLabel: "ኢሜይል ይላኩልን",
    formTitle: "የዋጋ ግምት ይጠይቁ",
  },
  map: {
    subtitle: "ቢሮአችንን ይጎብኙ",
    title: "አዲስ አበባ የሚገኘውን ቢሮአችንን ይጎብኙ",
    description: "የሚመለከተው ሰው እንዲጠብቅዎ እባክዎ ከመምጣትዎ በፊት ይደውሉ።",
    iframeTitle: "የቢሮአችን መገኛ በጉግል ካርታ",
  },
  hero: {
    subtitle: "ንጋት ፋናዊ ኮንስትራክሽን · አዲስ አበባ",
    title: "የማጠናቀቂያ እና የግንባታ ሥራዎች፣ በትክክል የተሠሩ",
    description:
      "ከኮርኒስ እና ከንጣፍ እስከ ክላዲንግ፣ የእንጨት ሥራ እና ሙሉ እድሳት፣ ሠራተኞቻችን ንጹህ እና ዘላቂ ሥራ ይሠራሉ፤ ከመጀመሪያው ጉብኝት እስከ ርክክብ ድረስ ያሳውቁዎታል።",
    secondaryCta: "አገልግሎቶቻችን",
  },
  intro: {
    subtitle: "ስለ ንጋት",
    title: "ለማጠናቀቂያ እና ለውስጥ ዝግጅት ሥራዎች የአገር ውስጥ ቡድን",
    description:
      "ንጋት ፋናዊ ኮንስትራክሽን የNigat Fanawi Trading PLC የግንባታ ዘርፍ ነው። ለመኖሪያ ቤቶች፣ ለቢሮዎች እና ለንግድ ቦታዎች የውስጥ ማጠናቀቂያ፣ የወለል እና የግድግዳ፣ የእንጨት ሥራ እና የእድሳት ሥራዎችን እንሠራለን።",
    points: ["መኖሪያ ቤቶች፣ ቢሮዎች፣ ሱቆች እና የንግድ ሕንፃዎች።", "ከመጀመሪያው የሳይት ጉብኝት እስከ ርክክብ አንድ ቡድን።"],
    moreAbout: "ስለ እኛ ተጨማሪ",
  },
  servicesShowcase: {
    subtitle: "አገልግሎቶቻችን",
    title: "የምንገነባው እና የምናጠናቅቀው",
    description: "አራት የሥራ ዘርፎች፣ እያንዳንዳቸው በራሳችን ሠራተኞች የሚከናወኑ። ምን እንደሚያካትት ለማየት አንዱን ይምረጡ።",
  },
  servicesPage: {
    intro: "ኮርኒስ፣ ወለል፣ ግድግዳ፣ የእንጨት ሥራ እና እድሳት፣ በአንድ ቡድን።",
    subtitle: "የምንሠራው",
    title: "አራት የሥራ ዘርፎች፣ አንድ ቡድን",
    includes: "የሚያካትተው",
  },
  process: {
    subtitle: "አሠራራችን",
    title: "ሦስት ቀላል ደረጃዎች",
    steps: [
      { title: "ምክክር", text: "ይደውሉ ወይም መልእክት ይላኩ። ሳይቱን ጎብኝተን ፍላጎትዎን እናዳምጣለን፤ ልኬት እንወስዳለን።" },
      { title: "እቅድ እና የዋጋ ግምት", text: "ሥራ ከመጀመሩ በፊት የሚያጸድቁት ግልጽ የሥራ ዝርዝር፣ የጊዜ ሰሌዳ እና ዋጋ ይደርስዎታል።" },
      { title: "ግንባታ እና ርክክብ", text: "ሠራተኞቻችን ሥራውን ይሠራሉ፣ ሳይቱን ንጹህ ያደርጋሉ፣ የተጠናቀቀውን ቦታ ያስጎበኙዎታል።" },
    ],
  },
  categoryPage: {
    includedTitle: "ይህ አገልግሎት የሚያካትተው",
    otherTitle: "ሌሎች አገልግሎቶች",
  },
  contactBand: {
    subtitle: "የዋጋ ግምት ያግኙ",
    title: "ስለ ፕሮጀክትዎ ይንገሩን",
    description:
      "ይደውሉልን፣ በቴሌግራም ወይም በዋትስአፕ መልእክት ይላኩ፣ ወይም አጭሩን ቅጽ ይሙሉ፤ በአንድ የሥራ ቀን ውስጥ መልሰን እንደውላለን።",
    callUs: "ይደውሉልን",
    telegram: "ቴሌግራም",
    whatsapp: "ዋትስአፕ",
    hoursLabel: "የሥራ ሰዓት",
  },
  story: {
    subtitle: "ታሪካችን",
    title: "በአዲስ አበባ የተገነባ",
    paragraphs: [
      "ንጋት ፋናዊ ኮንስትራክሽን በግንባታ፣ በተሽከርካሪ ማስመጣት እና በወጪ ንግድ የሚሠራው የኢትዮጵያው ኩባንያ Nigat Fanawi Trading PLC አካል ነው።",
      "የግንባታ ቡድናችን አንድን ሕንፃ ለአገልግሎት ዝግጁ በሚያደርጉት የማጠናቀቂያ እና የውስጥ ዝግጅት ሥራዎች ላይ ያተኩራል፤ ኮርኒስ፣ ወለል፣ ግድግዳ፣ የእንጨት ሥራ እና እድሳት።",
    ],
    timelineLabel: "ዋና ዋና ምዕራፎች",
  },
  missionVision: {
    subtitle: "የሚመራን",
    title: "ተልዕኳችን፣ ራዕያችን እና እሴቶቻችን",
    mission: "ተልዕኮ",
    missionText:
      "በኢትዮጵያ በጥራት የተሠሩ፣ ደህንነታቸው የተጠበቀ እና በወቅቱ የሚጠናቀቁ የማጠናቀቂያ እና የግንባታ ሥራዎችን፣ ከመጀመሪያው ጉብኝት እስከ ርክክብ ግልጽ በሆነ ዋጋ እና በታማኝ ግንኙነት ማቅረብ።",
    vision: "ራዕይ",
    visionText: "በኢትዮጵያ የቤት ባለቤቶች እና ድርጅቶች በመጀመሪያ የሚመክሩት የማጠናቀቂያ እና የውስጥ ዝግጅት ተቋራጭ መሆን።",
    values: "እሴቶች",
    valueList: [
      { title: "ጥራት", text: "ሥራውን ከመጀመሪያው በትክክል እንሠራለን።" },
      { title: "ታማኝነት", text: "ግልጽ የዋጋ ግምት እና ቀጥተኛ መልስ።" },
      { title: "ደህንነት", text: "ለሠራተኞቻችን እና ለእርስዎ ሰዎች ደህንነቱ የተጠበቀ ሳይት።" },
      { title: "አስተማማኝነት", text: "በጊዜ እና በሥራ ዝርዝር ቃላችንን እንጠብቃለን።" },
    ],
  },
  notFound: {
    title: "ይቅርታ! ገጹ አልተገኘም",
    description: "የሚፈልጉት ገጽ የለም።",
    back: "ወደ መነሻ ገጽ ይመለሱ",
  },
  content: {
    services: {
      "gypsum-board-ceiling-partition-works": { title: "የጂፕሰም ቦርድ ኮርኒስ እና የክፍል መከፋፈያ ሥራዎች" },
      "false-ceiling-decorative-ceiling-systems": { title: "የፎልስ ሲሊንግ እና የማስዋቢያ ኮርኒስ ሥርዓቶች" },
      "painting-decorative-finishing-works": { title: "የቀለም እና የማስዋቢያ የማጠናቀቂያ ሥራዎች" },
      "acoustic-renovation-soundproofing-works": { title: "የአኮስቲክ እድሳት እና የድምፅ መከላከያ ሥራዎች" },
      "reception-areas-feature-walls": { title: "የእንግዳ መቀበያ ቦታዎች እና የማስዋቢያ ግድግዳዎች" },
      "porcelain-ceramic-tile-works": { title: "የፖርሲሊን እና የሴራሚክ ንጣፍ ሥራዎች" },
      "epoxy-flooring-systems": { title: "የኢፖክሲ ወለል ሥርዓቶች" },
      "flooring-solutions": { title: "የወለል መፍትሄዎች" },
      "wall-cladding-systems": { title: "የግድግዳ ክላዲንግ ሥርዓቶች" },
      "hollow-concrete-block-wall-construction": { title: "የሆሎው ኮንክሪት ብሎኬት (HCB) ግድግዳ ግንባታ" },
      "custom-furnishing-joinery-works": { title: "ልዩ የቤት ዕቃ እና የእንጨት ሥራዎች" },
      "glass-partition-door-systems": { title: "የመስታወት መከፋፈያ እና የበር ሥርዓቶች" },
      "aluminum-doors-windows": { title: "የአሉሚኒየም በሮች እና መስኮቶች" },
      "metal-installation-works": { title: "የብረታ ብረት ተከላ ሥራዎች" },
      "shopfitting-commercial-interior-works": { title: "የሱቅ ዝግጅት እና የንግድ ቦታ የውስጥ ሥራዎች" },
      "renovation-refurbishment-services": { title: "የእድሳት እና የማሻሻያ አገልግሎቶች" },
      "electrical-installation-works": { title: "የኤሌክትሪክ ተከላ ሥራዎች" },
      "plumbing-sanitary-installation-works": { title: "የቧንቧ እና የንፅህና ተከላ ሥራዎች" },
      "mep-coordination": { title: "የሜካኒካል፣ የኤሌክትሪክ እና የቧንቧ (MEP) ቅንጅት" },
      "design-space-planning-project-management": { title: "ዲዛይን፣ የቦታ እቅድ እና የፕሮጀክት አስተዳደር" },
      "landscaping-external-beautification-works": { title: "የአረንጓዴ ልማት እና የውጭ ማስዋብ ሥራዎች" },
    },
    categories: {
      "interior-finishing": {
        title: "ኮርኒስ እና የውስጥ ማጠናቀቂያ",
        summary: "የጂፕሰም እና የማስዋቢያ ኮርኒሶች፣ መከፋፈያዎች፣ ቀለም እና የአኮስቲክ ሥራዎች።",
        description:
          "ባዶ ሕንፃዎችን ወደ ተጠናቀቁ ክፍሎች እንለውጣለን፤ የጂፕሰም ቦርድ ኮርኒሶች እና መከፋፈያዎች፣ የማስዋቢያ ኮርኒሶች፣ ቀለም እና የማስዋቢያ ግድግዳዎች፣ እንዲሁም ለቢሮዎች፣ ለስብሰባ ክፍሎች እና ለቤቶች የአኮስቲክ ሥራዎች።",
      },
      "floors-and-walls": {
        title: "ወለል እና ግድግዳ",
        summary: "የፖርሲሊን እና የሴራሚክ ንጣፍ፣ የኢፖክሲ ወለል፣ የግድግዳ ክላዲንግ እና የHCB ግድግዳ።",
        description:
          "በማንኛውም ሕንፃ ውስጥ ከፍተኛ ጫና የሚደርስባቸው ወለል እና ግድግዳ ናቸው። የፖርሲሊን እና የሴራሚክ ንጣፎችን እናነጥፋለን፣ የኢፖክሲ እና ሌሎች የወለል ሥርዓቶችን እንገጥማለን፣ የውስጥ እና የውጭ ግድግዳ ክላዲንግ እንሠራለን፣ የሆሎው ኮንክሪት ብሎኬት ግድግዳዎችን እንገነባለን።",
      },
      "joinery-glass-metal": {
        title: "የእንጨት፣ የመስታወት እና የብረት ሥራዎች",
        summary: "ልዩ የቤት ዕቃዎች፣ የመስታወት መከፋፈያዎች፣ የአሉሚኒየም በሮች እና መስኮቶች፣ እና የሱቅ ዝግጅት።",
        description:
          "ለቦታዎ በልኬት የሚሠሩ ሥራዎች፤ ልዩ የቤት ዕቃ እና የእንጨት ሥራ፣ የመስታወት መከፋፈያዎች እና በሮች፣ የአሉሚኒየም በሮች እና መስኮቶች፣ የብረታ ብረት ሥራ እንዲሁም ሙሉ የሱቅ እና የቢሮ ዝግጅት።",
      },
      "renovation-building-services": {
        title: "እድሳት እና የሕንፃ አገልግሎቶች",
        summary: "እድሳት፣ የኤሌክትሪክ እና የቧንቧ ሥራዎች፣ ዲዛይን እና የፕሮጀክት አስተዳደር።",
        description:
          "ለትላልቅ ሥራዎች ሙሉውን ፕሮጀክት እንመራለን፤ እድሳት እና ማሻሻያ፣ የኤሌክትሪክ እና የቧንቧ ተከላ፣ የሜካኒካል፣ የኤሌክትሪክ እና የቧንቧ ሥራዎች ቅንጅት፣ የቦታ እቅድ እና የውጭ አረንጓዴ ልማት።",
      },
    },
  },
};
