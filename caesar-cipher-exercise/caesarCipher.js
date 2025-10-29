// ----------------------------------------------
// Caesar Cipher Exercise
// ----------------------------------------------

// Given starter code
const friend = "BRUTUS";
const shiftValue = 3;

// ------------------------------------------------
// Step 1 🧩
// Store the alphabet in lowercase.
// ------------------------------------------------
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ------------------------------------------------
// Step 2 🧩
// Find the index of the first letter of Caesar's friend.
// ------------------------------------------------
const firstLetter = friend[0]; // Get the first character from "BRUTUS"
const index = alphabet.indexOf(firstLetter.toLowerCase()); // Convert to lowercase, find index

// Question 1 🤔
// Why is the result 1 instead of 2?
// Answer: JavaScript uses zero-based indexing, meaning the first character has index 0.

// ------------------------------------------------
// Step 3 🧩
// Shift the first letter by the given shift value (NO wrap yet).
// ------------------------------------------------
const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex]; // Might break if > 25 (beyond alphabet)

// ------------------------------------------------
// Question 2 🤔
// Which operator wraps around the alphabet?
// Answer: The modulus operator (%).

// ------------------------------------------------
// Step 4 🧩
// Determine the length of the alphabet.
// ------------------------------------------------
const alphabetLength = alphabet.length; // Gets total number of characters (26)

// ------------------------------------------------
// Step 5 🧩
// Shift with wrap-around using modulus operator.
// ------------------------------------------------
const wrappedIndex = (index + shiftValue) % alphabetLength;
const encryptedShiftedLetter = alphabet[wrappedIndex]; // Correct encrypted letter with wrap support

// ------------------------------------------------
// Step 6 🧩
// Extract first 3 characters using slice (teaser).
// ------------------------------------------------
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3); // Returns "EUX"

// Logging the important values so you can see output:
console.log("Original friend:", friend);
console.log("First letter:", firstLetter);
console.log("Index of first letter:", index);
console.log("Encrypted first letter (no wrap):", encryptedFirstLetter);
console.log("Encrypted first letter (with wrap):", encryptedShiftedLetter);
console.log("Teaser message:", teaserMessage);
// ----------------------------------------------
// Final Step: Encrypt the WHOLE message
// ----------------------------------------------

function caesarCipher(message, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let encrypted = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i].toLowerCase();

    if (!alphabet.includes(char)) {
      // If it's not a letter (like space or punctuation), just add it unchanged
      encrypted += char;
      continue;
    }

    let index = alphabet.indexOf(char);
    let newIndex = (index + shift) % alphabet.length;
    encrypted += alphabet[newIndex];
  }

  return encrypted.toUpperCase(); // Match the "BRUTUS" style
}

// Test it
console.log(caesarCipher(friend, shiftValue)); // Should output: "EUXWXV"
