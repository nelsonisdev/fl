import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { FastLearningRoutes } from '../fastlearning/routes/FastLearningRoutes';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {

  const {loading, status} = useCheckAuth();
  

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }
  
  return (
    <Router>
        <Routes>

          {
            (status === 'authenticated')
              ? <Route path='/*' element={ <FastLearningRoutes /> } />
              : <Route path='/auth/*' element={ <AuthRoutes /> } />
          }

          <Route path='/*' element={ <Navigate to='/auth/login' /> } />

            {/* Login y registro */}
            {/* <Route path='/auth/*' element={ <AuthRoutes /> } /> */}

            {/* FastLearningApp */}
            {/* <Route path='/*' element={ <FastLearningRoutes /> } /> */}

        </Routes>
    </Router>
  )
}
