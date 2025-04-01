-- create Nextjs project / install dependencies / configure tailwindcss /

1. npx create-next-app@latest next_d3_tail_ts_weather --typescript --tailwind --eslint
2. npm install -D tailwindcss@3.3.5 postcss autoprefixer (install stable version)
3. npx tailwindcss init -p
4. npm list tailwindcss postcss autoprefixer (check and delete conflicting tailwindcss PostCSS plugin: @tailwindcss/postcss@4.0.17)
5. rm -rf node_modules package-lock.json
6. npm cache clean --force
7. npm install -D tailwindcss@3.3.5 postcss autoprefixer
8. npm config set registry https://registry.npmmirror.com
9. npm install -D tailwindcss@3.3.5 postcss autoprefixer

   postcss.config.js:
   module.exports = {
   plugins: {
   tailwindcss: {},
   autoprefixer: {},
   },
   };

   tailwind.config.js:
   module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
   extend: {},
   },
   plugins: [],
   };

-- d3 @types/d3 date-fns

10. npm install d3 @types/d3 date-fns
