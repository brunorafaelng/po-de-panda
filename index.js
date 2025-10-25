// index.js
import { execSync } from "child_process";

console.log("Olá do Node.js! ⚡ Iniciando o script Python...");

try {
  // O comando mágico: executa 'python main.py'
  const pythonOutput = execSync("python main.py", { encoding: "utf-8" });

  console.log("\n--- Saída do Python ---");
  console.log(pythonOutput.trim()); // .trim() remove espaços extras
  console.log("--- Fim da Saída ---");

  console.log("\nProcesso híbrido concluído com sucesso! ✅");
} catch (error) {
  console.error("❌ Falha ao executar o script Python:", error.message);
}
