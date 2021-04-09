/// <reference types="react" />
declare const WrappedComponent: {
    new (props: {
        someOptionalProp: string | undefined;
    } | Readonly<{
        someOptionalProp: string | undefined;
    }>): {
        render(): JSX.Element;
        context: any;
        setState<K_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{
            someOptionalProp: string | undefined;
        }>) => {} | Pick<{}, K_1> | null) | Pick<{}, K_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{
            someOptionalProp: string | undefined;
        }> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: {
        someOptionalProp: string | undefined;
    }, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K_1_1 extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{
            someOptionalProp: string | undefined;
        }>) => {} | Pick<{}, K_1_1> | null) | Pick<{}, K_1_1> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{
            someOptionalProp: string | undefined;
        }> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{
            someOptionalProp: string | undefined;
        }>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export { WrappedComponent };
