const { expect } = require("chai");

describe("SimpleStorage", function () {
    it("Should store and return the correct number", async function () {
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        const contract = await SimpleStorage.deploy();
        await contract.set(123);
        expect(await contract.get()).to.equal(123);
    });
});
