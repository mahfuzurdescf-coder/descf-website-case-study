// Names and scientific labels in this example are fictional.
export const sampleSpecies = Object.freeze([
  {
    bangla: 'নদীডোরা',
    english: 'River Stripe',
    scientific: 'Exemplaris fluvius',
    aliases: ['নদী ডোরা', 'নদি ডোরা', 'ডোরা', 'Nodi Dora', 'river striped'],
  },
  {
    bangla: 'বনডোরা',
    english: 'Forest Stripe',
    scientific: 'Exemplaris silvatica',
    aliases: ['বন ডোরা', 'ডোরা', 'Bon Dora', 'forest striped'],
  },
  {
    bangla: 'পাহাড়রেখা',
    english: 'Hill Line',
    scientific: 'Exemplaris montana',
    aliases: ['পাহাড় রেখা', 'পাহাড় রেখা', 'Pahar Rekha'],
  },
]);

export function normaliseName(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .replace(/[\s\-_.।,]+/gu, '')
    .trim();
}

export function searchByName(query, species = sampleSpecies) {
  const term = normaliseName(query);
  if (!term) return [...species];

  return species.filter(item =>
    [item.bangla, item.english, item.scientific, ...item.aliases]
      .some(name => normaliseName(name).includes(term))
  );
}