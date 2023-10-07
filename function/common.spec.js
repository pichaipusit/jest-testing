const { countNegativeValue } = require("./common");

describe("common.js", () => {
  describe("countNegativeValue", () => {
    it("should return 1", () => {
      // arrange
      const mockArr = [1, -2, 2, 4];
      const expectedResult = 1;

      // act
      const result = countNegativeValue(mockArr);

      // assert
      expect(result).toBe(expectedResult);
    });

    it("should return 4", () => {
      // arrange
      const mockArr = [-1, -2, -2, -4];
      const expectedResult = 4;

      // act
      const result = countNegativeValue(mockArr);

      // assert
      expect(result).toBe(expectedResult);
    });

    it("should return 0", () => {
      // arrange
      const mockArr = [0, 9, 1];
      const expectedResult = 0;

      // act
      const result = countNegativeValue(mockArr);

      // assert
      expect(result).toBe(expectedResult);
    });
  });
});
