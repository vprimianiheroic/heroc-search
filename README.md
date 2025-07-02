# HEROIC Breach Search Tool

A modern, secure web application for searching and investigating data breaches using the HEROIC cybersecurity API. This tool helps identify compromised credentials and personal information exposed in data breaches.

## 🚀 Live Demo

**🌐 Static Version (Netlify)**: [Coming Soon - Your Netlify URL]

## Features

- **Comprehensive Breach Search**: Search across multiple data types including emails, usernames, phone numbers, IP addresses, domains, SSNs, and Bitcoin addresses
- **Real-time Results**: Instant search results from HEROIC's extensive breach database
- **Privacy Protection**: All sensitive data (passwords, SSNs, credit cards) is automatically masked in results
- **Professional UI**: Clean, secure interface designed for cybersecurity professionals
- **Detailed Breach Information**: View comprehensive details including breach dates, affected sites, and types of exposed data
- **Mobile-Friendly**: Responsive design that works perfectly on all devices

## Breach Search Capabilities

The tool searches HEROIC's database of billions of compromised records across various breach types:

- **Email Addresses** - Find breaches containing specific email addresses
- **Usernames** - Search for compromised usernames across platforms
- **Phone Numbers** - Identify breaches exposing phone numbers
- **IP Addresses** - Check for IP address exposure in data breaches
- **Email Domains** - Search for all breaches affecting a specific domain
- **Social Security Numbers** - Find SSN exposures (results are masked for privacy)
- **Bitcoin Addresses** - Search for cryptocurrency address exposure

## 📦 Deployment Options

### Option 1: Static Version (Netlify, Vercel, etc.)

For static hosting platforms like Netlify with serverless functions:

1. **Files needed**: `public/index.html` + `netlify.toml` + `netlify/functions/search.js`
2. **Serverless backend** - API calls handled by Netlify functions
3. **Perfect for**: Netlify, Vercel with serverless support

**Netlify Deployment:**
```bash
# The netlify.toml file is already configured
# Just connect your GitHub repo to Netlify
# Set your HEROIC_API_KEY environment variable in Netlify settings
# Build command: echo 'Static site - no build required'
# Publish directory: public
```

**Environment Variables Required:**
- `HEROIC_API_KEY` - Your HEROIC Enterprise API key

### Option 2: Full-Stack Version (Heroku, Railway, etc.)

For platforms that support Node.js:

1. **Files needed**: All files (server.js, package.json, public/index.html)
2. **Backend included** - Express.js server with API proxy
3. **Perfect for**: Heroku, Railway, Render, DigitalOcean, etc.

## 🛠 Local Development

### Full-Stack Version:

1. Clone the repository:
```bash
git clone <repository-url>
cd heroic-search-tool
```

2. Install dependencies:
```bash
npm install
```

3. Set environment variables:
```bash
export HEROIC_API_KEY=your_heroic_api_key_here
```

4. Run the application:
```bash
npm start
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

### Development with auto-restart:
```bash
npm run dev
```

## API Integration

This tool integrates with the HEROIC Enterprise API to provide breach search capabilities:

- **Base URL**: `https://api.heroic.com/v7`
- **Authentication**: Requires valid HEROIC Enterprise API key
- **Endpoint Used**: `/breach-search` for searching compromised data

## API Endpoints (Full-Stack Version)

- `GET /` - Serves the main application
- `GET /api/search?type=TYPE&account=VALUE` - Proxy to HEROIC breach search API

## Usage

1. **Select Search Type**: Choose the type of data you want to search for (email, username, etc.)
2. **Enter Search Value**: Input the specific value to search for (e.g., email address, username)
3. **Review Results**: View detailed breach information including:
   - Breach site details
   - Date of breach
   - Types of data exposed
   - Number of affected records
   - Breach descriptions

## Privacy & Security

- **Data Masking**: All sensitive information is automatically masked in results
- **Secure API**: All searches go through secure HTTPS connections
- **No Data Storage**: The application does not store any search queries or results
- **Professional Use**: Designed for legitimate cybersecurity and breach investigation purposes

## Technology Stack

- **Backend**: Node.js with Express.js (full-stack version)
- **Serverless**: Netlify Functions for API proxy (static version)
- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Styling**: Modern CSS with professional cybersecurity theme
- **API Integration**: HEROIC Enterprise API v7

## Project Structure

```
heroic-search-tool/
├── netlify.toml              # Netlify deployment configuration
├── netlify/functions/
│   └── search.js            # Netlify serverless function for API proxy
├── package.json             # Node.js dependencies and scripts
├── server.js                # Express server (full-stack version)
├── openapi.json             # HEROIC API documentation
├── HEROIC API Reference.pdf # Complete API documentation
├── README.md                # Project documentation
└── public/
    ├── index.html           # Main application interface
    └── static-index.html    # Legacy version (fantasy themed - deprecated)
```

## 🚀 Quick Deploy

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set `HEROIC_API_KEY` environment variable in Netlify settings
3. Netlify will automatically use the `netlify.toml` configuration
4. Your breach search tool will be live at your-app-name.netlify.app

### Heroku (For Full-Stack)
```bash
# Install Heroku CLI, then:
heroku create your-app-name
heroku config:set HEROIC_API_KEY=your_api_key_here
git push heroku main
```

## Requirements

- **HEROIC Enterprise Account**: This tool requires a valid HEROIC Enterprise API key
- **API Access**: Sign up at [HEROIC Enterprise](https://app.heroic.com/enterprise/register)
- **Environment Configuration**: Proper API key setup in your deployment environment

## Legal & Compliance

This tool is designed for legitimate cybersecurity purposes including:
- Security breach investigation
- Credential compromise analysis
- Cybersecurity risk assessment
- OSINT (Open Source Intelligence) gathering

**Important**: Use this tool responsibly and in compliance with applicable laws and regulations. Do not use for unauthorized surveillance or privacy violations.

## Contributing

This is a professional cybersecurity tool. Future enhancements could include:

- Advanced filtering and search options
- Bulk search capabilities
- Export functionality for security reports
- Integration with SIEM systems
- Custom alerting and monitoring
- Enhanced data visualization

## Support

For HEROIC API support, contact: support@heroic.com
For tool-specific issues, please create a GitHub issue.

## License

MIT License - Feel free to use and modify as needed for legitimate cybersecurity purposes.