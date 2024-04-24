class Recommendation {
  constructor(giver, relation, text) {
    this.giver = giver;
    this.relation = relation;
    this.text = text;
  }
}


const recsList = [
  new Recommendation('Andrew Cirt', 'Colleague at KafOpticon', 'Joe was a great asset to our team, both from a technical and non-technical perspective. Whether he was making quick and significant progress on his tasks or helping others make progress on theirs, Joe was always willing to help and go the extra mile. Joe provided valuable insight into solving problems and bugs and also communicated with others about solutions. Joe has been great to work with and I\'m sure he will continue to be so for others.'),
  new Recommendation('Zack Weiss', 'Colleague at KafOpticon', 'Working with Joseph on KafOpticon was an absolute pleasure. His problem-solving skills are truly exceptional, and his collaborative spirit made him an integral part of our team. Joseph\'s profound understanding of Kafka turned him into our go-to expert, always ready to tackle complex challenges with innovative solutions. His ability to rapidly understand new information and his dedication to excellence were truly inspiring. I am confident that Joseph\'s skills and dedication will be invaluable assets to any team or project.'),
  new Recommendation('Ernesto Osorio', 'Colleague at KafOpticon', 'I had the opportunity of collaborating with Joe at KafOpticon, an open-source product, and it was truly an exceptional experience. Joe\'s technical expertise was nothing short of remarkable. Witnessing his enthusiasm for learning and implementing new technologies was truly inspiring. As a valuable member of our backend team, he showcased not only a profound understanding of Node.js but also demonstrated mastery in Express, Electron, and Java among others. Together, we worked on developing a dynamic dashboard utilizing React, Grafana and JSON objects, a project that truly highlighted Joe\'s ingenuity and collaborative spirit. What set Joe apart was not just his technical skills but also his willingness to engage in discussions and share insights into his approaches. Personally, I obtained invaluable knowledge from our interactions. For any team seeking to thrive and innovate, Joe is undeniably the ideal candidate. His dedication, expertise, and collaborative nature make him an invaluable asset.')
];

export default recsList;
