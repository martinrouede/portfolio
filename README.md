# Portfolio

Portfolio is an app that shows your own personal projects and your social networks to contact him.

It's made in [React.js](https://reactjs.org/).

## Installation

Clone the repository

Via HTTPS `git clone https://github.com/martinrouede/portfolio.git`

Or via SSH `git clone git@github.com:martinrouede/portfolio.git`.

Go to the root of repo and execute `npm install` for install all dependencies and libraries.

## Configure

This app is configure with my data, but you can easily modify it editing metadata.

* Change icon: In *public/favicon.ico* you can see the icon of the app.

* Change title: In *public/index.html* you can modify`<title>my title</title>`.

  And in *public/manifest.json* you can modify the name of the app.

* Edit name: In *src/properties.js* you can modify the **myName** attribute that changes the title in the app bar.

* Edit contacts: In *src/properties.js* you can modify the **contacts** attribute.

  * The **name** attr is the name of the social network.

    This is important to define correctly because this name is used to import the brand's icon.
  
    The source of the icons is [Font Awesome](https://fontawesome.com/).
  
  * The **user** attr is your username/ID (depends social network) what you have in this.

  * The **url** attr is URL that the social network has to display the user's profile.

* Edit projects: In *src/properties.js* you can modify the **projects** attribute.

  * The **name** attr is the title that you see.

  * The **url** attr is the URL to redirect when you click on it.

  * The **icon** attr is the name of the file with the icon you want to show for this project.
    Remember that the icon must be in *src/logos/*.

## Usage

Go to the root of repo and execute `npm start` for run the app.

This automatically open a tab in your browser with the app running.

In case this not happend  open [http://localhost:3000](http://localhost:3000) to view it in the browser.
