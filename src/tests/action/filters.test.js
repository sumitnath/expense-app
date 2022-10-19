import moment from "moment";
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
test('should generate set text filter  with default value object action ', () => {

    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should generate set text filter with text value object action ', () => {
    const action = setTextFilter('aba')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'aba'
    })
})
test('should generate action  object for SORT BY DATE', () => {
    const action = sortByDate(moment())
    expect(action).toEqual({
        type: 'SORT_BY_DATE',

    })
})
test('should generate action  object for SORT BY DATE', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',

    })
})