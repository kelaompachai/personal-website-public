class Project {
  constructor(title, link, image) {
    this.title = title;
    this.link = link;
    this.image = image;
  }
}

const projectsList = [
  new Project('The Floor Plan', 'https://github.com/kelaompachai/The-Floor-Plan', "bg-floorplan"),
  new Project('Pass the Plate', 'https://github.com/kelaompachai/Pass-the-Plate', "bg-passtheplate"),
  new Project('KafOpticon', 'https://github.com/kelaompachai/KafOpticon', "bg-kafopticon"),
  new Project('AlgoGoggles', 'https://github.com/kelaompachai/AlgoGoggles', "bg-algogoggles")
];

export default projectsList;
