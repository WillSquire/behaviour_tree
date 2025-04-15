import type { Node } from "../../node/node";

/**
 * Runs all children in parallel. Fails if any child fails.
 */
export const parallel =
  <T>(nodes: Node<T>[]) =>
  async (blackboard: T) =>
    (await Promise.all(nodes.map((node) => node(blackboard)))).every(
      (result) => result === true,
    );
