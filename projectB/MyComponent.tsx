import { withSomething, WithSomethingProps } from '../projectA/withSomething';

interface Props extends WithSomethingProps {
  someOptionalProp?: string;
}

function SomeComponent(props: Props) {
  return props.someOptionalProp ? <>Yes</> : <>No</>;
}

console.log(<SomeComponent something="something" />);

const WrappedComponent = withSomething(SomeComponent);

console.log(<WrappedComponent />);

export { WrappedComponent };
