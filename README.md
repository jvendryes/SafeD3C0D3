# SafeD3C0D3
A lightweight app that simply decodes data in browser memory.

![SafeD3C0D3 Demo]

## Why
As we know, encoded data is not encrypted data and sometimes data that should be encrypted is **incorrectly** stored in 
an encoded format. For instance, maybe someone has put PII or other sensitive information in a JWT payload.

During development or debugging, maybe you want to quickly decode some data so you hop over to a search engine and
search for an online JWT or Base64 decoder. The issue with these sites is that you never really know what they are doing 
with your data.

Yes, you could absolutely inspect the traffic to see what is being transmitted or spend the time to reverse minified and 
uglified JavaScript but who takes the time to do that? What about server-side calls that return decoded data? No idea.

The point of SafeD3C0D3 is to give you more confidence that the data you supply isn't being abused by third parties.

## How
- You have access to the source code, feel free to review it
- All data supplied to the app is handled in browser memory, the only network requests made are the ones required
for the app to load

## Features
- JWT decoding
- Base64 decoding
- Support for UTF-8 and UTF-16
- Responsive UI to minimize footprint

### Security Features
- Utilizing a strict Content Security Policy (CSP) with SHA-256 hash signatures
- The NGINX Docker container runs a non-root user

## Getting Started

### Running SafeD3COD3
SafeD3COD3 has primarily been designed to run as a Docker container.

#### Docker Hub
To run from a Docker Hub hosted image:

```
docker pull jvendryes/safed3c0d3
docker run --name "decode" -p "80:8080" -d jvendryes/safed3c0d3:latest
```

#### Docker
If you prefer to clone and build the project locally:

```
docker build -f Dockerfile -t safed3c0d3:latest .
docker run --name "decode" -p "80:8080" -d safed3c0d3:latest
```

#### Docker Compose
If you are using Docker Compose, you can run the included `docker-compose.yml` file with:

```
docker-compose up -d
```

## Changelog
[Read about the changes] made to SafeD3C0D3.

## Contributing
[Contributions] are welcomed and encouraged! Not sure where to start? When you're ready, review the [open issues].

[SafeD3C0D3 Demo]: https://github.com/jvendryes/SafeD3C0D3/blob/master/docs/assets/images/SafeD3C0D3-demo.gif
[Read about the changes]: https://github.com/jvendryes/SafeD3C0D3/blob/master/CHANGELOG.md
[Contributions]: https://github.com/jvendryes/SafeD3C0D3/blob/master/CONTRIBUTING.md
[open issues]: https://github.com/jvendryes/SafeD3C0D3/issues
