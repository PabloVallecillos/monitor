// import FormPage from '@/pages/form';
import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);
const SignInPage = lazy(() => import('@/pages/auth/signin'));
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const SalesPage = lazy(() => import('@/pages/sales'));
const SupportPage = lazy(() => import('@/pages/support'));
// const StudentPage = lazy(() => import('@/pages/students'));
// const StudentDetailPage = lazy(
//   () => import('@/pages/students/StudentDetailPage')
// );

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'sales',
          element: <SalesPage />
        },
        {
          path: 'support',
          element: <SupportPage />
        }
        // {
        //   path: 'student/details',
        //   element: <StudentDetailPage />
        // },
        // {
        //   path: 'form',
        //   element: <FormPage />
        // }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <SignInPage />,
      index: true
    },
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
