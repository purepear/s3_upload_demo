# Description

**PoC** that shows how to use BE request(`getSignedUrl`) and skip importing `aws-sdk` in FE (~4.5MB)

# Install

```
npm i
```

# Config
> No `dotenv`/`config` for this simple demo(don't need FE build)

Just change these:

  * **server.js**:  `AWS_ACCESS_KEY`, `AWS_SECRET`, `AWS_REGION`
  * **index.html**: `CLIENT_AWS_BUCKET`, `CLIENT_USER_ID`, `CLIENT_UPLOAD_PATH`

# Run

```
npm run dev
```

The server is running on port `8080` for convenience.
> If `8080` port is already used you won't be able to run this demo.

# Test

Open [localhost:8080](http://localhost:8080).

Upload an image and see the result :)