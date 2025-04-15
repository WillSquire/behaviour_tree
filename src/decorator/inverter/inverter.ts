import type { Node } from "../../node/node";

/**
 * Reverses the result of its child (success becomes failure, and vice versa).
 */
export const inverter =
  <T>(node: Node<T>) =>
  async (blackboard: T) =>
    !(await node(blackboard));
