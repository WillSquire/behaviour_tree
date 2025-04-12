import type { Node } from "../../node/node";

export const inverter =
  <T>(node: Node<T>) =>
  async (blackboard: T) =>
    !(await node(blackboard));
