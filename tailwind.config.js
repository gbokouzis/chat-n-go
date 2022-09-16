/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            'maxmd': {'max': '767px'},
        },
    },
    plugins: [
        require('@tailwindcss/forms')        
    ],
}
