import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from '../features/crypto/cryptoSlice';

export default function useFakeWebSocket() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);
}