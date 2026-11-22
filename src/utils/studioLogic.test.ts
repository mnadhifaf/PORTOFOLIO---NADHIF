import test from 'node:test';
import assert from 'node:assert/strict';
import { EXPERIENCE_ITEMS, STACK_LAYERS } from '../data/portfolioData';
import {
  filterExperiences,
  filterLayers,
  getNeuroTelemetryState,
  toggleLayerVisibility,
  validateCollabInquiry,
} from './studioLogic';

test('filterLayers returns all layers when query is empty and filters by label or badge', () => {
  assert.equal(filterLayers(STACK_LAYERS, '').length, 5);
  const vfxMatches = filterLayers(STACK_LAYERS, 'vfx');
  assert.equal(vfxMatches.length, 1);
  assert.equal(vfxMatches[0].id, 'vfx');

  const cppMatches = filterLayers(STACK_LAYERS, 'c++');
  assert.equal(cppMatches.length, 1);
  assert.equal(cppMatches[0].id, 'cp');
});

test('toggleLayerVisibility adds and removes layer ids cleanly', () => {
  const hidden1 = toggleLayerVisibility([], 'vfx');
  assert.deepEqual(hidden1, ['vfx']);

  const hidden2 = toggleLayerVisibility(hidden1, 'ai');
  assert.deepEqual(hidden2, ['vfx', 'ai']);

  const hidden3 = toggleLayerVisibility(hidden2, 'vfx');
  assert.deepEqual(hidden3, ['ai']);
});

test('getNeuroTelemetryState returns distinct frequency profiles for meditation, focus, and stress', () => {
  const meditation = getNeuroTelemetryState('meditation');
  const focus = getNeuroTelemetryState('focus');
  const stress = getNeuroTelemetryState('stress');

  assert.equal(meditation.frequencyHz, 40);
  assert.equal(focus.frequencyHz, 22);
  assert.equal(stress.frequencyHz, 11);
  assert.equal(meditation.bars.length, 14);
});

test('filterExperiences filters by category accurately', () => {
  assert.equal(filterExperiences(EXPERIENCE_ITEMS, 'all').length, 5);
  assert.equal(filterExperiences(EXPERIENCE_ITEMS, 'leadership').length, 3);
  assert.equal(filterExperiences(EXPERIENCE_ITEMS, 'events').length, 1);
  assert.equal(filterExperiences(EXPERIENCE_ITEMS, 'tech').length, 1);
});

test('validateCollabInquiry catches missing fields and accepts valid input', () => {
  const invalid = validateCollabInquiry({
    name: 'A',
    email: 'not-an-email',
    topic: '',
    message: 'hi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.topic);
  assert.ok(invalid.errors.message);

  const valid = validateCollabInquiry({
    name: 'Rafi Pratama',
    email: 'rafi@example.com',
    topic: 'Web & AI Systems',
    message: 'Let us collaborate on an interactive web visualization project.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});
