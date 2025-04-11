import { test, expect } from "vitest";
import type { Node } from "../../node/node";
import { selector } from "./selector";

test("should return true when any node returns true", async () => {
  const blackboard = { value1: false, value2: true };
  const node1: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value1;
  const node2: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value2;
  const selector1 = selector([node1, node2]);

  expect(await selector1(blackboard)).toEqual(true);
});

test("should return false when all nodes return false", async () => {
  const blackboard = { value1: false, value2: false };
  const node1: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value1;
  const node2: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value2;
  const selector1 = selector([node1, node2]);

  expect(await selector1(blackboard)).toEqual(false);
});
