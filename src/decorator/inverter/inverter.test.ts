import { test, expect } from "vitest";
import type { Node } from "../../node/node";
import { inverter } from "./inverter";

test("should return false when node returns true", async () => {
  const blackboard = { value: true };
  const node: Node<typeof blackboard> = async (blackboard) => blackboard.value;
  const invertedNode = inverter(node);

  expect(await invertedNode(blackboard)).toEqual(false);
});
