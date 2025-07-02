# Heroic Search Tool

A modern, responsive web application for searching and discovering legendary heroes and their extraordinary abilities.

## Features

- **Real-time Search**: Search across hero names, titles, classes, weapons, origins, abilities, and descriptions
- **Advanced Filtering**: Filter by hero class and minimum power level
- **Beautiful UI**: Modern, responsive design with gradient backgrounds and card-based layout
- **Detailed Hero Information**: View comprehensive details including abilities, weapons, origins, and descriptions
- **Mobile-Friendly**: Responsive design that works perfectly on all devices

## Hero Database

The tool includes a diverse collection of legendary heroes from various mythologies and fictional universes:

- **Arthur Pendragon** (King Arthur) - Paladin with Excalibur
- **Diana Prince** (Wonder Woman) - Warrior from Themyscira
- **Clark Kent** (Superman) - Guardian from Krypton
- **Bruce Wayne** (Batman) - Detective from Gotham City
- **Gandalf** (The Grey Wizard) - Wizard from Middle-earth
- **Jean Grey** (Phoenix) - Psychic with telepathic abilities

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd heroic-search-tool
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Development

For development with auto-restart:
```bash
npm run dev
```

## API Endpoints

- `GET /` - Serves the main application
- `GET /api/heroes` - Returns all heroes
- `GET /api/search?q=query&class=class&minPower=power` - Search heroes with filters
- `GET /api/classes` - Returns all available hero classes

## Usage

1. **Basic Search**: Type any keyword in the search box to find heroes by name, title, abilities, weapons, etc.
2. **Class Filtering**: Select a specific hero class from the dropdown (Paladin, Warrior, Guardian, Detective, Wizard, Psychic)
3. **Power Filtering**: Set a minimum power level to filter heroes by their strength
4. **Clear Filters**: Use the Clear button to reset all filters and show all heroes
5. **Real-time Results**: Search results update automatically as you type

## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Styling**: Modern CSS with gradients, animations, and responsive design
- **Data**: In-memory JSON data structure

## Project Structure

```
heroic-search-tool/
├── package.json
├── server.js          # Express server and API endpoints
├── README.md          # Project documentation
└── public/
    └── index.html     # Frontend application
```

## Contributing

This is an MVP (Minimum Viable Product) designed to demonstrate the core functionality of a heroic search tool. Future enhancements could include:

- Database integration (MongoDB, PostgreSQL)
- User authentication and favorites
- Advanced search algorithms
- Hero comparison features
- Image galleries for heroes
- Export functionality
- Admin interface for managing heroes

## License

MIT License - Feel free to use and modify as needed.