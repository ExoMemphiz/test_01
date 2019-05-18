## Run In docker
1. `docker build -t 01test .`
2. docker run --rm 01test
3. docker rmi 01test

## Run Manually
1. Ensure NodeJS and NPM are both installed
2. Run command: `npm i` in root directory
3. Then run `npm run test`  
(it will also generate a coverage report)
4. Navigate to the /coverage/lcov-report folder, and open index.html to view the coverage report.
