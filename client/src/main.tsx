import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './query/queryClient.ts'
import { AuthProvider } from './context/AuthContext.tsx'
import { AuthModalProvider } from './context/AuthModalContext.tsx'
import App from './App.tsx'

import '@fontsource/marcellus/400.css'

import '@fontsource/outfit/300.css'
import '@fontsource/outfit/400.css'
import '@fontsource/outfit/500.css'
import '@fontsource/outfit/600.css'

// Mansory
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

// Brabus
import "@fontsource/roboto-slab/900.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <AuthProvider>
        <AuthModalProvider>
          <App />
        </AuthModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
