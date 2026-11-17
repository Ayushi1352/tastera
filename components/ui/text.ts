/** Fills "{key}" placeholders from templates.json labels, e.g. fill("{stars} out of 5 stars", { stars: 5 }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
