///<reference path="../../src/interfaces/interfaces.d.ts" />

import { expect } from "chai";
import Metadata from "../../src/activation/metadata";

describe("Metadata", () => {

  it("Should set its own properties correctly", () => {
    let m =  new Metadata("power", 5);
    expect(m.key).to.equals("power");
    expect(m.value).to.equals(5);
  });

});
