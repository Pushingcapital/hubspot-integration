# HubSpot Integration

This repository contains code to integrate with HubSpot API from Base44 and a local environment.

## Setup

1. Clone the repository and install dependencies.  
2. Copy `.env.example` to `.env` and set `HUBSPOT_API_KEY` with your HubSpot API key.  
3. Use `backend/getTradelines.js` to fetch tradeline data from HubSpot.

## Files

- `backend/getTradelines.js` - Function to retrieve credit tradelines from HubSpot.  
- `.env.example` - Example environment file.  
- `package.json` - Node package configuration.
