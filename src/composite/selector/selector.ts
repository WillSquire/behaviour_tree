import type { Node } from "../../node/node";

export const selector =
  <T>(nodes: Node<T>[]) =>
  async (blackboard: T) => {
    for await (const node of nodes) {
      if (await node(blackboard)) return true;
    }

    return false;
  };
