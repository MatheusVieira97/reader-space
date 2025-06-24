export function generateSlug(title: string): string {
  return title
    .toLowerCase() // Convert the string to lowercase
    .normalize('NFD') // Normalize the string to remove accents
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim() // Remove leading/trailing spaces
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export function generateSlugWithId(title: string, id: number): string {
  const slug = generateSlug(title);
  return `${slug}-${id}`;
}
