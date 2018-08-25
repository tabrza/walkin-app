# Description
Code test for WalkIn to create list of people with wait times linked to Firebase.

### Installation
```
npm install
```

### Run
```
yarn run dev-server
```

### Testing
```
npm test
(prop type warnings are expected in log)
```

*_______________________________________________________________________________________________________________________*

# WalkIn Code Test

### Setup
- If you haven’t already, you will need to install yarn to run the packages
Firebase
- Create a Firebase project on https://firebase.google.com/ using the naming convention:
[name]-test
- You will use FireStore as the database
Github
- Download repo from https://github.com/archiekd/react-boilerplate
- Authentication is already set up so all you need to do is login with your google account to get
be able to start building
- Make a repo on your own GitHub and add me to it (archiekd@gmail.com)
- In that repo to make the code work you need to add a .env.development file which will look
like the file below, with your firebase credentials from the project you have already created.
- Once you have filled in the .env.development variables you can run yarn run dev-server to
start the localhost sever.

### Designs
- The link below shows the designs that specify the desired outcome.
- https://www.figma.com/file/UaZGCDmor6SSf0EE8RuD4zDz/Untitled?node-id=2%3A2

### Tasks
- Create a form, as shown in the designs, that asks for the name and wait time
- When the form is saved it should update your FireStore database with the form data and
anything else that you want to save to the database at the same time.
- Each form entry will create an item in the list shown in the design. Once you have added an
item it should appear in the list. This list should be retrieved from the FireStore database.
- The bar In the designs should dynamically show how much of their wait time they have
completed. (I.e. If the wait time is 30 minutes and it has been 10 minutes since they were
added then it should show 1/3 of the bar full)

### Rules
- You can use any 3rd Party components that you want to complete the designs and build the
form. However make sure you can justify why it was necessary to use that 3rd Party
component.
- There is no specification on how you handle the data or the structure, except saving it to
Firestore (If you know redux, then this is a great time to show me how you handle data in
redux)
