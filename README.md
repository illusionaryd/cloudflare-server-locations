# Cloudflare Server Locations

[![NPM Version](https://img.shields.io/npm/v/cloudflare-server-locations)](https://www.npmjs.com/package/cloudflare-server-locations)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/cloudflare-server-locations)](https://www.npmjs.com/package/cloudflare-server-locations)
[![NPM Downloads](https://img.shields.io/npm/dt/cloudflare-server-locations)](https://www.npmjs.com/package/cloudflare-server-locations)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/illusionaries/cloudflare-server-locations/publish.yml)

In case you have a three letter code (e.g., from the `colo` field of `/cdn-cgi/trace`) and want to know which server location it belongs to, here is a list of Cloudflare's server locations, no additional network requests needed.

## Usage

```typescript
import { CloudflareServerLocations } from 'cloudflare-server-locations'

console.log(CloudflareServerLocations['LAX']) // Los Angeles, CA, United States
```