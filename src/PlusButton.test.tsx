// src/PlusButton.test.tsx
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import PlusButton from '../src/PlusButton';

describe('PlusButton', () => {
  const count = 10;
  it('通常のReduceButtonを描画できる', () => {
    const component = renderer.create(
      <PlusButton count={count} setCounter={() => {}} />,
    );
    expect(component).toMatchSnapshot();
  });
  it(`ボタン押下でカウントが${count}から${count + 1}になる`, () => {
    const onPressEvent = jest.fn();
    const {container} = render(
      <PlusButton count={count} setCounter={onPressEvent} />,
    );
    fireEvent.press(container.children[0]);
    expect(onPressEvent).toBeCalled();
    expect(onPressEvent.mock.calls[0][0]).toBe(count + 1);
  });
});
