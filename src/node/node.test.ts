import { test, expect } from "vitest";
import type { Node } from "./node";

test("should return a boolean", async () => {
  const blackboard = { value: true };
  const node: Node<typeof blackboard> = async (blackboard) => blackboard.value;

  expect(await node(blackboard)).toEqual(true);
});
