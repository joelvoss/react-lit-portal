import * as React from 'react';
import { createPortal } from 'react-dom';
import {
	useIsomorphicLayoutEffect as useLayoutEffect,
	useForceUpdate,
} from '@react-lit/helper';

/**
 * Portal appends a new DOM node to the end of the `document.body` and renders
 * it's child React tree into it. Useful to break out of the DOM hierarchy to
 * prevent parent styles from clipping or disturbing content (e.g. popovers,
 * dropdowns and modals).
 */
export function Portal({ children, type = 'portal' }) {
	/** @type {React.MutableRefObject<HTMLDivElement | null>} */
	let mountNode = React.useRef(null);
	/** @type {React.MutableRefObject<HTMLElement | null>} */
	let portalNode = React.useRef(null);
	let forceUpdate = useForceUpdate();

	useLayoutEffect(() => {
		// NOTE(joel): Guard against undefined ref's in case of hot-loader
		// component replacements.
		if (!mountNode.current) return;

		// NOTE(joel): Make sure we're appending to the correct document element.
		const ownerDocument = mountNode.current.ownerDocument;
		portalNode.current = ownerDocument?.createElement(type);
		ownerDocument.body.appendChild(portalNode.current);

		forceUpdate();

		return () => {
			if (portalNode.current && portalNode.current.ownerDocument) {
				portalNode.current.ownerDocument.body.removeChild(portalNode.current);
			}
		};
	}, [type, forceUpdate]);

	return portalNode.current ? (
		createPortal(children, portalNode.current)
	) : (
		<span ref={mountNode} />
	);
}
