import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import ReduceButton from '../src/ReduceButton';

describe('ReduceButton', () => {
  describe('countが0より大きい時', () => {
    const count = 10;
    it('通常のReduceButtonを描画できる', () => {
      const component = renderer.create(
        <ReduceButton count={count} setCounter={() => {}} />,
      );
      expect(component).toMatchSnapshot();
    });
    it(`ボタン押下でカウントが${count}から${count - 1}になる`, () => {
      const onPressEvent = jest.fn();
      const {container} = render(
        <ReduceButton count={count} setCounter={onPressEvent} />,
      );
      fireEvent.(container.children[0]);
      expect(onPressEvent).toBeCalled();
      expect(onPressEvent.mock.calls[0][0]).toBe(count - 1);
    });
  });
  describe('countが0の時', () => {
    const count = 0;
    it('グレーアウトされたReduceButtonを描画できる', () => {
      const component = renderer.create(
        <ReduceButton count={count} setCounter={() => {}} />,
      );
      expect(component).toMatchSnapshot();
    });
    it('ボタン押下できない', () => {
      const onPressEvent = jest.fn();
      const {container} = render(
        <ReduceButton count={count} setCounter={onPressEvent} />,
      );
      fireEvent.press(container.children[0]);
      expect(onPressEvent).not.toBeCalled();
    });
  });
});
