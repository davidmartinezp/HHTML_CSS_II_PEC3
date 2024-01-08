/** @type {import('tailwindcss').Config} */
module.exports = {
  // Especifica los archivos que se deben escanear para encontrar clases de Tailwind.
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    // Define los colores utilizados en el proyecto.
    colors: {
      // Tonalidades de azul.
      blue: {
        500: '#1fb6ff',
      },
      // Tonalidades de púrpura.
      purple: {
        500: '#7e5bef',
      },
      // Tonalidades de rosa.
      pink: {
        500: '#ff49db',
      },
      // Tonalidades de naranja.
      orange: {
        500: '#ff7849',
      },
      // Tonalidades de verde.
      green: {
        500: '#13ce66',
      },
      // Tonalidades de amarillo.
      yellow: {
        500: '#ffc82c',
      },
      // Escala de grises.
      gray: {
        dark: '#273444',
        DEFAULT: '#8492a6',
        light: '#d3dce6',
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
      },
      // Color blanco.
      white: {
        DEFAULT: 'white',
      },
      // Tonalidades de gris para elementos específicos (header y footer).
      pers: {
        header: '#363c42',
        footer: '#363c42',
        details: '#0D6EFD'
      },
    },
    // Define las fuentes utilizadas en el proyecto.
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      serif: ['Merriweather', 'serif'],
    },
    // Extiende las configuraciones predefinidas, como el tamaño máximo y el espaciado.
    extend: {
      maxWidth: {
        '800': '800px',
        '300': '300px'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      // Define radios de borde adicionales.
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
};
