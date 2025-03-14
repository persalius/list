# List application

List Application is a modern, scalable, and performant shopping list app designed to help users manage their shopping tasks efficiently. Built with React and a robust tech stack, this application allows users to:

- Add items to their shopping list with details like name, quantity, and category.
- Edit or remove items as needed.
- Mark items as purchased to keep track of what's been bought.
- Undo actions to correct mistakes quickly.
- Search for items in real-time for better usability.
- Filter items by category or purchase status for better organization.

## Getting Started

To run the project, execute the following commands:

```bash
pnpm i
pnpm dev
```

## Technologies Used

This project is built using the following technologies:

- Frontend Framework: React
- Build Tool: Vite
- Routing: React Router
- State Management: Zustand, Zundo
- Data Fetching: TanStack Query
- Table Management: TanStack Table (for filtering, sorting, and advanced table features)
- UI Components: Shadcn
- Styling: TailwindCSS
- Form Management: React Hook Form
- Validation: Zod
- Error Handling: React Error Boundary

## Architectural Decisions

1. FCD (Feature-Centric Design) Pattern
   The application is structured using the Feature-Centric Design (FCD) pattern. This approach organizes the codebase around features (e.g., shopping-list, undo, search) rather than technical layers (e.g., components, services). This ensures:

- Scalability: Each feature is self-contained, making it easier to add or modify features without affecting others.
- Maintainability: Features are isolated, reducing the risk of unintended side effects.
- Reusability: Common logic (e.g., state management, validation) can be shared across features.

2. State Management: Zustand + Zundo

- Zustand was chosen for global state management due to its simplicity, minimal boilerplate, and excellent performance optimizations. It allows for fine-grained control over re-renders, ensuring the app remains performant even as the shopping list grows.
- Zundo was integrated to enable undo/redo functionality. It works seamlessly with Zustand, providing a time-travel mechanism for state changes, which is essential for the "undo last action" requirement.

3. Data Fetching: TanStack Query

- TanStack Query (formerly React Query) is used to handle asynchronous operations, such as simulating API calls with setTimeout. It provides built-in caching, background updates, and error handling, reducing the complexity of managing loading and error states.

4. Table Management: TanStack Table

- TanStack Table is used for advanced table management, including filtering, sorting, and pagination. It provides a flexible and performant way to handle large datasets, ensuring that the shopping list remains user-friendly even as it grows in size.

5. UI Components: Shadcn + TailwindCSS

- Shadcn provides a set of accessible, customizable UI components that align with modern design standards. It was chosen for its flexibility, ease of integration with TailwindCSS, and its focus on accessibility (a11y), ensuring that the app is usable by everyone, including people with disabilities.
- TailwindCSS is used for styling due to its utility-first approach, which enables rapid development and consistent design across the application. It also supports theming, making it easy to customize the app's appearance.

6. Form Management: React Hook Form + Zod

- React Hook Form is used for form management due to its performance optimizations and minimal re-renders. It simplifies handling complex forms, such as adding or editing shopping list items.
- Zod is integrated for schema validation, ensuring that user inputs (e.g., item name, quantity) are validated both on the client and server (simulated). This prevents invalid data from entering the system and provides meaningful error messages to users.

7. Error Handling: React Error Boundary

- React Error Boundary is implemented to catch and handle unexpected errors in the application. It ensures that the app does not crash due to rendering errors or API failures, providing a fallback UI and logging errors for debugging.

8. Routing: React Router

- React Router is used for client-side routing. While the current app is a single-page application (SPA), React Router provides a solid foundation for future scalability, such as adding authentication or multiple views.

- Alternatively, Next.js could be used for server-side rendering (SSR) and static site generation (SSG), which would improve SEO and performance for more complex applications.

9. Build Tool: Vite

- Vite is chosen as the build tool for its fast development server and optimized production builds. It significantly improves development efficiency and ensures the app loads quickly in production.

10. Persistence Layer: localStorage

- localStorage is used to persist the shopping list data across sessions. While this is a simple solution for the assignment, it simulates the behavior of a backend API. The use of setTimeout mimics network latency, ensuring the app handles asynchronous operations gracefully.

## Potential Improvements

Given more time, the following improvements could be made:

- Backend Integration: Replace localStorage with a real backend API (e.g., REST or GraphQL) for persistent storage.
- Authentication: Add user authentication to enable personalized shopping lists.
- Advanced Filtering: Implement more advanced filtering options (e.g., by date added, price range).
- Accessibility: Conduct a thorough accessibility audit to ensure the app is usable by everyone.
- End-to-End Testing: Add Cypress or Playwright for end-to-end testing to cover user workflows.
- Next.js Integration: Migrate to Next.js for server-side rendering (SSR) and static site generation (SSG), which would improve SEO and performance for more complex applications.
- Virtualization with TanStack Virtual: Integrate TanStack Virtual to optimize rendering performance for large datasets. This would ensure smooth scrolling and efficient rendering, even with thousands of items in the shopping list.