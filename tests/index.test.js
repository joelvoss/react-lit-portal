import * as React from 'react';
import { render } from './test-utils';

import { Portal } from '../src/index';

describe('<Portal />', () => {
	it(`should render a portal`, async () => {
		const Element = () => (
			<Portal>
				<div>I'm inside a portal</div>
			</Portal>
		);

		const { baseElement } = render(<Element />);
		expect(baseElement).toMatchSnapshot();
	});

	it(`should render a portal as custom element`, async () => {
		const Element = () => (
			<Portal type="custom-portal">
				<div>I'm inside a portal</div>
			</Portal>
		);

		const { baseElement } = render(<Element />);
		expect(baseElement).toMatchSnapshot();
	});

	it(`should append nested portals to the same ownerdocument`, async () => {
		const InnerPortal = ({ text }) => {
			return (
				<Portal>
					<div>{text}</div>
				</Portal>
			);
		};

		const Element = () => {
			return (
				<Portal>
					<div>I'm inside a portal</div>
					<InnerPortal text="inner portal"/>
				</Portal>
			);
		};

		const { baseElement } = render(<Element />);
		expect(baseElement).toMatchSnapshot();
	});
});
