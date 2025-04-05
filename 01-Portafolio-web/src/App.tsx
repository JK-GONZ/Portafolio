import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import AppRouter from './routes/AppRouter.tsx';

const App = () => {
  return (
    <div
      className="flex min-h-screen min-w-screen flex-col overflow-hidden bg-(--background) text-(--foreground)"
      data-theme="light"
    >
      <Header />
      <main className="mx-auto max-w-7/8 flex-1 justify-center py-8 md:px-12">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
