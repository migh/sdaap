import { Action } from '@ngrx/store';
import { Flight } from '../flight';

export const SELECT_FLIGHT = 'SELECT';
export const RESET_FLIGHT = 'UNSELECT';

export class FlightSelectionAction implements Action {
  type: string;
  constructor(public payload?: any) {}
};

export function flightReducer(state: Flight, action: FlightSelectionAction) {
  switch (action.type) {
    case RESET_FLIGHT:
      return null;
    case SELECT_FLIGHT:
      return (state === action.payload) ? null : action.payload;
    default:
      return state;
  }
}
