import {stat} from "fs/promises";

const stats = await stat ("readme.md");

console.log("is file:", stats.isFile());
console.log("is directory:", stats.isDirectory());
console.log("size(bytes):",DataTransfer.size);
console.log("last modified:", DataTransfer.mtime);