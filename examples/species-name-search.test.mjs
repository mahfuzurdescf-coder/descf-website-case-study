import assert from 'node:assert/strict';
import test from 'node:test';
import { searchByName } from './species-name-search.mjs';

test('Bangla names match with or without a space', () => {
  assert.equal(searchByName('নদী ডোরা').length, 1);
  assert.equal(searchByName('নদীডোরা').length, 1);
});

test('romanised, English and scientific names are searchable', () => {
  assert.equal(searchByName('Nodi-Dora')[0].scientific, 'Exemplaris fluvius');
  assert.equal(searchByName('RIVER STRIPE').length, 1);
  assert.equal(searchByName('Exemplaris montana').length, 1);
});

test('shared aliases return all matching records', () => {
  assert.equal(searchByName('ডোরা').length, 2);
});

test('unknown names do not produce a false match', () => {
  assert.deepEqual(searchByName('অজানা'), []);
});