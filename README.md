# Company Profile

A modern and responsive company profile website built with React and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: v22.16.0 or higher
- **npm**: Comes with Node.js installation

To check your Node.js version:
```bash
node --version
```

If you need to install or update Node.js, visit [Node.js official website](https://nodejs.org/).

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/company-profile.git
   cd company-profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**
   ```bash
   npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
   ```
   
   Keep this command running in a separate terminal to watch for CSS changes.

## Development

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Contributing

We follow a branching strategy to maintain code quality and organization.

### Making Changes

1. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
   Use descriptive branch names:
   - `feature/add-contact-form`
   - `bugfix/fix-navigation-mobile`
   - `update/improve-styling`

2. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

3. **Push your branch** to the repository:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** on GitHub to merge your changes into the main branch.

### Branch Naming Convention

- `feature/` - New features
- `bugfix/` - Bug fixes
- `update/` - Updates to existing features
- `hotfix/` - Critical fixes

**Important**: Never push directly to the `main` branch. Always create a new branch for your changes.

## Project Structure

```
company-profile/
├── public/
│   ├── index.html
│   └── output.css          # Generated Tailwind CSS
├── src/
│   ├── components/         # React components
│   ├── assets/            # Images and static files
│   ├── index.css          # Tailwind CSS source
│   ├── index.js           # Entry point
│   └── App.js             # Main App component
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Support

If you encounter any issues or have questions, please:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information about the problem
3. Contact the development team

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.