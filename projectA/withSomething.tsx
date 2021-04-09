import React from 'react';

/**
 * Gets the props for a React element type, without preserving the optionality of defaultProps.
 *
 * Inspired by: https://github.com/facebook/flow/blob/b150ae683aa386ae7296d5d6db973454e1fa7ca2/website/en/docs/react/types.md#reactelementpropstypeof-component-
 *
 * Note: Falls back to any for compatibility with JSX components.
 */
type ElementProps<C> = C extends React.ComponentType<any>
  ? C extends { new (props: infer P, context?: any): any }
    ? P
    : C extends (props: infer P & { children?: React.ReactNode }, context?: any) => any
    ? P
    : any
  : any;

/**
 * Like ElementProps<typeof Component>, this utility gets the type of a component's props,
 * but preserves the optionality of defaultProps.
 *
 * Inspired by: https://github.com/facebook/flow/blob/b150ae683aa386ae7296d5d6db973454e1fa7ca2/website/en/docs/react/types.md#reactelementconfigtypeof-component-
 */
type ElementConfig<C> = JSX.LibraryManagedAttributes<C, ElementProps<C>>;

export interface WithSomethingProps {
  something: 'something';
}

export function withSomething<C extends React.ComponentType<any>>(InnerComponent: C) {
    type ComponentProps = ElementConfig<C>;
    type Props = Omit<ComponentProps, keyof WithSomethingProps>;

    const WrappedComponent = class WithSomethingComponent extends React.Component<Props> {
      render() {
        return <InnerComponent {...this.props as ComponentProps} something="something" />;
      }
    }

    // Can be created as a JSX element
    console.log(<WrappedComponent {...{} as any} />);

    return WrappedComponent;
}
