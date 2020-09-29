import guitars from "../reducers/guitars";

export const setGuitars = guitars => ({
    type: 'SET_GUITARS',
    payload: guitars
});
