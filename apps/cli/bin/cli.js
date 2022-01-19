#!/usr/bin/env node

const open = require('open');
<<<<<<< HEAD
const { showHelp, showVersion, showErrorMessage } = require('../index');
=======
const { showHelp, showVersion, showErrorMsg } = require('../index');
>>>>>>> origin

async function main() {
  const message = process.argv[2];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const validOptions = ['-v', '--version', '-h', ' --help'];

  if (message.charAt(0) === '-' && !validOptions.includes(message)) {
    return showErrorMessage(message);
  }

  switch (message.toLowerCase()) {
    case '-v':
    case '--version':
      showVersion();
      break;

    case '-h':
    case '--help':
      showHelp();
      break;

    default:
      await open(
        `https://twitter.com/intent/tweet?text=${message}%0Acc%20%40sseraphini`,
      );
      break;
=======
=======
  const validOptions = ['-v', '--version', '-h', ' --help'];
  const options = {
    help: ['-h', '--help', undefined],
    version: ['-v', '--version'],
  }

>>>>>>> 0b21f2f (refactor: updating general code parts to improve consistency)
  if (
    options.help.includes(message?.toLowerCase())
  ) {
    showHelp();
  } else if (
    options.version.includes(message?.toLowerCase())
  ) {
    showVersion();
  } else if (message.charAt(0) === '-' && !validOptions.includes(message)) {
    showErrorMessage(message);
=======
  if (message === undefined || message === '-h' || message === '--help') {
    showHelp();
  } else if (message === '-v' || message === '--version') {
    showVersion();
  } else if (
    (message.charAt(0) === '-' && message !== '-h') ||
    (message.charAt(0) === '-' && message !== '--help') ||
    (message.charAt(0) === '-' && message !== '-v') ||
    (message.charAt(0) === '-' && message !== '--version')
  ) {
    showErrorMsg(message);
>>>>>>> origin
  } else {
    return await open(
      `https://twitter.com/intent/tweet?text=${message}%0Acc%20%40sseraphini`,
    );
<<<<<<< HEAD
>>>>>>> 84b0960 (refactor: suggestions for improvements to the cli code done)
  }
}

main();
=======
  }
}

main();
>>>>>>> origin
