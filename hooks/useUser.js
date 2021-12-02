import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { onAuthStateChange } from '../firebase/client';

export const USER_STATES = {
  NOT_LOGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);

  useEffect(() => {
    onAuthStateChange((user) => setUser(user));
  }, []);

  return user;
}
