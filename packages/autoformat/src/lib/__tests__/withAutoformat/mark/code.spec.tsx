/** @jsx jsxt */

import { createSlateEditor } from '@udecode/plate';
import { jsxt } from '@udecode/plate-test-utils';
import { autoformatPlugin } from 'www/src/registry/components/editor/plugins/autoformat-plugin';

jsxt;

const input = (
  <fragment>
    <hp>
      `hello
      <cursor />
    </hp>
  </fragment>
) as any;

const output = (
  <fragment>
    <hp>
      <htext code>hello</htext>
    </hp>
  </fragment>
) as any;

it('should autoformat', () => {
  const editor = createSlateEditor({
    plugins: [autoformatPlugin],
    value: input,
  });

  editor.tf.insertText('`');

  expect(input.children).toEqual(output.children);
});
