const htmlparser2 = require("@jh/htmlparser");
const fs = require("fs");

const parser = new htmlparser2.Parser(
    {
        onopentag(name, attribs) {
            console.log(name, attribs)
        },
        ontext(text) {
            text &&  console.log("-->",  text);
        },
        onclosetag(tagname) {
           console.log(tagname)
        },
    },
    { decodeEntities: true }
);
parser.write(
    fs.readFileSync("./test.html")
);
parser.end();