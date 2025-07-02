const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Sample heroic characters data
const heroes = [
  {
    id: 1,
    name: "Arthur Pendragon",
    title: "King Arthur",
    class: "Paladin",
    power: 95,
    weapon: "Excalibur",
    abilities: ["Leadership", "Divine Protection", "Swordsmanship"],
    origin: "Camelot",
    description: "The legendary king who united Britain and wielded the sacred sword Excalibur."
  },
  {
    id: 2,
    name: "Diana Prince",
    title: "Wonder Woman",
    class: "Warrior",
    power: 92,
    weapon: "Lasso of Truth",
    abilities: ["Super Strength", "Flight", "Combat Skills"],
    origin: "Themyscira",
    description: "Amazonian princess and protector of humanity with incredible strength and wisdom."
  },
  {
    id: 3,
    name: "Clark Kent",
    title: "Superman",
    class: "Guardian",
    power: 98,
    weapon: "Heat Vision",
    abilities: ["Flight", "Super Strength", "X-Ray Vision", "Invulnerability"],
    origin: "Krypton",
    description: "The last son of Krypton who protects Earth with his incredible powers."
  },
  {
    id: 4,
    name: "Bruce Wayne",
    title: "Batman",
    class: "Detective",
    power: 85,
    weapon: "Batarang",
    abilities: ["Martial Arts", "Detective Skills", "Technology"],
    origin: "Gotham City",
    description: "The Dark Knight who fights crime using his intellect, martial arts, and advanced technology."
  },
  {
    id: 5,
    name: "Gandalf",
    title: "The Grey Wizard",
    class: "Wizard",
    power: 96,
    weapon: "Staff of Power",
    abilities: ["Magic", "Wisdom", "Light Magic"],
    origin: "Middle-earth",
    description: "A wise wizard who guides the Fellowship and fights against the forces of darkness."
  },
  {
    id: 6,
    name: "Jean Grey",
    title: "Phoenix",
    class: "Psychic",
    power: 94,
    weapon: "Telepathy",
    abilities: ["Telepathy", "Telekinesis", "Phoenix Force"],
    origin: "Earth",
    description: "A powerful mutant with telepathic and telekinetic abilities, host to the Phoenix Force."
  }
];

// Search function
function searchHeroes(query, filters = {}) {
  const searchTerm = query.toLowerCase();
  
  return heroes.filter(hero => {
    // Text search across multiple fields
    const matchesText = 
      hero.name.toLowerCase().includes(searchTerm) ||
      hero.title.toLowerCase().includes(searchTerm) ||
      hero.class.toLowerCase().includes(searchTerm) ||
      hero.weapon.toLowerCase().includes(searchTerm) ||
      hero.origin.toLowerCase().includes(searchTerm) ||
      hero.description.toLowerCase().includes(searchTerm) ||
      hero.abilities.some(ability => ability.toLowerCase().includes(searchTerm));
    
    // Filter by class if specified
    const matchesClass = !filters.class || hero.class.toLowerCase() === filters.class.toLowerCase();
    
    // Filter by minimum power if specified
    const matchesPower = !filters.minPower || hero.power >= parseInt(filters.minPower);
    
    return matchesText && matchesClass && matchesPower;
  });
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/heroes', (req, res) => {
  res.json(heroes);
});

app.get('/api/search', (req, res) => {
  const { q, class: heroClass, minPower } = req.query;
  
  if (!q) {
    return res.json([]);
  }
  
  const filters = {};
  if (heroClass) filters.class = heroClass;
  if (minPower) filters.minPower = minPower;
  
  const results = searchHeroes(q, filters);
  res.json(results);
});

app.get('/api/classes', (req, res) => {
  const classes = [...new Set(heroes.map(hero => hero.class))];
  res.json(classes);
});

app.listen(PORT, () => {
  console.log(`Heroic Search Tool running on http://localhost:${PORT}`);
});