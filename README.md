# GitHub API Gist Browser

The objective of this project is to:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Interact with GitHub's API in order to search for a user's gists  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Search for a user's gists  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-See the filetypes available in that gist  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-See the contents of a user's gist
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-See the last users that forked that gist  

## How the app works

The application is designed in an extremely simple way.  
The user enters a GitHub username in the input field then clicks on the Submit button.  
After doing so, up to 30 of the username's gists are being shown.  
If the user wants to see more gists, he can click on "Load more" to do so
If the user wants to see contents of a gist he can click on a gist to see all the files in that gist and their content

![Screenshot of the app](./public/screenshot.jpg?raw=true "Generic screenshot")

### Possible improvements

1. Adding colorful badges/tags
2. Adding better delimitation between file contents
3. Formatting the text in accordance to the language used
4. A more aesthetically pleasing interface
5. Creating a 'home page' so that the user can see some gists before entering a username

#### Notes

A .env file with an environment variable named REACT_APP_GITGISTKEY  
declared was used in order to increase the number of calls that can be made per hour on Githb's API  
