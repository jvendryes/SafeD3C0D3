# SafeDC0D3
A lightweight app that simply decodes data in browser memory.

## Why
As we know, encoded data is not encrypted data and sometimes data that should be encrypted is **incorrectly** stored in 
an encoded format. For instance, maybe someone has put PII or other sensitive information in a JWT payload.

During development or debugging, maybe you want to quickly decode some data so you hop over to a search engine and
search for an online JWT or Base64 decoder. The issue with these sites is that you never really know what they are doing 
with your data.

Yes, you could absolutely inspect the traffic to see what is being transmitted or spend the time to reverse minified and 
uglified JavaScript but who takes the time to do that? What about server-side calls that return decoded data? No idea.

The point of SafeDC0D3 is to give you more confidence that the data you supply isn't being abused by third parties.

## How
- All data supplied to the app is handled in browser memory, the only network requests made are the ones required
for the app to load
- Utilizing a strict Content Security Policy (CSP) with SHA-256 hash signatures
- The NGINX Docker container runs a non-root user

## Features
- JWT decoding
- Base64 decoding
- Support for UTF-8 and UTF-16
- Responsive UI to minimize footprint

## Getting Started

### Installation

### Usage

#### Docker Compose

#### Traefik

## Contributing
