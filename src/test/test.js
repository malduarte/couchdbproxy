var chai = require("chai");
var chaiHttp = require("chai-http");

var server = require("../main/couchdbproxy");
var http = require('http');



chai.use(chaiHttp);

var expect = chai.expect;


describe("Proxy should", () => {
  it("an unconfigured server should passtrough a request", (done) => {
    http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
      res.end();
    }).listen(9000);



     chai.request('http://localhost:8000')
         .get('/somePath')
         .end( (err, res) => {
           expect(err).to.be.null;
           expect(res).to.have.status(200);
            done();
          });
  })
});
