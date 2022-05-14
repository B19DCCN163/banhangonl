import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductPage from './views/productPage/ProductPage'
import CartPage from './views/cartPage/CartPage'
import ProductContextProvider from './store/contexts/ProductContext';
import CartContextProvider from './store/contexts/CartContext';
import PaymentContextProvider from './store/contexts/PaymentContext'
import AuthContextProvider from './store/contexts/AuthContext';
import HomePage from './views/HomePage/HomePage'
import AuthPage from './views/Auth/AuthPage';
import GlobalContextProvider from './store/contexts/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <PaymentContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='' element={<App />} >
                    <Route path='' element={<HomePage />} />
                    <Route path='products/all' element={<ProductPage productRoute='all' />} />
                    <Route path='products/watch' element={<ProductPage productRoute='watch' />} />
                    <Route path='products/ring' element={<ProductPage productRoute='ring' />} />
                    <Route path='products/earring' element={<ProductPage productRoute='earring' />} />
                    <Route path='products/necklace' element={<ProductPage productRoute='necklace' />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="login" element={<AuthPage authRoute='login' />} />
                    <Route path="register" element={<AuthPage authRoute='register' />} />
                  </Route>    
                </Routes>
              </BrowserRouter>
            </PaymentContextProvider>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

