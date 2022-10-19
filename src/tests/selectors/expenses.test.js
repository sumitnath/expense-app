import SelectExpenses from '../../selector/expenses';
import { Moment } from 'moment';
import moment from 'moment';

const expenses = [{
    id: 1,
    description: 'Gum',
    note: '',
    amount: 12536,
    createdAt: 0

}, {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 1338966,
    createdAt: moment(0).subtract(4, 'days').valueOf()

}, {
    id: 3,
    description: 'Credit Card',
    note: '',
    amount: 13366,
    createdAt: moment(0).add(4, 'days').valueOf()

}]
test('should filter by text value', () => {
    const filters = { text: 'e', sortBy: 'date', startDate: undefined, endDate: undefined }
    const result = SelectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
})

test('should filter by startdate', () => {
    const filters = { text: '', sortBy: 'date', startDate: moment(0), endDate: undefined }
    const result = SelectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})
test('should filter by enddate', () => {
    const filters = { text: '', sortBy: 'date', startDate: undefined, endDate: moment(0) }
    const result = SelectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})
test('should filter by sort by date', () => {
    const filters = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
    const result = SelectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})
test('should filter by sort by amount', () => {
    const filters = { text: '', sortBy: 'amount', startDate: undefined, endDate: undefined }
    const result = SelectExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})