const sum = require("./sum.js");

describe("Sum Tests", () => {
	it("should return 6 when a and b are 3", () => {
		expect(sum(3, 3)).toBe(6);
	})
})
