class Project {
  constructor(title, link, image) {
    this.title = title;
    this.link = link;
    this.image = image;
  }
}

const projectsList = [
  new Project('The Floor Plan', 'https://github.com/kelaompachai/The-Floor-Plan', "bg-floorPlan"),
  new Project('Pass the Plate', 'https://github.com/kelaompachai/Pass-the-Plate', "bg-passThePlate"),
  new Project('KafOpticon', 'https://github.com/kelaompachai/KafOpticon', "bg-KafOpticon"),
  new Project('AlgoGoggles', 'https://github.com/kelaompachai/AlgoGoggles', "bg-algogoggles")
];

export default projectsList;
