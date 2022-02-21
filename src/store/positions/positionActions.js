export const ADD_POSITION = 'ADD_POSITION';

export const addPositions = (positions) => {
    return {
        type: ADD_POSITION,
        positions,
    };
};
