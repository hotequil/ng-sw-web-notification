import '../sw-event-types';

export const environment = {
    // @ts-ignore
    SW_EVENT_TYPES: self.types,
    production: true
};
