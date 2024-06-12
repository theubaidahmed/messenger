import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import Provider from '@/providers/Provider';
// import StoreProvider from './StoreProvider';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
    title: 'Messenger',
    description: 'Generated by create next app',
    icons: '/images/logo.png',
};

// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             staleTime: Infinity,
//             refetchIntervalInBackground: false,
//             refetchOnWindowFocus: false,
//         },
//     },
// });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link href='https://fonts.cdnfonts.com/css/calibre-2' rel='stylesheet' />
            </head>
            <body>
                <Provider>
                    <StoreProvider>
                        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
                    </StoreProvider>
                </Provider>
            </body>
        </html>
    );
}
