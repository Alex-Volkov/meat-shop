#MEAT shop project

I assumed that this task did not require pixel perfect conversion

###Twitter api notes
For some reason there are not many tweets around my location with a keyword "meat is healthy".
API accepts Geo location parameters, but it is commented out in the `tweet.js` module to return greater amount of tweets

### Geolocation notes
Due to the restrictions of Geolocation api it will not work on insecure (http) instances. In the live example it will fallback to default coordinates (Barcelona centre). Though it works properly on `localhost`

 
Click on the `text` of a twitter message will lead to the original tweet


The app was developed with Node.js of version 7, latest LTS (6.x) will also work well

### Install notes 

To run this project you need to do `npm install` and `npm run`. It will run a server at `http://localhost:8080` 

Live example available here [http://meat.sparrow.cf/]

