# URL Shortener
## Background
A web service that aims to shorten a given URL. The main objective
of this project was for me to explore different alternatives to 
better structure a nodeJS project and apply design principles.

## Get Started
### Pre-requisites
- NodeJS (v12.17.0 LTS)
- MySQL (v5.7)

### Repository Setup
```bash
npm install
```

### Schema Creation & Data Population
1. The schema can be located at `/generator/schema.sql`
2. Create the schema on your MySQL database
3. Fill in your database credentials at `/generator/url_generator.js`

To populate your database, go ahead and run the `url_generator` script:
```bash
node url_generator.js
```

### Environment Setup
For environments, I have included **two** types, namely development (*DEV*) and production (*PROD*). The environment selection is based on the environment variable, `APP_ENV`.

1. Set environment variable `APP_ENV` (`DEV` or `PROD`)
2. Copy `.env-copy` and renamed it to `.env`
3. Fill in the database credentials for your intended environment

Once you have completed, you are ready to go!
```bash
npm start
```

## Available Endpoints
Please refer to `routes/api` for more information.

## Improvements
- Inclusion of cache, otherwise over-reliance on database will lead to unnecessary overhead

