import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import TheBook from './pages/TheBook';
import Excerpt from './pages/Excerpt';
import News from './pages/News';
import Contact from './pages/Contact';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div data-source-location="App:22:6" data-dynamic-content="false" className="fixed inset-0 flex items-center justify-center bg-background">
        <div data-source-location="App:23:8" data-dynamic-content="false" className="w-8 h-8 border-4 border-border border-t-accent rounded-full animate-spin"></div>
      </div>);

  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError data-source-location="App:30:13" data-dynamic-content="false" />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes data-source-location="App:38:4" data-dynamic-content="true">
      <Route data-source-location="App:39:6" data-dynamic-content="true" element={<SiteLayout data-source-location="App:39:22" data-dynamic-content="false" />}>
        <Route data-source-location="App:40:8" data-dynamic-content="true" path="/" element={<Home data-source-location="App:40:33" data-dynamic-content="false" />} />
        <Route data-source-location="App:41:8" data-dynamic-content="true" path="/about" element={<About data-source-location="App:41:38" data-dynamic-content="false" />} />
        <Route data-source-location="App:42:8" data-dynamic-content="true" path="/the-book" element={<TheBook data-source-location="App:42:41" data-dynamic-content="false" />} />
        <Route data-source-location="App:43:8" data-dynamic-content="true" path="/excerpt" element={<Excerpt data-source-location="App:43:40" data-dynamic-content="false" />} />
        <Route data-source-location="App:44:8" data-dynamic-content="true" path="/news" element={<News data-source-location="App:44:37" data-dynamic-content="false" />} />
        <Route data-source-location="App:45:8" data-dynamic-content="true" path="/contact" element={<Contact data-source-location="App:45:40" data-dynamic-content="false" />} />
      </Route>
      <Route data-source-location="App:47:6" data-dynamic-content="true" path="*" element={<PageNotFound data-source-location="App:47:31" data-dynamic-content="false" />} />
    </Routes>);

};

function App() {
  return (
    <AuthProvider data-source-location="App:54:4" data-dynamic-content="true">
      <QueryClientProvider data-source-location="App:55:6" data-dynamic-content="true" client={queryClientInstance}>
        <Router data-source-location="App:56:8" data-dynamic-content="false">
          <AuthenticatedApp data-source-location="App:57:10" data-dynamic-content="false" />
        </Router>
        <Toaster data-source-location="App:59:8" data-dynamic-content="false" />
      </QueryClientProvider>
    </AuthProvider>);

}

export default App;