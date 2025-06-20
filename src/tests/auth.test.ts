import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";

describe("getAPIKey", () => {
  test("APIKey does not exist", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});
