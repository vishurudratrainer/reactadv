1. Compound Components Pattern
This pattern allows creating expressive and declarative components, without unnecessary prop drilling. You should consider using this pattern if you want to make your component more customizable, with a better separation of concern and an understandable API.

1. Compound Components Pattern
This pattern allows creating expressive and declarative components, without unnecessary prop drilling. You should consider using this pattern if you want to make your component more customizable, with a better separation of concern and an understandable API.

Pros

Reduced API Complexity: Instead of jamming all props in one giant parent component and drilling those down to child UI components, here each prop is attached to the SubComponent that makes the most sense.

Flexible Markup Structure: Your component has great UI flexibility, allowing the creations of various cases from a single component. For example, the user can change the SubComponents’ order or define which one should be displayed.

Separation of Concerns: Most of the logic is contained in the main Counter component, aReact.Context is then used to share states and handlers all across children. We get a clear division of responsibility.

Cons

Too much UI flexibility: Having flexibility comes along with the possibility to provoke unexpected behavior (putting an unwanted Component’s child, making out of order the Component’s children, forgetting to include a mandatory child).
Depending on how you want the user to use your component, you might not want to allow that much flexibility.

Heavier JSX: Applying this pattern will increase the number of JSX rows, especially if you use a linter such EsLint or a code formatter as Prettier.
It seems not a big deal at a single component scale, but could definitely make a huge difference when you look at the big picture.

Criteria

Inversion of control: 1/4
Implementation complexity: 1/4
Public libraries using this pattern

React Bootstrap
Reach UI