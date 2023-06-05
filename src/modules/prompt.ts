import readline from "readline";

async function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
