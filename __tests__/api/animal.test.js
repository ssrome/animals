import { createMocks } from "node-mocks-http";
import handleAnimals from "../../pages/api/animals";

describe("/api", () => {
    it("returns a message with a random animal", async () => {
        const { req, res } = createMocks({
            method: "GET",
            
        });
        await handleAnimals(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                animal_type: expect.any(String),
                lifespan: expect.any(String),
                geo_range: expect.any(String),
                habitat: expect.any(String),
                diet: expect.any(String),
            }),
        );
    })
})