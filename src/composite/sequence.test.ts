import { test, expect } from "vitest";
import type { Node } from "../node/node";
import { sequence } from "./sequence";

test("should return true when all nodes return true", async () => {
  const blackboard = { value1: true, value2: true };
  const node1: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value1;
  const node2: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value2;
  const sequence1 = sequence([node1, node2]);

  expect(await sequence1(blackboard)).toEqual(true);
});

test("should return false when any node returns false", async () => {
  const blackboard = { value1: true, value2: false };
  const node1: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value1;
  const node2: Node<typeof blackboard> = async (blackboard) =>
    blackboard.value2;
  const sequence1 = sequence([node1, node2]);

  expect(await sequence1(blackboard)).toEqual(false);
});
