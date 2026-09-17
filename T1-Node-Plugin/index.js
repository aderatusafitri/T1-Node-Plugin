import chalk from 'chalk';
import cowsay from "cowsay";
import figlet from "figlet";

console.log(chalk.bgYellow.black('ADE RATU SAFITRI'));
console.log(chalk.bold.cyan('F1D02410033\n'));

console.log(cowsay.say({ text: "Hari ini harus lebih baik dari kemarin!\n" }));

figlet("RATUSAV", function (err, data) {
    if (err) {
        console.log("Gagal memuat ASCII art.");
        return;
    }
    console.log(chalk.green(data));
});