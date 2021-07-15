# README
## MyJST

## Goal
- Create an all-in-one job search tracker and TODO list application

## Features
- User accounts with auth
- Job search tracker
  - Applied to, to apply, in communication with
- Status is color coded
- ToDo list

## TODO
- [ ] Setup application - react, graphQL
- [ ] Build db
- [ ] Build out basic backend (routes, set up react, set up graphql)
- [ ] Build out basic frontend
- [ ] Get data from DB on frontend
- [ ] Make frontned better - responsive css
- [ ] Add extra items like auth

## DB Structure
User -< Jobs
User -< Tasks (ToDo items)
User:
- First name
- Last name
- email
- username
- password

Job:
- Company
- Position Title
- Status (to apply, applied to, in communication with, deadend)
- Contact
- userID

Task:
- Title
- Additional details (can be blank)
- userID

## Stretch Goals
- Mobile app/PWA

