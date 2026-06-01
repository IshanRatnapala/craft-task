# Craft Task

The React Compiler is enabled on this template.

## Useful Commands

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm lint` - Run the linter to check for code issues

## Notes

If I had more time, I would have done the following:

- Fix the UI: alignment issues, extract loading and error states into separate components and make the design more polished overall.
- I'm not very satisfied with how the department filter is implemented. I would create it's own component so the suspense does not load the whole filter section. It would've been easier to hardcode the departments but didn't have time to rethink it.
