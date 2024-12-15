/* eslint @typescript-eslint/naming-convention: 0 */
/* eslint @typescript-eslint/no-namespace: 0 */

// eslint-disable-next-line import/no-extraneous-dependencies
import * as ReactLibrary from "react";

declare namespace DR {
	// --- REACT ---
	export namespace React {
		// RETURNS
		export type JSXElement = JSX.Element;
		export type JSXElementNullable = JSX.Element | null;

		// CHILDREN PROP
		export type Children = ReactLibrary.ReactNode;

		// STYLE PROP
		export type Styles = ReactLibrary.CSSProperties;

		// CHILDREN NODES
		export type Node = ReactLibrary.ReactNode;

		// COMPONENTS AS PROPS
		export type FunctionComponent<G_ComponentProps = DR.Object> =
			ReactLibrary.FunctionComponent<G_ComponentProps>;

		export type CompoundedComponent<
			G_ComponentProps,
			G_HTMLElement,
			G_StaticProperties extends object,
		> = ReactLibrary.ForwardRefExoticComponent<
			G_ComponentProps & ReactLibrary.RefAttributes<G_HTMLElement>
		> &
			G_StaticProperties;

		// REFS
		export type Ref<G_RefType> = ReactLibrary.RefObject<G_RefType>;

		// EFFECTS CALLBACK
		export type EffectCallback = ReactLibrary.EffectCallback;

		// SET STATE
		export type SetState<G_State> = ReactLibrary.Dispatch<ReactLibrary.SetStateAction<G_State>>;

		// EVENT HANDLERS
		export namespace Events {
			export type OnClickEvent<G_HTMLElement> = ReactLibrary.MouseEvent<G_HTMLElement>;

			export type OnClickEventHandler<G_HTMLElement = HTMLButtonElement> =
				ReactLibrary.MouseEventHandler<G_HTMLElement>;

			export type OnChangeEvent<G_HTMLElement = HTMLInputElement> =
				ReactLibrary.ChangeEvent<G_HTMLElement>;

			export type OnChangeEventHandler<G_HTMLElement> =
				ReactLibrary.ChangeEventHandler<G_HTMLElement>;

			export type OnFocusEvent<G_HTMLElement = HTMLInputElement> =
				ReactLibrary.FocusEvent<G_HTMLElement>;

			export type OnFocusEventHandler<G_HTMLElement = HTMLInputElement> =
				ReactLibrary.FocusEventHandler<G_HTMLElement>;

			export type OnKeyUpEvent<G_HTMLElement> = ReactLibrary.KeyboardEvent<G_HTMLElement>;

			export type OnKeyUpEventHandler<G_HTMLElement> =
				ReactLibrary.KeyboardEventHandler<G_HTMLElement>;

			export type OnSubmitEvent<G_HTMLElement> = ReactLibrary.FormEvent<G_HTMLElement>;

			export type OnSubmitEventHandler<G_HTMLElement> =
				ReactLibrary.FormEventHandler<G_HTMLElement>;

			export type OnMouseEvent<G_HTMLElement> = ReactLibrary.PointerEvent<G_HTMLElement>;

			export type OnMouseEventHandler<G_HTMLElement> =
				ReactLibrary.PointerEventHandler<G_HTMLElement>;

			export type OnTouchEvent<G_HTMLElement> = ReactLibrary.TouchEvent<G_HTMLElement>;

			export type OnTouchEventHandler<G_HTMLElement> =
				ReactLibrary.TouchEventHandler<G_HTMLElement>;
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
