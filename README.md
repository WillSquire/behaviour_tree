# Behaviour tree

A lightweight, type-safe behaviour tree library for TypeScript. Perfect for building AI and decision-making systems with a fine level of human control.

---

## 🚀 Quick Start

Install the package using npm:

```bash
npm install behaviour_tree
```

Then create your first behaviour tree:

```ts
import { selector, sequence } from "behaviour_tree";

// state
interface Blackboard {
  energy: number;
  food: string[];
}

// nodes
const isHungry = async (blackboard: Blackboard) => blackboard.energy < 50;
const hasFood = async (blackboard: Blackboard) => blackboard.food.length > 0;
const eat = async (blackboard: Blackboard) => {
  blackboard.food = [];
  blackboard.energy = 100;

  return true;
};

export const tree = selector([
  sequence([isHungry, hasFood, eat]),
  // Add more sequences or nodes here
]);

// Run the tree
await tree({
  energy: 25,
  food: ["chicken", "rice"],
});
```

---

## 🧠 Core Concepts

- **Node**:
  - `Condition`: Checks a state or condition.
  - `Action`: Performs a defined task or behaviour.
- **Composite Nodes**:
  - `Sequence`: Runs children in order. Fails if any child fails.
  - `Selector`: Runs children in order. Succeeds if any child succeeds.
- **Decorator Nodes**:
  - `Inverter`: Reverses the result of its child (success becomes failure, and vice versa).

---

## 🔧 Features

- 🕒 **Async/Await Support** – Works seamlessly with asynchronous logic.
- ✅ **TypeScript Typing** – Fully typed for safer and more predictable code.
- 🧩 **Flexible Structure** – Easily mix and match nodes or write your own.
- ⚙️ **Custom Nodes** – Build your own decorators, composites, and leaves.

---

## 📦 Installation

Using npm:

```bash
npm install behaviour_tree
```

Using yarn:

```bash
yarn add behaviour_tree
```

Using pnpm:

```bash
pnpm install behaviour_tree
```

---

## 🛠️ Example Usage

```ts
import { inverter, Node, selector, sequence } from "behaviour_tree";

// state
interface Blackboard {
  energy: number;
  food: string[];
}

// condition
const isHungry: Node<Blackboard> = async (blackboard) => blackboard.energy < 50;

// action
const eat: Node<Blackboard> = async (blackboard) => {
  blackboard.food = [];
  blackboard.energy = 100;

  return true;
};

// sequence
const getEnergy = sequence([isHungry, eat]);

// selector
const routine = selector([
  getEnergy,
  sequence([
    // inverter
    inverter(isHungry),
    async (blackboard: Blackboard) => {
      blackboard.food = [...blackboard.food, "bananas"];

      return true;
    },
  ]),
]);

// Run the tree
await routine({
  energy: 25,
  food: ["chicken", "rice"],
});
```

---

## 📄 License

MIT License – free to use, modify, and distribute.

---

## 🔗 Get Involved

Visit the [GitHub Repository](https://github.com/WillSquire/behaviour_tree) to report issues, contribute, or join discussions.

Ported from [Behaviour-Tree-Dart-](https://github.com/WillSquire/Behaviour-Tree-Dart-).
