export function nameFormat(name) {
  let parts = name.toLowerCase().split(" ");
  if (parts.length > 10) {
    parts = parts.slice(0, 10);
    parts[9] = parts[9].concat("  ...");
  }
  parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  return parts.join(" ");
}
