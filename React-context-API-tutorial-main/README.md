# React Context API Tutorial

- What is it?
- Where is it useful?
- An example with dark mode and light mode themes.
- Creating multiple contexts within an app.
- Prevent some of the issues with using context, such as unnecessary rerenders.
- Context API vs Redux for state management

## React Context API vs Redux

Redux maintainer, Mark Erikson, gives the following reasons for using Redux:

- Consistent architectural patterns
- Debugging capabilities
- Middleware
- Addons and extensibility
- Cross-platform and cross-framework usage
- Depending on your app's setup, much better performance than working with just Context (we don't have to worry about the rerender problem we get with context, mentioned above – coponents only rerender when the value they are using updates)
