# Blocsys NFT Marketplace Frontend

Modern React frontend for a Web3 NFT marketplace with wallet connectivity, creator profiles, collections, and minting-ready user flows.

---

## Why This Project

This project delivers a clean and scalable marketplace interface for discovering, creating, and managing NFTs.  
It is designed for performance, responsive UI, and production deployment with SEO-friendly metadata rendering.

## Key Highlights

- Wallet integration with `Web3` and `WalletConnect`
- Marketplace, collection, profile, and NFT detail pages
- Redux-based architecture for predictable state management
- Express-based production server with dynamic meta-tag injection
- Internationalization-ready structure with language resources

## Tech Stack

- **Frontend:** React 17, React Router, Styled Components
- **State Management:** Redux, Redux Thunk
- **Web3:** `web3`, WalletConnect provider
- **Server:** Express (for serving build and dynamic metadata)
- **Tooling:** `react-app-rewired`, `customize-cra`

## Project Structure

```text
.
├── public/              # Static assets, legal files, base HTML
├── server/              # Express server for production serving
├── src/
│   ├── Component/       # Reusable UI and modal components
│   ├── Pages/           # Route-level page views
│   ├── actions/         # Redux actions
│   ├── reducers/        # Redux reducers
│   ├── services/        # API and web3 service layers
│   ├── config/          # App constants and configuration
│   └── lang/            # Localization resources
└── config-overrides.js  # CRA override setup
```

## Getting Started

### 1) Install Dependencies

```bash
npm install
```

### 2) Run Development Server

```bash
npm start
```

### 3) Build for Production

```bash
npm run build
```

### 4) Build + Serve with Express

```bash
npm run server
```

By default, the server runs on port `3000` unless `PORT` is provided.

## Available Scripts

- `npm start` - Start app in development mode
- `npm test` - Run test runner
- `npm run build` - Create optimized production build
- `npm run server` - Build app and run Express server

## Deployment Notes

- The Express server in `server/index.js` serves the build output.
- Dynamic meta tags are injected for NFT and creator detail routes.
- Keep API configuration aligned with your backend endpoints before deployment.

## Contributing

Contributions are welcome. Please create a feature branch, keep commits focused, and open a pull request with testing notes.

## License

Licensed under the terms provided in the `LICENSE` file.

---

### Built by [Blocsys](https://blocsys.com)
