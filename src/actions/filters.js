// set text filter
export const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text
    })
    // sort by date
export const sortByDate = () => ({
        type: 'SORT_BY_DATE'
    })
    // sort by amount
export const sortByAmount = () => ({
        type: 'SORT_BY_AMOUNT'
    })
    // SET START DATE
export const setStartDate = (startDate) => ({
        type: 'SET_START_DATE',
        startDate
    })
    // SET END DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})