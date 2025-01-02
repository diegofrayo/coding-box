/* eslint @typescript-eslint/naming-convention: 0 */
/* eslint @typescript-eslint/no-namespace: 0 */

// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from "react";

declare namespace DR {
	// --- REACT ---
	export namespace React {
		// RETURNS
		export type JSXElement = JSX.Element;
		export type JSXElementNullable = JSX.Element | null;

		// CHILDREN PROP
		export type Children = React.ReactNode;

		// STYLE PROP
		export type Styles = React.CSSProperties;

		// CHILDREN NODES
		export type Node = React.ReactNode;

		// COMPONENTS AS PROPS
		export type FunctionComponent<G_ComponentProps = DR.Object> =
			React.FunctionComponent<G_ComponentProps>;

		export type CompoundedComponent<
			G_ComponentProps,
			G_HTMLElement,
			G_StaticProperties extends object,
		> = React.ForwardRefExoticComponent<G_ComponentProps & React.RefAttributes<G_HTMLElement>> &
			G_StaticProperties;

		// REFS
		export type Ref<G_RefType> = React.RefObject<G_RefType>;

		// EFFECTS CALLBACK
		export type EffectCallback = React.EffectCallback;

		// SET STATE
		export type SetState<G_State> = React.Dispatch<React.SetStateAction<G_State>>;

		// EVENT HANDLERS
		export namespace Events {
			export type OnClickEvent<G_HTMLElement> = React.MouseEvent<G_HTMLElement>;

			export type OnClickEventHandler<G_HTMLElement = HTMLButtonElement> =
				React.MouseEventHandler<G_HTMLElement>;

			export type OnChangeEvent<G_HTMLElement = HTMLInputElement> =
				React.ChangeEvent<G_HTMLElement>;

			export type OnChangeEventHandler<G_HTMLElement> = React.ChangeEventHandler<G_HTMLElement>;

			export type OnFocusEvent<G_HTMLElement = HTMLInputElement> = React.FocusEvent<G_HTMLElement>;

			export type OnFocusEventHandler<G_HTMLElement = HTMLInputElement> =
				React.FocusEventHandler<G_HTMLElement>;

			export type OnKeyUpEvent<G_HTMLElement> = React.KeyboardEvent<G_HTMLElement>;

			export type OnKeyUpEventHandler<G_HTMLElement> = React.KeyboardEventHandler<G_HTMLElement>;

			export type OnSubmitEvent<G_HTMLElement> = React.FormEvent<G_HTMLElement>;

			export type OnSubmitEventHandler<G_HTMLElement> = React.FormEventHandler<G_HTMLElement>;

			export type OnMouseEvent<G_HTMLElement> = React.PointerEvent<G_HTMLElement>;

			export type OnMouseEventHandler<G_HTMLElement> = React.PointerEventHandler<G_HTMLElement>;

			export type OnTouchEvent<G_HTMLElement> = React.TouchEvent<G_HTMLElement>;

			export type OnTouchEventHandler<G_HTMLElement> = React.TouchEventHandler<G_HTMLElement>;
		}
	}

	// --- DOM ---
	export namespace DOM {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		export import HTMLElementAttributes = JSX.IntrinsicElements;
	}

	// --- DATA ---
	type GenericObject<G_PropertyValues = unknown> = Record<
		string | number | symbol,
		G_PropertyValues
	>;

	export type Primitive = string | number | boolean | null;

	export type Object<G_PropertyValues = unknown> = GenericObject<G_PropertyValues>;

	export type JSON = GenericObject<
		string | number | boolean | null | JSON[] | { [key: string]: JSON }
	>;

	// --- JS ---
	export type SetTimeout = NodeJS.Timeout;
	export type ProcessEnv = NodeJS.ProcessEnv;

	// --- DATES ---
	export namespace Dates {
		type T_OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
		type T_ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
		type YYYY = `19${T_ZeroToNine}${T_ZeroToNine}` | `20${T_ZeroToNine}${T_ZeroToNine}`;
		type MM = `0${T_OneToNine}` | `1${0 | 1 | 2}`;
		type DD = `${0}${T_OneToNine}` | `${1 | 2}${T_ZeroToNine}` | `3${0 | 1}`;

		export type DateString<T_Config = "DATE"> = T_Config extends "FULL"
			? `${YYYY}-${MM}-${DD}T:00:00:00`
			: `${YYYY}-${MM}-${DD}`;
	}
}

export default DR;
