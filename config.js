module.exports = {
  pathPrefix: '',
  siteUrl: 'https://www.travistheprogrammer.com',
  siteTitle: 'Frankie Rodriguez',
  siteDescription: 'Portfolio of Frankie a.k.a Travis the Programmer',
  author: 'Frankie Rodriguez',
  postsForArchivePage: 3,
  defaultLanguage: 'en', 
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    project: 'projects',
  },
  social: {
    github: 'https://github.com/ElementalTech04',
    linkedin: 'http://www.linkedin.com/in/frankierodriguezjr/',
    business: 'http://www.scriptcasters.com',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/ajjjedja',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  projects:{
    portfoliov1: {
      name: 'Dev Site V1',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    portfoliov2: {
      name: 'Dev Site V2',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
  },
};
