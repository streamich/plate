import { useEditorRef, useEditorSelector } from '@udecode/plate/react';

import { BaseBulletedListPlugin } from '../../lib/index';
import { ListPlugin } from '../ListPlugin';

export const useListToolbarButtonState = ({
  nodeType = BaseBulletedListPlugin.key as string,
} = {}) => {
  const pressed = useEditorSelector(
    (editor) =>
      !!editor.selection &&
      editor.api.some({ match: { type: editor.getType({ key: nodeType }) } }),
    [nodeType]
  );

  return {
    nodeType,
    pressed,
  };
};

export const useListToolbarButton = (
  state: ReturnType<typeof useListToolbarButtonState>
) => {
  const editor = useEditorRef();
  const tf = editor.getTransforms(ListPlugin);

  return {
    props: {
      pressed: state.pressed,
      onClick: () => {
        tf.toggle.list({ type: state.nodeType });
      },
      onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      },
    },
  };
};
