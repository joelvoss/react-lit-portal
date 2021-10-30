import { Portal } from '../../src/index';

export function Example() {
	return (
		<>
			<h2>Example: Basic</h2>
			<div style={{ height: 50, width: '50vw', overflow: 'auto' }}>
				<div style={{ border: 'solid 5px', padding: 20 }}>
					This is the element where the <code>Portal</code> is being rendered.
					Even though this <code>div</code> has clipped overflow, the portal's
					styles are just fine.
				</div>
				<Portal>
					<div
						style={{
							position: 'absolute',
							top: 20,
							right: '50vw',
							width: 200,
							border: 'solid 1px hsla(0, 0%, 0%, 0.25)',
							boxShadow: '0px 2px 10px hsla(0, 0%, 0%, 0.25)',
							padding: 20,
							background: '#f0f0f0',
							textAlign: 'center',
						}}
					>
						I'm the portal!
					</div>
				</Portal>
			</div>
		</>
	);
}
