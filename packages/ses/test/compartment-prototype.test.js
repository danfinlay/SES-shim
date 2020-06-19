import tap from 'tap';
import { Compartment } from '../src/compartment-shim.js';

const { test } = tap;

test('Compartment prototype', t => {
  t.plan(2);

  t.equals(
    Compartment.prototype.constructor,
    Compartment,
    'The initial value of Compartment.prototype.constructor',
  );

  t.deepEqual(
    Reflect.ownKeys(Compartment.prototype).sort(),
    [
      'constructor',
      'evaluate',
      'import',
      'importNow',
      'load',
      'module',
      'globalThis',
      'toString',
    ].sort(),
    'prototype properties',
  );
});
