import { createSlice } from '@reduxjs/toolkit';
import { getAllOdds, setCombinations } from '../utils';
import { IOddItem } from '../interface';

const counterSlice = createSlice({
  name: 'calculator',
  initialState: {
    oddsCount: 3,
    combinationOddsCount: 2,
    combinations: setCombinations(3, 2),
    totalStake: 100,
    allOdds: getAllOdds(3),
    showResult: false
  },
  reducers: {
    setOddsCountAndCombinationOddsCount: (state, action) => {
      const [combinationOddsCount, oddsCount] = action.payload;
      state.combinationOddsCount = combinationOddsCount
      state.oddsCount = oddsCount
      state.combinations = setCombinations(oddsCount, combinationOddsCount)
      state.allOdds = getAllOdds(oddsCount)
      if (state.showResult) {
        state.showResult = false
      }
    },
    setTotalStake: (state, action) => {
      state.totalStake = action.payload
    },
    setAllOdds: (state, action) => {
      const updatedOdds: IOddItem[] = action.payload
      state.allOdds = action.payload
      state.combinations = state.combinations.map((combination) => {
        return combination.map((odd) => {
          return updatedOdds.find((updated) => updated.id === odd.id) || odd
        })
      })
      if (!state.showResult) {
        state.showResult = true
      }
    },
  },
});

export const { setOddsCountAndCombinationOddsCount, setAllOdds, setTotalStake } = counterSlice.actions;
export default counterSlice.reducer;