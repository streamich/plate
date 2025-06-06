/** @jsx jsxt */

import { createEditor } from '@udecode/plate';
import { jsxt } from '@udecode/plate-test-utils';

import { onKeyDownSingleLine } from '../../onKeyDownSingleLine';

jsxt;

const input = createEditor(
  (
    <editor>
      <hp>
        test
        <cursor />
      </hp>
    </editor>
  ) as any
);

const event = new KeyboardEvent('keydown', { key: 'Enter' }) as any;

const output = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

it('should be', () => {
  onKeyDownSingleLine({ event } as any);
  expect(input.children).toEqual(output.children);
});
