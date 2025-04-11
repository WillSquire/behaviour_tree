import { test, expect } from "vitest";
import type { Node } from "./node";

test("should return blackboard", async () => {
  const blackboard = {};
  const node: Node<typeof blackboard> = async (blackboard) => blackboard;

  expect(await node({})).toStrictEqual(blackboard);
});
