import {expect} from 'chai'; //assertion library
import jsdom from 'jsdom';
import fs from 'fs'


describe("Our first test", () => {
  it("It should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say h1 that says Users", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Users");
      done(); //need to call done for asychronous test...involves callback - i.e. (err, window) => ...
      window.close();// free up memory from creating in-memory DOM
    });
  });
});
