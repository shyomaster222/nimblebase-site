// Single source for site-wide facts and the service content.
// Anything in [square brackets] is a fact we don't have yet. Fill before launch.

export const site = {
  name: 'Nimblebase',
  // Company facts shown in the footer, on Contact and About, and in the legal pages.
  // Replace the placeholders with the real domain, business email, US address and phone.
  domain: 'nimblebasehq.com',
  email: 'hello@nimblebasehq.com',
  phone: '+1-814-801-3627',
  phoneDisplay: '+1 (814) 801-3627',
  // Principal office on the Wyoming Secretary of State record (filing 2026-002033751).
  address: {
    street: '30 N Gould St Ste N',
    city: 'Sheridan',
    region: 'WY',
    postal: '82801',
    country: 'US',
  },
  // Optional form endpoint (Formspree, Basin, your own API). Empty = the form opens the visitor's email app.
  formEndpoint: '',
  callLength: '20-minute',
  cta: 'Book a 20-minute call',
  nav: [
    { href: '/services/', label: 'Services' },
    { href: '/how-we-work/', label: 'How we work' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/insights/', label: 'Insights' },
    { href: '/about/', label: 'About' },
  ],
  company: [
    { href: '/about/', label: 'About' },
    { href: '/how-we-work/', label: 'How we work' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/contact/', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy/', label: 'Privacy' },
    { href: '/terms/', label: 'Terms' },
  ],
  // Legal pages stay out of search and the sitemap until the bracketed company facts are filled and reviewed.
  legalReady: true,
  legalEntity: 'Nimblebase LLC',
  legalAddress: '30 N Gould St Ste N, Sheridan, WY 82801, USA',
  jurisdiction: 'the State of Wyoming',
  legalUpdated: '18 September 2026',
  byline: 'The Nimblebase team',
};

export type Faq = { q: string; a: string };

export type Service = {
  // `id` is used for the contact form prefill (?need=), `slug` for the page URL.
  id: string;
  slug: string;
  forWho: string;
  signs: string[];
  faqs: Faq[];
  name: string;
  short: string;
  line: string;
  intro: string;
  youGet: string[];
  firstProject: string;
  timeframe: string;
  weeks: [string, string, string, string];
};

export const services: Service[] = [
  {
    id: 'marketing',
    slug: 'digital-marketing',
    forWho: "For founders and marketing leads who are spending on ads or content and can't say with confidence what it's bringing in.",
    signs: [
      "Your ad platforms and your CRM disagree about how many leads you got.",
      "The person who set up the tracking has left, and nobody wants to touch it.",
      "Campaign decisions get made on clicks, because revenue data arrives too late to use.",
      "You get a monthly report and still don't know what to change.",
    ],
    faqs: [
      { q: "Do you work in our existing ad accounts?", a: "Yes. Everything stays in your accounts and we're added as users. If an account is a mess, we tidy it before we spend more through it." },
      { q: "Which channels do you run?", a: "Paid search, paid social, SEO and email. We start with one channel, get it measurable, and add the next when the first is paying its way." },
      { q: "What budget do we need?", a: "[Minimum monthly ad spend is confirmed before launch]. Below that, start with the tracking sprint: it tells you what your current spend is doing." },
    ],
    name: 'Digital marketing',
    short: 'Marketing',
    line: 'Campaigns, landing pages and tracking you can trust, run by the person who set them up.',
    intro:
      "We start with measurement. Once the tracking is fixed, we run paid, search and email against numbers you can check yourself.",
    youGet: [
      'Tracking that ties every lead to the ad, page or email it came from.',
      'Paid search and paid social, managed weekly by one named person.',
      'Landing pages written, designed and tested by the same team that runs the ads.',
      'SEO and content planned around what your buyers type into a search bar.',
      'A one-page Friday report: what we spent, what it brought in, what changes next week.',
    ],
    firstProject: 'A two-week tracking and funnel fix, so you know what your current spend is buying.',
    timeframe: 'First campaign live in week two. Monthly after that.',
    weeks: [
      'Tracking fixed, so every lead has a source',
      'First campaign live on one channel',
      'Landing page test running',
      'Cost per lead report and next month planned',
    ],
  },
  {
    id: 'ai-consulting',
    slug: 'ai-consulting',
    forWho: "For leadership teams who keep hearing they should be doing something with AI, and want a grounded answer before they spend.",
    signs: [
      "Different teams are trialling different AI tools and nobody has the full picture.",
      "You have a list of AI ideas and no way to rank them.",
      "Someone asked what happens to customer data once it goes into a model, and nobody could answer.",
      "A vendor demo looked great, and you can't tell whether it would survive your real data.",
    ],
    faqs: [
      { q: "Will you recommend tools you resell?", a: "We don't resell anything and we don't take referral fees, so the recommendation is only ever what fits." },
      { q: "What if the answer is that AI isn't worth it for us yet?", a: "Then that's what the report says, with the reasons. You'll have paid for four weeks and avoided a much larger project." },
      { q: "Who needs to be involved from our side?", a: "One sponsor who can make decisions, and about an hour each from five to eight people who do the day-to-day work." },
    ],
    name: 'AI consulting',
    short: 'AI consulting',
    line: 'A straight answer on where AI will save your team time, and where it will waste it.',
    intro:
      "We sit with the people doing the work, find the tasks worth automating, and tell you which ideas to drop. You get a ranked list with costs, written for the person who signs it off.",
    youGet: [
      'Interviews with the people who do the work, since they know where the hours go.',
      'A shortlist of use cases ranked by hours saved, cost and risk.',
      'One working prototype, so the decision rests on something you have tried.',
      'A data and privacy check: what can go into a model and what stays out.',
      'A go or no-go on each idea, with the reasoning written down.',
    ],
    firstProject: 'A four-week AI review that ends with one prototype and a costed plan.',
    timeframe: 'Four weeks, fixed scope.',
    weeks: [
      'Interviews done, tasks worth automating listed',
      'Shortlist ranked by hours saved and risk',
      'One prototype your team can try',
      'Costed plan with a go or no-go per idea',
    ],
  },
  {
    id: 'ai-implementation',
    slug: 'ai-implementation',
    forWho: "For operations, support and sales teams with a repetitive workflow that eats hours every week.",
    signs: [
      "The same questions get answered by hand, again and again.",
      "People copy information between systems that don't talk to each other.",
      "A prototype impressed everyone in a demo and then stalled.",
      "You tried a chatbot and switched it off, because nobody could see what it was getting wrong.",
    ],
    faqs: [
      { q: "Which AI models do you use?", a: "Whichever fits the job and your data rules. We build so the model can be swapped later without rebuilding the workflow." },
      { q: "What happens to our data?", a: "It stays in your accounts. Before we build, we agree in writing what may be sent to a model and what may not, and the system enforces it." },
      { q: "What happens when it gets something wrong?", a: "It will, especially early on. Every answer is logged, a person reviews the risky ones, and the error log is part of the Friday note." },
    ],
    name: 'AI implementation',
    short: 'AI build',
    line: 'Assistants and automations wired into the tools your team already uses.',
    intro:
      "We build on your real data from week one and pilot with a handful of your people before anyone else sees it. When it goes wrong, and early on it will, you see the log.",
    youGet: [
      'One workflow picked and mapped before any code is written.',
      'An assistant or automation that runs on your real data in a safe test setup.',
      'A pilot with five of your people, with their feedback built in.',
      'Connections to the tools you already pay for: CRM, help desk, email, spreadsheets.',
      'An error log and a review routine, so you know what it gets wrong and how often.',
    ],
    firstProject: 'One workflow automated end to end, such as support triage or quote drafting.',
    timeframe: 'In daily use within four to six weeks.',
    weeks: [
      'One workflow mapped, data access sorted',
      'Working version on your real data, in test',
      'Pilot with five of your people',
      'In daily use, with an error log you can read',
    ],
  },
  {
    id: 'software',
    slug: 'software-development',
    forWho: "For companies that need a web app, internal tool or integration built, and don't have developers free to do it.",
    signs: [
      "A spreadsheet has quietly become a business-critical system.",
      "Your team is waiting on a feature that keeps slipping down the roadmap.",
      "Two tools you pay for need to share data, and don't.",
      "Every quote you've had starts with a three-month specification phase.",
    ],
    faqs: [
      { q: "What do you build with?", a: "Mainstream, well-supported tools your next developer will already know. [Preferred stack is confirmed before launch]. If you already have a stack, we work in it." },
      { q: "Can you work alongside our developers?", a: "Yes. We work in your repository, follow your review process, and the Monday call includes whoever needs to be there." },
      { q: "Who maintains it afterwards?", a: "Your choice. We can stay on a monthly basis, or hand over to your team with documentation written for the person who picks it up." },
    ],
    name: 'Software development',
    short: 'Software',
    line: 'Web apps, internal tools and integrations, on a staging link you can click every Friday.',
    intro:
      "You see working software every week on a staging link, starting with a clickable prototype in week one. The code lives in your repository from the first commit.",
    youGet: [
      'A clickable prototype of the core screen in the first week.',
      'A staging link updated every Friday, so progress is something you click through.',
      'Code in your own repository and cloud accounts from day one.',
      'Automated tests and a release checklist before anything reaches your users.',
      'A handover your next developer can pick up without calling us.',
    ],
    firstProject: 'A four-week first release: the one feature your users are waiting for.',
    timeframe: 'First release in four to ten weeks, depending on scope.',
    weeks: [
      'Clickable prototype of the core screen',
      'First feature on a staging link',
      'Second feature, your feedback built in',
      'Release to your first users',
    ],
  },
];

export const weekRhythm = [
  { day: 'Monday', title: 'Plan', text: 'A 30-minute call. We agree what ships on Friday and write it down in one paragraph.', detail: 'Bring whatever changed since last week: a new priority, a number that moved, feedback from your team. The plan bends to fit it. The paragraph we write goes in the shared channel, so nobody has to remember what was agreed.' },
  { day: 'Tuesday to Thursday', title: 'Build', text: 'We work. You get short written updates in a shared channel, and answers the same day.', detail: 'No standing meetings. Updates are a few lines in the shared channel when something is worth seeing. If we hit a decision only you can make, we ask straight away with the options laid out.' },
  { day: 'Friday', title: 'Ship', text: 'Something goes live, or lands on a link you can click. You get a one-page note on what changed.', detail: 'Live means real: a campaign spending, a page taking traffic, a build on a staging link, an automation handling real cases. If a week only produces a slide, we count that as a missed Friday.' },
];

export const waysToStart = [
  {
    name: 'Sprint',
    length: 'Two weeks',
    text: 'One problem, fixed scope, fixed price. The cheapest way to find out what working with us is like.',
    price: '[Sprint price is confirmed before launch]',
    bestFor: 'One stuck problem, or a first look at how we work.',
    includes: [
      'One problem, written down in a paragraph before we start.',
      'Two Monday calls and two Friday deliveries.',
      'Everything built in your accounts.',
      'A written recommendation for what to do next, whether or not it involves us.',
    ],
  },
  {
    name: 'Project',
    length: 'Four to ten weeks',
    text: 'A build with a clear finish: a campaign launch, an AI workflow, a first software release.',
    price: '[Project price range is confirmed before launch]',
    bestFor: 'A build with a clear finish line.',
    includes: [
      'Scope and price agreed before work starts.',
      'A Friday delivery every week of the project.',
      'A change in scope means a new paragraph and a new price, agreed before we act on it.',
      'Handover notes at the end, written for whoever runs it next.',
    ],
  },
  {
    name: 'Monthly team',
    length: 'Month to month',
    text: 'The same people every week, across marketing, AI and software. Cancel with 30 days notice.',
    price: '[Monthly price is confirmed before launch]',
    bestFor: 'Ongoing marketing, AI and software work with the same people.',
    includes: [
      'A set number of days each month across the skills you need. [Monthly day allocation is confirmed before launch].',
      'The Monday to Friday rhythm, every week.',
      'Priorities can change every Monday.',
      'Cancel with 30 days notice.',
    ],
  },
];

export const billing = [
  { h: 'The price is agreed before work starts.', t: "Sprints and projects are fixed price. If we underestimate, that's our problem to absorb." },
  { h: 'You pay platforms and vendors directly.', t: "Ad spend and software go on your card. We don't mark them up and we don't take commission." },
  { h: 'Invoices are simple.', t: '[Invoicing terms are confirmed before launch].' },
  { h: 'Leaving is easy.', t: 'Monthly work ends with 30 days notice. Everything is already in your accounts, so there is nothing to hand back.' },
];


export const faqs: Faq[] = [
  {
    q: 'We have been burned by an agency before. Why would this be different?',
    a: "Judge us weekly. Every Friday there is something live or something you can click. If a Friday comes and goes with nothing to show, you'll know in week one, and a sprint is only two weeks long.",
  },
  {
    q: 'Who will we talk to?',
    a: 'The people doing the work. There is no account manager between you and them, and the person on your Monday call is the person building on Tuesday.',
  },
  {
    q: 'Can one small team really cover marketing, AI and software?',
    a: "The campaign needs a landing page, the landing page needs a form that talks to the CRM, and the CRM needs an assistant to sort the leads. Marketing, AI and software end up being one problem with three names. When a job needs a specialist we don't have, we'll say so before you pay for it.",
  },
  {
    q: 'What do you need from us?',
    a: 'One person who can make decisions, 30 minutes on Mondays, and access to the tools we will be working in.',
  },
  {
    q: 'Who owns the work?',
    a: 'You do. Ad accounts, code, data and documents sit in your accounts from the first day.',
  },
];

// The full FAQ page. The home page shows `faqs` above; this groups those with the rest.
export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: 'Working together',
    items: [
      faqs[0],
      faqs[1],
      faqs[2],
      faqs[3],
      {
        q: 'Where are you based, and does the time zone matter?',
        a: 'Nimblebase LLC is registered in Sheridan, Wyoming, and the team works remotely. Monday calls are scheduled inside your working day, whatever your time zone.',
      },
    ],
  },
  {
    title: 'Pricing',
    items: [
      {
        q: 'How much does it cost?',
        a: 'Sprints, projects and the monthly team are all priced up front. The pricing page explains what each one includes.',
      },
      {
        q: 'What if a Friday delivery misses?',
        a: "We tell you on Thursday, say why, and agree what ships instead. If it becomes a pattern, the two-week sprint and the 30-day notice exist so that leaving is cheap.",
      },
      { q: 'Do you mark up ad spend or tools?', a: 'No. You pay platforms and vendors directly.' },
    ],
  },
  {
    title: 'Ownership',
    items: [
      faqs[4],
      {
        q: 'What happens if we stop working together?',
        a: 'You keep everything: accounts, code, data and documents. We write handover notes and remove our own access.',
      },
    ],
  },
  {
    title: 'AI and your data',
    items: [
      {
        q: 'Is our data used to train AI models?',
        a: "Not by us. Where a vendor offers a no-training setting, we switch it on in your account. What may be sent to a model is agreed in writing before we build.",
      },
      {
        q: 'Do we need to clean up our data first?',
        a: 'No. We start with the data you have, and the first week shows what needs fixing.',
      },
    ],
  },
];
