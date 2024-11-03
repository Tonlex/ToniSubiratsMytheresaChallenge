# Toni Subirats Mytheresa Automation challenge

This is Toni Subirats QA Technical challenge for Mytheresa.

First of all, thank you for the oportunity to do this challenge, Automation is not my strongest area of expertise but I tried my best to meet all the requirements and develop the code as best as I could but the more DevOps side part of this like building the dockerfile image and testing the code via CI/CD pipelines, the user can pull the Docker image and test everything in different environments but not doing it via Jenkins or GitHub Actions.

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests in different environments(the default enviroment is set to local if the user doesn't run any npm command and opens cypress)

   ```bash
   npm run "cy:open:local" (build the docker image first)
   npm run "cy:run:local"  (build the docker image first)
   npm run "cy:open:staging" (the code is develop to be able to create run against a staging devlopment even though the url set to be the staging env didn't exist)
   npm run "cy:run:staging" (the code is develop to be able to create run against a staging devlopment even though the url set to be the staging env didn't exist)
   npm run "cy:open:production"
   npm run "cy:run:production"
   ```

## Docker

To run tests against the local env build the Docker image first and then run the npm local scripts:

```bash
docker pull pocketaces2/fashionhub-demo-app 
docker run -p 4000:4000 pocketaces2/fashionhub-demo-app:latest
```
