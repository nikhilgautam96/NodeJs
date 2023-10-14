# NodeJS :

-   `NodeJS is a JS runtime environment, runs on v8 javascript engine, that executes JS code outside a web browser.`
-   In 2009, Ryan Dahl introduced NodeJS to the outside world.
-   It does not support features that helps interacting with DOM or BOM.
-   `It provides a runtime where JS can now interact with the operating system and run in terminal. JS can now access our file systems(CRUD), system processes, I/O streams, etc.`
-   `Node.js provides a runtime environment for server-side JavaScript execution.`
-   `express, sails are frameworks using which we can now write server side logic in js as well.`

## Runtime Environment :

-   A runtime environment, often referred to as a runtime system, is a crucial component of a software application that provides the necessary infrastructure for executing and managing the program's code during its runtime, i.e., when it is running. It includes various components and services that enable the execution of the program's instructions, handle memory management, and interact with the underlying hardware and operating system. Here are key aspects of a runtime environment:

1. **Execution Engine:** The execution engine is responsible for interpreting or compiling the program's source code and executing it. It can be an interpreter, a Just-In-Time (JIT) compiler, or a combination of both, depending on the programming language and the runtime environment.

2. **Memory Management:** The runtime environment manages memory allocation and deallocation. It allocates memory for variables, objects, and data structures as needed and ensures that memory is released when it is no longer in use, helping to prevent memory leaks.

3. **Garbage Collection:** In languages that feature automatic memory management, such as Java or Python, the runtime environment includes a garbage collector that identifies and frees memory occupied by objects or data that are no longer reachable or in use by the program.

4. **Standard Libraries:** Runtime environments often include standard libraries or APIs (Application Programming Interfaces) that provide a range of pre-built functions and tools that programmers can use to perform common tasks like file I/O, network communication, and data manipulation.

5. **Error Handling:** They typically provide mechanisms for handling exceptions and errors that occur during runtime, allowing developers to write code that gracefully handles unexpected issues.

6. **Platform Abstraction:** Runtime environments abstract the underlying hardware and operating system, providing a consistent interface for the program. This abstraction allows code to be more portable, as it can run on different platforms without modification.

7. **Security:** Runtime environments may implement security features such as access control, sandboxing, and permissions to ensure that programs run securely and do not have unauthorized access to system resources.

8. **Thread Management:** In multi-threaded applications, the runtime environment manages the creation, execution, and synchronization of threads, ensuring that they operate correctly and efficiently.

9. **Environment Configuration:** They allow developers to configure various aspects of the runtime, including environment variables, runtime options, and system settings.

Runtime environments vary significantly depending on the programming language and the context in which they are used. For example:

-   In the context of web development, the browser provides a runtime environment for executing JavaScript code.
-   In Java, the Java Virtual Machine (JVM) serves as the runtime environment, allowing Java bytecode to run on different platforms.
-   Python has its runtime environment that includes an interpreter and standard libraries.
-   `Node.js provides a runtime environment for server-side JavaScript execution.`

In summary, a runtime environment is a crucial part of a software application that manages the execution of code, memory, and various runtime tasks, providing a framework for the program to run effectively and interact with the underlying system.

## package in nodeJS :

-   It is a folder that has a `package.json` file.
-   Whenever we ship a library, in JS, we do that in form of a package.

## package manager in nodeJS :

-   **_{npm, yarn}_** :
    -   they manage installation, dependency resolution and version management.
    -   they also help in initiating a basic node project. eg: `node init`.
-   **_npx_** :
    -   `NPX is an NPM package used to execute any package on the NPM registry directly without installing it`.
    -   `npx is a tool that comes with npm (Node Package Manager) and is used to execute packages from the npm registry`.
    -   It allows you to run commands from packages that aren't necessarily globally installed on your system.
    -   When you run npx some-package, npm will check if some-package is installed locally (in your project's node_modules directory).
    -   If it's not found locally, npm will download and temporarily execute the package from the npm registry.
-   **_ NOTE _** :
    -   when you run `npx create-react-app`, npx fetches the latest version of create-react-app from the npm registry (if it's not already installed locally) and runs it to create a new React application in the specified directory.

## `npm init / package.json / package-lock.json`:

-   `npm init`: It creates a node package.
-   a package.json file is created, and all the metadata related to that package is stored here in JSON format.
-   The moment we install a external package say 'npm i axios', a `package-lock.json` file gets created and `node_modules` folder is created as well(if package is not instantiated using npm init, it does that as well). It stores all the dependencies, sub-dependencies and all related to the packages.
-   when we distribute our package, we dont include the `node_modules` folder as it makes the package very heavy. So, instead the users use the `package-lock.json` to install all the required dependencies by using the command - `npm i`.

## `repl` console :

-   read -> execute -> print -> loop.
-   nodeJS console, browser console are all repl consoles.
