/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: '#164773',
                darkgreen: '#0B2B40',
                midgreen: '#1E5959',
                lightgreen: '#3B8C6E',
                cashgreen: '#89D99D',
                coinyellow: '#fecf1e',
                inputbg: '#24506c',
                buttonbg: '#118593',
                inputborderbottom: '#118593',
            },
        },
    },
    plugins: [],
}
