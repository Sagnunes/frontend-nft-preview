/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "outfit": ['Outfit', 'sans-serif']
            },
            fontSize: {
                base: ['18px']
            },
            colors: {
                "dark-blue": {
                    "main":"hsl(217, 54%, 11%)",
                    "card":"hsl(216, 50%, 16%)",
                    "line":"hsl(215, 32%, 27%)"
                },
                "soft-blue":" hsl(215, 51%, 70%)",
                "soft-cyan":"hsl(178, 100%, 50%)"
            }
        },
    },
    plugins: [],
}