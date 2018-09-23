# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(name: 'Bryan Kerrigan',
                   email: 'bryankerrigan@gmail.com',
                   height: 71,
                   weight: 165)
football = Sport.create(name: 'football', icon: 'http://www.iconarchive.com/download/i65352/icons-land/metro-raster-sport/American-Football-Ball.ico')
user.sports.create(name: 'golf', icon: 'https://static.thenounproject.com/png/420-200.png')
user.sports.create(name: 'bowling', icon: 'https://static.thenounproject.com/png/34416-200.png')
basketball = Sport.create(name: 'basketball', icon: 'https://cdn3.iconfinder.com/data/icons/basketball-icons/497/Backboard_With_Basketball-512.png')
baseball = Sport.create(name: 'baseball', icon: 'https://static.thenounproject.com/png/43133-200.png')
Sport.create(name: 'hockey', icon: 'https://static.thenounproject.com/png/43160-200.png')

football.teams.create(name: 'Packers')
football.teams.create(name: 'Vikings')
football.teams.create(name: 'Bears')
football.teams.create(name: 'Lions')

user.user_teams.create(team_id: Team.where(name: 'Packers').first.id)

baseball.teams.create(name: 'Brewers')
baseball.teams.create(name: 'Cubs')
baseball.teams.create(name: 'Giants')
baseball.teams.create(name: 'Dodgers')

basketball.teams.create(name: 'Golden State Warriors')
basketball.teams.create(name: 'Celtics')
basketball.teams.create(name: 'Kings')
basketball.teams.create(name: 'Bulls')
