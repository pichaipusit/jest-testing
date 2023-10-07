import { getProductById } from "./product";

describe("product.js", () => {
  describe("getProductById", () => {
    let mockProduct1;
    beforeAll(() => {
      mockProduct1 = {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      };
    });

    it("should return data of 'iphone 9'", async () => {
      // arrange
      const mockId = 1;
      const expectedResult = mockProduct1;

      // act
      const result = await getProductById(mockId);

      // assert
      expect(result).toEqual(expectedResult);
    });
  });
});
