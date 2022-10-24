# Chatbot

## Problem statement

A Fish has died in your aquarium!
What should you do? What is the best next step?
This chatbot will guide you through the most common immediate steps you should take after a fish dies in your home aquarium and the best actions to prevent any further deaths!

## Inputs, processes and outputs

Intro text: "Hello human! What is your name?"

Input: userName
Processes: Remembers userName and relays that information with the next yes or no question.
Output: "Hello (userName). Does your fish have any unusual colours, growths or damage?"

Left Branch

Input: "yes"
Processes: Remembers userName and asks follow up yes or no question.
Output: "Thanks for the answer (name). Does the fish have spots of any colour or fuzzy areas?"

Input: "yes"
Processes: Follows left path to final answer.
Output: Please buy some Wunder-Tonic from your local fish store and follow the directions on the bottle to dose the tank.

Input: "no"
Processes: Follows right path to final answer.
Output: "First check that you don't have any sharp objects in the tank. Next please monitor your fish closely for bullying and find a new home for any violent fish."

Right Branch

Input: "no"
Processes: Remembers userName and asks follow up yes or no question.
Output: "Thanks for the answer (name). Are you able to test your aquarium water for ammonia?"

Input: "yes"
Processes: Follows left path to final answer.
Output: "If your ammonia is above zero please perform a 60 percent water change on your aquarium and check that your filter is running."

Input: "no"
Processes: Follows right path to final answer.
Output: "If you don't have a test kit, please take a minimum 30ml sample of your aquarium water to your local fish store.They can test it for you and tell you the results!"

Bonus Questions

Question 1 =
Input: "what is your favourite fish?"
Processes: Returns lame pun to the user :)
Output: "My Favourite fish is me! ArtiFISHial Intellegence!"

Question 2 =
Input: "can you reset?"
Processes: Returns user to the beginning of the chatbot.
Output: "Hello human! What is your name?"

Input: User Error
Processes: Keeps your place in the path but asks the user for a correct input.
Output: "Please enter 'yes' or 'no' or ask one of the provided questions."

## Test scenarios

## Name checking Scenario

Input: Christian
Output: "Hello (userName). Does your fish have any unusual colours, growths or damage?"

## Reset Question Test Scenario

Input: "can you reset?"
Output: "Hello human! What is your name?"

## Left Path Yes Test Scenario

Input: userName
Output: "Hello (userName). Does your fish have any unusual colours, growths or damage?"
Input: "yes"
Output: "Thanks for the answer (userName). Does the fish have spots of any colour or fuzzy areas?"
Input: "yes"
Output: "Please buy some Wunder-Tonic from your local fish store and follow the directions on the bottle to dose the tank."

## Right Path No Test Scenario

Input: userName
Output: "Hello (userName). Does your fish have any unusual colours, growths or damage?"
Input: "no"
Output: "Thanks for the answer (name). Are you able to test your aquarium water for ammonia?"
Input: "no"
Output: "If you don't have a test kit, please take a minimum 30ml sample of your aquarium water to your local fish store. They can test it for you and tell you the results!"

## Right Path Yes Test Scenario

Input: userName
Output: "Hello (userName). Does your fish have any unusual colours, growths or damage?"
Input: "no"
Output: "Thanks for the answer (name). Are you able to test your aquarium water for ammonia?"
Input: "Yes"
Output: "If your ammonia is above zero please perform a 60 percent water change on your aquarium and check that your filter is running."
