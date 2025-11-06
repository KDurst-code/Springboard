// ----------------------------------------------
// Caesar Cipher Part 2 - Optional Twist (Alternate Shift)
// ----------------------------------------------

// Alphabet reference
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ----------------------------------------------
// Helper Function: Encrypt a single letter
// ----------------------------------------------
function encryptLetter(letter, shift) {
  const lower = letter.toLowerCase();

  if (!alphabet.includes(lower)) return letter; // Leave non-letters as is

  const newIndex = (alphabet.indexOf(lower) + shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

// ----------------------------------------------
// Helper Function: Decrypt a single letter
// ----------------------------------------------
function decryptLetter(letter, shift) {
  const lower = letter.toLowerCase();

  if (!alphabet.includes(lower)) return letter; // Leave non-letters as is

  const newIndex = (alphabet.indexOf(lower) - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

// ----------------------------------------------
// Function: Encrypt entire message with random letters AND alternate shift
// ----------------------------------------------
function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let counter = 0; // Track letters for random insertion
  let forward = true; // Track shift direction

  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    if (!alphabet.includes(char.toLowerCase())) {
      encryptedMessage += char;
      continue;
    }

    // Alternate shift direction every letter
    const actualShift = forward ? shiftValue : -shiftValue;
    const encryptedChar = encryptLetter(char, actualShift);
    encryptedMessage += encryptedChar;

    counter++;
    forward = !forward; // Switch direction for next letter

    // After 2 letters, insert a random letter
    if (counter === 2) {
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      encryptedMessage += randomLetter;
      counter = 0; // Reset counter
    }
  }

  return encryptedMessage;
}

// ----------------------------------------------
// Function: Decrypt message with random letters AND alternate shift
// ----------------------------------------------
function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  let counter = 0;
  let forward = true;

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char = encryptedMessage[i];

    if (!alphabet.includes(char.toLowerCase())) {
      decryptedMessage += char;
      continue;
    }

    const actualShift = forward ? shiftValue : -shiftValue;
    const decryptedChar = decryptLetter(char, actualShift);
    decryptedMessage += decryptedChar;

    counter++;
    forward = !forward; // Switch direction for next letter

    // After 2 letters, skip the random letter
    if (counter === 2) {
      i++; // Skip random letter
      counter = 0;
    }
  }

  return decryptedMessage;
}

// ----------------------------------------------
// Test the functions
// ----------------------------------------------
const secretMessage = "GARDEN";
const shift = 42;

const encrypted = encrypt(secretMessage, shift);
console.log("Encrypted Message:", encrypted);

const decrypted = decrypt(encrypted, shift);
console.log("Decrypted Message:", decrypted); // Should output "GARDEN"

// ----------------------------------------------
// Decrypt the provided secret message with optional twist
// ----------------------------------------------
const interceptedMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij.";
const decryptedSecret = decrypt(interceptedMessage, shift);
console.log("Decrypted Secret Message:", decryptedSecret);

// ----------------------------------------------
// Notes / Comments
// ----------------------------------------------
/*
1. Added alternating shift: first letter forward, second letter backward.
2. Random letters are inserted after every two original letters.
3. Decrypt function mirrors the same pattern to retrieve original message.
4. Non-alphabetic characters are left unchanged.
5. Modulus ensures alphabet wraps correctly.
6. Shift value can be any number, larger than alphabet length.
*/
// ----------------------------------------------