import React from 'react'
import {render} from '@testing-library/react'
import DateRangePicker from '../dist/index'

describe('Tests', () => {
	it('Expect to not log errors in console', () => {
		const spy = jest.spyOn(global.console, 'error')
		render(
				<DateRangePicker
						value={[]}
						placeholder="Select a date range"
						onChange={() => console.log('change...')}
				/>
		)
		expect(spy).not.toHaveBeenCalled()
	})

})