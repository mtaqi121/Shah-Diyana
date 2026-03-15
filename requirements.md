## Packages
framer-motion | Essential for high-end scroll reveals and premium micro-interactions
react-hook-form | Required for sophisticated form state management
@hookform/resolvers | Required for Zod schema validation in forms
lucide-react | Icons for UI elements

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
}
The application uses native CSS `scroll-behavior: smooth` for elegant single-page navigation.
Colors are overridden in index.css to enforce the strict dark premium theme.
