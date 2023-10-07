import { countNegativeValue, clearUpChaosToWord } from "./common";

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
  describe("clearUpChaosToWord", () => {
    it("should return 'Javascript'", () => {
      // arrange
      const mock1stWord = "java";
      const mock2ndWord = "tpi%rcs";
      const expectedResult = "Javascript";

      // act
      const result = clearUpChaosToWord(mock1stWord, mock2ndWord);

      // assert
      expect(result).toBe(expectedResult);
    });

    it("should return 'Countryside'", () => {
      // arrange
      const mock1stWord = "c%ountry";
      const mock2ndWord = "edis";
      const expectedResult = "Countryside";

      // act
      const result = clearUpChaosToWord(mock1stWord, mock2ndWord);

      // assert
      expect(result).toBe(expectedResult);
    });
  });
});
