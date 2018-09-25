# README

Rails + React app to create user profiles and track sports that the users are interested
in and teams that they are on.

To run the app locally:
1. Clone this repo
2. Go into the directory and run `bundle install`
3. Initialize the database `rake db:migrate`
4. Seed the database `rake db:seed`
5. Go to the `client/` directory
6. Install semantic-ui `npm install semantic-ui-react --save`
7. Install semantic-ui-css `npm install semantic-ui-css --save`
8. Start the servers with `rake start`

Known issues:
* Unchecking a sport in the edit user modal will not remove the sport from the user's list
