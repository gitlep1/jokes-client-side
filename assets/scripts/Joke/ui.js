'use strict'

const store = require("../../../../../project1/tic-tac-toe-client/assets/scripts/store")

const jokeCreateSuccess = (response) => {
  $('#createJokes').trigger('reset')
  $('#createJokesMessage').text('View your created joke in the "view your jokes section"')
  $('#viewJokesId').text('ID: ' + response.joke._id)
  $('#viewJokesJoke').text('Joke: ' + response.joke.joke)
  $('#viewJokesPunchline').text('Punchline: ' + response.joke.punchLine)
}

const jokeCreateFailure = () => {
  $('#createJokesMessage').text('You have failed to create a joke')
}

const jokeUpdateSuccess = () => {
  $('#updateJokes').trigger('reset')
  $('#updateJokesMessage').text('You have successfully updated this joke')
  $('#viewJokesId').text("If you're seeing this message it means you have to re-type the ID into 'show a joke' in Joke Customization")
  $('#viewJokesJoke').text('')
  $('#viewJokesPunchline').text('')
}

const jokeUpdateFailure = () => {
  $('#updateJokesMessage').text('You have failed to update this joke')
}

const jokeDeleteSuccess = () => {
  $('#deleteJokes').trigger('reset')
  $('#deleteJokesMessage').text('You have deleted this joke')
  $('#viewJokesId').text('this joke has been deleted')
  $('#viewJokesJoke').text('')
  $('#viewJokesPunchline').text('')
}

const jokeDeleteFailure = () => {
  $('#deleteJokesMessage').text('You have failed to delete this joke')
}

const jokeShowSuccess = (response) => {
  $('#showJokes').trigger('reset')
  $('#showJokesMessage').text('Joke is in view your jokes')
  $('#viewJokesId').text('ID: ' + response.joke._id)
  $('#viewJokesJoke').text('Joke: ' + response.joke.joke)
  $('#viewJokesPunchline').text('Punchline: ' + response.joke.punchLine)

  // fix later trying to append
  // let viewJokes = document.createElement("p");
  // let viewJ = document.createTextNode("================================")
  // viewJokes.appendChild(viewJ)
  // document.getElementById("#viewJokesForm").appendChild(viewJokes)

  viewJokesForm.innerHTML += '<form id="viewJokesForm"> <fieldset> <output type="text" name="joke[id]" placeholder="Your jokes id" id="viewJokesId"></output> <output type="text" name="joke[joke]" placeholder="Your joke" id="viewJokesJoke"></output> <output type="text" name="joke[punchLine]" placeholder="Your jokes Punchline" id="viewJokesPunchline"></output> <p id="seperators">================================</p> </fieldset> </form>'
}

const jokeShowFailure = () => {
  $('#showJokesMessage').text('You have failed to show this joke')
}

module.exports = {
  jokeCreateSuccess,
  jokeCreateFailure,
  jokeUpdateSuccess,
  jokeUpdateFailure,
  jokeDeleteSuccess,
  jokeDeleteFailure,
  jokeShowSuccess,
  jokeShowFailure
}