// app/components/ClientQueryProvider.tsx
'use client';  // Assurez-vous que ce fichier est un composant client

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Créez une instance de QueryClient
const queryClient = new QueryClient();

const ClientQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ClientQueryProvider;
