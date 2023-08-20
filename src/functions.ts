export function generateTodos() {
  return [
    "Hello Vue Options API and TS",
    "Learn the basics of Vue",
    "Learn the basics of Typescript",
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

export function formattedText(text: string) {
  return text.length > 25 ? `${text.slice(0, 25)}...` : text;
}
