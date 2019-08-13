# scholars-embed

## Docker Deployment

1. Build the image
```bash
  docker build -t scholars-embed .
```

2. Deploy the container
```bash
  docker run -d -p 4201:4201 \
  -e HOST=localhost \
  -e PORT=4201 \
  -e BASE_HREF=/ \
  -e SERVICE_URL="http://localhost:9000" \
  -e UI_URL="http://localhost:4200" \
  -e VIVO_URL="http://scholars.library.tamu.edu/vivo"
  scholars-embed
```

> Above environment variables passed into the container are defaults. URLs must be enclosed in double quotes. BASE_HREF must start and end with a forward slash.