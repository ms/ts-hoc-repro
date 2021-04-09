"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrappedComponent = void 0;
var withSomething_1 = require("../projectA/withSomething");
function SomeComponent(props) {
    return props.someOptionalProp ? <>Yes</> : <>No</>;
}
console.log(<SomeComponent something="something"/>);
var WrappedComponent = withSomething_1.withSomething(SomeComponent);
exports.WrappedComponent = WrappedComponent;
console.log(<WrappedComponent />);
