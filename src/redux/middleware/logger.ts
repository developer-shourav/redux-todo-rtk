const logger = (state) => (next) => (action) => {
   console.group(action.type);
   console.info('Prv state', state.getState());
   const result = next(action);
   console.info('Next state', state.getState());
   console.groupEnd();
   return result;
};

export default logger;