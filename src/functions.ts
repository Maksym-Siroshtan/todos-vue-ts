export function generateTodos() {
  return [
    "Learn the basics of Vue",
    "Learn the basics of Typescript",
    "Hello Vue Options API",
  ].map((todoText) => ({
    id: generateId(),
    text: todoText,
    completed: false,
  }));
}

export function generateId() {
  return (
    new Date().getHours().toString(36) + Math.random().toString(36).substring(2)
  );
}
