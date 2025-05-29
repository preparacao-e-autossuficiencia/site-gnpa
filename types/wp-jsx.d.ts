// import type * as React from 'react';

// declare module '@wordpress/element' {
// 	export = React;
// }

/// <reference types="react" />

import type * as React from 'react';

// Patch JSX to point to React types, which @wordpress/element lacks
declare namespace JSX {
	type Element = React.ReactElement;
	interface ElementClass extends React.Component<any> {}
	interface ElementAttributesProperty {
		props: {};
	}
	interface IntrinsicElements extends React.JSX.IntrinsicElements {}
}

declare module '@wordpress/element' {
	export = React;
}
