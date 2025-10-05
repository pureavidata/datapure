// This is your TypeScript source code.
const appName: string = "DataPure TS";

function startApp(name: string): void {
  console.log(`Script for ${name} has loaded successfully!`);
  // Add a message to the page itself
  const header = document.querySelector('h1');
  if (header) {
    header.textContent += ` (Powered by ${name})`;
  }
}

startApp(appName);
