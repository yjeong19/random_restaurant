# random_restaurant
randomly selects restaurant using yelp api

## Things to do
* ~~Connect Yelp API~~
* Create db to post comments
  * Restaurant Schema
  * User Schema
* route to landing page based on restaurant ID
  * figure out what data to pass to landing package
  * post comments on page -- connect db to landing
* keep track of likes
* Need Auth
* ~~Incorporate Redux~~
* ~~Create Routes~~
* Create error handler


---------------------------------------------------
## STACK
* YELP API
* React - front end
* Redux - state management
* Node - back end


--------------------------------------------------
#### Errors I encountered
1. babel loader in react-scripts were missing
2. CORS issues
3. ![npm error message Package issues](./error_pics/npmError.png)
  * dev dependencies in client package.json was messed up.
4. axios promise function was returning undefined when moved to a helper function in /client/controlelr/yelp_api.js.
  * needed to return axios method in same line. 
