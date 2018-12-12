// @flow
import { Map } from 'immutable';
import type { Event } from '../types/event';
import eventsData from './events.json';

export default {
  create: async (event: Event): Promise<void> => {
    // eslint-disable-next-line no-console
    console.debug(event);
  },
  modify: async (event: Event): Promise<void> => {
    console.debug(event);
  },
  getEvents: async (): Promise<Event> => ({
    ...eventsData,
    results: Map(eventsData.results.map(row => [row.id, row]))
  })
};
