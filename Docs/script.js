/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let level = 1;
let path;
let userName;

const getBotReply = (msg) => {
  if (msg === "what is your favourite fish?") {
    return "My Favourite fish is ME! ArtiFISHial Intellegence!";
  }

  if (msg === "can you reset?") {
    level = 1;
    userName = undefined;
    return "Hello human! What is your name?";
  }

  if (userName === undefined && level === 1) {
    userName = msg;
    level = 2;
    return `Hello ${userName}. Does your fish have any unusual colours, growths or damage?`;
  }

  if (level === 2) {
    if (msg === "yes") {
      path = 1;
      level = 3;
      return `Thanks for the answer ${userName}. Does the fish have spots of any colour or fuzzy areas?`;
    }
    if (msg === "no") {
      path = 2;
      level = 3;
      return `Thanks for the answer ${userName}. Are you able to test your aquarium water for ammonia?`;
    }
  }

  if (path === 1) {
    if (level === 3) {
      if (msg === "yes") {
        return "Please buy some Wunder-Tonic from your local fish store and follow the directions on the bottle to dose the tank.";
      }
      if (msg === "no") {
        return "First check that you don't have any sharp objects in the tank. Next please monitor your fish closely for bullying and find a new home for any violent fish.";
      }
    }
  }

  if (path === 2) {
    if (level === 3) {
      if (msg === "yes") {
        return "If your ammonia is above zero please perform a 60 percent water change on your aquarium and check that your filter is running.";
      }
      if (msg === "no") {
        return "If you don't have a test kit, please take a minimum 30ml sample of your aquarium water to your local fish store. They can test it for you and tell you the results!";
      }
    }
  }
  return "Please enter 'yes' or 'no' or ask one of the provided questions.";
};
export { getBotReply };
