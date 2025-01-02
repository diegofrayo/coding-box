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

	export type OnChangeEvent<G_HTMLElement = HTMLInputElement> = React.ChangeEvent<G_HTMLElement>;

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
