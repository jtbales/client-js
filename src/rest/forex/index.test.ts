import * as sinon from "sinon";
import * as chai from "chai";
import * as request from "../transport/request";
import { forexAggregates, forexGroupedDaily, forexPreviousClose } from ".";

describe("[REST] Forex / Currencies", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get");
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("forexPreviousClose call /v2/aggs/ticker/{ticker}/prev", async () => {
    await forexPreviousClose("EURCHF");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/EURCHF/prev");
  });

  it("forexAggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    await forexAggregates("EURCHF", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/EURCHF/range/1/day/2019-01-01/2019-02-01"
      );
  });

  it("forexGroupedDaily call /v2/aggs/grouped/locale/{locale}/market/{market}/{date}", async () => {
    await forexGroupedDaily("US", "FX", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/aggs/grouped/locale/US/market/FX/2019-02-01");
  });
});