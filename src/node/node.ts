export type Node<T> = (blackboard: T) => Promise<boolean>;
