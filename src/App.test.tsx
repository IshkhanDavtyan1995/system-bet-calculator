import React, { SetStateAction, Dispatch, ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { getWinningSum, setCombinations } from './utils';
import { allWinsCombinationMock, mockOdds, noWinsCombinationMock, partialWinsCombinationMock } from './mock';
import { IOddItem, IOddsData } from './interface';
import { handleChangeOddValue, handleTotalStakeChange } from './components/odds/utils';

describe('checking function which generates combinations', () => {
  it('for 3 odds and 2 length combinations', () => {
    expect(setCombinations(3, 2).length).toBe(3);
  });
  it('for 5 odds and 2 length combinations', () => {
    expect(setCombinations(5, 2).length).toBe(10);
  });
  it('for 4 odds and 3 length combinations', () => {
    expect(setCombinations(4, 3).length).toBe(4);
  });
});

describe('checking function which calculating win where total stake is equal to 100', () => {
  it('for 4 odds and 3 length combinations in all win case', () => {
    expect(getWinningSum(allWinsCombinationMock, 100, 4)).toBe(600);
  });
  it('for 4 odds and 3 length combinations in no win case', () => {
    expect(getWinningSum(noWinsCombinationMock, 100, 4)).toBe(0);
  });
  it('for 4 odds and 3 length combinations in partial win case', () => {
    expect(getWinningSum(partialWinsCombinationMock, 100, 4)).toBe(100);
  });
});

describe('checking functions where we setting total strake and odd value for all odds', () => {

  const mockState: Dispatch<SetStateAction<IOddsData>> = () => { }
  const mockBooleanState: Dispatch<SetStateAction<boolean>> = () => { }

  describe('valid values', () => {

    it('handleTotalStakeChange function', () => {
      const mockEvent = {
        target: { value: '200' },
      } as ChangeEvent<HTMLInputElement>;
      const data = handleTotalStakeChange(mockEvent, mockState, mockBooleanState, true)
      expect(data).toBe(undefined);
    });

    it('handleChangeOddValue function', () => {
      const mockEvent = {
        target: { value: '20', name: "0" },
      } as ChangeEvent<HTMLInputElement>;
      const data = handleChangeOddValue(mockEvent, mockOdds, mockState, mockBooleanState, true)
      expect(data).toBe(undefined);
    });

  });
  describe('invalid values', () => {

    it('handleTotalStakeChange function', () => {
      const mockEvent = {
        target: { value: '-200' },
      } as ChangeEvent<HTMLInputElement>;
      const data = handleTotalStakeChange(mockEvent, mockState, mockBooleanState, true)
      expect(data).toBe("something went wrong");
    });

    it('handleChangeOddValue function', () => {
      const mockEvent = {
        target: { value: '-20', name: "0" },
      } as ChangeEvent<HTMLInputElement>;
      const data = handleChangeOddValue(mockEvent, mockOdds, mockState, mockBooleanState, true)
      expect(data).toBe("something went wrong");
    });

  });

});